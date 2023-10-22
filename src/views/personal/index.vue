<template>
    <div v-if="!mouted">
        <el-skeleton style="--el-skeleton-circle-size: 100px;display: flex; justify-content: center;margin-top: 15px;">
            <template #template>
                <el-skeleton-item variant="circle"/>
            </template>
        </el-skeleton>
        <br>
        <br>
        <br>
        <el-skeleton :rows="10" animated/>
    </div>
<div v-if="mouted">
    <div class="site-wrapper">

<div class="main-overlay"></div>

<!-- header -->
<header class="header-personal">
    <PersonalHeader></PersonalHeader>
    <HeaderNavbar></HeaderNavbar>
</header>


<!-- section main content -->
<section class="main-content">
    <div class="container-xl">

        <div class="row gy-4">

            <div class="col-lg-8">
                <div class="row gy-4">
                    <!-- post -->
                    <Post v-for="(item, index) in blogStore.myBlogDatas.blogs" :title="item.blog.title"
                        :writter="userStore.username" :date="item.date" :image-url="item.blog.imageUrl"
                        :text="item.blog.content" :category="item.tagName"></Post>

                </div>

                <!--分页器-->

                <div>
                    <el-pagination @current-change="getMyBlog" :pager-count="9" :current-page="pageNo"
                        @size-change="sizeChange" :page-size="limit"
                        :page-sizes="[8, 10, 15, 20]" :background="true" layout="prev,pager,next,jumper,->,sizes,total"
                        :total="blogStore.myBlogDatas.Total ? blogStore.myBlogDatas.Total : 0" @update:page-size="pageSizeChange"/>
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

                    <!-- widget tags -->
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
                </div>

                <!-- social icons -->
                <div class="col-md-4 text-center">
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
</div>
</template>
<script setup lang="ts">
import '@/assets/css/all.min.css'
import '@/assets/css/simple-line-icons.css'
import '@/assets/css/style.css'
import '@/assets/css/slick.css'
import { ref, reactive, onMounted } from "vue"
import 'slick-carousel';
//@ts-ignore
import $ from "jquery";
// import HeaderCarousel from './headerCarousel.vue'
import Post from './post.vue'
import { useRouter, useRoute } from 'vue-router';
import useBlogStore from '@/store/modules/blog'
import useActionStroe from '@/store/modules/action'
import userActionStroe from '@/store/modules/user'
let blogStore = useBlogStore();
let actionStore = useActionStroe();
let userStore = userActionStroe();
let $router = useRouter();
let $route = useRoute();
import { ElNotification } from 'element-plus'
import { getTime } from '@/utils/time'



const getMyBlog = async (pager = 1) => {
    try {
        pageNo.value = pager;
        //渲染我的主页
        const result = await blogStore.getMyBlogDatas({ userId: $route.query.id, current: pageNo.value, limit: limit.value });
        console.log(result);
        //控制骨架屏
        mouted.value=true;
    } catch (error) {

        ElNotification({
            type: 'error',
            message: '我的主页数据获取失败',
            duration: 3000, // 通知显示时间，单位毫秒
            showClose: true // 显示关闭按钮
        })
    }

}
//骨架屏控制
const mouted = ref(false)

onMounted(() => {
    //person里面的轮播图控制
    $('.post-carousel-featured').slick({
        dots: true,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,        // 添加自动轮播属性
        autoplaySpeed: 2000,   // 设置自动轮播间隔时间，单位为毫秒
        responsive: [
            {
                breakpoint: 1440,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: true,
                    arrows: false,
                }
            }
            ,
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

    getMyBlog();

})


//当前页码
let pageNo = ref<number>(1);
//每一页展示多少条数据
let limit = ref<number>(8);
//分页器当前页码发生变化的时候会触发
// const changePageNo = () => {
//     console.log(123);
//     getMyBlog();
// }
//当切换每页个数时发生改变
const pageSizeChange = (newSize:number) =>{
    limit.value = newSize;
    
}

//当下拉菜单发生变化的时候
const sizeChange = () => {
    
    getMyBlog();
}

</script>
<style lang="scss" scoped>
:deep(.el-pagination.is-background .el-pager li.is-active) {
    background: linear-gradient(to top, #FFA387 0%, #FE4F70 51%, #FFA387 100%) !important;
    background-size: auto 200%;
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.15);
    transition: all 0.2s ease-in-out;
    border-radius: 50%;
    color: #fff;
}

:deep(.el-pagination.is-background .el-pager li) {
    background-color: #fff;
    display: block;
    color: #8F9BAD;
    border-radius: 50%;
    font-size: 14px;
    text-decoration: none;
    border: solid 1px #EBEBEB;
    height: 45px;
    line-height: 45px;
    text-align: center;
    padding: 0;
    width: 45px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

:deep(.el-pagination.is-background .btn-next),
:deep(.el-pagination.is-background .btn-prev) {
    border-radius: 3px;
    background-color: rgba(154, 166, 182, 0.093)
}
</style>