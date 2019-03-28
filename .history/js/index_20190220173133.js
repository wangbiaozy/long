(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
$(function(){
    //是否关注公众号
    var attention = true;
    //是否是注册用户
    var register = true;

    //点击活动规则按钮
    var ruleFlag;
    $('.rule-btn').on('click',function(){
        $('.rule').show().siblings().hide();
        if($(this).parent().parent().attr('id') === 'home'){
            ruleFlag = 0;
        }else{
            ruleFlag = 1;
        }
    });
    //活动规则页确定按钮
    $('#rule-back').on('click',function(){
        $('.rule').hide();
        if(!ruleFlag){
            $('.home').show();
        }else{
            $('.main').show();
        }
    });

    //首页开始按钮
    $('#start').on('click',function(){
        $('.home').hide();
        if(attention){
            $('.main').show();
            showMask();
            $('.tc-1').show();
        }else{
            $('.attention').show();
        }
    });

    //选择部位
    var partNum; // 0 头 1 角 2 身 3 爪 4 尾
    $('#partList').on('click','li',function(){
        var $this = $(this);
        $this.addClass('act').siblings().removeClass('act');
        partNum = $this.index();
    });
    //选择部位弹窗确定按钮
    $('#firstModelBtn').on('click',function(){
        $('.tc-1').hide();
        if(register){
            $('.tc-3').show();
        }else{
            hideMask();
            $('.telephone').show();
        }
    });




    //全部点亮弹窗光动画
    function move(){
        $('#guang').addClass('act')
        var timer = window.setTimeout(function(){
            $('#guang').removeClass('act');
            window.clearTimeout(timer);
        },500);
    }
    window.setInterval(function(){
        move();
    },1000);






    //关闭弹窗
    $('.close').on('click',function(){
        $(this).parent().hide();
        hideMask();
    });
    //显示遮罩层
    function showMask(){
        $("#mask").css("height",$(document).height());
        $("#mask").css("width",$(document).width());
        $("#mask").show();
        $('body').css('position','fixed');
    }
    //隐藏遮罩层
    function hideMask(){
        $("#mask").hide();
        $('body').css('position','unset');
    }
});
