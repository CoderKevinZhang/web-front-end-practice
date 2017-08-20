$(function () {

    $(document).ready(function () {
        $('.loading').delay(2000).fadeOut();
    });

    var yellow_panel_animation = function () { // 过场动画
        $('.yellow-panel').delay(2400).animate({
            bottom: 0
        }, 600, function () {
            $('.dark-blue-round').stop().animate({
                width: '+=1800px',
                height: '+=1800px',
                margin: '-=900px 0 0 -=900px'
            }, 600, function () {
                $('.yellow-panel').css('display', 'none');
                yellow_round_animation();
                black_round_animation();

                round_title_animation();
                round_content_animation();
                triangle_up_animation();
            })
        });
    };

    var round_title_animation = function () {
        $('.round-title').delay(800).fadeIn();
    };

    var round_content_animation = function () {
        $('.round-content').delay(800).fadeIn();
    };

    var triangle_up_animation = function () {
        $('.triangle-up').delay(600).fadeIn();
    };

    var yellow_round_animation = function () {
        $('.yellow-round').animate({
            marginLeft: '-200px'
        }, 500);
    };

    var black_round_animation = function () {
        $('.black-round').delay(200).animate({
            marginLeft: '-180px'
        }, 500);
    };

    yellow_panel_animation(); // 执行过场动画

});