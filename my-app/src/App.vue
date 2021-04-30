<template>
    <div>
        <div class="a">猫眼电影</div>
        <main>
            <ul class="header-nav">
                <li>
                    广州
                    <b>&#xe688;</b>
                </li>
                <li>
                    <span @click="goto1" :class="{act:panduan}">热映</span>
                    <span @click="goto2" :class="{act:panduan}" >待映</span>
                </li>
                <li>
                    <b>&#xe617;</b>
                </li>
            </ul>

            <div class="box">
               <router-view></router-view>
            </div>
        </main>
      
        <nav>
            <ul class="nav-footer">
                <li class="active">
                    <b>&#xe8ae;</b>
                    <span @click="goto3">电影</span>
                </li>
                <li>
                    <b>&#xe8c0;</b>
                    <span @click="goto4">影院</span>
                </li>
                <li>
                    <b>&#xe62b;</b>
                    <span @click="goto5">我的</span>
                </li>
            </ul>
        </nav>
    </div>
</template>

<script>
// import Reying from "@/components/Reying.vue"
export default {
    name: 'App',
    // components:{
    //   Daying,
    //   Reying,
    // },
    data(){
      return{
        panduan:''
      }
    },
    methods:{
      goto1(){
        //  this.panduan = true
         this.$router.push('/dianying/reying').catch(()=>{})
      },
      goto2(){
         this.$router.push('/dianying/daiying').catch(()=>{})
      },
       goto3(){
         this.$router.push('/dianying').catch(()=>{})
      },
       goto4(){
         this.$router.push('/yingyuan').catch(()=>{})
      },
       goto5(){
         this.$router.push('/wode').catch(()=>{})
      }
     
    },
    
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
    > div.a {
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
                    cursor: pointer;
                    width: 0.6rem;
                    height: 100%;
                    font-weight: 600;
                    color: $font-primary-color;
                    line-height: 0.44rem;
                //      &.act {
                // color: $primary-color;
                //    } //默认展示热映
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
        // position: absolute;
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
      .act {
     color: $primary-color;
                   } 
 }
</style>
