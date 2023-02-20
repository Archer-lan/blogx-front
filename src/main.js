import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from "pinia";
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-light.css'

import {createRouter,createWebHistory} from "vue-router"
import Home from "./components/main/home/home"
import blogHeader from "@/components/main/blog/blog-header";
import blogDetail from "@/components/main/blog/blog-detail";
import project from "@/components/main/project/project";
const routes=[
    {
        path:'/',
        redirect:'/home',
    },
    {
        path:'/home',
        component: Home,
    },
    {
        path:'/blog',
        component: blogHeader,
    },
    {
        path:'/project',
        component: project,
    },
    {
        path:'/detail/:id/',
        component:blogDetail,
    },
]

const router=createRouter({
    history:createWebHistory(),
    routes,
})

const pinia=createPinia()

const Vue=createApp(App);

Vue.directive('highlight',function (el){
    let blocks=el.querySelectorAll('code');
    blocks.forEach((block)=>{
        hljs.highlightBlock(block);
    })
})
Vue.use(router).use(pinia).mount('#app')
