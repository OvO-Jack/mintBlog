import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
let $router = useRouter();
import { addComment,showComment,uploadImg,addBlog,searchBlog,deleteBlog } from '@/api/action';
//引入接口

//引入数据类型

import type { ActionState } from './types/type'
let useActionStore = defineStore('Action', {
    state: (): ActionState => {
        return {
            commentDatas:[],
            uploadImage:'',
            searchDatas:[],
            pop:{
                editPop:false,
                searchPop:false,
                userPop:false
            }
        }
    },
    actions: {
        //添加评论
        async addComment(data: any) {
            let result: any = await addComment(data);
            console.log(result);
            if (result.code == 200200) {
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //展示评论
        async showComment(data: any) {
            let result: any = await showComment(data);
            console.log(result);
            if (result.code == 200200) {
                this.commentDatas = result.data
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //上传文章图片
        async uploadImg(data: any) {
            let result: any = await uploadImg(data);
            console.log(result);
            if (result.code == 200200) {
                this.uploadImage = result.data
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //添加一个博客
        async addBlog(data: any) {
            let result: any = await addBlog(data);
            console.log(result);
            if (result.code == 200200) {
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //查询
        async deleteBlog(data: any) {
            let result: any = await deleteBlog(data);
            console.log(result);
            if (result.code == 200200) {
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //删除博客
        async searchBlog(data: any) {
            let result: any = await searchBlog(data);
            console.log(result);
            if (result.code == 200200) {
                this.searchDatas = result.data
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        handlePop(changePop:string,datas:boolean){
            this.pop[changePop] = datas;
        }
    },
    getters: {
    }
})

export default useActionStore;