<template>
<main>
    <div class="a">
       <div class="b" @click="drop">></div>
       <div class="c">影片详情</div>
    </div>
    <div class="d">
        <a><img src="@/assets/pic1.png"></a>
        <div class="e">
            <p class="p1">丹顶鹤女孩</p>
            <p class="p2">672人想看</p>
            <p class="p3">爱情，剧情</p>
            <p class="p3">中国大陆</p>
            <p class="p3">2021-04-29中国大陆上映</p>
        </div>
        <div class="f">想看</div><div class="g">评分</div>
    </div>
    <div class="h">
        
    </div>
    <div class="i">
       <p>演职人员</p>
       <ul>
           <li>
               <img src="@/assets/pic1.png">
               <span class="s1">廖子豪</span>
               <span class="s2">导演</span>
           </li>
           <li>
               <img src="@/assets/pic1.png">
               <span class="s1">廖子豪</span>
               <span class="s2">导演</span>
           </li>
           <li>
               <img src="@/assets/pic1.png">
               <span class="s1">廖子豪</span>
               <span class="s2">导演</span>
           </li>
       </ul>
    </div>
    <div class="m">
       <p>视频和剧照</p>
       <ul>
           <li>

           </li>
       </ul>
    </div>
    <div class="k">
        <p>观众评论</p>
        <div class="y"><img src="@/assets/pic1.png"></div>
        <span>undrew</span><br>

    </div>
</main>
   
</template>
<script>
import { mapState ,mapActions } from 'vuex'
export default {
      computed:{
       ...mapState('xiangqy',['data']),
   },
   mounted(){
       this.add()
   },
   methods:{
        ...mapActions('xiangqy',['add']),
        drop(){
            this.$router.push('/index/home/comming')
        }
   },
}
</script>
<style lang="scss" scoped>
    .a{ cursor: pointer;
        height: 0.44rem;
        background-color: red;
       .b{
           width: 0.2rem;
           height: 0.44rem;
           line-height: 0.44rem;
           float: left;
           font-size: 0.3rem;
           color: #fff;
       }
       .c{
           float: left;
           width: 1.5rem;
           height: 0.44rem;
           margin-left: 1.2rem;
           line-height: 0.44rem;
           font-size: 0.18rem;
           color: #fff;
       }
    }
    .d{
        position: relative;
        height: 2.2rem;
        background-color: #577992;
        overflow: hidden;
        a{
            display: block;
            float: left;
            width: 1.11rem;
            height: 1.54rem;
            margin-left: 0.15rem;
            margin-top: 0.15rem;
            margin-right: 0.15rem;
            img{
                width: 100%;
                height: 100%;
            }
        }
        .e{
            margin-top: 0.15rem;
            float: left;
        .p1{
            font-size: 0.18rem;
            color: #fff;
            margin: 0.07rem 0;
        }
        .p2{
             color: yellow;
             font-size: 0.16rem;
             margin-bottom: 0.1rem;
        }
        .p3{
            color: #ccc;
            font-size: 0.13rem;
            margin: 0.03rem 0;
        }
        }
        .f{ 
            position: absolute;
            left:0rem ;
            bottom: 0.09rem;
            font-size: 0.15rem;
            margin-left: 0.15rem;
            width: 1.65rem;
            height: 0.33rem;
            text-align: center;
            line-height: 0.33rem;
            color:#ecec;
            border-radius: 5px ;
            background-color: #839ba7;
        }
        .g{
            position: absolute;
            right:0.15rem ;
            bottom: 0.09rem ;
            font-size: 0.15rem;
            width: 1.65rem;
            height: 0.33rem;
            text-align: center;
            line-height: 0.33rem;
            color:#ecec;
            border-radius: 5px ;
            background-color: #839ba7;
        }
    }
    .h{
        height: 1.14rem;
        border-bottom: 0.1rem solid #fff;
        background-color: #ccc;
        font-size: 0.18rem;
        color: black;
        padding-left: 0.16rem;
        overflow: hidden;
    }
    .i{
        position: relative;
        height: 1.75rem;
        background-color: #ccc;
        border-bottom: 0.1rem solid #fff;
        p{
            font-size: 0.15rem;
            padding-left: 0.15rem;
        }
        ul{
            padding-left: 0.15rem;
            li{
                margin: 0 0.06rem;
                width: 0.7rem ;
                height:1.4rem;
                list-style: none;
                float: left;
                display: flex;
                flex-direction: column; 
                  
             img{
                    margin-top: 0.04rem;
                    width: 0.7rem;
                    height: 0.9rem;
                    }
            
                .s1{
                    display: block;
                    font-size: 0.15rem;
                    text-align: center;
                }
                .s2{
                    display: block;
                     font-size: 0.13rem;
                     text-align: center;
                     color:black;
                }
            }
        }
    }
    .m{
        height: 1.44rem;
        background-color: #ccc;
        p{
            font-size: 0.15rem;
            margin-left: 0.15rem;
            height: 0.38rem;
            line-height: 0.38rem;
            text-align: left;
        }
    }
    .k{
        p{
          font-size: 0.15rem;
            margin-left: 0.15rem;
            height: 0.38rem;
            line-height: 0.38rem;
            text-align: left; 
        }
        .y{ float: left;
            width:0.28rem;
            height: 0.28rem;
            margin-left: 0.15rem;
            border-radius: 50%;
            background-color: red;
            overflow: hidden;
        }
        span{
            display: block;
            float: left;
            height: 0.28rem;
            line-height: 0.28rem;
            font-size: 0.12rem;
        }
    }
</style>