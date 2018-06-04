import Vue from 'vue'
// 时间戳转日期   1527835409 => 2018-6-1 14:43:29
Vue.filter('dateformat', value => {
	let years = new Date(value * 1000).getFullYear();
	let months = parseInt(new Date(value * 1000).getMonth() + 1);
	let days = new Date(value * 1000).getDate();
	let hour = new Date(value * 1000).getHours();
	let minute = new Date(value * 1000).getMinutes();
	let second = new Date(value * 1000).getSeconds();

	// 不够两位补0
	if (months < 10) {
		months = "0" + months;
	}
	if (days < 10) {
		days = "0" + days;
	}
	if (hour < 10) {
		hour = "0" + hour;
	}
	if (minute < 10) {
		minute = "0" + minute;
	}
	if (second < 10) {
		second = "0" + second;
	}
	let str = years + "-" + months + "-" + days + " " + hour + ":" + minute + ":" + second
	return str;
});

// 日期转时间戳  2018-6-1 14:43:29 => 1527835409
Vue.filter('formatdate', value => {
	return Date.parse(new Date(value.replace(/-/g, "/"))) / 1000;
});

//金钱三位一逗号，小数点保留四位
Vue.filter('money', val => {
	val = val.toString().replace(/\$|\,/g, '');
	if (isNaN(val)) {
		val = "0";
	}
	let sign = (val == (val = Math.abs(val)));
	val = Math.floor(val * 100 + 0.50000000001);
	let cents = val % 100;
	val = Math.floor(val / 100).toString();
	if (cents < 10) {
		cents = "0" + cents
	}
	for (let i = 0; i < Math.floor((val.length - (1 + i)) / 3); i++) {
		val = val.substring(0, val.length - (4 * i + 3)) + ',' + val.substring(val.length - (4 * i + 3));
	}

	return (((sign) ? '' : '-') + val + '.' + cents);
})

//电话号码过滤，186****0734
Vue.filter('telFormat', function (value) {
	if (value) {
		return value.replace(/^(.{3})(?:\d+)(.{4})$/, "$1****$2");
	}
});
// 过滤身份证号   110223*******727X
Vue.filter('cardFormat', function (value) {
	if (value) {
		return value.replace(/^(.{6})(?:\d+)(.{4})$/, "$1*******$2")
	}
});

// 获取过滤器 导出
let dateformat = Vue.filter('dateformat');
let money = Vue.filter('money');
let formatdate = Vue.filter('formatdate');
let telFormat = Vue.filter('telFormat');
let cardFormat = Vue.filter('cardFormat');

export default {
	dateformat,
	money,
	formatdate,
    telFormat,
    cardFormat
};
