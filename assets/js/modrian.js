$(function(){
	var $color;
	$(".square").click(function(){
		$color = $(this).css("background-color");
	});

	$(".mod").click(function(){
		$(this).css("background-color",$color);
	});
});