<template>
    <!-- site wrapper -->
    <div class="site-wrapper">

        <div class="main-overlay"></div>

        <!-- header -->
        <IndexHeaderNavbar></IndexHeaderNavbar>

        <!-- section main content -->
        <section class="main-content mt-3">
            <div class="container-xl">

                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><router-link to="/">首页</router-link></li>
                        <li class="breadcrumb-item"><router-link to="/">最新文章</router-link></li>
                        <li class="breadcrumb-item active" aria-current="page">{{ blogStore.blogInfo.title }}</li>
                    </ol>
                </nav>

                <div class="row gy-4">

                    <div class="col-lg-8">
                        <!-- post single -->
                        <div class="post post-single">
                            <!-- post header -->
                            <div class="post-header">
                                <h1 class="title mt-0 mb-3">{{ blogStore.blogInfo.title }}</h1>
                                <ul class="meta list-inline mb-0">
                                    <li class="list-inline-item"><router-link to="/personal"><img
                                                src="http://uniapp.mintac.cn/images/other/author-sm.png" class="author"
                                                alt="author" />朱古力</router-link></li>
                                    <li class="list-inline-item"><router-link to="/">生活</router-link></li>
                                    <li class="list-inline-item">{{ blogStore.blogInfo.createdAt }}</li>
                                </ul>
                            </div>

                            <!--正文区域-->
                            <div class="featured-image">
                                <img :src="blogStore.blogInfo.imageUrl" alt="糟糕糟糕偶买噶照片消失啦" />
                                <figcaption class="figure-caption text-center">图片描述</figcaption>
                            </div>
                            <!-- post content -->
                            <div v-html="blogStore.blogInfo.introduction"></div>
                            <!-- post bottom section -->
                            <div class="spacer" data-height="50"></div>

                            <BlogAction :likeNum="blogStore.blogInfo.likeCount" comment="99"></BlogAction>

                            <div class="post-bottom mb-3">
                                <div class="row d-flex align-items-center">
                                    <div class="col-md-6 col-12 text-center text-md-start">
                                        <!-- tags -->
                                        <router-link to="/" class="tag">#{{ blogStore.blogInfo.tagName }}</router-link>
                                    </div>
                                    <div class="col-md-6 col-12">
                                    </div>
                                </div>
                            </div>

                        </div>



                        <div class="spacer" data-height="50"></div>

                        <!--作者介绍区-->
                        <!-- <About></About> -->

                        <div class="spacer" data-height="50"></div>

                        <!-- section header -->
                        <div class="section-header">
                            <h3 class="section-title">评论 (3)</h3>
                            <img src="http://uniapp.mintac.cn/images/wave.svg" class="wave" alt="wave" />
                        </div>
                        <!-- post comments -->
                        <div class="comments bordered padding-30 rounded">
                            <ul class="comments">
                                <!-- comment item -->
                                <div v-for="(item1, index1) in actionStore.commentDatas" :key="index1">
                                    <li class="comment rounded">
                                        <div class="thumb">
                                            <el-avatar size="default" :src="item1.topLevelComment.commentAvatar" />
                                        </div>
                                        <div class="details">
                                            <h4 class="name"><a href="#">{{ item1.topLevelComment.nickname }}</a></h4>
                                            <span class="date">{{ item1.topLevelComment.createTime }}</span>
                                            <p>{{ item1.topLevelComment.content }}</p>
                                            <button class="btn btn-default btn-sm"
                                                @click="parentCommentAction(index1)">点击回复</button>
                                        </div>
                                        <div class="container mt-3" v-if="parentHid[index1].hidden">
                                            <el-input v-model="textarea" maxlength="300" placeholder="Please input"
                                                show-word-limit type="textarea" :autosize="{ minRows: 2, maxRows: 4 }"
                                                resize="none" />
                                            <svg-icon name="close" class="svg" @click="parentHidden(index1)"></svg-icon>
                                            <div class="d-flex justify-content-end mt-2">
                                                <button class="btn btn-default btn-sm"
                                                    @click="addCommentAction(item1.topLevelComment.blogId, item1.topLevelComment.nickname)">发表</button>
                                            </div>
                                        </div>
                                    </li>
                                    <li class="comment child rounded" v-for="(item2, index2) in item1.replyComments"
                                        :key="index2">
                                        <div class="thumb">
                                            <el-avatar size="default" :src="item2.commentAvatar" />
                                        </div>
                                        <div class="details">
                                            <h4 class="name"><a href="#">{{ item2.nickname }}</a></h4>
                                            <span class="date">{{ item2.createTime }}</span>
                                            <p>{{ item2.content }}</p>
                                            <button class="btn btn-default btn-sm"
                                                @click="childrenCommentAction(index1, index2)">点击回复</button>
                                        </div>
                                        <div class="container mt-3" v-if="parentHid[index1].childrenHid[index2].hidden">
                                            <el-input v-model="textarea" maxlength="300" placeholder="Please input"
                                                show-word-limit type="textarea" :autosize="{ minRows: 2, maxRows: 4 }"
                                                resize="none" />
                                            <svg-icon name="close" class="svg"
                                                @click="childHidden(index1, index2)"></svg-icon>
                                            <div class="d-flex justify-content-end mt-2">
                                                <button class="btn btn-default btn-sm"
                                                    @click="addCommentAction(item2.parentCommentId, item2.nickname)">发表</button>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </ul>
                        </div>

                        <div class="spacer" data-height="50"></div>

                        <!-- section header -->
                        <div class="section-header">
                            <h3 class="section-title">发表评论</h3>
                            <img src="http://uniapp.mintac.cn/images/wave.svg" class="wave" alt="wave" />
                        </div>

                        <div class="spacer" data-height="50"></div>

                        <!-- comment form -->
                        <div class="rounded bordered padding-30">
                            <div class="row">
                                <div class="column col-md-12">
                                    <textarea class="form" rows="4" placeholder="请输入你的评论" required="true"
                                        v-model="commentTex"></textarea>
                                </div>
                            </div>
                            <div class="d-flex justify-content-end mt-2">
                                <button class="btn btn-default" @click="submitComment">提交</button>
                            </div>

                        </div>
                    </div>

                    <div class="col-lg-4">

                        <!-- sidebar -->
                        <div class="sidebar">
                            <!-- Introduction板块 -->
                            <Introduction></Introduction>

                            <!-- 话题榜单 -->
                            <TopicPost></TopicPost>

                            <!-- 关注榜单 -->
                            <PostPopular></PostPopular>


                            <!-- 好友动态 -->
                            <!-- <PostCarouselWidget></PostCarouselWidget> -->


                            <!-- 话题分类 -->
                            <PostTags></PostTags>

                        </div>

                    </div>

                </div>

            </div>
        </section>

        <!-- instagram feed -->
        <div class="instagram">
            <div class="container-xl">
                <!-- button -->
                <a href="#" class="btn btn-default btn-instagram">@Katen on Instagram</a>
                <!-- images -->
                <div class="instagram-feed d-flex flex-wrap">
                    <div class="insta-item col-sm-2 col-6 col-md-2">
                        <a href="#">
                            <img src="http://uniapp.mintac.cn/images/insta/insta-1.jpg" alt="insta-title" />
                        </a>
                    </div>
                    <div class="insta-item col-sm-2 col-6 col-md-2">
                        <a href="#">
                            <img src="http://uniapp.mintac.cn/images/insta/insta-2.jpg" alt="insta-title" />
                        </a>
                    </div>
                    <div class="insta-item col-sm-2 col-6 col-md-2">
                        <a href="#">
                            <img src="http://uniapp.mintac.cn/images/insta/insta-3.jpg" alt="insta-title" />
                        </a>
                    </div>
                    <div class="insta-item col-sm-2 col-6 col-md-2">
                        <a href="#">
                            <img src="http://uniapp.mintac.cn/images/insta/insta-4.jpg" alt="insta-title" />
                        </a>
                    </div>
                    <div class="insta-item col-sm-2 col-6 col-md-2">
                        <a href="#">
                            <img src="http://uniapp.mintac.cn/images/insta/insta-5.jpg" alt="insta-title" />
                        </a>
                    </div>
                    <div class="insta-item col-sm-2 col-6 col-md-2">
                        <a href="#">
                            <img src="http://uniapp.mintac.cn/images/insta/insta-6.jpg" alt="insta-title" />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <!-- footer -->
        <footer>
            <div class="container-xl">
                <div class="footer-inner">
                    <div class="row d-flex align-items-center gy-4">
                        <!-- copyright text -->
                        <div class="col-md-4">
                            <span class="copyright">© 2021 Katen. Template by ThemeGer.</span>
                        </div>

                        <!-- social icons -->
                        <div class="col-md-4 text-center">
                            <ul class="social-icons list-unstyled list-inline mb-0">
                                <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-instagram"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-medium"></i></a></li>
                                <li class="list-inline-item"><a href="#"><i class="fab fa-youtube"></i></a></li>
                            </ul>
                        </div>

                        <!-- go to top button -->
                        <div class="col-md-4">
                            <a href="#" id="return-to-top" class="float-md-end"><i class="icon-arrow-up"></i>Back to Top</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>

    </div><!-- end site wrapper -->

    <!-- 搜索框弹出层popup -->
    <SearchPopup></SearchPopup>

    <!-- canvas菜单 -->
    <CanvasMenu></CanvasMenu>
    <!-- 编辑弹出层 -->
    <EditPopup></EditPopup>
    <!-- 用户信息修改弹出层 -->
    <UserChangePopup></UserChangePopup>
