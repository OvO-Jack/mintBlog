import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
let $router = useRouter();
//引入接口
import { sendSms, checkCode, loginByPhone, userLogin, userImg,userInfo,userFan } from '@/api/user'
//引入数据类型
import type { loginForm, loginResponseData, sendResponseData, checkCodeForm } from '@/api/user/type'
import { SET_USERID, GET_USERID, REMOVE_USERID } from '@/utils/userid'
import type { UserState } from './types/type'
let useUserStore = defineStore('User', {
    state: (): UserState => {
        return {
            userid: GET_USERID(),
            username: '',
            role: '',
            sex: null,
            mobile: null,
            description: null,
            updatedAt: null,
            createdAt: null,
            avatar: null,
        }
    },
    actions: {
        //用户登录
        async userLogin(data: loginForm) {
            let result: any = await userLogin(data);

            const userId = result.data.id.toString() as string;
            if (result.code == 200200) {
                this.userid = userId;
                this.role = result.data.role;
                this.sex = result.data.sex;
                this.mobile = result.data.mobile;
                this.description = result.data.description;
                this.updatedAt = result.data.updatedAt;
                this.createdAt = result.data.createdAt;
                this.username = result.data.username;
                this.avatar = result.data.avatar
                SET_USERID(userId);
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //发送验证码
        async sendCode(data: string) {
            let result: sendResponseData = await sendSms(data);
            console.log(result);
            if (result.code == 200200) {
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        changeUsername(data: string) {
            this.username = data;
        },
        //校验验证码
        async checkCode(data: checkCodeForm) {
            let result: sendResponseData = await checkCode(data);
            console.log(result);
            if (result.code == 200200) {
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //手机号登录
        async loginByPhone(data: string) {
            let result: sendResponseData = await loginByPhone(data);
            console.log(result.code);
            if (result.code == 200200 || 200400) {
                localStorage.setItem('userid','2');
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //退出登录
        loginOut() {
            REMOVE_USERID();
            this.userid = undefined;
            this.role = undefined;
            this.sex = null;
            this.mobile = null;
            this.description = null;
            this.updatedAt = null;
            this.createdAt = null;
            this.username = undefined;
            this.avatar = null

        },
        //修改用户头像(为定义数据类型)
        async userChangeImg(data: any) {
            let result: any = await userImg(data);
            console.log(result);
            if (result.code == 200200) {
                this.avatar = result.data;
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //获取用户信息
        async userInfo(data: any) {
            let result: any = await userInfo(data);
            const userId = result.data.id.toString() as string;
            if (result.code == 200200) {
                this.userid = userId;
                this.role = result.data.role;
                this.sex = result.data.sex;
                this.mobile = result.data.mobile;
                this.description = result.data.description;
                this.updatedAt = result.data.updatedAt;
                this.createdAt = result.data.createdAt;
                this.username = result.data.username;
                this.avatar = result.data.avatar
                SET_USERID(userId);
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        userFan(){
            let result : any = userFan();
            console.log(result);
        }
    },
    getters: {

    }
})

export default useUserStore;