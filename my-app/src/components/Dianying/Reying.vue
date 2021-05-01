<template>
  <div class="a">
   <ul>
       <li  v-for="v,i in reying" :key="i">
           <div class="u1"><img src="../../assets/pic1.png" alt=""></div>
           <div class="u2">
              <p class="p1">{{v.nm}} <span>{{v.wish}}</span><span>人想看</span></p>
              <p class="p2">{{v.cat}}</p>
              <p class="p2">{{v.star}}</p>
              <p class="p2">{{v.showInfo}}</p>
              <div class="u3">预售</div>
           </div>
       </li>
   </ul>
  </div>
</template>

<script>
    import { mapState ,mapActions } from 'vuex'
    export default {
     
   data(){
       return {
       }
   },
   computed:{
       ...mapState('reying',['reying']),
   },
   mounted(){
       this.add()
   },
   methods:{
        ...mapActions('reying',['add']),
   }
}
</script>
<style scoped>
    
    ul{ 
        height:5.1rem;
        overflow: auto;
        background-color:#fff;
    }
    ul>li{
        margin: 1px 0;
        list-style-type: none;
        height: 1.15rem;
        border-bottom: 1px solid #fff;
    }
    .u1{
        float: left;
        width: 0.65rem;
        height:0.9rem ;
        margin: 0.13rem ;
        background-color: red;
    }
    .u1>img{
            width: 100%;
            height: 100%;
        }
    .u2{
        position: relative;
        float: left;
        width: 2.84rem;
        margin-top: 0.13rem;
        background-color: #fff;
        height:0.9rem ;
        }
    .u2>p{
        text-align: left;
    }
    .u2 .p1{
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
</style>