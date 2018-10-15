<template>
    <mt-tabbar :fixed='true'>
        <mt-tab-item id="外卖">
            <router-link to='/index' exact>
                <span class="myicon myicon-user" style="display:block"></span> 外卖
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="订单">
            <router-link to='/category' exact>
                <span class="myicon myicon-user" style="display:block"></span> 订单
            </router-link>
        </mt-tab-item>
        <mt-tab-item id="发现" exact>
            <span class="myicon myicon-user" style="display:block"></span> 发现
        </mt-tab-item>
        <mt-tab-item id="我的" exact>
            <span class="myicon myicon-user" style="display:block"></span> 我的
        </mt-tab-item>
    </mt-tabbar>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style scoped lang='scss'>
.isActive{
    color: #0094FF;
}
</style>
