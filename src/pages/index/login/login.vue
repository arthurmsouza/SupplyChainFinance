<template>
    <div>
        <headerNormal></headerNormal>
        <div class="bgAuto ptb70" style="background-image:url(../dist/img/loginBg.png);">
            <div class="formLogin loginBox prl90 pdt70 pdb110">
                <div class="black2 tc fz20">登录</div>
                <form name="" action="">
                    <ul class="loginList">
                        <li>
                            <i class="iconfont icon-yonghu"></i><input type="text" class="login-control" name="username" placeholder="请输入用户名"></li>
                        <li>
                            <i class="iconfont icon-suo"></i><input type="password" class="login-control" name="pwd" placeholder="请输入密码"></li>
                        <li>
                            <a class="btn btn-warning aradius20 wb100 mb20" href="financing/essentialInfo.html">登录</a>
                            <a class="fl gray2 fz14" href="register.html">立即注册</a>
                            <a class="fr gray2 fz14" href="resetPwd.html">忘记密码</a>
                        </li>
                    </ul>
                </form>
            </div>
        </div>
        <TPfooter></TPfooter>
    </div>
</template>
<script>

import headerNormal from '@/components/index/header_normal';
import TPfooter from '@/components/index/footer';
export default {
	name: 'login',
	data() {
		return {
			msg: '欢迎来到潞盈',
		};
	},
	components: {
		headerNormal,
		TPfooter
	},
};
</script>
<style>
</style>

