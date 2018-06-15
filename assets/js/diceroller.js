$(function(){
	$die = $(".diedot");
	$shaketxt = $("#shakefig");
	shaketxt = "Shake, shake, shake...";

	$btn = $(".shakebtn button");
	$btn.click(function(){
		x=Math.floor(Math.random()*6);
		y=Math.floor(Math.random()*6);
		$shaketxt.text(x+y+2);
		changeDie1(x);
		changeDie2(y);
		// alert(x+ " + " +y);
	});


	function changeDie1(dice){
		switch(dice){
			case 0:
				$die1 = $die.eq(4);
				$die1.css("visibility", "visible");
				$die1.siblings().css("visibility", "hidden");
				break;

			case 1:
				$die2 = $die.eq(0);
				$die2.siblings().css("visibility", "hidden");
				$die2.css("visibility","visible");
				$die.eq(8).css("visibility","visible");
				break;

			case 2:
				$die3 = $die.eq(0);
				$die3.siblings().css("visibility", "hidden");
				$die3.css("visibility","visible");
				$die.eq(8).css("visibility","visible");
				$die.eq(4).css("visibility","visible");
				break;

			case 3:
				$die4 = $die.eq(0);
				$die4.siblings().css("visibility", "hidden");
				$die4.css("visibility","visible");
				$die.eq(8).css("visibility","visible");
				$die.eq(2).css("visibility","visible");
				$die.eq(6).css("visibility","visible");
				break;

			case 4:
				$die5 = $die.eq(0);
				$die5.siblings().css("visibility", "hidden");
				$die5.css("visibility","visible");
				$die.eq(8).css("visibility","visible");
				$die.eq(2).css("visibility","visible");
				$die.eq(6).css("visibility","visible");
				$die.eq(4).css("visibility","visible");
				break;

			case 5:
				$die6 = $die.eq(0);
				$die6.siblings().css("visibility", "hidden");
				$die6.css("visibility","visible");
				$die.eq(8).css("visibility","visible");
				$die.eq(2).css("visibility","visible");
				$die.eq(6).css("visibility","visible");
				$die.eq(3).css("visibility","visible");
				$die.eq(5).css("visibility","visible");
				break;
		}
	}

	function changeDie2(dice){
		switch(dice){
			case 0:
				$die1 = $die.eq(13);
				$die1.css("visibility", "visible");
				$die1.siblings().css("visibility", "hidden");
				break;

			case 1:
				$die2 = $die.eq(9);
				$die2.siblings().css("visibility", "hidden");
				$die2.css("visibility","visible");
				$die.eq(17).css("visibility","visible");
				break;

			case 2:
				$die3 = $die.eq(9);
				$die3.siblings().css("visibility", "hidden");
				$die3.css("visibility","visible");
				$die.eq(17).css("visibility","visible");
				$die.eq(13).css("visibility","visible");
				break;

			case 3:
				$die4 = $die.eq(9);
				$die4.siblings().css("visibility", "hidden");
				$die4.css("visibility","visible");
				$die.eq(17).css("visibility","visible");
				$die.eq(11).css("visibility","visible");
				$die.eq(15).css("visibility","visible");
				break;

			case 4:
				$die5 = $die.eq(9);
				$die5.siblings().css("visibility", "hidden");
				$die5.css("visibility","visible");
				$die.eq(17).css("visibility","visible");
				$die.eq(11).css("visibility","visible");
				$die.eq(15).css("visibility","visible");
				$die.eq(13).css("visibility","visible");
				break;

			case 5:
				$die6 = $die.eq(9);
				$die6.siblings().css("visibility", "hidden");
				$die6.css("visibility","visible");
				$die.eq(17).css("visibility","visible");
				$die.eq(11).css("visibility","visible");
				$die.eq(15).css("visibility","visible");
				$die.eq(12).css("visibility","visible");
				$die.eq(14).css("visibility","visible");
				break;
		}
	}
});