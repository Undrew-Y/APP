<template>
    <div>
        <div class="title" v-show="this.$route.path!=='/md'">
            <router-link v-show="backInfo.hasBack" tag="button" :to="backInfo.to">返回</router-link>
            {{title}}
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('home', ['title', 'backInfo']),
    }
}
// console.log(this.$route.path);
</script>

<style lang="scss" scoped>
@import './assets/scss/variable.scss';
@import './assets/scss/mixin.scss';

@font-face {
    font-family: 'iconfont';
    src: url('./assets/icons/iconfont.eot');
    src: url('./assets/icons/iconfont.eot?#iefix') format('embedded-opentype'),
        url('./assets/icons/iconfont.woff2') format('woff2'),
        url('./assets/icons/iconfont.woff') format('woff'),
        url('./assets/icons/iconfont.ttf') format('truetype'),
        url('./assets/icons/iconfont.svg#iconfont') format('svg');
}

div {
    height: 100%;
    display: flex;
    flex-direction: column;
    > div.title {
        position: relative;
        height: 0.44rem;
        background-color: $primary-color;
        line-height: 0.44rem;
        font-size: 0.2rem;
        color: #fff;
        text-align: center;
        button {
            left: 0.1rem;
            position: absolute;
            top: 0.1rem;
        }
    }
}
</style>
