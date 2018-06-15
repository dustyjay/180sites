$(function(){
	// alert("Image----clicked!");
	$image = $(".imgcontainer img");
	$qtext = $(".quotetext");
	$qtext2 = $(".quoter");

	var hof = "0";
	var vof = "0";
	var blu_img = "0";
	var blu_qt = "0";
	var blu_qt2 = "0";
	var rad = "10";

	function add_shadow(hoff, voff, blur, radi){
		hoff += "px";
		voff += "px";
		blur += "px";
		radi += "px";
		color = "#333";
		total = hoff + " " + voff + " " + blur + " " + radi + " " + color;
		return total;
	}


	function add_text_shadow(hoff, voff, blur){
		hoff += "px";
		voff += "px";
		blur += "px";
		color = "#333";
		total = hoff + " " + voff + " " + blur + " " + color;
		return total;
	}

	$image.click(function(){
		blu_img += 1;
		$(this).css("box-shadow", add_shadow(hof, vof, blu_img,rad));
	});

	$qtext.click(function(){
		blu_qt += 1;
		$(this).css("text-shadow", add_text_shadow(hof, vof, blu_qt));
	});

	$qtext2.click(function(){
		blu_qt2 += 1;
		$(this).css("text-shadow", add_text_shadow(hof, vof, blu_qt2));
	});

});