<!-- <template>
    <div class="login_container">
        <el-row>
            <el-col :span="12" :xs="0"></el-col>
            <el-col :span="12" :xs="24">
                <el-form class="login_form">
                    <h1>Hello</h1>
                    <h2>欢迎来到朱古力的世界</h2>
                    <el-form-item>
                        <el-input :prefix-icon="User" v-model="loginForm.username"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-input type="password" :prefix-icon="Lock" v-model="loginForm.password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" size="default" @click="login">登录</el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </div>
</template>
    
<script setup lang='ts'>
import { User, Lock } from '@element-plus/icons-vue'
import { reactive, onMounted } from 'vue'
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router';
let useStore = useUserStore();
let $router = useRouter();
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
let loginForm = reactive({
    username: 'admin',
    password: '111111'
})
const login = async () => {
    try {
        await useStore.userLogin(loginForm);
        $router.push('/');
        ElNotification({
            type: 'success',
            message: '欢迎回来',
            title: `Hi,${getTime()}好`,
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
</script>
    
<style scoped lang="scss">
.login_container {
    width: 100%;
    height: 100vh;
    background: url('http://uniapp.mintac.cn/images/background.jpg') no-repeat;
    background-size: cover;

    .login_form {
        position: relative;
        width: 80%;
        top: 30vh;
        background: url('http://uniapp.mintac.cn/images/login_form.png') no-repeat;
        background-size: cover;
        padding: 40px;

        h1 {
            color: white;
            font-size: 40px;
        }

        h2 {
            font-size: 20px;
            color: #fff;
            margin: 20px 0px;
        }

        button {
            width: 100%;
        }
    }
}
</style> -->