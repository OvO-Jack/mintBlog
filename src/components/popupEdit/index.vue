<template>
    <!-- search popup area -->
    <div class="edit-popup" :class="{'visible':actionStore.pop.editPop}">
        <!-- close button -->
        <button type="button" class="btn-close" aria-label="Close" @click="closeAction"></button>
        <!-- content -->
        <div class="search-content container">
            <div class="text-center">
                <h3 class="mb-4 mt-0">按ESC键可以退出</h3>
            </div>
            <Editor></Editor>
        </div>
    </div>
  </template>
  <script setup lang="ts">
  import { ref, reactive, onMounted, onUnmounted} from "vue"
  import '@/assets/css/all.min.css'
  import '@/assets/css/simple-line-icons.css'
  import '@/assets/css/style.css'
  import Editor from './editor.vue'
  //@ts-ignore
  import $ from 'jquery'
  import useActionStroe from '@/store/modules/action'
  let actionStore = useActionStroe();

  //弹出层事件
  const closeAction = () => {
    actionStore.handlePop("editPop",false);
  }



  const onKeyUp = (e:KeyboardEvent) => {
    if (e.key === "Escape") {
      actionStore.handlePop("editPop",false);
    }
  }
  onMounted(() => {
    document.addEventListener("keyup", onKeyUp);
  })
  onUnmounted(() => {
    document.removeEventListener("keyup", onKeyUp);
  })
  
  
  </script>
  <style lang="scss" scoped>
  .btn{
    overflow: visible;
  }
  .edit-popup {
    background: white;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 100%;
    z-index: 6;
    opacity: 0;
    visibility: hidden;
    overflow: scroll;
  }
  .edit-popup.visible {
    opacity: 1;
    visibility: visible;
    animation: growOut 500ms ease-in-out forwards;
  }
  .edit-popup .search-content {
    margin-top: 2%;
  }
  .edit-popup .btn-close {
    right: 30px;
    top: 30px;
    position: absolute;
  }
  
  </style>