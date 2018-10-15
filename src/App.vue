<template>
  <div id="app">
    <!-- 顶部 -->
    <Header></Header>
    <!-- 内容 -->
    <Content></Content>
    <!-- 底部 -->
    <Footer></Footer>

  </div>
</template>

<script>
import Header from './components/Header.vue'
import Content from './components/Content.vue'
import Footer from './components/Footer.vue'
export default {
  name: 'App',
  data () {
    return {
      isShow: false
    }
  },
  components: { Header, Content, Footer },
  created () {
    if (this.$route.path === '/' || this.$route.path === '/index') {
      this.isShow = false
    }
  }
}
</script>

<style scoped lang='scss'>
#app {
    margin-top:40px;
    margin-bottom: 66px;
}
</style>
