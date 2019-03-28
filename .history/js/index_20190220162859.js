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

    //点击活动规则按钮
    $('.rule-btn').on('click',function(e){
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
});
