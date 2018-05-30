// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import $ from 'jquery'

/*  Bootstrap 3.3.7  */
import 'assets/bootstrap/css/bootstrap.min.css'  
import 'assets/bootstrap/js/bootstrap.min'

/* Font Awesome */
import 'font-awesome/css/font-awesome.min.css'; 
/* Ionicons */
// import "assets/css/ionicons.css";
import 'ionicons/dist/css/ionicons.min.css'; 
/* Theme style */
import "assets/css/AdminLTE.css";
/* AdminLTE Skins */
import "assets/css/skins/_all-skins.css";
/* public */
import "assets/css/public.css";
/* custom fonts icon */
import "assets/fonts/iconfont.css";

//关闭生产环境的提示
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
	el: "#app",
	router,
	components: { App },
	template: "<App/>"
});
