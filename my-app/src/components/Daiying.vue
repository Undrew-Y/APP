<template>
    <div>
        <p class="d1">近期最受欢迎</p>
        <div class="d2">
            <ul>
                <li>
                    <div class="d3"><img src="../assets/pic1.png"></div>
                    <div class="d4">速度与激情9</div>
                    <div class="d5">524815人想看</div>
                    <div class="d5">5月21日</div>
                </li>
                <li>
                    <div class="d3"><img src="../assets/pic1.png"></div>
                    <div class="d4">速度与激情9</div>
                    <div class="d5">524815人想看</div>
                    <div class="d5">5月21日</div>
                </li>
                <li>
                    <div class="d3"><img src="../assets/pic1.png"></div>
                    <div class="d4">速度与激情9</div>
                    <div class="d5">524815人想看</div>
                    <div class="d5">5月21日</div>
                </li>
                <li>
                    <div class="d3"><img src="../assets/pic1.png"></div>
                    <div class="d4">速度与激情9</div>
                    <div class="d5">524815人想看</div>
                    <div class="d5">5月21日</div>
                </li>
            </ul>
        </div>
        <div class="d6">
               <a>4月29日</a>
               <a>周四</a>   
               <ul>
                 <li>
                 <div class="u1"><img src="../assets/pic1.png" alt=""></div>
                  <div class="u2">
                  <p class="p1">丹顶鹤女孩 <span>2461</span><span>人想看</span></p>
                  <p class="p2">爱情，剧情</p>
                  <p class="p2">主演：孙苏雅，郑晓铺，杨迪</p>
                  <p class="p2">2021-04-29中国大陆上映</p>
                  <div class="u3">想看</div>
                  </div>
                  </li>
                  <li>
                 <div class="u1"><img src="../assets/pic1.png" alt=""></div>
                  <div class="u2">
                  <p class="p1">丹顶鹤女孩 <span>2461</span><span>人想看</span></p>
                  <p class="p2">爱情，剧情</p>
                  <p class="p2">主演：孙苏雅，郑晓铺，杨迪</p>
                  <p class="p2">2021-04-29中国大陆上映</p>
                  <div class="u3">想看</div>
                  </div>
                  </li>
                   <li>
                 <div class="u1"><img src="../assets/pic1.png" alt=""></div>
                  <div class="u2">
                  <p class="p1">丹顶鹤女孩 <span>2461</span><span>人想看</span></p>
                  <p class="p2">爱情，剧情</p>
                  <p class="p2">主演：孙苏雅，郑晓铺，杨迪</p>
                  <p class="p2">2021-04-29中国大陆上映</p>
                  <div class="u3">想看</div>
                  </div>
                  </li>
               </ul>
        </div>
    </div>
</template>
<script>
 export default {

 }
</script>

<style scoped>
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
       margin-left: 0.15rem;
       height: 1.88rem;
       background-color: #fff;
       border-bottom: 1px solid #ccc;
   }

   .d2>ul{
       list-style: none;
       width: 100rem;
     
   }
   .d2>ul>li{
       width: 0.85rem ;
         float: left;
         margin:0 0.04rem ;
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
       height: 4rem;
       background-color: #ccc;
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
        background-color: yellow;
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
</style>>
