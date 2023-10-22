//统一管理咱们项目用户相关的接口
import loginRequest from '@/utils/loginRequest';
import userRequest from '@/utils/userRequest'
import type {

 sendResponseData,
 checkCodeForm,
 loginForm,
 loginResponseData
} from './type'

//项目用户相关的请求地址

enum API {

 SEND_URL = 'sendSms',

 CHECKCODE_URL='checkCode',

 LOGINBYPHONE_URL = 'user/registDirectOrLogin',

 USERLOGIN_URL= 'u/user/login',

 USERIMG_URL = 'u/upload/image',

 USERINFO_URL='u/user/getUserInfoByUserId',

 USERFAN_URL = 'u/follow/getFans?userId=1'

}
//发送验证码
export const sendSms = (datas: string) =>
loginRequest.get<any, sendResponseData>(API.SEND_URL, { params: { phoneNum:datas } });

//校验验证码
export const checkCode = (datas: checkCodeForm) =>
loginRequest.get<any, sendResponseData>(`${API.CHECKCODE_URL}/${datas.phone}/${datas.code}`);

//手机号登录
export const loginByPhone = (datas: string) =>
loginRequest({
  url:API.LOGINBYPHONE_URL,
  method:'post',
  data:{
      telphone:datas
  },
  headers:{'Content-Type': 'application/x-www-form-urlencoded'}
}) as Promise<sendResponseData>;

//账号登录
export const userLogin = (datas: loginForm) =>
userRequest.post(API.USERLOGIN_URL, {
  username: datas.username,
  pwd: datas.password
}) as Promise<loginResponseData>;

//修改头像
export const userImg = (datas: any) =>
userRequest.post<any, any>(API.USERIMG_URL, datas);

//查询用户信息
export const userInfo = (datas: any) =>
userRequest.get<any, any>(API.USERINFO_URL, {params:{userId:datas}});

//粉丝
export const userFan = () =>
userRequest.get<any, any>(API.USERFAN_URL);

