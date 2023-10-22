<template>
    <!-- site wrapper -->
    <div class="site-wrapper">

        <div class="main-overlay"></div>

        <!-- header -->
        <header class="header-classic">

            <div class="container-xl">
                <!-- header top -->
                <div class="header-top">
                    <div class="row align-items-center">

                        <div class="col-md-4 col-xs-12">
                            <!-- site logo -->
                            <a class="navbar-brand" href="classic.html"><img src="http://uniapp.mintac.cn/images/logo.png"
                                    alt="logo" /></a>
                        </div>

                        <div class="col-md-8 d-none d-md-block">
                            <!-- header buttons -->
                            <div class="header-buttons float-md-end mt-4 mt-md-0">
                                <button class="search icon-button me-2" @click="editAction">
                            <i class="icon-note"></i>
                        </button>
                        <button class="search icon-button me-2" @click="searchAction">
                            <i class="icon-magnifier"></i>
                        </button>
                        <button class="search icon-button me-2" @click="userAction">
                            <i class="icon-settings"></i>
                        </button>
                        <button class="burger-menu icon-button" @click="menuAction">
                            <span class="burger-icon"></span>
                        </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <HeaderNavbar class="my-3"></HeaderNavbar>

        </header>

        <section class="hero-carousel">
            <div class="container-xl">
                <div class="post-carousel-lg">
                    <!-- post -->
                    <div class="post featured-post-xl">
                        <div class="details clearfix">
                            <a href="category.html" class="category-badge lg">Lifestyle</a>
                            <h4 class="post-title"><a href="blog-single.html">9 Most Awesome Blue Lake With Snow
                                    Mountain</a></h4>
                            <ul class="meta list-inline mb-0">
                                <li class="list-inline-item"><a href="#">Katen Doe</a></li>
                                <li class="list-inline-item">29 March 2021</li>
                            </ul>
                        </div>
                        <a href="blog-single.html">
                            <div class="thumb rounded">
                                <div class="inner"
                                    :style="{ backgroundImage: `url(http://uniapp.mintac.cn/images/posts/featured-xl-1.jpg)` }">
                                </div>
                            </div>
                        </a>
                    </div>
                    <!-- post -->
                    <div class="post featured-post-xl">
                        <div class="details clearfix">
                            <a href="category.html" class="category-badge lg">Culture</a>
                            <h4 class="post-title"><a href="blog-single.html">Important Thing You Need To Know About
                                    Swim</a></h4>
                            <ul class="meta list-inline mb-0">
                                <li class="list-inline-item"><a href="#">Katen Doe</a></li>
                                <li class="list-inline-item">29 March 2021</li>
                            </ul>
                        </div>
                        <a href="blog-single.html">
                            <div class="thumb rounded">
                                <div class="inner"
                                    :style="{ backgroundImage: `url(http://uniapp.mintac.cn/images/posts/featured-xl-2.jpg)` }">
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>

        <!-- section main content -->
        <section class="main-content">
            <div class="container-xl">

                <div class="row gy-4">

                    <div class="col-lg-8">

                        <!-- post -->
                        <div class="post post-classic rounded bordered">
                            <div class="thumb top-rounded">
                                <a href="category.html" class="category-badge lg position-absolute">Lifestyle</a>
                                <span class="post-format">
                                    <i class="icon-picture"></i>
                                </span>
                                <a href="blog-single.html">
                                    <div class="inner">
                                        <img src="http://uniapp.mintac.cn/images/posts/post-lg-1.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div class="details">
                                <ul class="meta list-inline mb-0">
                                    <li class="list-inline-item"><a href="#"><img
                                                src="http://uniapp.mintac.cn/images/other/author-sm.png" class="author"
                                                alt="author" />Katen Doe</a></li>
                                    <li class="list-inline-item">29 March 2021</li>
                                    <li class="list-inline-item"><i class="icon-bubble"></i> (0)</li>
                                </ul>
                                <h5 class="post-title mb-3 mt-3"><a href="blog-single.html">How To Become Better With
                                        Building In 1 Month</a></h5>
                                <p class="excerpt mb-0">Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated they live in
                                    Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                            <div class="post-bottom clearfix d-flex align-items-center">
                                <div class="social-share me-auto">
                                    <button class="toggle-button icon-share"></button>
                                    <ul class="icons list-unstyled list-inline mb-0">
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-telegram-plane"></i></a>
                                        </li>
                                        <li class="list-inline-item"><a href="#"><i class="far fa-envelope"></i></a></li>
                                    </ul>
                                </div>
                                <div class="float-end d-none d-md-block">
                                    <a href="blog-single.html" class="more-link">Continue reading<i
                                            class="icon-arrow-right"></i></a>
                                </div>
                                <div class="more-button d-block d-md-none float-end">
                                    <a href="blog-single.html"><span class="icon-options"></span></a>
                                </div>
                            </div>
                        </div>

                        <!-- post -->
                        <div class="post post-classic rounded bordered">
                            <div class="thumb top-rounded">
                                <a href="category.html" class="category-badge lg position-absolute">Inspiration</a>
                                <a href="blog-single.html">
                                    <div class="inner">
                                        <img src="http://uniapp.mintac.cn/images/posts/post-lg-2.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div class="details">
                                <ul class="meta list-inline mb-0">
                                    <li class="list-inline-item"><a href="#"><img
                                                src="http://uniapp.mintac.cn/images/other/author-sm.png" class="author"
                                                alt="author" />Katen Doe</a></li>
                                    <li class="list-inline-item">29 March 2021</li>
                                    <li class="list-inline-item"><i class="icon-bubble"></i> (0)</li>
                                </ul>
                                <h5 class="post-title mb-3 mt-3"><a href="blog-single.html">10 Ways To Immediately Start
                                        Selling Furniture</a></h5>
                                <p class="excerpt mb-0">Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated they live in
                                    Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                            <div class="post-bottom clearfix d-flex align-items-center">
                                <div class="social-share me-auto">
                                    <button class="toggle-button icon-share"></button>
                                    <ul class="icons list-unstyled list-inline mb-0">
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-telegram-plane"></i></a>
                                        </li>
                                        <li class="list-inline-item"><a href="#"><i class="far fa-envelope"></i></a></li>
                                    </ul>
                                </div>
                                <div class="float-end d-none d-md-block">
                                    <a href="blog-single.html" class="more-link">Continue reading<i
                                            class="icon-arrow-right"></i></a>
                                </div>
                                <div class="more-button d-block d-md-none float-end">
                                    <a href="blog-single.html"><span class="icon-options"></span></a>
                                </div>
                            </div>
                        </div>

                        <!-- post -->
                        <div class="post post-classic rounded bordered">
                            <div class="thumb top-rounded">
                                <a href="category.html" class="category-badge lg position-absolute">Culture</a>
                                <span class="post-format">
                                    <i class="icon-camrecorder"></i>
                                </span>
                                <a href="blog-single.html">
                                    <div class="inner">
                                        <img src="http://uniapp.mintac.cn/images/posts/post-lg-3.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div class="details">
                                <ul class="meta list-inline mb-0">
                                    <li class="list-inline-item"><a href="#"><img
                                                src="http://uniapp.mintac.cn/images/other/author-sm.png" class="author"
                                                alt="author" />Katen Doe</a></li>
                                    <li class="list-inline-item">29 March 2021</li>
                                    <li class="list-inline-item"><i class="icon-bubble"></i> (0)</li>
                                </ul>
                                <h5 class="post-title mb-3 mt-3"><a href="blog-single.html">Most Important Thing You Need To
                                        Know About Swim</a></h5>
                                <p class="excerpt mb-0">Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated they live in
                                    Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                            <div class="post-bottom clearfix d-flex align-items-center">
                                <div class="social-share me-auto">
                                    <button class="toggle-button icon-share"></button>
                                    <ul class="icons list-unstyled list-inline mb-0">
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-telegram-plane"></i></a>
                                        </li>
                                        <li class="list-inline-item"><a href="#"><i class="far fa-envelope"></i></a></li>
                                    </ul>
                                </div>
                                <div class="float-end d-none d-md-block">
                                    <a href="blog-single.html" class="more-link">Continue reading<i
                                            class="icon-arrow-right"></i></a>
                                </div>
                                <div class="more-button d-block d-md-none float-end">
                                    <a href="blog-single.html"><span class="icon-options"></span></a>
                                </div>
                            </div>
                        </div>

                        <!-- post -->
                        <div class="post post-classic rounded bordered">
                            <div class="thumb top-rounded">
                                <a href="category.html" class="category-badge lg position-absolute">Lifestyle</a>
                                <a href="blog-single.html">
                                    <div class="inner">
                                        <img src="http://uniapp.mintac.cn/images/posts/post-lg-4.jpg" alt="post-title" />
                                    </div>
                                </a>
                            </div>
                            <div class="details">
                                <ul class="meta list-inline mb-0">
                                    <li class="list-inline-item"><a href="#"><img
                                                src="http://uniapp.mintac.cn/images/other/author-sm.png" class="author"
                                                alt="author" />Katen Doe</a></li>
                                    <li class="list-inline-item">29 March 2021</li>
                                    <li class="list-inline-item"><i class="icon-bubble"></i> (0)</li>
                                </ul>
                                <h5 class="post-title mb-3 mt-3"><a href="blog-single.html">Your Light Is About To Stop
                                        Being Relevant</a></h5>
                                <p class="excerpt mb-0">Far far away, behind the word mountains, far from the countries
                                    Vokalia and Consonantia, there live the blind texts. Separated they live in
                                    Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                            <div class="post-bottom clearfix d-flex align-items-center">
                                <div class="social-share me-auto">
                                    <button class="toggle-button icon-share"></button>
                                    <ul class="icons list-unstyled list-inline mb-0">
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-twitter"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
                                        <li class="list-inline-item"><a href="#"><i class="fab fa-telegram-plane"></i></a>
                                        </li>
                                        <li class="list-inline-item"><a href="#"><i class="far fa-envelope"></i></a></li>
                                    </ul>
                                </div>
                                <div class="float-end d-none d-md-block">
                                    <a href="blog-single.html" class="more-link">Continue reading<i
                                            class="icon-arrow-right"></i></a>
                                </div>
                                <div class="more-button d-block d-md-none float-end">
                                    <a href="blog-single.html"><span class="icon-options"></span></a>
                                </div>
                            </div>
                        </div>

                        <nav>
                            <ul class="pagination justify-content-center">
                                <li class="page-item active" aria-current="page">
                                    <span class="page-link">1</span>
                                </li>
                                <li class="page-item"><a class="page-link" href="#">2</a></li>
                                <li class="page-item"><a class="page-link" href="#">3</a></li>
                            </ul>
                        </nav>

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

                            <!-- widget newsletter -->
                            <div class="widget rounded">
                                <div class="widget-header text-center">
                                    <h3 class="widget-title">Newsletter</h3>
                                    <img src="http://uniapp.mintac.cn/images/wave.svg" class="wave" alt="wave" />
                                </div>
                                <div class="widget-content">
                                    <span class="newsletter-headline text-center mb-3">Join 70,000 subscribers!</span>
                                    <form>
                                        <div class="mb-2">
                                            <input class="form-control w-100 text-center" placeholder="Email address…"
                                                type="email">
                                        </div>
                                        <button class="btn btn-default btn-full" type="submit">Sign Up</button>
                                    </form>
                                    <span class="newsletter-privacy text-center mt-3">By signing up, you agree to our <a
                                            href="#">Privacy Policy</a></span>
                                </div>
                            </div>

                            <!-- 好友动态 -->
                    <!-- <PostCarouselWidget></PostCarouselWidget> -->
           

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
</template>
<script setup lang="ts">
import { ref, reactive, onMounted } from "vue"
import '@/assets/css/all.min.css'
import '@/assets/css/simple-line-icons.css'
import '@/assets/css/style.css'
import '@/assets/css/slick.css'
import 'slick-carousel'
//@ts-ignore
import $ from 'jquery'
const carouselAction = () => {
    $('.post-carousel-lg').slick({
        dots: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        cssEase: 'linear',
        autoplay: true,        // 添加自动轮播属性
        autoplaySpeed: 2000,   // 设置自动轮播间隔时间，单位为毫秒
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

}
//控制编辑框
const editAction = ()=>{
    $(".edit-popup").addClass("visible");
}
//控制用户框
const userAction = ()=>{
    $(".user-popup").addClass("visible");
}
//控制搜索弹出层
const searchAction = () => {
    $(".search-popup").addClass("visible");
}
//控制右侧点击菜单弹出
const menuAction = () => {
    $(".canvas-menu").toggleClass("open");
    $(".main-overlay").toggleClass("active");
}
onMounted(() => {
    carouselAction();
})


</script>
<style lang="scss" scoped>
:deep(.slick-prev:before) {
  content: "<-";
  top: 16px;
  left: 16px;
  position: absolute;
}

:deep(.slick-next:before) {
    content: "->";
  top: 16px;
  left: 16px;
  position: absolute;
}
</style>