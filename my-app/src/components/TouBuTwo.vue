<!--  -->
<template>
    <ul class="header-nav">
        <li>
            广州
            <b>&#xe688;</b>
        </li>
        <input type="text" placeholder="找影院">
    </ul>
</template>

<script>
    export default {
        data() {
            return {};
        },
         props: ["ct"],
        methods: {
            ctChange() {
                this.$emit("ctchange1")
            },
        },
    }
</script>
<style lang="scss" scoped>
    @import '../assets/scss/variable.scss';
    @import '../assets/scss/mixin.scss';

    @font-face {
        font-family: 'iconfont';
        src: url('../assets/icons/iconfont.eot');
        src: url('../assets/icons/iconfont.eot?#iefix') format('embedded-opentype'),
            url('../assets/icons/iconfont.woff2') format('woff2'),
            url('../assets/icons/iconfont.woff') format('woff'),
            url('../assets/icons/iconfont.ttf') format('truetype'),
            url('../assets/icons/iconfont.svg#iconfont') format('svg');
    }

    ul.header-nav {
        height: 0.44rem;
        // 经典的1px问题(物理像素)
        display: flex;
        justify-content: center;
        align-items: center;
        // border-bottom: 1px solid $font-primary-color;
        position: relative;
        padding-left: 0.8rem;
        @include border-bottom-1px;
        >li:first-child {
            position: absolute;
            top: 0;
            left: 0;
            @include icon;
            height: 0.44rem;
            line-height: 0.44rem;                       
            color: $font-primary-color;
            // color: red;
            padding-left: 0.1rem;
            transform: scale(0.9);

            b {
                font-size: 0.12rem;
                
            }
        }
        input {
            width: 2.46rem;
            height: 0.26rem;
            border: 0.005rem solid $font-primary-color; 
            text-align: center;
            border-radius: 0.05rem;
        }
    }
</style>