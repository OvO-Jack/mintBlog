import { defineStore } from 'pinia'
import { useRouter } from 'vue-router';
let $router = useRouter();
import { getBlogData,getMyBlogData,getCurrentBlogData } from '@/api/blog';
//引入接口

//引入数据类型

import type { BlogState } from './types/type'
let useBlogStore = defineStore('Blog', {
    state: (): BlogState => {
        return {
            blogInfo:{
                "id": 14,
                "title": "",
                "content": "",
                "updatedAt": "",
                "createdAt": "",
                "visitCount": null,
                "likeCount": null,
                "isLike": "",
                "typeId": null,
                "userId": null,
                "tagId": null,
                "imageUrl": "",
                "introduction": null,
                "tagName":''
            },
            myBlogDatas:[],
            currentBlogDatas:{}
        }
    },
    actions: {
        //获取博客
        async getBlogDatas(data: string) {
            let result: any = await getBlogData(data);
            if (result.code == 200200) {
                this.blogInfo = result.data.blog;
                this.blogInfo.tagName = result.data.tagName;
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //获取我的博客
        async getMyBlogDatas(data: any) {
            let result:any = await getMyBlogData(data);
            console.log(result);
            if (result.code == 200200) {
                this.myBlogDatas = result.data
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
        //首页最新文章
        async getCurrentBlogDatas() {
            let result: any = await getCurrentBlogData();
            if (result.code == 200200) {
                this.currentBlogDatas = result.data
                return 'ok';
            } else {
                return Promise.reject(new Error(result.message))
            }
        },
    },
    getters: {
    }
})

export default useBlogStore;