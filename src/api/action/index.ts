//统一管理咱们项目用户相关的接口
import UserRequest from '@/utils/userRequest';
import BlogRequest from '@/utils/blogRequest'
import type {
    
} from './type'


//项目用户相关的请求地址

enum API {

    COMMENTADD_URL = 'c/comment/add',

    COMMENTSHOW_URL = 'c/comment/showCommentDataByBlogId',

    UPLOADIMG_URL='b/upload/image',

    ADDBLOG_URL='b/blog/addBlog',

    SEARCH_URL='b/blog/getBlogsByTitle',

    DELETE_URL='b/blog/deleteBlog'
}

//添加评论
export const addComment = (datas: any) =>
UserRequest.post<any, any>(API.COMMENTADD_URL, datas);

//展示评论
export const showComment = (datas: any) =>
UserRequest.get<any, any>(`${API.COMMENTSHOW_URL}/${datas}`);

//写文章上传图片
export const uploadImg = (datas: any) =>
BlogRequest.post<any, any>(API.UPLOADIMG_URL, datas);


//添加文章
export const addBlog = (datas: any) =>
BlogRequest<any, any>({
    url:API.ADDBLOG_URL,
    method:'post',
    data:datas.post,
    params: {userId : datas.userId}
});

//删除博客
export const deleteBlog = (datas: any) =>
BlogRequest.get<any, any>(API.DELETE_URL, {params:{id:datas}});

// 查询
export const searchBlog = (datas: any) =>
BlogRequest.get<any, any>(API.ADDBLOG_URL, {params:{title:datas}});

