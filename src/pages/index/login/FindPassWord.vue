<template>
    <div>
        <headerNormal></headerNormal>
        <div class="bgAuto ptb70" style="background-image:url(../static/img/loginBg.png);">
            <div class="formLogin loginBox prl90 pdt60 pdb60">
                <div class="black2 tc fz20">忘记密码</div>
                <form name="" action="">
                    <ul class="loginList">
                        <li><input type="text" class="login-control" name="phone" placeholder="手机号"></li>
                        <li class="clearfix"><input type="text" class="login-control wb55 fl" name="yzCode" placeholder="验证码"><input type="button" class="wb40 fr login-btn aradius4" value="获取验证码"></li>
                        <li><input type="text" class="login-control" name="newpwd" placeholder="新密码"></li>
                        <li><input type="text" class="login-control" name="confirmpwd" placeholder="确认密码"></li>
                        <li><input type="button" class="btn btn-warning aradius20 wb100 mb20" value="提交"></li>
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
	name: 'FindPassWord',
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

