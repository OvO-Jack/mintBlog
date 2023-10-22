<template>
    <input v-model="subText" type="text" placeholder="请输入你的内容">
    <button @click="submitAction">发送请求</button>
    <div class="container">
      <div v-for="(item,index) in data" :key="index">{{ item.text }}</div>
    </div>
  </template>
  <script setup lang="ts">
  import {ref,reactive,onMounted,onBeforeMount} from "vue"
  
  const data = reactive([
    {
      text:'聊天室建立'
    }
  ])
  
  const subText = ref('')
  const submitAction = () =>{
      socket.send(subText.value);
      subText.value = '';
  }
  var socket = new WebSocket("ws://localhost:3000");
  onMounted(()=>{
    socket.addEventListener('open',function(){
      data.push({
        text:'连接成功'
      })
  })
  socket.addEventListener('message',function(e){
    data.push({
        text:e.data
      })
      console.log(e.data);
      
  })
  socket.addEventListener('close',function(){
      data.push({
        text:'断开连接'
      })
  })
  })
  
  onBeforeMount(()=>{
    socket.removeEventListener('open',function(){
      data.push({
        text:'连接成功'
      })
    });
    socket.removeEventListener('message',function(e){
    data.push({
        text:e.data
      })
  });
  socket.removeEventListener('close',function(){
      data.push({
        text:'断开连接'
      })
  });
  })
  
  </script>
  <style lang="scss" scoped>
  
  
  
  
  </style>