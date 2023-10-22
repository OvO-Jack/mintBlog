<template>

<!-- site wrapper -->
<div class="site-wrapper">

<div class="main-overlay"></div>

<!-- header -->
<IndexHeaderNavbar></IndexHeaderNavbar>

<!-- page header -->
<section class="page-header">
    <div class="container-xl">
        <div class="text-center">
            <h1 class="mt-0 mb-2">Contact</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb justify-content-center mb-0">
                    <li class="breadcrumb-item"><a href="#">Home</a></li>
                    <li class="breadcrumb-item active" aria-current="page">Contact</li>
                </ol>
            </nav>
        </div>
    </div>
</section>

<!-- section main content -->
<section class="main-content">
    <div class="container-xl">

        <div class="row">
                    
            <div class="col-md-4">
                <!-- contact info item -->
                <div class="contact-item bordered rounded d-flex align-items-center">
                    <span class="icon icon-phone"></span>
                    <div class="details">
                        <h3 class="mb-0 mt-0">Phone</h3>
                        <p class="mb-0">+1-202-555-0135</p>
                    </div>
                </div>
                <div class="spacer d-md-none d-lg-none" data-height="30"></div>
            </div>

            <div class="col-md-4">
                <!-- contact info item -->
                <div class="contact-item bordered rounded d-flex align-items-center">
                    <span class="icon icon-envelope-open"></span>
                    <div class="details">
                        <h3 class="mb-0 mt-0">E-Mail</h3>
                        <p class="mb-0">hello@example.com</p>
                    </div>
                </div>
                <div class="spacer d-md-none d-lg-none" data-height="30"></div>
            </div>

            <div class="col-md-4">
                <!-- contact info item -->
                <div class="contact-item bordered rounded d-flex align-items-center">
                    <span class="icon icon-map"></span>
                    <div class="details">
                        <h3 class="mb-0 mt-0">Location</h3>
                        <p class="mb-0">California, USA</p>
                    </div>
                </div>
            </div>

        </div>

        <div class="spacer" data-height="50"></div>

        <!-- section header -->
        <div class="section-header">
            <h3 class="section-title">Send Message</h3>
            <img src="http://uniapp.mintac.cn/images/wave.svg" class="wave" alt="wave" />
        </div>

        <!-- Contact Form -->
        <form id="contact-form" class="contact-form" method="post">
            
            <div class="messages"></div>
            
            <div class="row">
                <div class="column col-md-6">
                    <!-- Name input -->
                    <div class="form-group">
                        <input type="text" class="form-control" name="InputName" id="InputName" placeholder="Your name" required data-error="Name is required.">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
                
                <div class="column col-md-6">
                    <!-- Email input -->
                    <div class="form-group">
                        <input type="email" class="form-control" id="InputEmail" name="InputEmail" placeholder="Email address" required data-error="Email is required.">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>

                <div class="column col-md-12">
                    <!-- Email input -->
                    <div class="form-group">
                        <input type="text" class="form-control" id="InputSubject" name="InputSubject" placeholder="Subject" required data-error="Subject is required.">
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
        
                <div class="column col-md-12">
                    <!-- Message textarea -->
                    <div class="form-group">
                        <textarea name="InputMessage" id="InputMessage" class="form-control" rows="4" placeholder="Your message here..." required data-error="Message is required."></textarea>
                        <div class="help-block with-errors"></div>
                    </div>
                </div>
            </div>

            <button type="submit" name="submit" id="submit" value="Submit" class="btn btn-default">Submit Message</button><!-- Send Button -->

        </form>
        <!-- Contact Form end -->
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
</template>
<script setup lang="ts">
import {ref,reactive} from "vue"
import '@/assets/css/all.min.css'
import '@/assets/css/simple-line-icons.css'
import '@/assets/css/style.css'
import '@/assets/css/slick.css'



</script>
<style lang="scss" scoped>




</style>