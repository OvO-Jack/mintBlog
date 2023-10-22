<template>
    <!-- site wrapper -->
    <div class="site-wrapper">

        <div class="main-overlay"></div>

        <!-- header -->
        <IndexHeaderNavbar></IndexHeaderNavbar>

        <!-- hero section -->
        <section id="hero">

            <div class="container-xl">

                <div class="row gy-4">

                    <div class="col-lg-8">

                        <!-- featured post large -->
                        <FeaturedPost></FeaturedPost>

                    </div>

                    <div class="col-lg-4">

                        <!-- post tabs -->
                        <Post></Post>
                    </div>

                </div>

            </div>

        </section>

        <!-- section main content -->
        <section class="main-content">
            <div class="container-xl">

                <div class="row gy-4">

                    <div class="col-lg-8">

                        <!-- section header -->
                        <div class="section-header">
                            <h3 class="section-title">热门文章</h3>
                            <img src="http://uniapp.mintac.cn/images/wave.svg" class="wave" alt="wave" />
                        </div>

                        <Hot></Hot>

                        <!-- section header -->
                        <div class="section-header">
                            <h3 class="section-title">每日推荐</h3>
                            <img src="http://uniapp.mintac.cn/images/wave.svg" class="wave" alt="wave" />
                        </div>

                        <Recomment></Recomment>

                        <div class="spacer" data-height="50"></div>

                        <!-- section header -->
                        <div class="section-header">
                            <h3 class="section-title">我的文章</h3>
                            <img src="http://uniapp.mintac.cn/images/wave.svg" class="wave" alt="wave" />
                            <div class="slick-arrows-top">
                                <button type="button" data-role="none" class="carousel-topNav-prev slick-custom-buttons"
                                    aria-label="Previous"><i class="icon-arrow-left"></i></button>
                                <button type="button" data-role="none" class="carousel-topNav-next slick-custom-buttons"
                                    aria-label="Next"><i class="icon-arrow-right"></i></button>
                            </div>
                        </div>

                        <Mine></Mine>

                        <div class="spacer" data-height="50"></div>


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
                <div class="row gy-4">
                    <div class="col-lg-12">
                        <div class="padding-30 rounded bordered">
                            <!-- section header -->
                            <div class="section-header">
                                <h3 class="section-title">最新文章</h3>
                                <img src="http://uniapp.mintac.cn/images/wave.svg" class="wave" alt="wave" />
                            </div>
                            <Current />

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
                            <span class="copyright"><a href=" " target="_blank">您的备案号</a><a
                                    href="https://beian.miit.gov.cn/" target="_blank">湘ICP备2023012220号</a></span>
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
</template>
  
<script setup lang='ts'>
import '@/assets/css/all.min.css'
import '@/assets/css/simple-line-icons.css'
import '@/assets/css/style.css'
import '@/assets/css/slick.css'
import Post from "./post.vue";
import FeaturedPost from './featuredPost.vue'
import Hot from './hot.vue'
import Recomment from './recommend.vue'
import Mine from './mine.vue'
import Current from './current.vue'
import { onMounted, ref, onBeforeMount } from "vue";
import 'slick-carousel'


//@ts-ignore
import $ from 'jquery'

const carouselAction = () => {

    $('.post-carousel-twoCol').slick({
        dots: false,
        arrows: false,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,        // 添加自动轮播属性
        autoplaySpeed: 2000,   // 设置自动轮播间隔时间，单位为毫秒
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    dots: false,
                    arrows: false,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    arrows: false,
                }
            }
        ]
    });

    // Custom carousel nav
    $('.carousel-topNav-prev').click(function () {
        $('.post-carousel-twoCol').slick('slickPrev');
    });
    $('.carousel-topNav-next').click(function () {
        $('.post-carousel-twoCol').slick('slickNext');
    });
}

onMounted(() => {
    carouselAction();
})


</script>
  
<style></style>