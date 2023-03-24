<template>
    <div class="TitleBar">

    </div>
</template>

<script setup>

</script>

<style lang="less" scoped>
.TitleBar {
    height: 10rem;
    background-color: #e493d0;
    background-image:
        radial-gradient(closest-side, rgba(235, 105, 78, 1), rgba(235, 105, 78, 0)),
        radial-gradient(closest-side, rgba(243, 11, 164, 1), rgba(243, 11, 164, 0)),
        radial-gradient(closest-side, rgba(254, 234, 131, 1), rgba(254, 234, 131, 0)),
        radial-gradient(closest-side, rgba(170, 142, 245, 1), rgba(170, 142, 245, 0)),
        radial-gradient(closest-side, rgba(248, 192, 147, 1), rgba(248, 192, 147, 0));
    background-size:
        130vmax 130vmax,
        80vmax 80vmax,
        90vmax 90vmax,
        110vmax 110vmax,
        90vmax 90vmax;
    background-position:
        -80vmax -80vmax,
        60vmax -30vmax,
        10vmax 10vmax,
        -30vmax -10vmax,
        50vmax 50vmax;
    background-repeat: no-repeat;
    animation: 10s movement linear infinite;

/*     &::after {
        content: '';
        display: block;
        position: fixed;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
    } */
}

</style>