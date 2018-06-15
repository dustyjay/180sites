$(function(){
	var date = new Date();
	var day = date.getDay();

	$days = $('.days li');
	$daymark = $('.daymarker li');
	$basemark = $('.basemarker span');


	switch(day){
		case 0:
			$daysel = $days.eq(0);
			$daysel.addClass("today");
			$daysel.siblings().removeClass("today");

			$daymarksel = $daymark.eq(0);
			$daymarksel.addClass("today");
			$daymarksel.siblings().removeClass("today");

			$basemark.text("Its Sunday!");
			break;


		case 1:
			$daysel = $days.eq(1);
			$daysel.addClass("today");
			$daysel.siblings().removeClass("today");

			$daymarksel = $daymark.eq(1);
			$daymarksel.addClass("today");
			$daymarksel.siblings().removeClass("today");

			$basemark.text("Let's get to Work");
			break;


		case 2:
			$daysel = $days.eq(2);
			$daysel.addClass("today");
			$daysel.siblings().removeClass("today");

			$daymarksel = $daymark.eq(2);
			$daymarksel.addClass("today");
			$daymarksel.siblings().removeClass("today");

			$basemark.text("Oh, Its Tuesday!");
			break;


		case 3:
			$daysel = $days.eq(3);
			$daysel.addClass("today");
			$daysel.siblings().removeClass("today");

			$daymarksel = $daymark.eq(3);
			$daymarksel.addClass("today");
			$daymarksel.siblings().removeClass("today");

			$basemark.text("Merry Wednsday!");
			break;


		case 4:
			$daysel = $days.eq(4);
			$daysel.addClass("today");
			$daysel.siblings().removeClass("today");

			$daymarksel = $daymark.eq(4);
			$daymarksel.addClass("today");
			$daymarksel.siblings().removeClass("today");

			$basemark.text("Almost Weekend");
			break;


		case 5:
			$daysel = $days.eq(5);
			$daysel.addClass("today");
			$daysel.siblings().removeClass("today");

			$daymarksel = $daymark.eq(5);
			$daymarksel.addClass("today");
			$daymarksel.siblings().removeClass("today");

			$basemark.text("TGIF!");
			break;


		// case 6:
		// 	$daysel = $days.eq(6);
		// 	$daysel.addClass("today");
		// 	$daysel.siblings().removeClass("today");

		// 	$daymarksel = $daymark.eq(6);
		// 	$daymarksel.addClass("today");
		// 	$daymarksel.siblings().removeClass("today");

		// 	$basemark.text("Fun Begins!");
		// 	break;


		case 6:
			$daysel = $days.eq(6);
			$daysel.addClass("today");
			$daysel.siblings().removeClass("today");

			$daymarksel = $daymark.eq(6);
			$daymarksel.addClass("today");
			$daymarksel.siblings().removeClass("today");

			$basemark.text("TGIF!");
			break;


	}

});