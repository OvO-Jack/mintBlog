//封装本地存储存储数据与读取数据方法
//存储数据
export const SET_USERID = (userid: string) => {
  localStorage.setItem('userid', userid)
}
//本地存储获取数据
export const GET_USERID = () => {
  return localStorage.getItem('userid') as string;
}
//本地存储删除数据方法
export const REMOVE_USERID = () => {
  localStorage.removeItem('userid')
}
