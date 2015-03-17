//mCustomScrollbar
(function($){
	$(window).load(function(){
		
		$.mCustomScrollbar.defaults.theme="inset"; //set "inset" as the default theme
		$.mCustomScrollbar.defaults.scrollButtons.enable=true; //enable scrolling buttons by default
		
		$(".outer, .member_wrapper, .contact_wrapper, .textarea, .left_aside").mCustomScrollbar({
			snapAmount : 50,
			mouseWheel :{ enable: true },
			mouseWheel :{ scrollAmount: 100 },
			advanced   :{autoExpandHorizontalScroll:true}
		});

		$('#wra').find('#mCSB_2_scrollbar_vertical').css('opacity', '1');

		
		if ($(window).width() <= 1280){	
			$(".news_wrapper, .prod_wrapper, .know_wrapper, .brandStory_content").mCustomScrollbar({
				advanced:{autoExpandHorizontalScroll:true}
			});
		}
	});
})(jQuery);

//preload
$( function(){
	$.preload( 'images/bg_index_mini.jpg',
				'images/bg_knowledge.jpg',
				'images/bg_news.jpg',
				'images/bg_BrandStory.jpg',
				'images/bg_member.jpg',
				'css/mCSB_buttons.png'
	);
});


//custom
$(document).ready(function() {

	$('li#subNavAct').click(function() {
		$('li#subNav2Act').next('.sub_nav').hide('slow');
		$(this).next('.sub_nav').show().animate({opacity: "1"}, 1000);
		
	});
	$('li#subNav2Act').click(function() {
		$('li#subNavAct').next('.sub_nav').hide('slow');
		$(this).next('.sub_nav').show().animate({opacity: "1"}, 1000);
		
	});

	$(".fancybox").fancybox({
		maxWidth	: 850,
		maxHeight	: 550,
	});
	$(".fancybox2").fancybox({
		maxWidth	: 600,
		maxHeight	: 400,
        padding     : 0
	});


	var fade_btn = $('aside .fade, input.collect_submit, #delete');
	fade_btn.hover(
		function(){
			$(this).stop(false,true).fadeTo(130, 0.4);
		},function(){
			$(this).stop(false,true).fadeTo(200, 1);
		}
	);


	$('span#delete').click(function() {
		$(this).parent('section.collect_item').animate({right: "-100%"}, 300).hide(500);
	});

	$('#collectBtn').click(function() {
		$(this).animate({right: "-100%"}, 500).css('display', 'none').parent('aside').css('background', 'transparent').animate({width: "335px"}, 500);
		$(this).next('#collectWra').css('display', 'block').animate({right: "0%",top: "0%", opacity: "1"},500);
	});
	$('#closeBtn').click(function(event) {
		$(this).parent('#collectWra').animate({right: "-100%"},500).delay(500).css('display', 'none');
		$(this).parents('aside#rightAside').animate({width: "45px", background: "rgba(0, 0, 0, 0.85)"}, 300).find('#collectBtn').animate({right: "0%"}, 500).css('display', 'block');
	});


	if ($(window).width() <= 1024){	
		$('.join_btn_style1').delay(1000).animate({top: "20px", opacity: "0.4"},1000).delay(100).animate({left: "60%", opacity: "1"},500);
		$('.forget_btn_style1, .login_btn_style1').delay(1000).animate({left: "10%"},1000);

		$('.join_btn_style2').delay(1000).animate({left: "10%"},1000);
		$('.forget_btn_style2, .login_btn_style2').delay(1000).animate({left: "20%"},1000);

		$('div.photos').addClass('clearfix');
	}	
/*
	$('#collectBtn').click(function() {
		$(this).animate({right: "-100%"}, 500).css('display', 'none');
		$(this).parent('aside').css({
			background: 'transparent',
			position: 'absolute'
		}).delay(500).animate({
			width: "335px",
			top: "0"}, 500);
			500, function() {
			$(this).children('#collectWra').show('fast').css('position', 'absolute').animate({
				right: "0%",
				top: "0%"
			},500);
		});
		// $(this).next('#collectWra').css('position', 'absolute').delay(500).show('fast').animate({right: "0%"},500);
	});
	$('#closeBtn').click(function() {
		$(this).parent('#collectWra').animate({right: "-100%"},500).delay(500).hide('slow');
		$(this).parents('aside#rightAside').animate({width: "45px", background: "rgba(0, 0, 0, 0.85)"}, 300).find('#collectBtn').animate({right: "0%"}, 500).show('fast');
	});
*/

	

 
	var viewportwidth;
	var viewportheight;
	var wwww = document.body.clientWidth;
	if (typeof window.innerWidth != 'undefined'){
		viewportwidth = window.innerWidth,
		viewportheight = window.innerHeight;
	}else if (typeof document.documentElement != 'undefined'
	 && typeof document.documentElement.clientWidth !=
	 'undefined' && document.documentElement.clientWidth != 0){
		viewportwidth = document.documentElement.clientWidth,
		viewportheight = document.documentElement.clientHeight;
	}else {
		viewportwidth = document.getElementsByTagName('body')[0].clientWidth,
		viewportheight = document.getElementsByTagName('body')[0].clientHeight;
	}

	// $('#header, footer, .line1').width(viewportwidth);
	// $('aside').height(viewportheight);


// document.getElementById("").style.width(viewportwidth);
// document.getElementsByTagName("body").style.width(viewportwidth);
// document.getElementsByClassName("line1").style.width(viewportwidth);




});

