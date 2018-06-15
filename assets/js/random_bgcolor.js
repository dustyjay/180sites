$(function(){
	$(".header3 a").click(function(){
		$("#body3").css("background", changebg());
	});

	function changebg(){
		x = Math.random().toString(16).slice(2,8);
		return "#"+x;
	}

	$(".box").mouseover(function(){
		$(this).css({
			"background": changebg(),
			"box-shadow": "2px 2px 7px white inset,-2px -2px 7px white inset"
		});
	});

	$(".box").mouseout(function(){
		$(this).css("box-shadow", "none");
	});

});