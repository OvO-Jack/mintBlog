import { createApp } from 'vue'
import App from '@/App.vue'

//引入bootstrape
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'



import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css'

import 'virtual:svg-icons-register'

//@ts-ignore忽略当前文件ts类型的检测否则有红色提示(打包会失败)
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'

import '@fortawesome/fontawesome-free/css/all.min.css';

//引入字体
import './assets/fonts/iconfont.css'
//引入文本域的css
import '@wangeditor/editor/dist/css/style.css';

import router from './router'

//路由守卫
//import './permisstion'


const app = createApp(App)

app.use(router);

app.use(ElementPlus, {
    locale: zhCn
})

//引入自定义插件对象：注册整个项目的全局组件
import globalComponent from '@/components';
//安装自定义插件
app.use(globalComponent);

import pinia from './store'
app.use(pinia);

//引入模版的全局样式 滚动条会变成绿色！
// import '@/styles/index.scss'

app.mount('#app');


