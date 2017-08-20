$(function () {

    // when the website loading complete, run the function fadeOut after 2s
    $(document).ready(function () {
        $('.loading').delay(2000).fadeOut();
    });

    // middle animation
    var yellow_panel_animation = function () {
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

    // round title fadeIn after 0.8s
    var round_title_animation = function () {
        $('.round-title').delay(800).fadeIn();
    };

    // round content fadeIn after 0.8s
    var round_content_animation = function () {
        $('.round-content').delay(800).fadeIn();
    };

    // triangle fadeIn after 0.6s
    var triangle_up_animation = function () {
        $('.triangle-up').delay(600).fadeIn();
    };

    // yellow round marginLeft: -200px after 0.5s
    var yellow_round_animation = function () {
        $('.yellow-round').animate({
            marginLeft: '-200px'
        }, 500);
    };

    // black round marginLeft: -180px after 0.5s
    var black_round_animation = function () {
        $('.black-round').delay(200).animate({
            marginLeft: '-180px'
        }, 500);
    };

    yellow_panel_animation(); // run middle animation

});