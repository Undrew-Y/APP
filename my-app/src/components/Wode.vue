<template>
<div>
        <nav>
            <li></li>
            <p>我的订单<span>&gt;</span></p>
            <p>优惠券<span>&gt;</span></p>
            <p class="one">影院会员卡<span>&gt;</span></p>
            <li></li>
            <p>想看的电影<span>&gt;</span></p>
            <p class="two">看过的电影<span>&gt;</span></p>
            <li></li>
        </nav>
        <footer>
            @猫眼电影 客服电话：<span>1010-5335</span>
        </footer> 
   </div>           
</template>
<script>

</script>
<style lang="scss" scoped>
div{
        height: 100%;
        display: flex;
        flex-direction: column;
        position: relative;
        >div{
            text-align: center;
        }
        >nav{
            width: 100%;
            height: 1.49rem;
            background-color: #ffffff;
            color: #040404;
            flex-direction: column;
            
            >li{
            width: 100%;
            height: 0.1rem;
            background-color: #f4f4f4;
            border-top: 0.01rem solid #e0e0e0;
            border-bottom: 0.01rem solid #e0e0e0;
            }
            >p{
                border-bottom: 0.005rem solid #e0e0e0;
                margin-left: 0.15rem;
                height: 0.4rem;
                line-height: 0.4rem;
                padding-right: 0.15rem;
                font-size: 0.16rem;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-content: space-between;
                >span{
                    color: #cccccc;
                }
            }
            .one{
                border-color: transparent;
            }
            .two{
                border-color: transparent;
            }
            li:last-child{
                background-color: #ffffff;
                border-bottom: transparent;
            }
        }
        
        footer{
            width: 100%;
            height: 0.5rem;
            color: #939393;
            font-size: 0.12rem;
            display: flex;
            justify-content: center;
            align-content: flex-end;
            position: absolute;
            top: 42em;
            >span{
                color: #ffbe44;
                text-decoration: underline;
            }
        }
        
    }
</style>