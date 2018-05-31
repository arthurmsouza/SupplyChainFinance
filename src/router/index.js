import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import admin from '@/pages/admin/index'
import login from "@/pages/index/login/login";

Vue.use(Router)

export default new Router({
    mode: 'history',
	routes: [{
        path: '/',
        name: 'index',
        component: index
    },{
        path: '/login',
        name:'login',
        component: login
    },{
        path: '/admin',
        name: 'admin',
        component: admin
    }]
})
