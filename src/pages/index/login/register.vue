<template>
    <div>
        <headerNormal></headerNormal>
        <div class="bgAuto ptb70" style="background-image:url(../static/img/loginBg.png);">
            <div class="formLogin loginBox prl90 pdt60 pdb60">
                <div class="black2 tc fz20">欢迎来到潞盈金服</div>
                <form>
                    <ul class="registerList">
                        <li><input type="text" class="login-control mr30" name="username" placeholder="用户名" v-model="username">
                            <span class="hintText">6-20位字母或数字组合，首位应为字母，区分大小写</span>
                        </li>
                        <li><input type="text" class="login-control mr30" name="email" placeholder="邮箱" v-model="email">
                            <span class="hintText">请输入有效的电子邮箱</span>
                        </li>
                        <li><input type="password" class="login-control mr30" name="password" placeholder="密码" v-model="password">
                            <span class="hintText">8-20位字母或数字组合，区分大小写</span>
                        </li>
                        <li><input type="password" class="login-control mr30" name="passwordConfirm" placeholder="确认密码" v-model="passwordConfirm">
                            <span class="hintText">请再次输入密码</span>
                        </li>
                        <li><input type="text" class="login-control mr30" name="mobile" placeholder="手机号" v-model="mobile">
                            <span class="hintText">请输入有效的手机号</span>
                        </li>
                        <li>
                            <div class="w250 clearblock mr30"><input type="text" class="login-control wb55 fl" name="smsCode" placeholder="验证码" v-model="smsCode"><input type="button" class="wb40 fr login-btn aradius4" value="获取验证码"></div>
                            <span class="hintText">请输入有效的手机号</span><br>
                            <label class="fz12 mt10"><input type="checkbox" class="mr6" name="protocol" v-model="protocol" value="protocol">我已阅读并同意
                                <a href="">潞盈金服服务协议</a>
                            </label>
                        </li>
                        <li class="tc"><input @click="checkFrom" type="button" class="btn btn-warning aradius20 wb45 mb20" value="注册"></li>
                    </ul>
                    <dialog-bar v-model="dialog.sendVal" v-bind:type = "dialog.type" v-bind:title = "dialog.title"  v-bind:content= "dialog.content" v-bind:dangerText = "dialog.dangerText" @cancel="clickCancel()" @danger="clickDanger()" @confirm="clickConfirm()"></dialog-bar>
                </form>
            </div>
        </div>
        <FooterNormal></FooterNormal>
    </div>
</template>
<script>
import headerNormal from '@/components/index/header_normal';
import FooterNormal from '@/components/index/footer_normal';
import dialogBar from '@/components/index/alert'
// import { register_save } from "@/API/index";

export default {
	name: 'register',
	data() {
		return {
            username:'xuyue',
            password:'xuyue730',
            email:'xuyue_730@163.com',
            mobile:'18611650734',
            passwordConfirm:'xuyue730',
            smsCode:'1234',
            protocol:'',
            dialog:{    //弹窗内容设置
                "sendVal": false,
                "type":'confirm',
                "title":'标题',
                "content":'',
                "dangerText":'确定'
            }
		};
    },
    mounted () {
        console.log(this.protocol);
        // register_save(data).then(res=>{
        //     console.log(res);
        // }).catch(err=>{
        //     console.log(err);
        // });
    },
    methods:{
        //检查表单项
        checkFrom (){
            if (this.protocol ==''&&this.protocol==false) {
                this.openMask("潞盈金服服务协议","您已经阅读过潞盈金服服务协议了吗？如果阅读了，请勾选我已阅读并同意!");
            }
        },
        openMask(title,content){    //打开弹窗，设置内容
            console.log(this.protocol);
            this.dialog.sendVal = true;
            this.dialog.title = title;
            this.dialog.content = content;
        },
        clickCancel(){      // 点击取消
            console.log('点击了取消');
        },
        clickDanger(){      //type为danger时 点击确定回调
            console.log('这里是danger回调')
        },
        clickConfirm(){     //type为confirm时 点击确定回调
            console.log('点击了confirm');
        }
    },
	components: {
        headerNormal,
        FooterNormal,
        dialogBar
	},
};
</script>
<style>
</style>

