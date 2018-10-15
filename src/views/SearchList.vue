<template>
  <div class="SearchList">
    <div class="lt_searchBox">
      <form action="">
        <input type="text" class="lt_searchKey">
        <span class="lt_searchBtn">搜索</span>
      </form>
    </div>
    <!-- 排序结构 -->
    <div class="lt_sorder">
      <a href="javascript:;" data-order="time" :class="{'active':isActive==0}">上架时间
        <span class="fa fa-angle-down"></span>
      </a>
      <a href="javascript:;" data-order="price" @click="handlePrice" :class="{'active':isActive===1}">价格
        <span :class="{'fa':true, 'fa-angle-down':isPrice, 'isPrice':true, 'fa-angle-up':!isPrice}"></span>
      </a>
      <a href="javascript:;" data-order="num" @click="handleNum" :class="{'active':isActive==2}">销量
        <span :class="{'fa':true, 'fa-angle-down':isNum, 'fa-angle-up':!isNum}"></span>
      </a>
      <a href="javascript:;" data-order="discount" :class="{'active':isActive==3}">折扣
        <span class="fa fa-angle-down"></span>
      </a>
    </div>
    <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
      <ul>
        <a href="javascript:;" class="goodBox" v-for='item in resultList' :key='item.id'>
          <img :src="'http://193.112.55.79:9096/'+item.pic[0].picAddr" alt="">
          <p class="line2">{{item.proName}}</p>
          <span>&yen;{{item.price}}
            <del>&yen;{{item.oldPrice}}</del>
          </span>
          <button class="mint-button mint-button--primary mint-button--small">
            <label class="mint-button-text">立即购买</label>
          </button>
        </a>
      </ul>
    </mt-loadmore>
  </div>
</template>

<script>
import { getQueryProduct } from '@/api/index.js'
export default {
  data () {
    return {
      allLoaded: false,
      resultList: [],
      isActive: 5,
      isPrice: true,
      isNum: true,
      key: '',
      page: 1,
      pageSize: 10
    }
  },
  mounted () {
    this.key = this.$route.params.key
    getQueryProduct({ proName: this.key, page: this.page, pageSize: this.pageSize }).then(res => {
      // console.log(res)
      this.resultList = res.data
    })
  },
  methods: {
    handlePrice () {
      console.log(123)
      this.isActive = 1
      this.isPrice = false
      this.isNum = true
      // 按价格排序
      var sortType = this.isPrice ? 2 : 1
      getQueryProduct({ proName: this.key, page: this.page, pageSize: this.pageSize, price: sortType }).then(res => {
        console.log(res)
        this.resultList = res.data
      })
    },
    handleNum () {
      this.isActive = 2
      this.isNum = false
      this.isPrice = true
      // 按销量排行
      var sortType = this.isNum ? 2 : 1
      getQueryProduct({ proName: this.key, page: this.page, pageSize: this.pageSize, num: sortType }).then(res => {
        console.log(res)
        this.resultList = res.data
      })
    },
    loadBottom () {
      // 加载更多数据
      this.allLoaded = true // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded()
    }
  }
}
</script>

<style scoped lang='scss'>
.lt_searchBox {
  padding: 10px 10px 0;
  position: relative;
  input {
    width: 100%;
    height: 30px;
    border: none;
    border: 1px solid #1a70a6;
    border-radius: 5px;
    margin-bottom: 0px;
  }
  span {
    width: 60px;
    height: 34px;
    background-color: #1a70a6;
    border-radius: 0px 5px 5px 0px;
    color: #fff;
    position: absolute;
    top: 10px;
    right: 8px;
    font-size: 15px;
    text-align: center;
    line-height: 30px;
  }
}
.lt_sorder {
  width: 100%;
  display: flex;
  background-color: #ddd;
  margin: 10px 0px;
  > a {
    flex: 1;
    font-size: 13px;
    line-height: 30px;
    text-align: center;
    color: #333;
    -webkit-tap-highlight-color: transparent;
    &.active {
      color: orange;
    }
  }
}
ul {
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  width: 100%;
  .goodBox {
    display: block;
    width: 48%;
    color: #ccc;
    font-size: 12px;
    box-shadow: 1px 1px 0 0 #ccc;
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 4px;
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
  .goodBox:nth-of-type(even) {
    margin-left: 4%;
  }
}
.line2 {
  display: -webkit-box; /*将对象作为弹性伸缩盒子模型显示*/
  overflow: hidden;

  white-space: normal !important;
  text-overflow: ellipsis;
  word-wrap: break-word;

  -webkit-line-clamp: 2; /*限制在一个块元素显示的文本的行数*/
  -webkit-box-orient: vertical; /*设置或检索伸缩盒对象的子元素的排列方式*/
}
.isActive {
  color: #0094ff;
}
</style>
