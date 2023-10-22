<template>
  <HeaderNavbar></HeaderNavbar>
  <div class="demo form-bg">
    <div class="container wrapper">
      <div class="row justify-content-center align-content-center">
        <div class="col-md-offset-4 col-md-4 col-sm-offset-3 col-sm-6">
          <form class="form-horizontal">
            <div class="heading">{{ formType === 'loginAccount' ? '账号登录' : '手机号登录' }}</div>
            <div class="form-group">
              <i class="fa fa-user"></i><input v-model="formData.username" required name="login[username]" type="email"
                class="form-control" :placeholder="formType === 'loginAccount' ? '账号' : '手机号'" id="exampleInputEmail1" />
              <button @click.prevent="sendAction" :disabled="sendCodeState" type="submit" class="btn btn-default"
                id="sendBtn" v-show="formType === 'loginAccount' ? false : true">
                {{ sendCodeState ? `${countdown} 秒后重发` : '发送验证码' }}
              </button>

            </div>
            <div class="form-group">
              <i class="fa fa-lock"></i><input v-model="formData.password" required name="login[password]"
                :type="formType == 'loginAccount' ? 'password' : 'text'" class="form-control"
                :placeholder="formType === 'loginAccount' ? '密码' : '验证码'" />

            </div>
            <div class="form-group">
              <button @click.prevent="submitForm" type="submit" class="btn btn-default">
                <i class="fa fa-arrow-right"></i>
              </button>
              <span>
                {{ formType === 'loginAccount' ? "账号忘记了？" : '手机不在身边？' }}
                <a href="#" class="create_account" @click.prevent="toggleForm">{{ formType === 'loginAccount' ? '前往手机号登录'
                  : '前往账号登录' }}</a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="mark" v-show="sliderShow">
    <div class="block">
      <div class="card-header">
        <span>请完成安全验证</span>
        <span @click="sliderShow = false">
          <i class="iconfont icon-cuowu closeBtn"></i></span>
      </div>
      <Slider @sendSucess="receiveSendState" />
    </div>
  </div>
</template>
<script setup lang="ts">
import '@/assets/css/all.min.css'
import '@/assets/css/simple-line-icons.css'
import '@/assets/css/style.css'
import '@/assets/css/slick.css'
import Slider from './slider.vue'
import { ref, reactive } from "vue"
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router';
let useStore = useUserStore();
let $router = useRouter();
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
//验证码
const sendCodeState = ref(false);
const receiveSendState = () => {
  sendCodeState.value = true;
  sliderShow.value = false;
  startCountdown();
  useStore.changeUsername(formData.username);
}

let countdown = ref(60);

const startCountdown = () => {
  countdown.value = 60;
  const interval = setInterval(() => {
    countdown.value--;
    if (countdown.value === 0) {
      sendCodeState.value = false;
      countdown.value = 60;
      clearInterval(interval);
    }
  }, 1000);
};

const sliderShow = ref(false);

const formType = ref("loginAccount");
const formData = reactive({
  username: "haoren",
  password: "123456"
});

const toggleForm = () => {
  formType.value = formType.value === "loginAccount" ? "loginPhone" : "loginAccount";
  formData.username = "";
  formData.password = "";
};

const sendAction = () => {
  alert("123")
  sliderShow.value = !sliderShow.value;
}

//校验验证码
const checkCode = async () => {
  try {
    await useStore.checkCode({
      phone: formData.username,
      code: formData.password
    });
    ElNotification({
      type: 'success',
      message: '验证码正确',
      title: `欢迎来到MyBlog,${getTime()}好`,
      duration: 3000, // 通知显示时间，单位毫秒
      showClose: true // 显示关闭按钮
    });
    try {
      await useStore.loginByPhone(formData.username);
      ElNotification({
        type: 'success',
        message: '登录成功',
        title: `欢迎来到MyBlog,${getTime()}好`,
        duration: 3000, // 通知显示时间，单位毫秒
        showClose: true // 显示关闭按钮
      });
      $router.push('/');
    } catch (error) {
      ElNotification({
        type: 'error',
        message: (error as Error).message,
        duration: 3000, // 通知显示时间，单位毫秒
        showClose: true // 显示关闭按钮
      })
    }
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
      duration: 3000, // 通知显示时间，单位毫秒
      showClose: true // 显示关闭按钮
    })
  }
}

