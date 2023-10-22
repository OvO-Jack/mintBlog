<template>
    <!-- search popup area -->
    <div class="search-popup" :class="{'visible':actionStore.pop.searchPop}">
        <!-- close button -->
        <button type="button" class="btn-close" aria-label="Close" @click="closeAction"></button>
        <!-- content -->
        <div class="search-content">
            <div class="text-center">
                <h3 class="mb-4 mt-0">按ESC键可以退出</h3>
            </div>
            <!-- form -->
            <form class="d-flex search-form">
                <input class="form-control me-2" placeholder="输入你要搜寻的内容吧..." aria-label="Search" v-model="inputValue">
                <button class="btn btn-default btn-lg" @click="searchBtn"><i class="icon-magnifier"></i></button>
            </form>
        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue"
import { useRouter, useRoute } from 'vue-router';
import useBlogStore from '@/store/modules/blog'
import useActionStroe from '@/store/modules/action'
import userActionStroe from '@/store/modules/user'
let blogStore = useBlogStore();
let actionStore = useActionStroe();
let userStore = userActionStroe();
let $router = useRouter();
let $route = useRoute();
import { ElNotification } from 'element-plus'
import { ElMessage } from 'element-plus'
//@ts-ignore
import $ from 'jquery'
const closeAction = () => {
    actionStore.handlePop("searchPop",false);
}
const onKeyUp = (e:KeyboardEvent) => {
    if (e.key === "Escape") {
        actionStore.handlePop("searchPop",false);
    }
}
const inputValue = ref('');
onMounted(() => {
    document.addEventListener("keyup", onKeyUp);
})
onUnmounted(() => {
    document.removeEventListener("keyup", onKeyUp);
})
const search = async () => {
  try {
    await actionStore.searchBlog(inputValue.value);
    ElNotification({
      type: 'success',
      message: '查询成功',
      duration: 3000, // 通知显示时间，单位毫秒
      showClose: true // 显示关闭按钮
    });
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
      duration: 3000, // 通知显示时间，单位毫秒
      showClose: true // 显示关闭按钮
    });
  }
}
const searchBtn = () =>{
    search();
}

</script>
<style lang="scss" scoped></style>