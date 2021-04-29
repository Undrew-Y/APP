<template>
    <div>
        <div>猫眼电影</div>
        <main>
            <ul class="header-nav">
                <li>
                    北京天安门
                    <b>&#xe688;</b>
                </li>
                <li>
                    <span>热映</span>
                    <span>待映</span>
                </li>
                <li>
                    <b>&#xe617;</b>
                </li>
            </ul>

            <div class="box"></div>
        </main>
        <nv>
            <ul class="nav-footer">
                <li class="active">
                    <b>&#xe8ae;</b>
                    <span>电影</span>
                </li>
                <li>
                    <b>&#xe8c0;</b>
                    <span>影院</span>
                </li>
                <li>
                    <b>&#xe62b;</b>
                    <span>我的</span>
                </li>
            </ul>
        </nv>
    </div>
</template>

<script>

export default {

}
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
    > div {
        height: 0.44rem;
        background-color: $primary-color;
        line-height: 0.44rem;
        font-size: 0.2rem;
        color: #fff;
        text-align: center;
    }
    > main {
        flex: 1;
        font-size: 0.16rem;
        ul.header-nav {
            // 经典的1px问题(物理像素)
            display: flex;
            // border-bottom: 1px solid $font-primary-color;
            position: relative;
            padding-left: 0.8rem;
            @include border-bottom-1px;
            > li:first-child {
                position: absolute;
                top: 0;
                left: 0;
                @include icon;
                height: 0.44rem;
                line-height: 0.44rem;
                color: $font-primary-color;
                padding-left: 0.1rem;
                transform: scale(0.9);
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
                    height: 100%;
                    font-weight: 600;
                    color: $font-primary-color;
                    line-height: 0.44rem;
                    &:last-child {
                        margin-left: 0.2rem;
                    }
                }
            }
            > li:last-child {
                width: 0.44rem;
                box-sizing: border-box;
                border-left: 1px solid $font-primary-color;
                line-height: 0.44rem;
                text-align: center;
                @include icon;
            }
        }
    }
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
