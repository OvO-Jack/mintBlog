<template>
    <div class="padding-30 rounded bordered">
        <div>
            <div class="thumb rounded">
                        <span class="post-format-sm">
                            <i class="icon-picture"></i>
                        </span>
                        <router-link to="#">
                            <div class="inner">
                                <img src="http://uniapp.mintac.cn/2023/10/134f6acf810cfb461ebd9c7211b619973b.jpg" alt="post-title" />
                            </div>
                        </router-link>
                    </div>
        </div>
        
        <!-- <div class="row">

            <div class="col-md-12 col-sm-6" v-for="(item, index) in blogStore.currentBlogDatas" :key="index">
                <div class="post post-list clearfix">
                    <div class="thumb rounded">
                        <span class="post-format-sm">
                            <i class="icon-picture"></i>
                        </span>
                        <router-link :to="{path:'/blog-single',query:{id:item.id}}">
                            <div class="inner">
                                <img :src="item.imageUrl" alt="post-title" />
                            </div>
                        </router-link>
                    </div>
                    <div class="details">
                        <ul class="meta list-inline mb-3">
                            <li class="list-inline-item"><router-link :to="{path:'/personal',query:{id:item.userId}}"><img
                                        src="http://uniapp.mintac.cn/images/other/author-sm.png" class="author"
                                        alt="author" />朱古力ovo</router-link></li>
                            <li class="list-inline-item"><a href="#">生活</a></li>
                            <li class="list-inline-item">{{item.createdAt}}</li>
                        </ul>
                        <h5 class="post-title"><a href="blog-single.html">{{ item.title }}</a></h5>
                        <p class="excerpt mb-0">{{ item.content }}</p>
                        <BlogAction :likeNum="item.likeCount" :blogId="item.id"></BlogAction>
                    </div>
                </div>
            </div>

        </div> -->
        <!-- load more button -->
        <div class="text-center">
            <button class="btn btn-simple">Load More</button>
        </div>

    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { useRouter, useRoute } from 'vue-router';
import useBlogStore from '@/store/modules/blog'
import useActionStroe from '@/store/modules/action'
import userActionStroe from '@/store/modules/user'
let blogStore = useBlogStore();
let actionStore = useActionStroe();
let userStore = userActionStroe();
let $router = useRouter();
let $route = useRoute();

onMounted(() => {
    blogStore.getCurrentBlogDatas();
})


</script>
<style lang="scss" scoped></style>