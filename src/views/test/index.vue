<template>
  <Child :data="data" @updata="updateData"></Child>
  <button @click="fetch">发送请求获取数据给儿子</button>

  
</template>
<script setup lang="ts">
import {ref,reactive} from "vue"
import Child from './child.vue'
 const data = ref('');
const fetch = () =>{
  data.value = '123'
}
const updateData = (newdata:any) =>{
  data.value = newdata;
}
</script>
<style lang="scss" scoped>




</style>