<template>
    <div class="container-xl header-top">
        <div class="row align-items-center">

            <div class="col-4 d-none d-md-block d-lg-block">
                <!-- site logo -->
                <router-link class="navbar-brand" to="/"><img src="@/assets/images/logo.png" alt="logo" /></router-link>
            </div>

            <div class="col-md-4 col-sm-12 col-xs-12 text-center">
                <!-- site logo -->
                <router-link class="navbar-brand" to="/personal"><el-avatar size="default" :src="userInfo.avatar"
                        alt="logo" /></router-link>
                <router-link to="/personal" class="d-block text-logo">{{userInfo.username}}<span class="dot">.</span></router-link>
                <span class="slogan d-block">个性签名：生活会好的吧</span>
            </div>

            <div class="col-md-4 col-sm-12 col-xs-12">
                <!-- header buttons -->
                <div class="header-buttons float-md-end mt-4 mt-md-0">
                    <button class="search icon-button me-2" @click="editAction">
                        <i class="icon-note"></i>
                    </button>
                    <button class="search icon-button me-2" @click="searchAction">
                        <i class="icon-magnifier"></i>
                    </button>
                    <button class="search icon-button me-2" @click="userAction">
                        <i class="icon-settings"></i>
                    </button>
                    <button class="burger-menu icon-button" @click="menuAction">
                        <span class="burger-icon"></span>
                    </button>
                </div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue"
import { GET_USERID } from "@/utils/userid";
import useUserStore from "@/store/modules/user";
let userStroe = useUserStore();
import useActionStroe from '@/store/modules/action'
let actionStore = useActionStroe();
//@ts-ignore
import $ from 'jquery'
const editAction = () => {
    actionStore.handlePop("editPop",true);
}
//控制编辑框
const userAction = () => {
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

const userInfo = reactive({
    avatar: 'http://uniapp.mintac.cn/images/other/avatar-lg.png',
    username:"朱古力ovo",
})
onMounted(() => {
    $(".vertical-menu li i.switch").on('click', (event: MouseEvent) => {
        var $submenu = $(event.currentTarget).next(".submenu");
        $submenu.slideToggle(300);
        $submenu.parent().toggleClass("openmenu");
    });

    //如果用户登陆了渲染用户信息
    if (GET_USERID()) {
        // 获取 store 中的全部状态数据
        const allStateData = userStroe.$state;
        // 将全部状态数据赋值给 userInfo 对象
        //重点！
        Object.assign(userInfo, allStateData);
        console.log(userInfo);
        //如果用户头像未设置
        if(userInfo.avatar == null){
            userInfo.avatar='http://uniapp.mintac.cn/images/other/avatar-lg.png'
        }
        //如果用户名字未设置
        if(userInfo.username == ''){
            userInfo.username='朱古力ovo'
        }
    }
})


</script>
<style lang="scss" scoped></style>