import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router/index"

import 'element-plus/dist/index.css'
import 'virtual:windi.css'
import store from "./store/index"

const app = createApp(App)
app.use(router)
import "./permission"
import "nprogress/nprogress.css"
app.use(store)
app.mount('#app')
