<template>
  <div style="display: flex" class="sliderWrapper">
    <div style="width: 100%">
      <div class="slidercaptcha card">
        <div class="card-body">
          <div id="captcha"></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
//@ts-ignore
import $ from "jquery";
import "@/assets/js/slider.js";
import { ElNotification } from 'element-plus'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router';
import { getTime } from '@/utils/time'
let useStore = useUserStore();
let $router = useRouter();

const emit = defineEmits();
const data = defineProps({
  telphone: String
})

const sendCode = async () => {
  try {
    await useStore.sendCode(useStore.username as string);
    ElNotification({
      type: 'success',
      message: '发送验证码成功',
      title: `欢迎来到MyBlog,${getTime()}好`,
      duration: 3000, // 通知显示时间，单位毫秒
      showClose: true // 显示关闭按钮
    })
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
      duration: 3000, // 通知显示时间，单位毫秒
      showClose: true // 显示关闭按钮
    })
  }
}

onMounted(() => {
  $("#captcha").sliderCaptcha({
    setSrc: function () {
      return 'http://uniapp.mintac.cn/images/Pic/Pic' + Math.round(Math.random() * 4) + '.jpg';
    },
    onSuccess: function () {
      emit('sendSucess');
      sendCode();
    }
  })
})

</script>
<style lang="scss">
.sliderWrapper .block {
  position: absolute;
  left: 0;
  top: 0;
}

.sliderWrapper .sliderContainer {
  position: relative;
  text-align: center;
  line-height: 40px;
  background: #f7f9fa;
  color: #45494c;
  border-radius: 2px;
}

.sliderWrapper .sliderbg {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  background-color: #f7f9fa;
  height: 40px;
  border-radius: 2px;
  border: 1px solid #e6e8eb;
}

.sliderContainer_active .slider {
  top: -1px;
  border: 1px solid #1991fa;
}

.sliderContainer_active .sliderMask {
  border-width: 1px 0 1px 1px;
}

.sliderContainer_success .slider {
  top: -1px;
  border: 1px solid #52ccba;
  background-color: #52ccba !important;
}

.sliderContainer_success .sliderMask {
  border: 1px solid #52ccba;
  border-width: 1px 0 1px 1px;
  background-color: #d2f4ef;
}

.sliderContainer_success .sliderIcon:before {
  content: "\e627";
}

.sliderContainer_fail .slider {
  top: -1px;
  border: 1px solid #f57a7a;
  background-color: #f57a7a !important;
}

.sliderContainer_fail .sliderMask {
  border: 1px solid #f57a7a;
  background-color: #fce1e1;
  border-width: 1px 0 1px 1px;
}

.sliderContainer_fail .sliderIcon:before {
  content: "\e602";
}

.sliderContainer_active .sliderText,
.sliderContainer_success .sliderText,
.sliderContainer_fail .sliderText {
  display: none;
}

.sliderMask {
  position: absolute;
  left: 0;
  top: 0;
  height: 40px;
  border: 0 solid #1991fa;
  background: #d1e9fe;
  border-radius: 2px;
}

.slider {
  position: absolute;
  top: 0;
  left: 0;
  width: 40px;
  height: 40px;
  background: #fff;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  transition: background 0.2s linear;
  border-radius: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.slider:hover {
  background: #1991fa;
}

.slider:hover .sliderIcon {
  background-position: 0 -13px;
}

.sliderText {
  position: relative;
}

/* .sliderIcon {
  } */

.sliderWrapper .refreshIcon {
  position: absolute;
  right: 0;
  top: 0;
  cursor: pointer;
  margin: 6px;
  color: #fff;
  font-size: 24px;
  z-index: 5;
  transition: color 0.1s linear;
}

.sliderWrapper .refreshIcon:hover {
  color: #F0B299;
}

.sliderWrapper .card-header:first-child {
  border-radius: calc(0.25rem - 1px) calc(0.25rem - 1px) 0 0;
}

.sliderWrapper .card-header {
  padding: 15px 25px;
  margin-bottom: 0;
  background-color: rgba(0, 0, 0, 0.03);
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  display: flex;
  justify-content: space-between;
}

.sliderWrapper .card-body {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 25px;
}

.sliderWrapper .card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  height: 280px;
}

.sliderWrapper .fa {
  font-weight: 900;
  font-family: "Font Awesome 5 Free";
  -webkit-font-smoothing: antialiased;
  display: inline-block;
  font-style: normal;
  font-variant: normal;
  text-rendering: auto;
  line-height: 1;
}</style>