$(function(){

	// get the Object of Header
	$('header').hover(function(){ // when the mouse cover the header area

		$('#content .center-pannel .main-logo').stop();
		$(this).stop(); // stop previous animation
		
		$('#content .center-pannel .main-logo').animate({
			top: '100px'
		}, 500)

		$(this).animate({
			opacity: 1
		}, 500)
	}, function(){ // when the mouse leave the header area

		$('#content .center-pannel .main-logo').stop();
		$(this).stop(); // stop previous animation

		$('#content .center-pannel .main-logo').animate({
			top: '50px'
		}, 500)

		$(this).animate({
			opacity: 0
		}, 500)
	})

	// get the Object of 'Made for Live'
	$('#content .center-pannel h1').delay(5000).animate({
		opacity: 0
	}, 1000, function(){ // when animation complete
		
		$('#content .i-style').css('display', 'block');

		$('#content .i-style .title').animate({
			opacity: 1
		}, 1000)
	});

	$('#left-item').hover(function(){ // mouse over the '#left-item'
		$('#left-pannel').stop();
		$('#left-item #left-cover').stop();
		$('#content .center-pannel .main-logo').stop();
		$('#content .center-pannel img').stop();

		$('#left-pannel').animate({
			opacity: 0.4
		}, 300);

		$('#left-item #left-cover').animate({
			opacity: 1
		}, 300);

		$('#content .center-pannel .main-logo').animate({
			left: '320.75px',
			top: '50px'
		}, 300);

		$('#content .center-pannel img').animate({
			left: '265px'
		}, 300);


	}, function(){ // mouse leave the '#left-item'
		$('#left-pannel').stop();
		$('#left-item #left-cover').stop();

		$('#left-pannel').animate({
			opacity: 0
		}, 300, function(){
			$('#content .center-pannel .main-logo').stop();
			$('#content .center-pannel img').stop();

			$('#content .center-pannel .main-logo').animate({
				left: '671.5px'
			}, 300);

			$('#content .center-pannel img').animate({
				left: '620px'
			}, 300);
		});

		$('#left-item #left-cover').animate({
			opacity: 0
		}, 300);

		
	})

	$('#right-item').hover(function(){ // mouse over the '#right-item'
		$('#right-pannel').stop();
		$('#right-item #right-cover').stop();

		$('#right-pannel').animate({
			opacity: 0.4
		}, 300);

		$('#right-item #right-cover').animate({
			opacity: 1
		}, 300)
	}, function(){ // mouse leave the '#right-item'
		$('#right-pannel').stop();
		$('#right-item #right-cover').stop();

		$('#right-pannel').animate({
			opacity: 0
		}, 300);

		$('#right-item #right-cover').animate({
			opacity: 0
		}, 300);
	})

})














