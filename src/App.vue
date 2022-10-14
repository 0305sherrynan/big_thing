<template>
  <div><el-button>123</el-button></div>
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
