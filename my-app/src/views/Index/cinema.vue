<!--  -->
<template>
    <div class="box1">
        <tou-bu-two></tou-bu-two>
        <cinema></cinema>
    </div>
</template>

<script>
    import Cinema from '@/components/Cinema.vue'
    import TouBuTwo from '@/components/TouBuTwo.vue'

    export default {
        data() {
            return {};
        },

        components: {
           Cinema,
           TouBuTwo
        },

        computed: {},

        mounted() {},

        methods: {}
    }
</script>
<style lang="scss" scoped>
    @import '@/assets/scss/variable.scss';
    @import '@/assets/scss/mixin.scss';
    .box1 {
        flex: 1;
        overflow: auto;
        background-color: #fff;
    }

    div {
        height: 100%;
        display: flex;
        flex-direction: column;

        >div {
            height: 0.44rem;
            background-color: $primary-color;
            line-height: 0.44rem;
            font-size: 0.2rem;
            color: #fff;
            text-align: center;
        }
    }
</style>