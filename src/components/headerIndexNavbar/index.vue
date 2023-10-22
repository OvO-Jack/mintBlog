<template>
    <header class="header-default">
        <nav class="navbar navbar-expand-lg">
            <div class="container-xl">
                <!-- site logo -->
                <router-link class="navbar-brand" to="/"><img src="http://uniapp.mintac.cn/images/logo.png" alt="logo" /></router-link>

                <div class="collapse navbar-collapse">
                    <!-- menus -->
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown active">
                            <router-link class="nav-link dropdown-toggle" to="/home">首页</router-link>
                            <ul class="dropdown-menu">
                                <li><router-link class="dropdown-item" to="/home">最新文章</router-link></li>
                                <li><router-link class="dropdown-item" to="/classic">每日推荐</router-link></li>
                                <li><router-link class="dropdown-item" to="/personal">热门文章</router-link></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link class="nav-link dropdown-toggle" to="/home">个人中心</router-link>
                            <ul class="dropdown-menu">
                                <li><router-link class="dropdown-item" :to="{path:'/personal',query:{id:userStore.userid}}">我的主页</router-link></li>
                                <li><router-link class="dropdown-item" to="/personal-alt">我的私信</router-link></li>
                                <li><router-link class="dropdown-item" to="/personal-alt">我的关注</router-link></li>
                                <li><router-link class="dropdown-item" to="/personal-alt">我的粉丝</router-link></li>
                                <li><router-link class="dropdown-item" to="/personal-alt">我的赞</router-link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">关于我们</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link class="nav-link dropdown-toggle" to="/home">测试专用</router-link>
                            <ul class="dropdown-menu">
                                <li><router-link class="dropdown-item" :to="{path:'/blog-single',query:{id:14}}">blog</router-link></li>
                                <li><router-link class="dropdown-item" to="/blog-single-alt">blog-single-alt</router-link></li>
                                <li><router-link class="dropdown-item" to="/minimal">minimal</router-link></li>
                                <li><router-link class="dropdown-item" to="/category">category</router-link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                        <router-link class="nav-link" to="/contact">联系我们</router-link>
                    </li>
                    </ul>
                </div>

                <!-- header right section -->
                <div class="header-right d-flex justify-content-center">
                    <!-- 登录 -->
                    <IconList></IconList>
                    <!-- header buttons -->
                    <div class="header-buttons">
                        <button class="editBtn icon-button" @click="editAction">
                            <i class="icon-note"></i>
                        </button>
                        <button class="searchBtn icon-button" @click="searchAction">
                            <i class="icon-magnifier"></i>
                        </button>
                        <button class="userBtn icon-button " @click="userAction">
                            <i class="icon-settings"></i>
                        </button>
                        <button class="burger-menu icon-button" @click="menuAction">
                            <span class="burger-icon"></span>
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted } from "vue"
import IconList from "./iconList.vue";
//@ts-ignore
import $ from 'jquery'
import { ElNotification } from 'element-plus'
import { useRouter, useRoute } from 'vue-router';
import useBlogStore from '@/store/modules/blog'
import useActionStroe from '@/store/modules/action'
import userActionStroe from '@/store/modules/user'
let blogStore = useBlogStore();
let actionStore = useActionStroe();
let userStore = userActionStroe();
let $router = useRouter();
let $route = useRoute();
//控制头部导航条跟随屏幕
const handleScroll = () => {
    const fromTop = window.scrollY;
    $('body').toggleClass("down", (fromTop > 300));
    
}
//控制编辑框
const editAction = ()=>{
    actionStore.handlePop("editPop",true);
}
//控制用户框
const userAction = ()=>{
    actionStore.handlePop("userPop",true);
}
//控制搜索弹出层
const searchAction = () => {
    actionStore.handlePop("searchPop",true);
}
//控制右侧点击菜单弹出
const menuAction = () => {
    $(".canvas-menu").toggleClass("open");
    $(".main-overlay").toggleClass("active");
}
onMounted(() => {
    var $header = $(".header-default, .header-personal nav, .header-classic .header-bottom"),
        $clone = $header.before($header.clone().addClass("clone"));
        $('.clone .social-icons').hide();
    //克隆后的搜索按钮和菜单canvas
    $(".clone .searchBtn").on('click', function () {
        actionStore.handlePop("searchPop",true);
    });
    $(".clone .editBtn").on('click', function () {
        actionStore.handlePop("editPop",true);
    });
    $(".clone .userBtn").on('click', function () {
        actionStore.handlePop("userPop",true);
    });
    $(".clone .burger-menu").on('click', function () {
        $(".canvas-menu").toggleClass("open");
        $(".main-overlay").toggleClass("active");
    });

    window.addEventListener('scroll', handleScroll);

    $(".submenu").before('<i class="icon-arrow-down switch"></i>');

    //控制菜单
    $(".vertical-menu li i.switch").on('click', (event: MouseEvent)=> {
        var $submenu = $(event.currentTarget).next(".submenu");
        $submenu.slideToggle(300);
        $submenu.parent().toggleClass("openmenu");
    });

})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})


</script>
<style lang="scss" scoped>
.header-right{
    line-height: 37px;
}
</style>