//用户登录模块
const userLogin = async () => {
  try {
    await useStore.userLogin({
      username: formData.username,
      password: formData.password
    });
    ElNotification({
      type: 'success',
      message: '登录成功！',
      title: `欢迎来到MyBlog,${getTime()}好`,
      duration: 2000, 
      showClose: true,
    });
    $router.push('/');
  } catch (error) {

    ElNotification({
      type: 'error',
      message: '密码或账号错误，请重试',
      duration: 3000, // 通知显示时间，单位毫秒
      showClose: true // 显示关闭按钮
    })
  }
}
const submitForm = () => {
  if (formType.value == "loginPhone") {
    checkCode();
  } else if (formType.value == "loginAccount") {
    userLogin();
  }
};


</script>
<style lang="scss" scoped>
/* 调整滑动验证组件的样式 */
.slider-container {
  margin-top: 20px;
  margin-bottom: 30px;
}

:deep(.submitWrapper .van-button) {
  background: #F0B299;
  color: #fff;
  font-size: 14px;
  border: 1px solid #F0B299;
}

.mark {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .2);
}

.mark .card-header {
  padding: 15px 25px !important;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  justify-content: space-between;
}

.block {
  border-radius: 10px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
}

.closeBtn:hover {
  color: #F0B299;
}

#sendBtn {
  width: 100px !important;
  font-size: 14px;
  margin: 0;
  height: 40px;
  padding: 0;
  position: absolute;
  right: 0;
  display: inline;
}

.navbar-expand-lg {
  background: url('http://uniapp.mintac.cn/images/loginBackground.jpg');
  background-size: cover;
}

.wrapper {
  margin-top: 100px;
}

.demo {
  padding: 20px 0;
  background: url('http://uniapp.mintac.cn/images/loginBackground.jpg');
  height: calc(100vh - 38px);
  width: 100%;
  background-size: cover;
}

.form-horizontal {
  background-color: #fff;
  font-family: 'Arimo', sans-serif;
  text-align: center;
  padding: 50px 30px 50px;
  box-shadow: 12px 12px 0 0 rgba(0, 0, 0, 0.3);
}

.form-horizontal .heading {
  color: #555;
  font-size: 30px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: capitalize;
  margin: 0 0 50px 0;
}

.form-horizontal .form-group {
  margin: 0 auto 30px;
  position: relative;
}

.form-horizontal .form-group:nth-last-child(2) {
  margin-bottom: 20px;
}

.form-horizontal .form-group:last-child {
  margin: 0;
}

.form-horizontal .form-group>i {
  color: #999;
  transform: translateY(-50%);
  position: absolute;
  left: 5px;
  top: 50%;
}

.form-horizontal .form-control {
  color: #7AB6B6;
  background-color: #fff;
  font-size: 17px;
  letter-spacing: 1px;
  height: 40px;
  padding: 5px 10px 2px 25px;
  box-shadow: 0 0 0 0 transparent;
  border: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 0;
  display: inline-block;
}

.form-control::placeholder {
  color: rgba(0, 0, 0, 0.2);
  font-size: 16px;
}

.form-horizontal .form-control:focus {
  border-bottom: 1px solid #999;
  box-shadow: none;
}

.form-horizontal .btn {
  color: #e6e8eb;
  background-color: #EDF6F5;
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 5px;
  width: 50%;
  height: 45px;
  padding: 7px 30px;
  margin: 0 auto 25px;
  border: none;
  display: block;
  position: relative;
  transition: all 0.3s ease;
}

.form-horizontal .btn:focus,
.form-horizontal .btn:hover {
  color: #fff;
  background-color: #7AB6B6;
}

.form-horizontal .btn:before,
.form-horizontal .btn:after {
  content: '';
  background-color: #e6e8eb;
  height: 50%;
  width: 2px;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: 1;
  transition: all 0.3s;
}

.form-horizontal .btn:after {
  bottom: auto;
  top: 0;
  left: auto;
  right: 0;
}

.form-horizontal .btn:hover:before,
.form-horizontal .btn:hover:after {
  height: 100%;
  width: 50%;
  opacity: 0;
}

.form-horizontal .create_account {
  color: #D6BC8B;
  font-size: 16px;
  font-weight: 600;
  display: inline-block;
}

.form-horizontal .create_account:hover {
  color: #7AB6B6;
  text-decoration: none;
}
</style>