<template>
    <div>
      <div class="d-flex my-2">
        <el-input v-model="title" placeholder="请输入你文章的标题" clearable maxlength="30" show-word-limit />
      </div>
      <div style="border: solid 1px #EBEBEB; margin-top: 10px">
        <Toolbar :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" style="border-bottom: 1px solid #ccc" />
        <Editor :defaultConfig="editorConfig" :mode="mode" v-model="valueHtml"
          :style="{ height: textAreaHeight + 'px', overflowY: 'hidden' }" @onCreated="handleCreated"
          @onChange="handleChange" @onDestroyed="handleDestroyed" @onFocus="handleFocus" @onBlur="handleBlur"
          @customAlert="customAlert" @customPaste="customPaste"></Editor>
      </div>
      <div class="mt-2">
        <el-upload class="avatar-uploader uploaderBox" action="http://eq2hen.natappfree.cc/u/upload/image"
          :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"
          :on-preview="handlePictureCardPreview" :on-remove="handleRemove" :on-error="handleAvatarError"
          :http-request="uploadFile">
          <img v-if="imageUrl" :src="imageUrl" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
        <el-dialog v-model="dialogVisible">
          <img w-full :src="imageUrl" alt="Preview Image" />
        </el-dialog>
      </div>
      <div class="mt-2">
        请选择话题：<el-tree-select v-model="chooseResult" :data="chooseData" :render-after-expand="false" />
      </div>
      <div class="d-flex mt-2 justify-content-end">
        <button class="btn btn-default btn-lg d-flex me-2" type="submit" id="saveText">保存草稿</button>
        <button class="btn btn-default btn-lg" type="submit" @click="submit">发表文章</button>
      </div>
    </div>
  </template>
   
  <script lang="ts" setup>
  
  import { ElNotification } from 'element-plus'
  import { ElMessage } from 'element-plus'
  import { onBeforeUnmount, ref, shallowRef, onMounted, reactive } from 'vue';
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
  import { DomEditor } from '@wangeditor/editor'
  import { useRouter, useRoute } from 'vue-router';
  import useBlogStore from '@/store/modules/blog'
  import useActionStroe from '@/store/modules/action'
  import userActionStroe from '@/store/modules/user'
  let blogStore = useBlogStore();
  let actionStore = useActionStroe();
  let userStore = userActionStroe();
  let $router = useRouter();
  let $route = useRoute();
  
  
  // 编辑器实例，必须用 shallowRef，重要！
  const editorRef = shallowRef();
  
  // 内容 HTML
  const valueHtml = ref('');
  
  //工具栏配置
  let toolbarConfig: {
    excludeKeys?: string[];
  } = {};
  toolbarConfig.excludeKeys = [
    "fullScreen",
    "insertTable",
    "deleteTable",
    "insertTableRow",
    "deleteTableRow",
    "insertTableCol",
    "deleteTableCol",
    "tableHeader",
    "tableFullWidth"
  ]
  
  // 模拟 ajax 异步获取内容
  onMounted(() => {
  
  });
  
  
  
  const editorConfig = { placeholder: '有什么新鲜事想分享给大家？' };
  
  // 组件销毁时，也及时销毁编辑器，重要！
  onBeforeUnmount(() => {
    const editor = editorRef.value;
    if (editor == null) return;
  
    editor.destroy();
  });
  
  // 编辑器回调函数
  const handleCreated = (editor: any) => {
    // console.log('created', editor);
    editorRef.value = editor; // 记录 editor 实例，重要！
  
    // 在编辑器创建后获取菜单项的 key 和默认配置
    // const allMenuKeys = editorRef.value.getAllMenuKeys();
  
    // const menuConfigs: Record<string, any> = {};
    // allMenuKeys.forEach((key: string) => {
    //   const config = editorRef.value.getMenuConfig(key);
    //   menuConfigs[key] = config;
    // });
  
    // console.log('菜单项的 key:', allMenuKeys);
    // console.log('菜单项的默认配置:', menuConfigs);
  };
  const handleChange = (editor: any) => {
    console.log('change:', editor.getHtml());
  };
  const handleDestroyed = (editor: any) => {
    console.log('destroyed', editor);
  
  };
  const handleFocus = (editor: any) => {
    console.log('focus', editor);
  };
  const handleBlur = (editor: any) => {
    console.log('blur', editor);
  };
  const customAlert = (info: string, type: string) => {
    alert(`【自定义提示】${type} - ${info}`);
  };
  const customPaste = (editor: any, event: ClipboardEvent, callback: (allowDefault: boolean) => void) => {
    console.log('ClipboardEvent 粘贴事件对象', event);
  
    // 返回值
    //callback(false); // 返回 false ，阻止默认粘贴行为
    callback(true) // 返回 true ，继续默认的粘贴行为
  };
  
  
  const mode = ref('default');
  //标题
  const title = ref('')
  //选择结果
  const chooseResult = ref('')
  const chooseData = reactive([
    {
      value: '美女',
      label: '美女',
      children: [
        {
          value: '美腿',
          label: '美腿',
          children: [
          {
              value: '猪头',
              label: '猪头',
            },
            {
              value: '丝袜',
              label: '丝袜',
            },
            {
              value: '黑丝',
              label: '黑丝',
            },
            {
              value: '白丝',
              label: '白丝',
            }, {
              value: '短袜',
              label: '短袜',
            }, {
              value: '小白袜',
              label: '小白袜',
            },
          ],
        },
        {
          value: '纯欲',
          label: '纯欲',
          children: [
            {
              value: '包臀裙',
              label: '包臀裙',
            },
            {
              value: '致命JK',
              label: '致命JK',
            },
            {
              value: '情趣睡衣',
              label: '情趣睡衣',
            }, {
              value: '校服',
              label: '校服',
            }
          ],
        },
      ],
    },
    {
      value: '汽车',
      label: '汽车',
      children: [
        {
          value: '跑车',
          label: '跑车',
          children: [
            {
              value: '劳斯莱斯',
              label: '劳斯莱斯',
            },
            {
              value: '布加迪',
              label: '布加迪',
            },
            {
              value: '宾利',
              label: '宾利',
            }
          ],
        },
        {
          value: '纯欲',
          label: '纯欲',
          children: [
            {
              value: '包臀裙',
              label: '包臀裙',
            },
            {
              value: '致命JK',
              label: '致命JK',
            },
            {
              value: '情趣睡衣',
              label: '情趣睡衣',
            }, {
              value: '校服',
              label: '校服',
            }
          ],
        },
      ],
    }
  ])
  const textAreaHeight = ref(200); // 初始高度为150px
  
  //照片区域
  import { Plus } from '@element-plus/icons-vue'
  
  import type { UploadProps } from 'element-plus'
  
  //上传照片
  const imageUrl = ref('')
  
  const handleAvatarSuccess: UploadProps['onSuccess'] = (
    response,
    uploadFile
  ) => {
    //发送成功
    // imageUrl.value = URL.createObjectURL(uploadFile.raw!)
    imageUrl.value = actionStore.uploadImage;
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
  

  //重写提交方法
  const uploadFile = async (item: any) => {
    let fileObj = item.file;
    const form = new FormData();
    form.append("file", fileObj);
    try {
      await actionStore.uploadImg(form);
    } catch (error) {
      ElNotification({
        type: 'error',
        message: (error as Error).message,
        duration: 3000, // 通知显示时间，单位毫秒
        showClose: true // 显示关闭按钮
      })
    }
  }
  
  
  const dialogImageUrl = ref('')
  const dialogVisible = ref(false)
  
  const handleRemove: UploadProps['onRemove'] = (uploadFile, uploadFiles) => {
    console.log(uploadFile, uploadFiles)
  }
  
  const handlePictureCardPreview: UploadProps['onPreview'] = (uploadFile) => {
    dialogImageUrl.value = uploadFile.url!
    dialogVisible.value = true
  }
  
  //提交submit
  const submitText = async () => {
    try {
      await actionStore.addBlog({
        post: {
          blog: {
            title: title.value,
            content: editorRef.value.getText(),
            introduction: editorRef.value.getHtml(),
            imageUrl: actionStore.uploadImage
          },
          tagContent: chooseResult.value,
        },
        userId: userStore.userid
      });
      ElNotification({
        type: 'success',
        message: '发表成功',
        duration: 3000, // 通知显示时间，单位毫秒
        showClose: true // 显示关闭按钮
      });

      actionStore.handlePop("editPop",false);
      console.log("执行了吗");
      
    } catch (error) {
      ElNotification({
        type: 'error',
        message: (error as Error).message,
        duration: 3000, // 通知显示时间，单位毫秒
        showClose: true // 显示关闭按钮
      });
      actionStore.handlePop("editPop",false);
    }
  }
  
  const submit = () => {
    submitText();
  }
  
  </script>
  <style scoped>
  #saveText {
    background: #ccc;
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
  
  .uploaderBox {
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