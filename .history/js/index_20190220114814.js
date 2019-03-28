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
    //全部点亮弹窗光动画
    function move(){
        console.log(1)
        $('#guang').addClass('act');
        console.log(2)
        $('#guang').removeClass('act').delay(1000);
    }
    window.setInterval(function(){
        /* console.log(1)
        $('#guang').addClass('act'); */
        move();
        
    },500);
});
