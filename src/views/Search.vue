<template>
  <div class="search">
    <div class="searchArea">
      <mt-search v-model="searchKey"></mt-search>
      <button class="mint-button mint-button--default mint-button--small" @click='searchProduct'>
        搜索
      </button>
      <mt-cell :title="item" v-for='(item,index) in historyArr' :key='index' :to="{'name':'SearchList',params:{'key':item}}">
        <span @click.prevent.stop='delHistory(index)'>x</span>
      </mt-cell>
      <span v-show="historyArr.length===0">没有任何搜索历史数据</span>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      searchKey: '',
      historyArr: []
    }
  },
  methods: {
    searchProduct () {
      // 将当前用户的搜索记录添加到本地存储
      var temp = this.getHistory()
      temp.push(this.searchKey)
      localStorage.setItem('searchHistoryList', JSON.stringify(temp))
      this.$router.push({
        name: 'SearchList',
        params: { key: this.searchKey }
      })
    },
    getHistory () {
      var historyStr = localStorage.getItem('searchHistoryList')
      return JSON.parse(historyStr || '[]')
    },
    delHistory (index) {
      this.historyArr = this.getHistory()
      // console.log(this.historyStr)
      this.historyArr.splice(index, 1)
      localStorage.setItem(
        'searchHistoryList',
        JSON.stringify(this.historyArr)
      )
    }
  },
  mounted () {
    this.$store.state.title = '搜索中心'
    this.historyArr = this.getHistory()
  }
}
</script>

<style scoped lang='scss'>
.search {
  .searchArea {
    position: relative;
    .mint-search {
      height: auto;
    }
    .mint-button {
      position: absolute;
      top: 8px;
      right: 3px;
      z-index: 999;
      height: 28px;
      border-radius: 0 4px 4px 0;
    }
  }
}
</style>
