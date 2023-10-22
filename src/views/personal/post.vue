<template>
    <div class="col-sm-6">
                        <div class="post post-grid rounded bordered">
                            <div class="thumb top-rounded">
                                <a href="category.html" class="category-badge position-absolute">{{category}}</a>
                                <span class="post-format">
                                    <i class="icon-picture"></i>
                                </span>
                                <a href="blog-single.html">
                                    <div class="inner">
                                        <img :src="imageUrl" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div class="details">
                                <ul class="meta list-inline mb-0">
                                    <li class="list-inline-item"><a href="#"><img src="http://uniapp.mintac.cn/images/other/author-sm.png" class="author" alt="author"/>Katen Doe</a></li>
                                    <li class="list-inline-item">{{date}}</li>
                                </ul>
                                <h5 class="post-title mb-3 mt-3 title-ellipsis"><a href="blog-single.html">{{title}}</a></h5>
                                <p class="excerpt mb-0 text-ellipsis">{{ text }}</p>
                            </div>
                            <BlogAction></BlogAction>
                        </div>
                    </div>
</template>
<script setup lang="ts">
import {ref,reactive} from "vue"
defineProps({
    title:{
        type:String,
        default:'这是你文章的标题'
    },
    text:{
        type:String,
        default:'这是你文章的正文'
    },
    category:{
        type:String
    },
    writter:{
        type:String,
        default:'朱古力'
    },
    date:{
        type:String,
        default:'2023年8月18日'
    },
    imageUrl:String
})



</script>
<style lang="scss" scoped>
.title-ellipsis {    
  overflow: hidden;            /* 隐藏超出部分 */
  text-overflow: ellipsis;     /* 使用省略号代替 */
  display: -webkit-box;        /* 将文本作为一个弹性盒子显示 */
  -webkit-line-clamp: 1;       /* 设置文本行数，这里是三行 */
  -webkit-box-orient: vertical; /* 垂直方向显示 */
}

.text-ellipsis {    
  overflow: hidden;            /* 隐藏超出部分 */
  text-overflow: ellipsis;     /* 使用省略号代替 */
  display: -webkit-box;        /* 将文本作为一个弹性盒子显示 */
  -webkit-line-clamp: 3;       /* 设置文本行数，这里是三行 */
  -webkit-box-orient: vertical; /* 垂直方向显示 */
}


</style>