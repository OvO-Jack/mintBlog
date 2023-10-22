<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-xl">
            
            <div class="collapse navbar-collapse justify-content-center centered-nav">
                <!-- menus -->
                <ul class="navbar-nav">
                        <li class="nav-item dropdown active">
                            <router-link class="nav-link dropdown-toggle" to="/home">首页</router-link>
                            <ul class="dropdown-menu">
                                <li><router-link class="dropdown-item" to="/home">热门话题</router-link></li>
                                <li><router-link class="dropdown-item" to="/home">附近的人</router-link></li>
                                <li><router-link class="dropdown-item" to="/personal">热门榜单</router-link></li>
                                <li><router-link class="dropdown-item" to="/personal">热搜榜</router-link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/classic">推荐</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <router-link class="nav-link dropdown-toggle" to="/home">个人中心</router-link>
                            <ul class="dropdown-menu">
                                <li><router-link class="dropdown-item" to="/personal">我的主页</router-link></li>
                                <li><router-link class="dropdown-item" to="/personal-alt">我的私信</router-link></li>
                                <li><router-link class="dropdown-item" to="/personal-alt">我的关注</router-link></li>
                                <li><router-link class="dropdown-item" to="/personal-alt">我的粉丝</router-link></li>
                                <li><router-link class="dropdown-item" to="/personal-alt">我的赞</router-link></li>
                                <li><router-link class="dropdown-item" to="/personal-alt">个人介绍</router-link></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">关于我们</router-link>
                        </li>
                        <router-link class="nav-link" to="/contact">联系我们</router-link>
                    </ul>
            </div>

        </div>
    </nav>
</template>
<script setup lang="ts">
import {ref,reactive,onMounted,onUnmounted} from "vue"
//@ts-ignore
import $ from 'jquery'
const handleScroll = ()=>{
        const fromTop = window.scrollY;
        $('body').toggleClass("down", (fromTop > 300));
    }
onMounted(() => {
    var $header = $(".header-default, .header-personal nav, .header-classic .header-bottom"),
    $clone = $header.before($header.clone().addClass("clone"));

    window.addEventListener('scroll', handleScroll);

})
onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
})


</script>
<style lang="scss" scoped>




</style>