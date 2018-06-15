$(function(){
	$showtxt = $("#toughtext");
	$showresp = $("#toughresp");
	$toughtxt = $("#toughinput input");
	$btn = $("#toughinput button");
	noinput = "You don't fill in forms?";

	replies = ["Seriously? Why don't you grow the hell up?!",
				"ಠ__ಠ ",
				"That's terrible! You should knock that off!",
				"That is totally unacceptable.",
				"I can't believe you are that disgusting.",
				"You should be utterly ashamed.",
				"A kitten dies everytime you do that.",
				"Aren't you a little old for that crap?",
				"And when do you plan on becoming an adult?",
				"What? Who does that?!",
				"My disapproval is overwhelming.",
				"Are you freaking kidding me?",
				"I thought you were better than that.",
				"NO! Bad!",
				"Ugh! That's horrible",
				"That's terrible, you should knock it off!",
				"Are you going to suck all your life?",
				"You are bad and you should feel bad!",
				"Gross. You are gross."];

	$btn.click(function(){
		inputval = $toughtxt.val();

		if (inputval == "") {
			$showtxt.text(noinput);
		}else{
			$showtxt.text("You "+inputval+"?");
		}
		
		x = Math.floor(Math.random() * 19);
		$showresp.text(replies[x]);
		$toughtxt.val("");
	});
});