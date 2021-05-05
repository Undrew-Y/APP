<!--  -->
<template>
    <ul class="header-nav">
        <li @click="ctChange()">
            {{ct}}
            <b>&#xe688;</b>
        </li>
        <li>
            <!-- <span active-class="active">热映</span>
            <span active-class="active">待映</span> -->
            <router-link tag="li" active-class="active" to="/content/movies/hot">热映</router-link>
            <router-link tag="li" active-class="active" to="/content/movies/wait">待映</router-link>
        </li>
        <li>
            <b>&#xe617;</b>
        </li>
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
        // 经典的1px问题(物理像素)
        display: flex;
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

        >li:nth-child(2) {
            align-items: center;
            flex: 1;
            display: flex;
            justify-content: center;

            >li {
                width: 0.6rem;
                height: 100%;
                font-weight: 600;
                color: $font-primary-color;
                line-height: 0.44rem;

                &:last-child {
                    margin-left: 0.2rem;
                }
                &.active {
                    color: red;
                }
            }
        }

        >li:last-child {
            color: $font-primary-color;
            width: 0.44rem;
            box-sizing: border-box;
            border-left: 1px solid $font-primary-color;
            line-height: 0.44rem;
            text-align: center;
            @include icon;
        }
    }
</style>