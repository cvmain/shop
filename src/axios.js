import axios from "axios";
import {toast} from "./composables/util"
const service = axios.create({
    baseURL:"/api"
})
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    const token = localStorage.getItem("token")
    if(token){
        config.headers["token"] = token
    }
    return config;
  }, function (error) {

    return Promise.reject(error);
  });


service.interceptors.response.use(function (response) {

    return response.data.data;
  }, function (error) {
    toast(error.response.data.msg,"error")
    return Promise.reject(error);
  });
export default service