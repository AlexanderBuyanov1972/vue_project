import { createStore } from "vuex";
import { postModule } from "./postModule";

export default createStore({
    state: {
        isAuth: false
    },
    modules: {
        post: postModule
    },
    // state: {
    //     likes: 5,
    //     isAuth: false,
    // },
    // getters: {
    //     doubleLikes(state) {
    //         return state.likes * 2
    //     }
    // },
    // mutations: {
    //     incrementLikes(state) {
    //         state.likes += 1
    //     },
    //     decrementLikes(state) {
    //         state.likes -= 1
    //     },
    //     isAuthorized(state) {
    //         state.isAuth = !state.isAuth
    //     },
    // },
    // actions: {

    // },
})