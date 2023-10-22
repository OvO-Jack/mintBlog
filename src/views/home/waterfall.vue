
<template>
    <div @mouseenter="showMask" @mouseleave="hideMask"></div>
    <div v-bind="$attrs" class="m-waterfall-js" ref="waterfall" :style="`width: ${totalWidth}; height: ${height}px;`">
        <div class="box">
            <Spin class="m-img"
                :style="`width: ${property.width}px; height: ${property.height}px; top: ${property && property.top}px; left: ${property && property.left}px;`"
                :spinning="!loaded[index]" size="small" indicator="dynamic-circle"
                v-for="(property, index) in imagesProperty" :key="index">
                <div class="wrapper" :style="`width: ${property.width}px; height: ${property.height}px;`">
                    <div class="boxActive"
                        :style="`width: ${property.width}px; height: ${property.height}px;--width: ${property.width}px; --height: ${property.height}px;`">
                    </div>
                    <div class="imgBox">
                        <img class="u-img" :src="imagesTotal[index].src" @load="onLoaded(index)" />
                        <div class="mask" :style="`width: ${property.width}px; height: ${property.height}px;`"
                            v-show="isHover">
                        </div>
                    </div>
                </div>
            </Spin>
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, computed, watch, onMounted, onBeforeMount, reactive, toRefs, nextTick } from 'vue'
import Spin from './spin.vue'
import useBlogStore from '@/store/modules/blog'
import useActionStroe from '@/store/modules/action'
import userActionStroe from '@/store/modules/user'
let blogStore = useBlogStore();
let actionStore = useActionStroe();
let userStore = userActionStroe();


const imagesTotal = reactive<any[]>([
    {
        "src": "http://uniapp.mintac.cn/2023/10/14857934013a42420e99c9822eb670cbda.jpg"
    },
    {
        "src": "http://uniapp.mintac.cn/2023/10/134f6acf810cfb461ebd9c7211b619973b.jpg"
    },
    {
        "src": "http://uniapp.mintac.cn/2023/10/13c114b814132242078b9a4e6a274e300f.jpg"
    },
    {
        "src": "http://uniapp.mintac.cn/2023/10/13c435b565a0094e6ca0e61d5f7af1824e.jpg"
    }
])


function loadImages() {

    for (let i = 0; i < blogStore.currentBlogDatas.length; i++) {
        imagesTotal.push({
            src: blogStore.currentBlogDatas[i].imageUrl
        })
    }
    console.log(imagesTotal[0].src);

}

const getCurrentData = async () => {
    try {
        await blogStore.getCurrentBlogDatas();
        loadImages();
    } catch (error) {

    }
}



/*
  mode: JS
  使用JS获取每张图片宽高，结合relative和absolute定位计算每个图片的位置top，left，
  保证每张新的图片都追加在当前高度最小的那列末尾
*/

interface Props {
    columnCount?: number // 要划分的列数
    columnGap?: number // 各列之间的间隙
}
const props = withDefaults(defineProps<Props>(), {
    columnCount: 3,
    columnGap: 15,
    width: '100%',
})
const totalWidth = computed(() => {
    if (typeof props.width === 'number') {
        return props.width + 'px'
    } else {
        return props.width
    }
})

const imagesProperty = ref<any[]>([])
const preColumnHeight = ref<number[]>([]) // 每列的高度
const waterfall = ref()

const imageWidth = ref()
const height = computed(() => {
    return Math.max(...preColumnHeight.value) + props.columnGap
})


const len = computed(() => {
    return imagesTotal.length
})
const loaded = ref(Array(len.value).fill(false)) // 图片是否加载完成
watch(
    () => imagesTotal,
    (to) => {
        onPreload();
    }
)

const js = () => {
    let wrappers = document.querySelectorAll('.wrapper');
    wrappers.forEach((wrapper) => {
        wrapper.addEventListener('mouseenter', (event) => {
            console.log('Mouse entered:', event);
        });

        wrapper.addEventListener('mouseleave', (event) => {
            console.log('Mouse left:', event);
        });
    });
}

