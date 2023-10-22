<template>
  <div class="post-bottom d-flex align-items-center" :class="{ 'justify-content-between': !iconsVisible, 'justify-content-end': iconsVisible }">
    <div class="more-button" v-if="!iconsVisible">
      <a @click="likeAction"><span :class="{ 'iconfont icon-dianzan': !like, 'iconfont icon-dianzan_kuai': like }"></span></a>
      <span>{{datas.like}}</span>
    </div>
    <div class="more-button" v-if="!iconsVisible">
      <router-link to="/blog-single"><span class="iconfont icon-review"></span></router-link>
      <span>{{datas.comment}}</span>
    </div>
    <div class="d-flex align-items-center">
      <ul class="list-unstyled list-inline mb-0 float-end ms-auto"  v-if="iconsVisible" id="icons">
        <li class="list-inline-item"><router-link to="/"><i class="iconfont icon-qqdenglu"></i></router-link></li>
        <li class="list-inline-item"><router-link to="/"><i class="iconfont icon-weixindenglu
"></i></router-link></li>
        <li class="list-inline-item"><router-link to="/"><i class="iconfont icon-youjianfenlei
"></i></router-link></li>
<li class="list-inline-item"><router-link to="/"><i class="iconfont icon-bianjisekuai

"></i></router-link></li>
<li class="list-inline-item"><a href="JavaScript:void(0);"><i class="iconfont icon-shanchusekuai
" @click="deleteBlog"></i></a></li>
      </ul>
    <div class="social-share">
      <button class="toggle-button icon-options" @click="toggleIcons"></button>
    </div>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import { ElNotification } from 'element-plus'
import { reactive, ref ,onMounted} from 'vue';
import { useRouter, useRoute } from 'vue-router';
import useBlogStore from '@/store/modules/blog'
import useActionStroe from '@/store/modules/action'
import userActionStroe from '@/store/modules/user'
let blogStore = useBlogStore();
let actionStore = useActionStroe();
let userStore = userActionStroe();
let $router = useRouter();
let $route = useRoute();
const iconsVisible = ref(false);

const like = ref(false);

const datas = reactive({
  like:0,
  comment:0
})

let receiveDatas =  defineProps({
  likeNum:{
    type:Number,
    default:0
  },
  comment:{
    type:Number,
    default:0
  },
  blogId:Number
})
onMounted(()=>{
  datas.like = receiveDatas.likeNum;
  datas.comment = receiveDatas.comment;
})

const likeAction = () =>{
  like.value = !like.value;
  if(like.value == true){
    datas.like++;
  }else{
    datas.like--;
  }
}

//删除博客
const deleteBlog = async () => {
    try {
        await actionStore.deleteBlog(receiveDatas.blogId);
        ElNotification({
            type: 'success',
            message: '删除文章成功！',
            duration: 2000,
            showClose: true,
        });
        toggleIcons()
    } catch (error) {
        ElNotification({
            type: 'error',
            message: '删除文章失败',
            duration: 3000, // 通知显示时间，单位毫秒
            showClose: true // 显示关闭按钮
        })
        toggleIcons()
    }
}



const toggleIcons = () => {
  iconsVisible.value = !iconsVisible.value;
};

</script>
<style lang="scss" scoped>
.icon-dianzan_kuai{
  color:#FE4F70;
}
.list-unstyled{
  a{
    color : #ccc;
  }
  a:hover{
    color:#FE4F70;
  }
}
</style>