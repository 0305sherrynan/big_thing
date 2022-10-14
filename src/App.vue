<template>
<!-- 一级路由规则对象组件的挂载点 -->
  <div><router-view></router-view></div>
</template>
<script>
import { getListAPI } from '@/api/index.js'
export default {
  async created () {
    const res = await getListAPI()
    console.log(res)
  }
}
</script>
<style  scoped>

</style>
