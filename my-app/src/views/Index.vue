<template>
    <div class="page">
        <router-view></router-view>
        <nav>
            <ul class="nav-footer">
                <router-link tag="li" active-class="active" to="/index/home">
                    <b>&#xe8ae;</b>
                    <span>电影</span>
                </router-link>
                <router-link tag="li" active-class="active" to="/index/cinema">
                    <b>&#xe8c0;</b>
                    <span>影院</span>
                </router-link>
                <router-link tag="li" active-class="active" to="/index/my">
                    <b>&#xe62b;</b>
                    <span>我的</span>
                </router-link>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
}

</script>
<style lang="scss" scoped>
@import '@/assets/scss/variable.scss';
@import '@/assets/scss/mixin.scss';

div.page {
    flex: 1;
    ul.nav-footer {
        height: 0.44rem;
        display: flex;
        box-sizing: border-box;
        @include border-top-1px;
        > li {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            font-size: 0.12rem;
            &.active {
                color: $primary-color;
            }
            @include icon;
            b {
                font-size: 0.24rem;
            }
        }
    }
}
</style>