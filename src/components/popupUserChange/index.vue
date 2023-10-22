<template>
  <!-- search popup area -->
  <div class="user-popup" :class="{'visible':actionStore.pop.userPop}">
    <!-- close button -->
    <button type="button" class="btn-close" aria-label="Close" @click="closeAction"></button>
    <!-- content -->
    <div class="search-content container">
      <div class="text-center">
        <h3 class="mb-4 mt-0">按ESC键可以退出</h3>
      </div>
      <div>

        <el-form :model="form" label-width="120px">
          <el-form-item label="用户名">
            <el-input v-model="form.username" />
          </el-form-item>
          <el-form-item label="个性签名">
            <el-input v-model="form.personality" />
          </el-form-item>
          <el-divider />
         <el-form-item label="头像更换">
          <div class="uploaderBox me-5" v-if="useStore.avatar">
            <img :src="useStore.avatar" alt="用户头像">
          </div>
          <el-avatar v-if="!useStore.avatar" :size="150" shape="square" class="me-5"> 朱古力 </el-avatar>
          <el-upload class="avatar-uploader uploaderBox" action="http://eq2hen.natappfree.cc/u/upload/image" :show-file-list="false"
            :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload" :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove" :on-error="handleAvatarError" :http-request="uploadFile">
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <el-icon v-else class="avatar-uploader-icon">
              <Plus />
            </el-icon>
          </el-upload>
          <el-dialog v-model="dialogVisible">
            <img w-full :src="imageUrl" alt="Preview Image" />
          </el-dialog>
         </el-form-item>
        </el-form>
        <el-divider />
        <div class="d-flex justify-content-center">
          <button class="btn btn-default btn-lg">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive, onMounted, onUnmounted } from "vue"
import '@/assets/css/all.min.css'
import '@/assets/css/simple-line-icons.css'
import '@/assets/css/style.css'
//@ts-ignore
import $ from 'jquery'
import { ElMessage } from 'element-plus'
import { Plus } from '@element-plus/icons-vue'
import { GET_USERID } from '@/utils/userid'
import type { UploadProps } from 'element-plus'
import useUserStore from '@/store/modules/user'
let useStore = useUserStore();
import { ElNotification } from 'element-plus'
import useActionStroe from '@/store/modules/action'
let actionStore = useActionStroe();

const closeAction = () => {
  actionStore.handlePop("userPop",false);
}
const onKeyUp = (e: KeyboardEvent) => {
  if (e.key === "Escape") {
    actionStore.handlePop("userPop",false);
  }
}
onMounted(() => {
  document.addEventListener("keyup", onKeyUp);
})
onUnmounted(() => {
  document.removeEventListener("keyup", onKeyUp);
})

const form = reactive({
  username: '',
  personality: ''
})

//上传照片
const imageUrl = ref('')

const handleAvatarSuccess: UploadProps['onSuccess'] = (
  response,
  uploadFile
) => {
  //发送成功
  // imageUrl.value = URL.createObjectURL(uploadFile.raw!)
  imageUrl.value = (useStore.avatar as string);
}

const handleAvatarError: UploadProps['onError'] = (error: Error, uploadFile) => {
  console.log(Error);
  console.log(URL.createObjectURL(uploadFile.raw!));


}

const beforeAvatarUpload: UploadProps['beforeUpload'] = (file) => {
  const isJPG =
    file.type === "image/jpg" ||
    file.type === "image/jpeg" ||
    file.type === "image/png";
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isJPG) {
    ElMessage.error("仅支持jpg，png格式的图片！");
  }
  if (!isLt2M) {
    ElMessage.error("上传图片大小不能超过 2MB!");
  }
  return isJPG && isLt2M;
}

const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
  console.log(uploadFile, uploadFiles)
}

const dialogVisible = ref<boolean>(false)

const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
  imageUrl.value = uploadFile.url!
  dialogVisible.value = true
}

//重写提交方法
const uploadFile = async (item: any) => {
  let userId = GET_USERID();
  let fileObj = item.file;
  const form = new FormData();
  form.append("file", fileObj);
  form.append("userId", userId);
  try {
    await useStore.userChangeImg(form);
  } catch (error) {
    ElNotification({
      type: 'error',
      message: (error as Error).message,
      duration: 3000, // 通知显示时间，单位毫秒
      showClose: true // 显示关闭按钮
    })
  }
}

</script>
<style lang="scss" scoped>
.btn {
  overflow: visible;
}

.user-popup {
  background: white;
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: 6;
  opacity: 0;
  visibility: hidden;
}

.user-popup.visible {
  opacity: 1;
  visibility: visible;
  animation: growOut 500ms ease-in-out forwards;
}

.user-popup .search-content {
  margin-top: 2%;
}

.user-popup .btn-close {
  right: 30px;
  top: 30px;
  position: absolute;
}

.avatar-uploader .avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}
.uploaderBox{
  --el-upload-picture-card-size: 148px;
    background-color: var(--el-fill-color-lighter);
    border: 1px dashed var(--el-border-color-darker);
    border-radius: 6px;
    box-sizing: border-box;
    width: var(--el-upload-picture-card-size);
    height: var(--el-upload-picture-card-size);
    cursor: pointer;
    vertical-align: top;
    display: inline-flex;
    justify-content: center;
    align-items: center;
}
</style>