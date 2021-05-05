<template>
  <div class="box">
    <div class="cinema" v-for="cin in data" :key="cin.id">
      <div><b>{{cin.nm}}</b><span>{{cin.price}}<b>元起</b></span></div>
      <p class="addr"><span>{{cin.addr}}</span><span>{{cin.distance}}</span></p>
      <p class="vfor"><span v-for="ci in cin.labels " :key="ci.name"><span
            v-if="ci.name === '小吃' ||ci.name ==='改签' || ci.name ==='折扣卡'" class="active">{{ci.name}}</span><span
            v-else>{{ci.name}}</span></span></p>
      <span class="spb"><b>惠</b>{{cin.promotion.platformActivityTag}}</span>
    </div>
  </div>
</template>

<script>
  // import axios from 'axios'
  import {
    data
  } from '@/assets/cinemas-1.json'
  export default {

    data() {
      return {
        data: data.cinemas
      };
    },

    methods: {}
  }
</script>
<style lang="scss" scoped>
  .box {
    background-color: transparent;
    height: 1.27rem;
    // height: 1.71rem;
    width: 100%;
    display: flex;
    align-items: center;

    // >.header {
    //   height: 0.44rem;
    //   width: 100%;
    // }
    >.cinema {
      width: 3.5rem;
      height: 1.27rem;
      // background-color: green;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding-bottom: 0.16rem;
      box-sizing: border-box;
      position: relative;

      &::after {
        position: absolute;
        content: "";
        width: 100%;
        // left: 0;
        bottom: 0;
        transform: scaleY(0.5);
        border-bottom: 0.01rem solid #999;
      }

      >div {
        color: black;
        margin-top: 0.16rem;
        height: 0.2rem;
        line-height: 0.2rem;

        >b {
          font-size: 0.16rem;
        }

        >span {
          font-size: 0.16rem;
          color: red;

          >b {
            font-size: 0.12rem;
            color: red;
          }
        }
      }

      >.addr {
        width: 100%;
        margin: 0.04rem 0;
        height: 0.2rem;
        line-height: 0.2rem;
        font-size: 0.12rem;
        color: #636363;
        display: flex;
        justify-content: space-between;
        overflow: hidden;
      }

      >.vfor {

        display: flex;
        justify-content: flex-start;

        >span {
          height: 0.16rem;
          line-height: 0.16rem;
          font-size: 0.1rem;

          >span {
            border: 0.005rem solid blue;
            padding: 0.02rem;
            margin-right: 0.05rem;
            border-radius: 10%;
            color: blue;
          }

          >span.active {
            border: 0.005rem solid orange;
            padding: 0.02rem;
            margin-right: 0.05rem;
            border-radius: 10%;
            color: orange;
          }
        }
      }



      >.spb {
        margin: 0.04rem 0 0 0;
        font-size: 0.1rem;
        height: 0.18rem;
        line-height: 0.18rem;
        color: #636363;

        >b {
          padding: 0.01rem 0.03rem;
          width: 0.15rem;
          height: 0.15rem;
          background-color: #ff9c03;
          border-radius: 15%;
          margin-right: 0.05rem;
        }
      }
    }
  }
</style>