$(function(){
	countdown = ["3","2","1","shoot"];
	result = ["You Lose!","You Win!","Tie"];
	count = 0;
	$btn = $(".shakebtn button");
	$hands = $(".rpsshake");
	$lefthand = $hands.eq(0);
	$righthand = $hands.eq(1);
	$leftimg = $(".rpsshake:first-child img");
	$rightimg = $(".rpsshake:last-child img");
	$rpstxt = $("#rpstext span:first-child");
	$replay = $rpstxt.siblings();

	$replay.css("visibility","hidden");
	$btn.removeClass("rpsdisable");

	$btn.click(function(){
		$this = $(this);
		x= Math.floor(Math.random()*3);
		var y = setInterval(function(){
			$rpstxt.text(countdown[count]);
			count++;
			if(count == 4){
				rpsleft(x);
				attr = $this.attr("id");

				if(attr == "scirps"){
					rpsright(2);

					if (x == 0) {
						$rpstxt.text(result[0]);
					}
					else if (x == 1) {
						$rpstxt.text(result[1])
					}
					else{
						$rpstxt.text(result[2]);
					}
				}
				else if(attr == "paprps"){
					rpsright(1);
					if (x == 0) {
						$rpstxt.text(result[1]);
					}
					else if (x == 1) {
						$rpstxt.text(result[2])
					}
					else{
						$rpstxt.text(result[0]);
					}
				}
				else{
					rpsright(0);
					if (x == 0) {
						$rpstxt.text(result[2]);
					}
					else if (x == 1) {
						$rpstxt.text(result[0])
					}
					else{
						$rpstxt.text(result[1]);
					}
				}

				count = 0;
				clearInterval(y);
				$replay.css("visibility","visible");
			}
		},
		200);
		$hands.addClass("rpsanime");
		$btn.addClass("rpsdisable");
		$btn.css({
			"background": "lightgrey",
			"color": "grey",
			"transition": "background 1s,color 700ms"
		});
		$btn.attr("disabled",true);


	});
	
	function rpsleft(fig){
		switch(fig){
			case 0:
				$leftimg.prop("src","assets/images/rock.png");
				break;
				
			case 1:
				$leftimg.prop("src","assets/images/paper.png");
				break;
				
			case 2:
				$leftimg.prop("src","assets/images/scissors.png");
				break;
		}
	}
	
	function rpsright(fig){
		switch(fig){
			case 0:
				$rightimg.prop("src","assets/images/rock.png");
				break;
				
			case 1:
				$rightimg.prop("src","assets/images/paper.png");
				break;
				
			case 2:
				$rightimg.prop("src","assets/images/scissors.png");
				break;
		}
	}
});