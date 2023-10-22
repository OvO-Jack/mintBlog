<template>
    <div>
        <!-- <Waterfall :columnCount="3" :columnGap="15" backgroundColor="#F2F4F8" /> -->
        <VueWaterfallEasy :imgsArr="imgsArr"></VueWaterfallEasy>
    </div>
</template>
<script setup lang="ts">
import Waterfall from './waterfall.vue'
import { ref, onBeforeMount,onMounted,nextTick } from 'vue'

//@ts-ignore
import VueWaterfallEasy from 'vue-waterfall-easy'


const imgsArr = ref(['http://uniapp.mintac.cn/images/posts/trending-sm-1.jpg','http://uniapp.mintac.cn/images/posts/trending-sm-1.jpg']);

onMounted(() => {
})
</script>
<style lang="less" scoped></style>