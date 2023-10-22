<template>
    <ul class="social-icons list-unstyled list-inline mb-0">
        <span>
            <router-link to="/login" v-if="loginShow">登录</router-link>
        </span>
        <span v-if="!loginShow">
            <el-popover :width="300"
                popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;">
                <template #reference>
                    <el-avatar v-if="!useStore.avatar" > {{useStore.username}} </el-avatar>
                    <el-avatar v-if="useStore.avatar" :src="useStore.avatar"> </el-avatar>
                </template>
                <template #default>
                    <p class="d-flex justify-content-center">{{useStore.username}}</p>
                    <div class="d-flex justify-content-center"><button class="btn btn-default btn-lg" @click="loginOut">退出登录</button></div>
                </template>
            </el-popover>
        </span>
    </ul>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import { GET_USERID,REMOVE_USERID } from '@/utils/userid'

import { useRouter } from 'vue-router';
let $router = useRouter();
import useUserStore from '@/store/modules/user'
let useStore = useUserStore();



const loginShow = ref(true);
onMounted(() => {
    if (GET_USERID()) {
        //用户登录 展示
        loginShow.value = false;
    }else{
        loginShow.value = true;
    }
    
})

const loginOut = () =>{
    useStore.loginOut();
    $router.push('/');
    loginShow.value = true;
}



</script>
<style lang="scss" scoped></style>