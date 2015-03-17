/*--------------------------------------*\
	1111shop
			by AuTiMoThY
\*--------------------------------------*/
function viewPortWidthHeight() {
  var wh = {};
  if(window.innerWidth) {
      wh.width = window.innerWidth;
      wh.height = window.innerHeight;
  }
  else if(document.documentElement.clientWidth) {
      wh.width = document.documentElement.clientWidth;
      wh.height = document.documentElement.clientHeight;
  }
  else if(document.body.clientWidth) {
      wh.width = document.body.clientWidth;
      wh.height = document.body.clientHeight;
  }
  return wh;
}

$(window).on('resize', function () {
  var navAside = document.getElementById('navAside');
  var viewPortWH = viewPortWidthHeight();

  navAside.style.height = viewPortWH.height + 'px';
});

$(function () {

	var navAside = document.getElementById('navAside');
	var viewPortWH = viewPortWidthHeight();

	navAside.style.height = viewPortWH.height + 'px';  

	// $(".fancybox").fancybox({
	//   maxWidth  : 850,
	//   maxHeight : 550,
	// });


});

/*
var $win = $(window),
	$leftAside = $('#leftAside'),
	$wsLeftAside = $('#leftAsideDontScroll'),
	_moveSpeed = 1000,	// 移動的速度
	number = 100;

$win.bind('scroll resize', function(){
	var $this = $(this);
	var MM = $this.scrollTop();

	if(MM>=150){
		$leftAside.stop().animate({
			top: 50
		}, _moveSpeed, 'easeOutQuint');
	}else {
		$leftAside.stop().animate({
			top: 290
		}, _moveSpeed, 'easeOutQuint');
	};
	

}).scroll();

$(function () {
	//#main 最小高度
	var $asideH = $('#leftAside').outerHeight(),
		$asideH2 = $wsLeftAside.outerHeight();
	$('#main').css('min-height', $asideH + 60 + 'px');
	$('#main.workshop_cnt_page').css('min-height', $asideH2 + 60 + 'px');
	$('#main.faq_page').css('min-height', $asideH2 + 60 + 'px');

	//首頁 下方 List
	$('#newsPic2').css('opacity', '0');
	$('#newsList2').hover(function() {
		$(this).css('background-color', 'rgba(255, 255, 255, 0.2)');
		$('#newsPic1').stop().animate({opacity: 0}, 500);
		$('#newsPic2').stop().animate({opacity: 1}, 500);
	}, function() {
		$(this).css('background-color', 'transparent)');
	});
	$('#newsList1').hover(function() {
		$(this).css('background-color', 'rgba(255, 255, 255, 0.2)');
		$('#newsPic2').stop().animate({opacity: 0}, 500);
		$('#newsPic1').stop().animate({opacity: 1}, 500);
	}, function() {
		$(this).css('background-color', 'transparent)');
	});

	$('#news2Pic2').css('opacity', '0');
	$('#news2List2').hover(function() {
		$(this).css('background-color', 'rgba(255, 255, 255, 0.2)');
		$('#news2Pic1').stop().animate({opacity: 0}, 500);
		$('#news2Pic2').stop().animate({opacity: 1}, 500);
	}, function() {
		$(this).css('background-color', 'transparent)');
	});
	$('#news2List1').hover(function() {
		$(this).css('background-color', 'rgba(255, 255, 255, 0.2)');
		$('#news2Pic2').stop().animate({opacity: 0}, 500);
		$('#news2Pic1').stop().animate({opacity: 1}, 500);
	}, function() {
		$(this).css('background-color', 'transparent)');
	});

	// 控制 loginBlock 顯示與否
	$('#login').stop().hover(function() {
		$(this).toggleClass('open').children('#loginBlock').stop().animate({opacity: 1}, 500);
	}, function() {
		$(this).toggleClass('open').children('#loginBlock').stop().animate({opacity: 0}, 500);
	});




	$('a.fancybox2').fancybox({
		width	    : 700,
		// minHeight	: 600,
		padding     : 0,
		margin      : 0,
		wrapCSS     : 'fancybox_style2'
	});

});
*/

