// 验证不为空
let checkUserName = value=>{
	if (value.length == 0) {
		return false;
	} else {
		return true;
	}
}

// 验证身份证号
let checkUserCardNoer = value=>{
	// 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X  
	let reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	if (reg.test(value)) {
		return true;
	}
	return false;
}

//验证纯数字
let IsInteger = value=>{
	if (value.trim().length != 0) {
		let reg = /^[0-9]*$/;
		if (!reg.test(value)) {
			return false;
		}
		return true;
	}
}

// 验证手机号
let checkPhone = value=>{
	if (!(/^1[345678]\d{9}$/.test(value))) {
		return false;
	}
	return true;
}

// 验证邮箱
let checkEmail = value=>{
	let reg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/g;
	if (reg.test(value)) {
		return true;
	}
	return false;
}

// 验证QQ
let checkQQ = value=>{
	let reg = /^\d{5,10}$/;
	if (reg.test(value)) {
		return true;
	}
	return false;
}

// 验证两位小数
let FloatInit = value=>{
	let reg = /^\d+(?:\.\d{0,8})?$/;
	if (reg.test(value)) {
		return true;
	}
	return false;
}

//验证纯中文
let Ischinese = value=>{
	if (value.trim().length != 0) {
		let reg = /^[\u4E00-\u9FA5]{1,5}$/;
		if (!reg.test(value)) {
			return false;
		}
		return true;
	}
}

// 验证时间格式
let checkTime = value=>{
    if (value.trim().length != 0) {
        let reg = /^[1-9]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;
        if(!reg.test(value)){
            //alert("时间格式不正确,正确格式为: 2014-01-01 12:00:00 "); 
            // 2017-12-29 13:12:38
            // 2014-01-01 12:00:00
        　　return false;
        }
        return true;
    }
};

// 验证日期格式
let checkdate = value=>{
    if (value.trim().length != 0) {
        let reg = /^((?:19|20)\d\d)-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/;
        if(!reg.test(value)){
        　　return false;
        }
        return true;
    }
};
// 验证url 合法性
let IsURL = value=>{
    let strRegex = "^((https|http|ftp|rtsp|mms)?://)"
    + "?(([0-9a-z_!~*'().&=+$%-]+: )?[0-9a-z_!~*'().&=+$%-]+@)?" //ftp的user@
    + "(([0-9]{1,3}\.){3}[0-9]{1,3}" // IP形式的URL- 199.194.52.184
    + "|" // 允许IP和DOMAIN（域名）
    + "([0-9a-z_!~*'()-]+\.)*" // 域名- www.
    + "([0-9a-z][0-9a-z-]{0,61})?[0-9a-z]\." // 二级域名
    + "[a-z]{2,6})" // first level domain- .com or .museum
    + "(:[0-9]{1,4})?" // 端口- :80
    + "((/?)|" // a slash isn't required if there is no file name
    + "(/[0-9a-z_!~*'().;?:@&=+$,%#-]+)+/?)$";
    let re=new RegExp(strRegex);
    //re.test()
    if (re.test(value)){
        return (true);
    }else{
        return (false);
    }
}

// 导出验证
export {
    checkUserName,              // 验证不为空
    checkUserCardNoer,          // 验证身份证号
    IsInteger,                  //验证纯数字
    checkPhone,                 // 验证手机号
    checkEmail,                 // 验证邮箱
    checkQQ,                    // 验证QQ
    FloatInit,                  // 两位小数验证
    Ischinese,                  //验证纯中文
    checkTime,                  // 验证时间格式
    checkdate,                  // 验证日期格式
    IsURL                       // 验证url 合法性
}




