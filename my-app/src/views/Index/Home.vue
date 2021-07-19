<template>
    <!-- 首页组件 -->
    <main>
        <ul class="header-nav">
            <!-- params的方式只能通过name的方式来指定组件 -->
            <li>
                <router-link tag="li" to="/location">
                {{cityName}}
                <b>&#xe688;</b>
                </router-link>
            </li>
            
            <li>
                <router-link tag="span" active-class="active" to="/index/home/hot">热映</router-link>
                <router-link tag="span" active-class="active" to="/index/home/comming">待映</router-link>
            </li>
            <li>
                <b>&#xe617;</b>
            </li>
        </ul>
        <router-view></router-view>
    </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState('home', ['cityName', 'backInfo'])
    },
    beforeRouteLeave(to, from, next) {
        // 记录当前的路由信息，方便回来
        this.backInfo.to = from.path
        next()
    }
}

</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/mixin.scss';
main {
    flex: 1;
    font-size: 0.16rem;
    ul.header-nav {
        // 经典的1px问题(物理像素)
        display: flex;
        // border-bottom: 1px solid $font-primary-color;
        position: relative;
        padding-left: 0.5rem;
        @include border-bottom-1px;
        > li:first-child {
            position: absolute;
            top: 0;
            left: 0;
            @include icon;
            height: 0.44rem;
            line-height: 0.44rem;
            color: $font-primary-color;
            // padding-left: 0.05rem;
            transform: scale(0.8);
            b {
                font-size: 0.12rem;
            }
        }
        > li:nth-child(2) {
            align-items: center;
            flex: 1;
            display: flex;
            justify-content: center;
            > span {
                width: 0.6rem;
                height: 0.41rem;
                font-weight: 600;
                color: $font-primary-color;
                text-align: center;
                line-height: 0.44rem;
                &:last-child {
                    margin-left: 0.2rem;
                }
                &.active {
                    border-bottom: 3px solid $primary-color;
                }
            }
        }
        > li:last-child {
            width: 0.44rem;
            box-sizing: border-box;
            line-height: 0.44rem;
            text-align: center;
            @include icon;
            @include border-left-1px;
        }
    }
}
</style>