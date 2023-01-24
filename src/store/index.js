import { createStore } from "vuex"
import { getInfo } from "../api/manager"
import {useRouter} from "vue-router"
const store = createStore({
    state() {
        return {
            //用户信息
            user: {}
        }
    },
    mutations: {
        setUserInfo(state, user) {
            state.user = user
        }
    },
    actions: {
        getinfo({ commit }) {
            return new Promise((resolve,reject) =>{
                getInfo().then(res => {
                    commit("setUserInfo", res)
                    resolve(res)
                })
                .catch(err =>reject(err))
            })
        },
        logout({commit}){
            localStorage.removeItem("token")
            commit("setUserInfo",{})
        }

    }
})
export default store