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
    //是否是本网用户 默认本网用户
    var CM = true;

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
    var partNum, // 0 头 1 角 2 身 3 爪 4 尾
        partChecked = false;
    $('#partList').on('click','li',function(){
        var $this = $(this);
        $this.addClass('act').siblings().removeClass('act');
        partNum = $this.index();
        partChecked = true;
    });
    //选择部位弹窗确定按钮
    $('#firstModelBtn').on('click', function () {
        if (partChecked) {
            $('.tc-1').hide();
            if (register) {
                switch (partNum) {
                    case 0:
                        $('.part').text('龙头');
                        $('#dragon').children('li:nth-child(1)').addClass('act');
                        break;
                    case 1:
                        $('.part').text('龙角');
                        $('#dragon').children('li:nth-child(2)').addClass('act');
                        break;
                    case 2:
                        $('.part').text('龙身');
                        $('#dragon').children('li:nth-child(3)').addClass('act');
                        break;
                    case 3:
                        $('.part').text('龙爪');
                        $('#dragon').children('li:nth-child(4)').addClass('act');
                        break;
                    case 4:
                        $('.part').text('龙尾');
                        $('#dragon').children('li:nth-child(5)').addClass('act');
                        break;
                }
                if(!CM){//同网
                    $('.tc-3').show();
                }else{//异网
                    $('.tc-10').show();
                }
                
            } else {
                hideMask();
                $('.main').hide();
                $('.telephone').show();
            }
        }
    });

    //第一次获得奖励弹窗关闭&确定按钮  点亮一个部位 
    $('.firstLight').on('click',function(){
        $('.tc-3').hide();
        hideMask();
    });


    



    //复制兑换码
    var clipboard = new ClipboardJS('#copy-btn');
    clipboard.on('success', function (e) {
        $('#copy-btn').addClass('act').text('已复制');
        e.clearSelection();
        console.log(e.clearSelection);
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
