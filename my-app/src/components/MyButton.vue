<template>
    <button class="my-button">
        <!-- 插槽用于 -->
        <slot></slot>
    </button>
</template>

<script>
export default {

}

</script>
<style scoped>
button,
button[type='default'] {
    border-radius: 0.02rem;
    padding: 0.06rem 0.12rem;
    background-color: #fff;
    color: #fff;
}
button[type='primary'] {
    background-color: #409eff;
}
button[type='danger'] {
    background-color: #f56c6c;
}
</style>