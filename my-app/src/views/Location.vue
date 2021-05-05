<template>
    <div class="page">位置</div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
    computed: {
        ...mapState('home', ['backInfo', 'cityName', 'title'])
    },
    mounted() {
        this.setTitle(`当前城市-${this.cityName}`)
        // 如果没有值
        if (!this.backInfo.to) {
            this.backInfo.to = '/index/home/hot'
        }
        // 将返回按钮展示
        this.backInfo.hasBack = true
    },
    methods: {
        ...mapActions('home', ['setTitle'])
    },
    // 路由离开，将按钮隐藏
    beforeRouteLeave(to, from, next) {
        this.backInfo.hasBack = false
        this.setTitle('猫眼电影')
        next()
    }
}

</script>
<style lang="scss" scoped>
div.page {
    flex: 1;
    font-size: 0.16rem;
}
</style>