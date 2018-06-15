$(function(){
	$catcircle = $(".catcircle");
	timer = [4000,3500,3000,2500,2200,1000,2000,2800,3200,3800,3700,1400];

		$("#body15").mousemove(function(e){
			pointerX = e.clientX;
			pointerY = e.clientY;
			$catcircle.css({
				"top": pointerY-45,
				"left": pointerX-85,
				// "transition": adjustcircle(5)
			});
			$catcircle.eq(0).css("transition",adjustcircle(2));
			$catcircle.eq(1).css("transition",adjustcircle(4));
			$catcircle.eq(2).css("transition",adjustcircle(1));
			$catcircle.eq(3).css("transition",adjustcircle(11));
			$catcircle.eq(4).css("transition",adjustcircle(8));
			$catcircle.eq(5).css("transition",adjustcircle(3));
			$catcircle.eq(6).css("transition",adjustcircle(10));
			$catcircle.eq(7).css("transition",adjustcircle(7));
			$catcircle.eq(8).css("transition",adjustcircle(9));
			$catcircle.eq(9).css("transition",adjustcircle(0));
			$catcircle.eq(10).css("transition",adjustcircle(6));
			$catcircle.eq(11).css("transition",adjustcircle(5));
		});
	function adjustcircle(offset){
		adjust = "top "+timer[offset]+"ms, left "+timer[offset]+"ms";
		return adjust;
	}

});