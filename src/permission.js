
import { toast ,showFullLoading,hideFullLoading } from "./composables/util";
import router from "./router/index"
import store from "./store";
router.beforeEach(async (to,from,next) =>{
    //显示loading
    showFullLoading()

    const token = localStorage.getItem("token")
    if(!token && to.path != "/login"){
        // 如果没有登陆
        toast("请先登录","warning")
        return next({path:"/login"})
    }
    if(token && to.path == "/login"){
        toast("请勿重复登陆","warning")
        return next({path:from.path ? from.path : "/"})
    }
 
    if(token){
        await store.dispatch("getinfo")
    }
    let title = (to.meta.title ? to.meta.title : "商城后台") + "--管理"
    document.title = title
    next()
        
    
})
router.afterEach((to, from) => {
    hideFullLoading()
})