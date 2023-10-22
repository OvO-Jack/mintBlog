import SvgIcon from './SvgIcon/index.vue'
import Pagination from './Pagination/index.vue'
import HeaderNavbar from './headerNavbar/index.vue'
import Introduction from './Introduction/index.vue'
import IndexHeaderNavbar from './headerIndexNavbar/index.vue'
import SearchPopup from './popupSearch/index.vue'
import CanvasMenu from './canvasMenu/index.vue'
import PostCarouselWidget from './postCarouselWidget/index.vue'
import BlogAction from './blogAction/index.vue'
import PersonalHeader from './headerPersonal/index.vue'
import EditPopup from './popupEdit/index.vue'
import UserChangePopup from './popupUserChange/index.vue'
import TopicPost from './postTopic/index.vue'
import PostPopular from './postPopular/index.vue'
import PostTags from './postTags/index.vue'
const allGlobalComponent = {SvgIcon,Pagination,HeaderNavbar,Introduction,IndexHeaderNavbar,SearchPopup,CanvasMenu,PostCarouselWidget,BlogAction,PersonalHeader,EditPopup,UserChangePopup,TopicPost,PostPopular,PostTags}

export default{
    //务必叫做install方法
    install(app:any){
        //注册项目全部的全局组件
        Object.keys(allGlobalComponent).forEach(key=>{
            //@ts-ignore
            app.component(key,allGlobalComponent[key]);
        })
    }
}