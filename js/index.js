$(function(){

 // PIC大圖輪播_變數宣告
  var NN = 0;
  var Time = 0;
  var QUA = $('#bodyBg .BG').length;

  // PIC大圖輪播
  function PIC(){   
    if(NN < QUA-1){
      $("#bodyBg .BG").fadeOut(1000).removeClass('active').eq(NN).fadeIn(1000).addClass('active');
      $("#bodyBgCtrl li").removeClass('active').eq(NN).addClass('active');
      NN += 1;    

    }else{
      $("#bodyBg .BG").fadeOut(1000).removeClass('active').eq(NN).fadeIn(1000).addClass('active');
      $("#bodyBgCtrl li").removeClass('active').eq(NN).addClass('active');
      NN = 0;
    }
    Time = setTimeout(PIC, 6000);
  }
  PIC(); // 呼叫 啟動上面的 function

	$('#dot0').stop().click(function() {
		$("#bodyBgCtrl li.active").removeClass('active');
		$(this).addClass('active');
		$("#bodyBg .BG").fadeOut(1000).removeClass('active');
		$('#bg0').fadeIn(1000).addClass('active');

		clearTimeout(PIC);
	});

	$('#dot1').stop().click(function() {
		$("#bodyBgCtrl li.active").removeClass('active');
		$(this).addClass('active');
		$("#bodyBg .BG").fadeOut(1000).removeClass('active');
		$('#bg1').fadeIn(1000).addClass('active');

		clearTimeout(PIC);
	});

	$('#dot2').stop().click(function() {
		$("#bodyBgCtrl li.active").removeClass('active');
		$(this).addClass('active');
		$("#bodyBg .BG").fadeOut(1000).removeClass('active');
		$('#bg2').fadeIn(1000).addClass('active');

		clearTimeout(PIC);
	});

	$('#dot3').stop().click(function() {
		$("#bodyBgCtrl li.active").removeClass('active');
		$(this).addClass('active');
		$("#bodyBg .BG").fadeOut(1000).removeClass('active');
		$('#bg3').fadeIn(1000).addClass('active');

		clearTimeout(PIC);
	});

	$('#dot4').stop().click(function() {
		$("#bodyBgCtrl li.active").removeClass('active');
		$(this).addClass('active');
		$("#bodyBg .BG").fadeOut(1000).removeClass('active');
		$('#bg4').fadeIn(1000).addClass('active');

		clearTimeout(PIC);
	});

/*--------------------------------------*\
		tabs  頁籤
\*--------------------------------------*/
	// 預設顯示第一個 Tab
	var _showTab = 0;
	$('.container').each(function(){
		// 目前的頁籤區塊
		var $tab = $(this);
 
		var $defaultLi = $('ul.tabs li', $tab).eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();
 
		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('ul.tabs li', $tab).click(function() {
			// 找出 li 中的超連結 href(#id)
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			// 把目前點擊到的 li 頁籤加上 .active
			// 並把兄弟元素中有 .active 的都移除 class
			$this.addClass('active').siblings('.active').removeClass('active');
			// 淡入相對應的內容並隱藏兄弟元素
			$(_clickTab).stop(false, true).fadeIn().siblings().hide();
 
			return false;
		}).find('a').focus(function(){
			this.blur();
		});
	});
});


