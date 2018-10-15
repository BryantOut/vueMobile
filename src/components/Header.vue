<template>
    <mt-header :title="title" :fixed='true'>
        <router-link to="/" slot="left">
            <mt-button icon="back" v-show='isShow'>返回</mt-button>
        </router-link>
        <mt-button slot="right" @click='$router.push({"name":"Search"})'>搜索</mt-button>
    </mt-header>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  computed: {
    title () {
      return this.$store.state.title
    },
    isShow () {
      return !(this.$route.path === '/' || this.$route.path === '/index')
    }
  }
}
</script>

<style scoped>
</style>
