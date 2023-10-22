<template>
    <div class="widget rounded">
        <div class="widget-header text-center">
            <h3 class="widget-title">话题榜单</h3>
            <img src="http://uniapp.mintac.cn/images/wave.svg" class="wave" alt="wave" />
        </div>
        <div class="widget-content">
            <ul class="list">
                <li><a href="#">没有人懂得你的心苦</a><span>(5)</span></li>
                <li><a href="#">七夕你和谁过</a><span>(2)</span></li>
                <li><router-link to="/">不谈如果，不说如果</router-link><span>(4)</span></li>
                <li><a href="#">正能量（你懂的）</a><span>(1)</span></li>
                <li><a href="#">我的完美人生被男童毁了</a><span>(7)</span></li>
                <li><a href="#">拍照从不批腿</a><span>(3)</span></li>
            </ul>
        </div>

    </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue"




</script>
<style lang="scss" scoped>
</style>