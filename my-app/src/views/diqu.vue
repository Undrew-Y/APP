<!--  -->
<template>
  <div>
    <div class="ctContent">
      <div v-for="ct in cts" :key="ct.id" class="ctBox" @click='changeCt1(ct.nm)'>
        {{ct.nm}}
      </div>

    </div>
    <div class="ctSearch"></div>
  </div>
</template>

<script>
  import {
    mapState,
    mapActions
  } from "vuex"
  import {
    cts
  } from '@/assets/cities.json'
  export default {
    data() {
      return {
        cts: cts
      };
    },

    components: {},

    computed: {
      ...mapState("ct", ["ct"])
    },

    mounted() {},

    methods: {
      ...mapActions("ct", ["changeCt"]),
      changeCt1(ctName) {
        this.changeCt(ctName)
        this.$router.push("/")
      }
    }
  }
</script>
<style lang='scss' scoped>
  .ctBox {
    height: 0.44rem;
    font-size: 0.16rem;
    line-height: 0.44rem;
    border-bottom: rgb(221, 216, 216) solid 1px;
    margin: 0 20px;
  }
</style>