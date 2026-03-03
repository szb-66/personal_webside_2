import { marked } from 'marked'

// 格式化日期为 YYYY-MM-DD
export function formatDate(dateStr) {
  if (!dateStr) return ''
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

// 使用 Vite 的 glob 导入所有 Markdown 文件
const modules = import.meta.glob('/src/content/**/*.md', { as: 'raw', eager: true })

// 简单的 frontmatter 解析（不依赖 gray-matter）
function parseFrontmatter(content) {
  const frontmatterRegex = /^---\n([\s\S]*?)\n---/
  const match = content.match(frontmatterRegex)

  if (!match) {
    return { data: {}, content }
  }

  const frontmatterBlock = match[1]
  const data = {}
  let currentKey = null
  let currentArray = []

  const lines = frontmatterBlock.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const trimmed = line.trim()

    // 检查是否是数组项 (以 - 开头)
    if (trimmed.startsWith('-')) {
      const value = trimmed.substring(1).trim()
      if (value) {
        currentArray.push(value)
      }
    } else if (trimmed.includes(':')) {
      // 保存之前的数组
      if (currentKey && currentArray.length > 0) {
        data[currentKey] = currentArray
        currentArray = []
      }

      // 解析键值对
      const colonIndex = trimmed.indexOf(':')
      const key = trimmed.substring(0, colonIndex).trim()
      const value = trimmed.substring(colonIndex + 1).trim().replace(/^["']|["']$/g, '')

      if (key) {
        currentKey = key
        if (value) {
          data[key] = value
        }
      }
    }
  }

  // 保存最后的数组
  if (currentKey && currentArray.length > 0) {
    data[currentKey] = currentArray
  }

  const markdown = content.slice(match[0].length).trim()
  return { data, content: markdown }
}

// 解析文章
function parseArticle(filePath, content) {
  const { data, content: markdown } = parseFrontmatter(content)

  // 从文件路径提取 slug
  // /src/content/develop/vue-basics.md -> develop, vue-basics
  const relativePath = filePath.replace('/src/content/', '').replace('.md', '')
  const [pathKnowledgeBase, ...slugParts] = relativePath.split('/')
  const slug = slugParts.join('/')

  // 使用 frontmatter 中的 knowledge_base
  const knowledgeBase = data.knowledge_base

  return {
    slug,
    knowledgeBase,
    title: slug,
    date: data.date || '',
    updated: data.updated || data.date || '',
    tags: Array.isArray(data.tags) ? data.tags : (data.tags ? data.tags.split(',').map(t => t.trim()) : []),
    type: data.type || '',
    cover: data.cover || '',
    description: data.description || '',
    content: markdown,
  }
}

// 获取所有文章
export function getAllArticles() {
  const articles = Object.entries(modules).map(([path, content]) => {
    return parseArticle(path, content)
  })

  return [...articles].sort((a, b) => new Date(b.date) - new Date(a.date))
}

// 根据 slug 获取单篇文章
export function getArticleBySlug(slug) {
  const articles = getAllArticles()
  return articles.find(article => article.slug === slug) || null
}

// 根据知识库筛选文章
export function getArticlesByKnowledgeBase(knowledgeBase) {
  const articles = getAllArticles()
  return [...articles]
    .filter(article => article.knowledgeBase === knowledgeBase)
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

// 根据标签筛选文章
export function getArticlesByTag(tag) {
  const articles = getAllArticles()
  return [...articles]
    .filter(article => article.tags.includes(tag))
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

// 获取最新文章
export function getLatestArticles(limit = 5) {
  const articles = getAllArticles()
  return articles.slice(0, limit)
}

// 获取随机文章
export function getRandomArticles(limit = 3) {
  const articles = getAllArticles()
  const shuffled = [...articles].sort(() => 0.5 - Math.random())
  return shuffled.slice(0, limit)
}

// 获取所有标签及文章数量
export function getTags() {
  const articles = getAllArticles()
  const tagMap = new Map()

  articles.forEach(article => {
    article.tags.forEach(tag => {
      if (tagMap.has(tag)) {
        tagMap.set(tag, tagMap.get(tag) + 1)
      } else {
        tagMap.set(tag, 1)
      }
    })
  })

  return Array.from(tagMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
}

// 获取所有分类
export function getTypes() {
  const articles = getAllArticles()
  const types = new Set()

  articles.forEach(article => {
    if (article.type) {
      types.add(article.type)
    }
  })

  return Array.from(types)
}

// 将 Obsidian 风格的图片语法 ![[xxx]] 转换为标准 Markdown 图片语法
function convertObsidianImageSyntax(markdown) {
  if (!markdown) return markdown
  return markdown.replace(/!\[\[([^\]]+)\]\]/g, (match, imagePath) => {
    return `![](${imagePath})`
  })
}

// Markdown 转 HTML
export function markdownToHtml(markdown) {
  const convertedMarkdown = convertObsidianImageSyntax(markdown)
  return marked(convertedMarkdown)
}

// 解析文章目录
export function parseCatalog(markdown) {
  const headings = []
  const lines = markdown.split('\n')

  lines.forEach((line, index) => {
    const h1Match = line.match(/^# (.+)$/)
    const h2Match = line.match(/^## (.+)$/)
    const h3Match = line.match(/^### (.+)$/)

    if (h1Match) {
      headings.push({
        id: `h1-${index}`,
        text: h1Match[1],
        level: 1,
        children: []
      })
    } else if (h2Match) {
      headings.push({
        id: `h2-${index}`,
        text: h2Match[1],
        level: 2,
        children: []
      })
    } else if (h3Match) {
      headings.push({
        id: `h3-${index}`,
        text: h3Match[1],
        level: 3,
        children: []
      })
    }
  })

  // 构建树形结构
  const tree = []
  let currentH1 = null
  let currentH2 = null

  headings.forEach(heading => {
    if (heading.level === 1) {
      currentH1 = heading
      currentH2 = null
      tree.push(heading)
    } else if (heading.level === 2 && currentH1) {
      currentH2 = heading
      currentH1.children.push(heading)
    } else if (heading.level === 3 && currentH2) {
      currentH2.children.push(heading)
    }
  })

  return tree
}
