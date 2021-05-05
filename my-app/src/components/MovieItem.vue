<template>
<ul class="a">
<li v-for="v,i in reying" :key="i">
        <!-- 左侧图片 -->
        <div>
            <img :src="v.img.replace('/w.h','')">
        </div>
        <!-- 右侧部分 -->
        <div>
            <div class="info-header">
                <h3 @click="goto">{{v.nm}}</h3>
                <my-tip>
                    <template v-slot>
                        {{v.wish}}
                        <span>人想看</span>
                    </template>
                </my-tip>
            </div>
            <div class="info-body">
                <div>
                    <p>{{v.cat}}</p>
                    <p>{{v.star}}</p>
                    <p>{{v.showInfo}}</p>
                </div>
                <my-button type="primary">预售</my-button>
            </div>
        </div>
    </li>
     <p class="ee" @click="moreMovie">点击加载更多</p>
</ul>
    
</template>

<script>
 let lit = 12
import MyButton from '@/components/MyButton'
import MyTip from '@/components/MyTip'
import { mapState ,mapActions } from 'vuex'
export default {
    props: ['item'],
    components: {
        MyButton,
        MyTip
    },
    data() {
            return {
                lit
            };
        },
   computed:{
       ...mapState('reying',['reying']),
       ...mapState("ct", ["ct"])
   },
   mounted(){
        lit = 12
        this.add({lit:null,ct:this.ct})
   }, 
   methods:{
        ...mapActions('reying',['add']),
          moreMovie() {
            lit = lit + 12;
                if (lit <= 36) {
            this.add({lit:lit,ct:this.ct})
                    if (lit == 36) {
                        document.querySelector('.ee').style.display = 'none'
                    }
                }
            },
            goto(){
                this.$router.push('/md')
            }
          }
}

</script>
<style lang="scss" scoped>
@import '../assets/scss/mixin.scss';
 .ee{
        width: 100%;
        text-align: center;
        font-size: 0.16rem;
        color: #ccc;
        cursor: pointer;
    }
.a{
        height:5.32rem;
        overflow: auto;
}
li {
    height: 1.15rem;
    @include border-bottom-1px;
    padding: 0.12rem 0.12rem 0.12rem 0;
    display: flex;
    > div:first-child {
        margin-right: 0.1rem;
        img {
            width: 0.64rem;
        }
    }
    > div:last-child {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        .info-header {
            @include flex-layout(row, space-between);
        }
        .info-body {
            @include flex-layout(row, space-between);
            color: #666666;
            font-size: 0.14rem;
            // 超出部分使用省略号代替
            p {
                max-width: 2.1rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
}
</style>