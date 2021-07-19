<template>
    <p class="my-tip">
        <slot></slot>
    </p>
</template>

<script>
export default {
}

</script>
<style lang="scss" scoped>
p.my-tip {
    color: rgb(255, 180, 0);
    font-size: 0.18rem;
    > span {
        font-size: 0.12rem;
    }
}
</style>