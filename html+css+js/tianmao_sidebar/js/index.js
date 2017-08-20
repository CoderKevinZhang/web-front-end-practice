$(function(){
	var cur = -99;

	$('#side_bar .box').hover(function(){

		// give current Object background-color: #FF0036
		$(this).css('background-color', '#FF0036');

		$(this).find('.crr').css({'display':'block', 'opacity':'0'});
		$(this).find('.side-text').css({'display':'block', 'opacity':'0'});

		$(this).find('.crr').stop();
		$(this).find('.side-text').stop();

		// give current div with class = 'crr' animation
		$(this).find('.crr').delay(300).animate({
			left: '-6px',
			opacity: '1'
		}, 300);

		// give current div with class = 'side-text' animation
		$(this).find('.side-text').delay(300).animate({
			right: '35px',
			opacity: '1'
		}, 300);

	}, function(){

		// give current Object background-color: #000
		$(this).css('background-color', '#000');

		$(this).find('.crr').animate({
			left: '-41px',
			opacity: '0'
		}, 300, function(){
			// when animation is finished, hide current div
			$(this).css('display', 'none');
		});

		$(this).find('.side-text').animate({
			right: '70px',
			opacity: '0'
		}, 300, function(){
			// when animation is finished, hide current div
			$(this).css('display', 'none');
		});
	})

	// give div with id:shopping_car mouseover event
	$('#side_bar #shopping_car').mouseover(function(){
		$('#side_bar #shopping_car').css('background-color', '#FF0036');
		$('#side_bar #shopping_car .car-logo').css('display', 'none');
		$('#side_bar #shopping_car .car-logo-on').css('display', 'block');
		$('#side_bar #shopping_car .car-border').remove();
	});

	// give div with id:shopping_car mouseover event
	$('#side_bar #shopping_car').mouseout(function(){
		$('#side_bar #shopping_car').css('background-color', '#000');
		$('#side_bar #shopping_car .car-logo').css('display', 'block');
		$('#side_bar #shopping_car .car-logo-on').css('display', 'none');
		$('#side_bar #shopping_car').append('<div class="car-border"></div>');
	});



})









