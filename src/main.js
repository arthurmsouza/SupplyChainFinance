import Vue from "vue";
import App from "@/App";
import router from "./router";

// import $ from 'jquery'
import '@/directives/jquery-vender.js'
/*  Bootstrap 3.3.7  */
// import 'assets/bootstrap/css/bootstrap.min.css'  
// import 'assets/bootstrap/js/bootstrap.min'

/* admin-lte 集成样式 */
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min'

// import 'admin-lte'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'font-awesome/css/font-awesome.css'
// import 'admin-lte/dist/css/AdminLTE.min.css'
// import 'admin-lte/dist/css/skins/_all-skins.min.css'





/* custom public */
import "assets/css/public.css";
/* custom fonts icon */
import "assets/fonts/iconfont.css";

//关闭生产环境的提示
Vue.config.productionTip = false;

// 引用API文件
import api from '@/api/index.js'
// 将API方法绑定到全局
Vue.prototype.$api = api

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	components: { App },
	template: "<App/>"
});
