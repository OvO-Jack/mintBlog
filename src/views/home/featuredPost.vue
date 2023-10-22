<template>
                <div class="post featured-post-lg">
                    <div class="details clearfix">
                        <router-link  to="/blog-single" class="category-badge">灵感来源</router-link>
                        <h2 class="post-title"><router-link to="/blog-single">悄悄告诉你们一个秘密，自己的人生其实是自己选择的，所以我不后悔，做开心的人，想开心的事</router-link></h2>
                        <ul class="meta list-inline mb-0">
                            <li class="list-inline-item"><router-link  to="/blog-single">朱古力</router-link></li>
                            <li class="list-inline-item">2023年8月28日</li>
                        </ul>
                    </div>
                    <router-link  to="/blog-single">
                        <div class="thumb rounded">
                            <div class="inner" 
                            :style="{backgroundImage:`url(http://uniapp.mintac.cn/images/posts/featured-lg.jpg)`}"></div>
                        </div>
                    </router-link>
                </div>
</template>
<script setup lang="ts">
import {ref,reactive} from "vue"




</script>
<style lang="scss" scoped>




</style>