</template>
<script setup lang="ts">
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'
import { ref, reactive, onMounted } from "vue"
import '@/assets/css/all.min.css'
import '@/assets/css/simple-line-icons.css'
import '@/assets/css/style.css'
import '@/assets/css/slick.css'
import About from './about.vue'
import { useRouter, useRoute } from 'vue-router';
import useBlogStore from '@/store/modules/blog'
import useActionStroe from '@/store/modules/action'
import userActionStroe from '@/store/modules/user'
import { SET_USERID, GET_USERID, REMOVE_USERID } from '@/utils/userid'
let blogStore = useBlogStore();
let actionStore = useActionStroe();
let userStore = userActionStroe();
let $router = useRouter();
let $route = useRoute();
const textarea = ref('')

const editorContent = ref<string>('<h1>123</h1>');
const parentComment = ref(false);
const parentCommentAction = (index1: any) => {
    parentHid[index1].hidden = true;
    textarea.value = ''
}
const childrenComment = ref(false);
const childrenCommentAction = (index1: any, index2: any) => {
    parentHid[index1].childrenHid[index2].hidden = true;
    textarea.value = ''
}

const parentHidden = (index1: any) => {
    parentHid[index1].hidden = false;
    textarea.value = ''
}
const childHidden = (index1: any, index2: any) => {
    parentHid[index1].childrenHid[index2].hidden = false;
    textarea.value = ''
}

