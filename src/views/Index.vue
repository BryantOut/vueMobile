<template>
    <div class="index">
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <mt-swipe :auto="4000" class="hd_banner">
                <mt-swipe-item>
                    <a href="javascript:;">
                        <img src="../assets/images/banner6.png" alt="">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="javascript:;">
                        <img src="../assets/images/banner3.png" alt="">
                    </a>
                </mt-swipe-item>
                <mt-swipe-item>
                    <a href="javascript:;">
                        <img src="../assets/images/banner4.png" alt="">
                    </a>
                </mt-swipe-item>
            </mt-swipe>
            <!-- 广告卡片 -->
            <div class="card">
                <div>
                    <a href="javascript:;">
                        <img src="../assets/images/nav1.png" alt="">
                    </a>
                </div>
                <div>
                    <a href="javascript:;">
                        <img src="../assets/images/nav2.png" alt="">
                    </a>
                </div>
                <div>
                    <a href="javascript:;">
                        <img src="../assets/images/nav3.png" alt="">
                    </a>
                </div>
                <div>
                    <a href="javascript:;">
                        <img src="../assets/images/nav4.png" alt="">
                    </a>
                </div>
                <div>
                    <a href="javascript:;">
                        <img src="../assets/images/nav5.png" alt="">
                    </a>
                </div>
                <div>
                    <a href="javascript:;">
                        <img src="../assets/images/nav2.png" alt="">
                    </a>
                </div>
            </div>
            <!-- 商品 -->
            <div class="goodsList">
                <div class="good">
                    <a href="javascript:;">
                        <img src="../assets/images/banner8.png" alt="">
                        <p>李林无解2综合训练鞋男鞋2018健身鞋韦德之道7</p>
                        <span>&yen;500
                            <del>&yen;600</del>
                        </span>
                        <button class="mint-button mint-button--primary mint-button--small">
                            <label class="mint-button-text">立即购买</label>
                        </button>
                    </a>
                </div>
                <div class="good">
                    <a href="javascript:;">
                        <img src="../assets/images/banner8.png" alt="">
                        <p>李林无解2综合训练鞋男鞋2018健身鞋韦德之道7</p>
                        <span>&yen;500
                            <del>&yen;600</del>
                        </span>
                        <button class="mint-button mint-button--primary mint-button--small">
                            <label class="mint-button-text">立即购买</label>
                        </button>
                    </a>
                </div>
                <div class="good">
                    <a href="javascript:;">
                        <img src="../assets/images/banner8.png" alt="">
                        <p>李林无解2综合训练鞋男鞋2018健身鞋韦德之道7</p>
                        <span>&yen;500
                            <del>&yen;600</del>
                        </span>
                        <button class="mint-button mint-button--primary mint-button--small">
                            <label class="mint-button-text">立即购买</label>
                        </button>
                    </a>
                </div>
                <div class="good">
                    <a href="javascript:;">
                        <img src="../assets/images/banner8.png" alt="">
                        <p>李林无解2综合训练鞋男鞋2018健身鞋韦德之道7</p>
                        <span>&yen;500
                            <del>&yen;600</del>
                        </span>
                        <button class="mint-button mint-button--primary mint-button--small">
                            <label class="mint-button-text">立即购买</label>
                        </button>
                    </a>
                </div>
            </div>
        </ul>
    </div>
</template>

<script>
export default {
  created () {
    this.$store.state.title = '乐淘商城'
  },
  methods: {
    loadMore () {}
  }
}
</script>

<style scoped lang='scss'>
.index {
  .hd_banner {
    width: 100%;
    height: 222px;
    a {
      width: 100%;
      display: block;
      > img {
        width: 100%;
        display: block;
      }
    }
  }
  .card {
    padding: 10px;
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    > div {
      width: 33.33333%;
      a {
        width: 100%;
        display: block;
        > img {
          width: 100%;
          display: block;
        }
      }
    }
  }
  .goodsList {
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    width: 100%;
    .good {
      border: 1px solid #ccc;
      padding: 10px;
      width: 48%;
      box-shadow: 1px 1px 0 0 #ccc;
      margin-bottom: 10px;
      a {
        display: block;
        width: 100%;
        color: #ccc;
        font-size: 12px;
        img {
          display: block;
          width: 100%;
        }
        p {
          line-height: 24px;
        }
        span {
          line-height: 24px;
          font-size: 14px;
          display: block;
          text-align: center;
          color: rgb(230, 26, 15);
          del {
            color: #ccc;
          }
        }
        button {
          display: block;
          margin: 10px auto;
        }
      }
    }
    .good:nth-of-type(even){
        margin-left: 4%;
    }
  }
}
</style>
