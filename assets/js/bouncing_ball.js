$(function(){
	$ball = $(".ball");
	$balltxt = $(".balltext");
	$topspan = $(".balltext span:first-child");
	$bottomspan = $(".balltext span:last-child");
	clicks = "0";
	topspan = ["Nice job!",
				"Excellent Clickin'",
				"That was awesome!",
				"Man! Are you good",
				"Boom!",
				"You're a Pro!",
				"Unbelievable",
				"insanity",
				"You're on fire!",
				"That was crazy!",
				"You're blowing my mind",
				"WINNER!"];

	bottomspan = ["Next level: 2",
					"Next level: 3",
					"Next level: 4",
					"Next level: 5",
					"Next level: 6",
					"Next level: 7",
					"Next level: 8",
					"Next level: 9",
					"Next level: 10",
					"Next level: 11",
					"Next level: 12",
					"Holy Cow! You won the whole freaking thing!"];

	speed = ["2300",
				"2100",
				"1900",
				"1700",
				"1500",
				"1300",
				"1200",
				"1100",
				"1000",
				"900",
				"800"];

	$ball.click(function(){
		if(clicks == 11){
			$this.hide();
			$topspan.hide();
			$bottomspan.text(bottomspan[11]);
			$(".replay a").css("visibility","visible");
		}
		else{
			$this = $(this);
			anime = change_level(clicks);
			$this.css("animation",anime);
			clicks++;
		}
		
	});

	function change_level(mouse){
		$ball.hide(20).delay(3000).show(20);
		$balltxt.show(100).delay(3000).hide(100);
		$topspan.text(topspan[mouse]);
		$bottomspan.text(bottomspan[mouse]);

		anime = "trans " + speed[mouse] + "ms linear infinite";
		return anime;
	}
});