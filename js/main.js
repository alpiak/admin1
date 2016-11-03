// Set up KKPlayer
$(function() {
    var option = {
        autoPlay: false,//设置自动播放
        timeToHideControl: 0,//多少秒后隐藏控制器,0/不设置即不隐藏
        loop: false,//是否循环播放
        muted: false,//是否一开始就静音
        poster: 'http://7xni6e.com1.z0.glb.clouddn.com/ipad.png',//封面图
        preload: false,//是否自动加载
        src: ['http://images.apple.com/media/cn/ipad-pro/2016/8242d954_d694_42b8_b6b7_a871bba6ed54/films/feature/ipadpro-9-7inch-feature-cn-20160321_1280x720h.mp4']//视频地址
    };
    var kkplayer = new KKPlayer.create('myKKPlayer', option);
});

// Scroll to Top
$('.totop').hide();

$(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop()>300) {
            $('.totop').slideDown();
        } else {
            $('.totop').slideUp();
        }
    });
    $('.totop a').click(function(e) {
        e.preventDefault();
        $('body,html').animate({scrollTop: 0}, 500);
    });
});