onMounted(() => {
    getCurrentData();
    onPreload();

    
    // watch(loaded, (newVal) => {
    //     if (newVal.every((value) => value)) {
    //         console.log("All images loaded")
    //     }
    // });
})
function onLoaded(index: number) {
    loaded.value[index] = true
}
function getPosition(i: number, height: number) { // 获取图片位置信息（top，left）
    if (i < props.columnCount) {
        preColumnHeight.value[i] = props.columnGap + height
        return {
            top: props.columnGap,
            left: (imageWidth.value + props.columnGap) * i + props.columnGap
        }
    } else {
        const top = Math.min(...preColumnHeight.value)
        var index = 0
        for (let n = 0; n < preColumnHeight.value.length; n++) {
            if (preColumnHeight.value[n] === top) {
                index = n
                break
            }
        }
        preColumnHeight.value[index] = top + props.columnGap + height
        return {
            top: top + props.columnGap,
            left: (imageWidth.value + props.columnGap) * index + props.columnGap
        }
    }
}
function loadImage(url: string, n: number) {
    return new Promise((resolve) => {
        const image = new Image();
        image.src = url;
        image.onload = function () {

            // 图片加载完成时执行
            const imgHeight = image.height / (image.width / imageWidth.value);



            // 计算总高度
            const totalHeight = imgHeight + 20;

            imagesProperty.value[n] = {
                width: imageWidth.value,
                height: totalHeight, // 使用总高度
                ...getPosition(n, totalHeight) // 更新位置信息
            };

            resolve('load');
        }
    });
}
async function onPreload() { // 计算图片宽高和位置（top，left）
    // 计算每列的图片宽度
    imageWidth.value = (waterfall.value.offsetWidth - (props.columnCount + 1) * props.columnGap) / props.columnCount
    const len = imagesTotal.length
    imagesProperty.value.splice(len)
    for (let i = 0; i < len; i++) {
        await loadImage(imagesTotal[i].src, i)
    }
}


//蒙版

const isHover = ref(false);
const showMask = () => {
    alert(123)

    isHover.value = true;
}
const hideMask = () => {
    isHover.value = false
}


</script>
<style lang="scss" scoped>
.m-waterfall-js {
    position: relative;
    border-radius: 8px;

    .box {

        .m-img {
            position: absolute;

            .wrapper {
                position: relative;

                .boxActive {
                    position: relative;
                    background: rgba(0, 0, 0, 0.8);
                    border-radius: 15px;
                    line-height: 300px;

                    overflow: hidden;
                }

                .boxActive::before {
                    content: "";
                    position: absolute;
                    top: -10%;
                    left: 10%;
                    width: var(--width);
                    height: 120%;
                    background: linear-gradient(#00ccff, #d500f9);
                }

                .boxActive::before {
                    animation: rotate 4s linear infinite;
                }

                @keyframes rotate {
                    from {
                        transform: rotate(0deg);
                    }

                    to {
                        transform: rotate(360deg);
                    }
                }

                .imgBox {
                    .u-img {
                        width: calc(100% - 10px);
                        height: calc(100% - 10px);
                        position: absolute;
                        top: 0;
                        left: 0;
                        margin: 5px;
                        border-radius: 20px;
                        border-radius: 8px;
                        display: inline-block;
                        vertical-align: bottom;
                    }

                    .mask {
                        position: absolute;
                        top: 0;
                        left: 0;
                        background: rgba(0, 0, 0, 0.8);
                        opacity: 0;
                        transition: opacity 0.5s ease;
                        /* 添加过渡效果 */
                        border-radius: 20px;
                    }
                }

            }
        }
    }


}

.m-waterfall-css {
    border-radius: 8px;

    .u-img {
        border-radius: 8px;
        width: 100%;
        height: 100%;
        display: inline-block;
        vertical-align: bottom;
    }
}
</style>