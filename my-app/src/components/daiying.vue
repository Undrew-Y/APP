<template>
    <div>
        <div class="aa">
        <p class="d1">近期最受欢迎</p>
        <div class="d2">
            <!-- <el-carousel :interval="5000" arrow="always"> -->
                <ul style=" list-style: none;
       width: 100rem;">
        <!-- <el-carousel-item> -->
                <li v-for="u,i in banner" :key="i" style=" width: 0.85rem;
         float: left;
         margin:0 0.04rem;overflow:auto;">
                    <div class="d3"><img :src="u.img.replace('/w.h','')"></div>
                    <div class="d4">{{u.nm}}</div>
                    <div class="d5">{{u.wish}}人想看</div>
                    <div class="d5">{{u.comingTitle}}</div>
                </li>
        <!-- </el-carousel-item> -->
            </ul> 
            
               <!-- </el-carousel> -->
            
        </div>
        <div class="d6">
               <a>4月29日</a>
               <a>周四</a>   
               <ul>
                 <li v-for="v,i in datas" :key="i">
                 <div class="u1"><img :src="v.img.replace('/w.h','')" alt=""></div>
                  <div class="u2">
                  <p class="p1" @click="goto(i)" >{{v.nm}} <span>{{v.wish}}</span><span>人想看</span></p>
                  <p class="p2">{{v.cat}}</p>
                  <p class="p2">{{v.desc}}</p>
                  <p class="p2">{{v.showInfo}}</p>
                  <div class="u3">想看</div>
                  </div>
                  </li>
                  <p class="ee" @click="more">点击加载更多</p>
               </ul>
          </div>
        </div>
    </div>
</template>
<script>
  import { mapState ,mapActions } from 'vuex'
 export default {
    computed:{
       ...mapState('daiying',['datas']),
       ...mapState('daiying',['banner'])
   },
   mounted(){
       this.add()
       this.add2()
   },
   methods:{
        ...mapActions('daiying',['add']),
        ...mapActions('daiying',['add2']),
        goto(i){
            let id =this.datas[i].id
            console.log(id);
            //拿到所点击的电影的id 如何传下去？
            this.$router.push('/md')
        },
        more(){
            
        }
   },
 }
</script>

<style scoped>
   .aa{
       height: 5.32rem;
       overflow:auto;
   }
   .d1{
       height: 0.38rem;
       line-height: 0.38rem;
       font-size: 0.151rem;
       background-color: #fff;
       color: black;
       text-align: left;
       margin-left: 0.15rem;
   }
   .d2{
       overflow: hidden;
       /* box-sizing: border-box; */
       margin-left: 0.15rem;
       width: 3.6rem;
       height: 1.88rem;
       background-color: #fff;
       border-bottom: 1px solid #ccc;
   }

   .d2>ul{
       width: 50rem;
       list-style: none;
       width: 100rem;
   }
   .d2>ul>li{
         width: 0.85rem;
         float: left;
         margin:0 0.04rem;
   }
   .d3{
       width: 0.85rem;
       height: 1.15rem;
   }
   .d3>img{
       width: 100%;
       height: 100%;
   }
   .d4{
       font-size: 0.13rem;
       color: black;
   }
   .d5{
       font-size: 0.11rem;
       
       color: #ccc;
   }
   .d6{
       margin: 0.02rem 0 0 0.15rem ;
       height: 3rem;
       /* overflow: auto;  */
       background-color: #fff;
   }
   .d6>a{
       font-size: 0.15rem;
       margin: 0.08rem;
       height: 0.3rem;
       line-height: 0.3rem;
   }
    .u1{
        float: left;
        width: 0.65rem;
        height:0.9rem ;
        margin: 0.13rem 0.13rem 0 0.13rem  ;
        
        /* background-color: red; */
    }
    .u1>img{
            width: 100%;
            height: 100%;
        }
    .u2{
        position: relative;
        float: left;
        width: 2.6rem;
        margin-top: 0.13rem;
        background-color: #fff;
        height:0.9rem ;
        }
    .u2>p{
        text-align: left;
    }
    .u2{
        position: relative;
        font-size: 0.16rem;
        line-height: 0.26rem;
        color: #848484;
    }
    .u2 .p1 span:first-child{
        position: absolute;
        right: 0.50rem;
        color: #ffb400;
    }
    .u2 .p1 span:last-child{
        position: absolute;
        right: 0.13rem;
        font-size: 0.12rem;
        color: #ffb400;
    }
    .u2 .p2{
        font-size: 0.1rem;
        line-height: 0.22rem;
        color: #cccccc;
    }
    .u3{
        position: absolute;
        bottom: 0.23rem;
        right: 0.13rem;
        width: 0.47rem;
        height: 0.27rem;
        line-height: 0.27rem;
        text-align: center;
        font-size: 0.11rem;
        border-radius: 10%;
        background-color: #52b0eb;
        color: #fff;
    }
    .ee{
        width: 100%;
        text-align: center;
        font-size: 0.16rem;
        color: #ccc;
        cursor: pointer;
    }
    .ee:hover{
        color: red;
    }
</style>>
