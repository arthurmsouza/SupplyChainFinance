<template>
    <div class="row pd15 w1440 mauto clearfix">
        <img class="pull-left" src="http://iph.href.lu/180x30?text=logo占位图&fg=ff0000&bg=fefedd">
        <div class="pull-right fz16 flh30 fw400">
            <span class="gray">{{msg}}，</span>
            <a href="login.html" class="text-yellow mr10">登录</a>|
            <a class="ml10 gray" href="register.html">注册</a>
            <a class="ml20 gray" href="helpCenter.html">
                <i class="iconfont icon-wenhao"></i> 帮助中心</a>
        </div>
    </div>
</template>
<script>
export default {
	name: 'header_index',
	data() {
		return {
			msg: '欢迎来到潞盈',
		};
	}
};
</script>
</script>