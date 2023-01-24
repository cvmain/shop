<template>
  <div class="">
    首页
    {{$store.state.user.username}}
    <el-button @click="handleLogout">退出登录</el-button>
  </div>
</template>

<script setup>
import {useStore} from "vuex"
import {showModul,toast} from "../composables/util"
import {logout} from "~/api/manager"
import {useRouter} from "vue-router"
const router = useRouter()


const store = useStore()
function handleLogout(){
    showModul("确定要退出登录吗","warning","提示").then(res =>{
      logout().finally(() =>{
        store.dispatch("logout")
        router.push("/login")
        toast("退出成功","success")
      })
    })
}
</script>

<style scoped>
  
</style>
