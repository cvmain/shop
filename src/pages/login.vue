<template>
  <div class="content">
    <el-row class="login-container">
      <el-col :lg="16" :md="12" class="left">

        <div class="font-bold text-5xl text-light-50">欢迎光临!</div>

      </el-col>
      <el-col :lg="8" :md="12" class="right">
        <div class="font-bold text-2xl text-gray-800">
          欢迎回来
          <div>


          </div>
        </div>
        <div class="flex items-center justify-center my-5 space-x-2">
          <span class="line"></span>
          <span class="text-gray-300">账号密码登录</span>
          <span class="line"></span>
        </div>
        <el-form ref="formRef" :model="formUser" :rules="rules" class="w-[250px]">
          <el-form-item prop="username">
            <el-input v-model="formUser.username">
              <template #prefix>
                <i-ep-user></i-ep-user>
              </template>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input v-model="formUser.password" type="password" show-password>
              <template #prefix>
                <i-ep-lock></i-ep-lock>
              </template>
            </el-input>
          </el-form-item>
          <el-button type="primary" round class="w-[250px]" @click="onSubmit" :loading="loading">登 录</el-button>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script setup>
import { reactive, ref,onMounted,onBeforeUnmount } from 'vue';
import { login,getInfo } from "~/api/manager.js"
import {toast} from "../composables/util"
import { useRouter } from 'vue-router';
import {useStore} from "vuex"
const store = useStore()
const router = useRouter()
const formUser = reactive({
  username: '',
  password: ''

})
const loading = ref(false)
const rules = {
  username: [
    {
      required: true,
      message: '用户名不能为空',
      trigger: 'blur'
    }
  ],
  password: [
    {
      required: true,
      message: '密码不能为空',
      trigger: 'blur'
    }
  ]
}

const formRef = ref(null)
const onSubmit = () => {

  formRef.value.validate(valid => {
    if (valid) {
      loading.value = true
      login(formUser.username, formUser.password).then(res => {
        localStorage.setItem("token",res.token)
        toast("登陆成功")
        router.push("/")
        
      }).finally(() =>{
        loading.value = false
      })
    }
  })
  loading.value = false
}

function onKeyUp(e){
  if(e.key == "Enter") onSubmit()
}
onMounted(() =>{
  document.addEventListener("keyup",onKeyUp)
})
//移除监听事件
onBeforeUnmount(() =>{
  document.removeEventListener("keyup",onkeyup)
})


</script>

<style scoped>
.login-container {
  @apply bg-indigo-500 min-h-screen flex
}

.login-container .right {
  @apply flex items-center justify-center flex-col bg-light-100
}

.login-container .left {
  @apply flex items-center justify-center
}

.login-container .line {
  @apply bg-gray-300 h-[1px] w-16
}
</style>
