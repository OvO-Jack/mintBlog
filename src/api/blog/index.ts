//统一管理咱们项目用户相关的接口
import BlogRequest from '@/utils/blogRequest';
import userRequest from '@/utils/userRequest';
import type {
    
} from './type'

//项目用户相关的请求地址

enum API {

    BLOGSINGLE_URL = 'b/blog/getBlogById',

    MYBLOG_URL='b/blog/getBlogsByUserId',

    CURRENTBLOG_URL='b/blog/latest'
}

//获取博客详情
export const getBlogData = (datas: string) =>
BlogRequest.get<any, any>(API.BLOGSINGLE_URL, { params: { id:datas } });

//个人主页
export const getMyBlogData = (datas: any) =>
BlogRequest.get<any, any>(API.MYBLOG_URL, { params: { userId:datas.userId,current:datas.current,limit:datas.limit} });

//首页最新文章数据
export const getCurrentBlogData = () =>
BlogRequest.get<any, any>(API.CURRENTBLOG_URL);