const parentHid = reactive([
    {
        hidden: false,
        childrenHid: [
            { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false },
        ]
    },
    {
        hidden: false,
        childrenHid: [
            { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false },
        ]
    },
    {
        hidden: false,
        childrenHid: [
            { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false },
        ]
    },
    {
        hidden: false,
        childrenHid: [
            { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false },
        ]
    },
    {
        hidden: false,
        childrenHid: [
            { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false }, { hidden: false },
        ]
    }
]);
const total = reactive<any>([]);

const addCommentAction = async (id: number | null, name: string) => {
    try {
        await actionStore.addComment({
            nickname: userStore.username,
            content: textarea.value,
            blogId: Number($route.query.id),
            adminComment: 0,
            parentCommentId: id,
            userId: Number(GET_USERID())
        });
        ElNotification({
            type: 'success',
            message: `回复${name}成功！`,
            title: `欢迎来到MyBlog,${getTime()}好`,
            duration: 2000,
            showClose: true,
        });
    } catch (error) {
        ElNotification({
            type: 'error',
            message: '回复失败',
            duration: 3000, // 通知显示时间，单位毫秒
            showClose: true // 显示关闭按钮
        })
    }
}

const showComment = async () => {
    try {
        await actionStore.showComment($route.query.id);
        ElNotification({
            type: 'success',
            message: '评论渲染成功！',
            title: `欢迎来到MyBlog,${getTime()}好`,
            duration: 2000,
            showClose: true,
        });
        textarea.value = ''
    } catch (error) {
        ElNotification({
            type: 'error',
            message: '评论渲染失败',
            duration: 3000, // 通知显示时间，单位毫秒
            showClose: true // 显示关闭按钮
        })
    }
}


onMounted(() => {
    //拿到route的路径
    console.log($route.query.id);
    //通过id查博客数据
    blogStore.getBlogDatas(($route.query.id as string));
    //渲染评论
    showComment();
    
})

//发表评论
const commentTex = ref('');
const submitComment = async () => {
    try {
        await actionStore.addComment({
            nickname: userStore.username,
            content: commentTex.value,
            blogId: Number($route.query.id),
            adminComment: 0,
            parentCommentId: null,
            userId: Number(GET_USERID())
        });
        ElNotification({
            type: 'success',
            message: '发表评论成功！',
            title: `欢迎来到MyBlog,${getTime()}好`,
            duration: 2000,
            showClose: true,
        });
    } catch (error) {
        ElNotification({
            type: 'error',
            message: '发表评论失败，请重试',
            duration: 3000, // 通知显示时间，单位毫秒
            showClose: true // 显示关闭按钮
        })
    }
}

</script>
<style lang="scss" scoped>
:deep(.el-textarea__inner:focus) {
    outline: 0;
    box-shadow: 0 0 0 1px #FE4F70 inset;
}

.form {
    display: block;
    border-radius: 25px;
    width: 100%;
    padding: 8px 24px;
    font-size: 14px;
    line-height: 1.6;
    color: #8F9BAD;
    background-color: #FFF;
    background-image: none;
    border: solid 1px #EBEBEB;
    -webkit-box-shadow: none;
    box-shadow: none;
    display: block;
    width: 100%;
    padding: .375rem .75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bs-body-color);
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: var(--bs-body-bg);
    background-clip: padding-box;
    border: var(--bs-border-width) solid var(--bs-border-color);
    border-radius: var(--bs-border-radius);
    transition: border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

.svg {
    position: absolute;
    margin-top: 18px;
    margin-left: 3px;
}</style>