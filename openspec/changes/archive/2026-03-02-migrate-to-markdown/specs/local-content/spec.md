## ADDED Requirements

### Requirement: Article file structure
文章文件 SHALL 存放在 src/content/ 目录下，按分类子目录组织。

#### Scenario: Developer creates new article
- **WHEN** 开发者在 src/content/develop/ 目录创建 `new-article.md` 文件
- **THEN** 系统 SHALL 能通过内容查询工具读取该文章

#### Scenario: Article has frontmatter metadata
- **WHEN** 文章文件包含 YAML frontmatter
- **THEN** 系统 SHALL 解析并提取 title、date、tags、type、knowledge_base 字段

### Requirement: Query all articles
系统 SHALL 提供获取所有文章列表的功能。

#### Scenario: Get all articles
- **WHEN** 调用 getAllArticles() 方法
- **THEN** 系统 SHALL 返回所有文章数组，每项包含 title、slug、date、tags、type、knowledge_base、description

#### Scenario: Get articles by knowledge base
- **WHEN** 调用 getArticlesByKnowledgeBase('开发知识库')
- **THEN** 系统 SHALL 仅返回 knowledge_base 为「开发知识库」的文章

#### Scenario: Get articles by tag
- **WHEN** 调用 getArticlesByTag('Vue')
- **THEN** 系统 SHALL 仅返回包含 tag「Vue」的文章

#### Scenario: Get latest articles
- **WHEN** 调用 getLatestArticles(5)
- **THEN** 系统 SHALL 返回按 date 降序排列的前 N 篇文章

### Requirement: Query single article
系统 SHALL 提供根据 slug 获取单篇文章详情的功能。

#### Scenario: Get article by slug
- **WHEN** 调用 getArticleBySlug('vue-basics')
- **THEN** 系统 SHALL 返回该文章的完整数据，包含解析后的 HTML 内容

#### Scenario: Article not found
- **WHEN** 调用 getArticleBySlug('non-existent')
- **THEN** 系统 SHALL 返回 null

### Requirement: Query tags
系统 SHALL 提供获取所有标签及文章数量的功能。

#### Scenario: Get all tags
- **WHEN** 调用 getTags()
- **THEN** 系统 SHALL 返回标签数组，每项包含 name 和 count

### Requirement: Query categories
系统 SHALL 提供获取所有分类的功能。

#### Scenario: Get all types
- **WHEN** 调用 getTypes()
- **THEN** 系统 SHALL 返回分类数组
