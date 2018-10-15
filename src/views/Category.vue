<template>
  <div class="category">
    <div class="left">
      <mt-navbar v-model="selected">
        <mt-tab-item :id="firstItem.id" v-for='firstItem in firstCategory' :key='firstItem.id'>
          {{firstItem.categoryName}}
        </mt-tab-item>
      </mt-navbar>
    </div>
    <div class="right">
      <mt-tab-container v-model="selected">
        <mt-tab-container-item :id="firstItem.id" v-for='firstItem in firstCategory' :key='firstItem.id'>
          <a href="javascript:;" v-for='secondItem in secondCategory' :key='secondItem.id'>
            <img :src="'http://193.112.55.79:9096/'+secondItem.brandLogo" alt="">
            <p>{{secondItem.brandName}}</p>
          </a>
          <span v-show='secondCategory.length === 0'>该一级菜单没有数据</span>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import { getFirstCateogry, getSecondCateogry } from '@/api/index.js'
export default {
  data () {
    return {
      selected: '',
      firstCategory: [],
      secondCategory: []
    }
  },
  watch: {
    selected (newValue, oldValue) {
      // alert(newValue)
      // 获取二级分类菜单数据
      getSecondCateogry({ id: newValue }).then(res => {
        console.log(res)
        this.secondCategory = res.rows
      })
    }
  },
  mounted () {
    this.$store.state.title = '商品分类'
    getFirstCateogry().then(res => {
      console.log(res)
      this.firstCategory = res.rows
      this.selected = res.rows[0].id
      console.log('-------')
    })
  }
}
</script>

<style scoped lang='scss'>
.category {
  width: 100%;
  height: 100%;
  display: flex;
  .left {
    width: 100px;
    height: 100%;
    .mint-navbar {
      flex-direction: column;
    }
  }
  .right {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    .mint-tab-container {
      width: 100%;
      .mint-tab-container-wrap {
        width: 100%;
        a {
          box-sizing: border-box;
          display: inline-block;
          width: 50%;
          padding: 4px;
          img {
            width: 100%;
          }
          p {
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
