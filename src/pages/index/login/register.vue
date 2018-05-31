<template>
    <div>
        <headerNormal></headerNormal>
        <div class="bgAuto ptb70" style="background-image:url(../static/img/loginBg.png);">
            <div class="formLogin loginBox prl90 pdt60 pdb60">
                <div class="black2 tc fz20">欢迎来到潞盈金服</div>
                <form name="" action="">
                    <ul class="registerList">
                        <li><input type="text" class="login-control mr30" name="username" placeholder="用户名">
                            <span class="hintText">6-20位字母或数字组合，首位应为字母，区分大小写</span>
                        </li>
                        <li><input type="text" class="login-control mr30" name="email" placeholder="邮箱">
                            <span class="hintText">请输入有效的电子邮箱</span>
                        </li>
                        <li><input type="text" class="login-control mr30" name="pwd" placeholder="密码">
                            <span class="hintText">8-20位字母或数字组合，区分大小写</span>
                        </li>
                        <li><input type="text" class="login-control mr30" name="confirmpwd" placeholder="确认密码">
                            <span class="hintText">请再次输入密码</span>
                        </li>
                        <li><input type="text" class="login-control mr30" name="phone" placeholder="手机号">
                            <span class="hintText">请输入有效的手机号</span>
                        </li>
                        <li>
                            <div class="w250 clearblock mr30"><input type="text" class="login-control wb55 fl" name="yzCode" placeholder="验证码"><input type="button" class="wb40 fr login-btn aradius4" value="获取验证码"></div>
                            <span class="hintText">请输入有效的手机号</span><br>
                            <label class="fz12 mt10"><input type="checkbox" class="mr6" name="">我已阅读并同意
                                <a href="">潞盈金服服务协议</a>
                            </label>
                        </li>
                        <li class="tc"><input type="button" class="btn btn-warning aradius20 wb45 mb20" value="注册"></li>
                    </ul>
                </form>
            </div>
        </div>
        <FooterNormal></FooterNormal>
    </div>
</template>
<script>
import headerNormal from '@/components/index/header_normal';
import FooterNormal from '@/components/index/footer_normal';
export default {
	name: 'register',
	data() {
		return {
			msg: '欢迎来到潞盈',
		};
	},
	components: {
        headerNormal,
        FooterNormal
	},
};
</script>
<style>
</style>

