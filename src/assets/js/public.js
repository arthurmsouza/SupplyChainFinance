// 图片查看弹框
function pictureBox(url) {
    html = '<div class="bombBox" id="pictureBox">\
        <div class="pictureBox">\
            <img src="'+ url +'">\
        </div>\
        <div class="bombMask"></div>\
    </div>';
    $('body').append(html).css('overflow', 'hidden');
    // 取消或者关闭
    $('#pictureBox *').one('click', function(event) {
        $(this).closest('#pictureBox').remove();
        $('body').removeAttr('style');
    });
}
/*图片上传*/
function uploadFile(self, num){
    var objUrl;
    var img_html;
    var img_div = $(self).closest('.a-upload').siblings('.img_div');
    var filepath = $(self).val();
    if (num) {
        if (self.files.length > num) {
            jqtoast('上传图片不能超过'+ num + '张');
            return;
        }
    }
    for(var i = 0; i < self.files.length; i++) {
        objUrl = getObjectURL(self.files[i]);
        var extStart = filepath.lastIndexOf(".");
        var ext = filepath.substring(extStart, filepath.length).toUpperCase();
        /*鉴定每个图片上传尾椎限制*/
        if(ext != ".BMP" && ext != ".PNG" && ext != ".GIF" && ext != ".JPG" && ext != ".JPEG") {
            jqtoast('图片限于bmp,png,gif,jpeg,jpg格式');
            self.value = "";
            img_div.html("");
            img_div.find(".isImg:last").remove();
            return false;
        } else {
            /*若规则全部通过则在此提交url到后台数据库*/
            img_html = "<div class='isImg'><img src='" + objUrl + "' style='height: 100%; width: 100%;' /><button class='removeBtn'>x</button></div>";
            img_div.append(img_html);
        }
        
    }
    /*鉴定每个图片大小总和*/
    var file_size = 0;
    var all_size = 0;
    for(j = 0; j < self.files.length; j++) {
        file_size = self.files[j].size;
        all_size = all_size + self.files[j].size;
        var size = all_size / 1024;
        if(size > 500) {
            jqtoast('上传的图片大小不能超过100k！');
            img_div.find(".isImg:last").remove();
            if (j == self.files.length - 1) {
                self.value = "";
                return false;
            }
        }
    }
    return true;
}
$(document).on('click', '.img_div img', function(){
    pictureBox($(this).attr('src'));
})
$(document).on('click', '.img_div .removeBtn', function(){
    $(this).closest('.isImg').remove();
})
/*鉴定每个浏览器上传图片url 目前没有合并到Ie*/
function getObjectURL(file) {
    var url = null;
    if(window.createObjectURL != undefined) { // basic
        url = window.createObjectURL(file);
    } else if(window.URL != undefined) { // mozilla(firefox)
        url = window.URL.createObjectURL(file);
    } else if(window.webkitURL != undefined) { // webkit or chrome
        url = window.webkitURL.createObjectURL(file);
    }
    //console.log(url);
    return url;
}


/*alert弹出层*/
function jqalert(param) {
    var title = param.title,
        content = param.content,
        yestext = param.yestext,
        notext = param.notext,
        yesfn = param.yesfn,
        nofn = param.nofn,
        nolink = param.nolink,
        yeslink = param.yeslink,
        prompt = param.prompt,
        click_bg = param.click_bg;

    if (click_bg === undefined){
        click_bg = true;
    }
    if (yestext === undefined){
        yestext = '确认';
    }
    if (!nolink){
        nolink = 'javascript:void(0);';
    }
    if (!yeslink){
        yeslink = 'javascript:void(0);';
    }

    var htm = '';
    htm +='<div class="jq-alert" id="jq-alert"><div class="alert">';
    if(title) htm+='<h2 class="title">'+title+'</h2>';
    if (prompt){
        htm += '<div class="content"><div class="prompt">';
        htm += '<p class="prompt-content">'+prompt+'</p>';
        htm += '<input type="text" class="prompt-text"></div>';
        htm +='</div>';
    }else {
        htm+='<div class="content">'+content+'</div>';
    }
    if (!notext){
        htm+='<div class="fd-btn"><a href="'+yeslink+'" class="confirm" id="yes_btn">'+yestext+'</a></div>'
        htm+='</div>';
    }else {
        htm+='<div class="fd-btn">'+
            '<a href="'+nolink+'"  data-role="cancel" class="cancel">'+notext+'</a>'+
            '<a href="'+yeslink+'" class="confirm"  id="yes_btn">'+yestext+'</a>'+
            '</div>';
        htm+='</div>';
    }
    $('body').append(htm);
    var al = $('#jq-alert');
    al.on('click','[data-role="cancel"]',function () {
        al.remove();
        if (nofn){
            param.nofn();
            nofn = '';
        }
        param = {};
    });
    $(document).delegate('.alert','click',function (event) {
        event.stopPropagation();
    });
    $(document).delegate('#yes_btn','click',function () {
        setTimeout(function () {
            al.remove();
        },300);
        if (yesfn){
            param.yesfn();
            yesfn ='';
        }
        param = {};
    });
    if(click_bg === true){
        $(document).delegate('#jq-alert','click',function () {
            setTimeout(function () {
                al.remove();
            },300);
            yesfn ='';
            nofn = '';
            param = {};
        });
    }

}
/*toast 弹出提示*/
function jqtoast(text,sec) {
    var _this = text;
    var this_sec = sec;
    var htm = '';
    htm += '<div class="jq-toast" style="display: none;">';
    if (_this){
        htm +='<div class="toast">'+_this+'</div></div>';
        $('body').append(htm);
        $('.jq-toast').fadeIn();

    }else {
        jqalert({
            title:'提示',
            content:'提示文字不能为空',
            yestext:'确定'
        })
    }
    if (!sec){
        this_sec = 2000;
    }
    setTimeout(function () {
        $('.jq-toast').fadeOut(function () {
            $(this).remove();
        });
        _this = '';
    },this_sec);
}