$(function(){
	$header = $(".header2 h3");
	$sub_header = $(".sub_header2 h6");

	$orangedoor = $("#orangedoor img");
	$bluedoor = $("#bluedoor img");
	$greendoor = $("#greendoor img");

	$("#bluedoor","#orangedoor","#greendoor").click(function(){
		if (this.id == "bluedoor") {
			alert('bluedoor');
			$orangedoor.attr("src","assets/images/orangedoor_fire.png");
			$orangedoor.css("cursor", "default");
			$header.text("You Picked the Blue Door!");
			$sub_header.eq(0).text("I opened the Orange Door which held a BAD THING.");
			$sub_header.eq(1).text("Now if you want to switch you can choose the Green Door");
			$sub_header.eq(2).text("or you can keep your first choice and open the Blue Door.");
		}

		else if (this.id == "orangedoor") {
			$bluedoor.attr("src","assets/images/bluedoor_fire.png");
			$orangedoor.css("cursor", "default");
			$header.text("You Picked the Orange Door!");
			$sub_header.eq(0).text("I opened the Blue Door which held a BAD THING.");
			$sub_header.eq(1).text("Now if you want to switch you can choose the Green Door");
			$sub_header.eq(2).text("or you can keep your first choice and open the Orange Door.");
		};

		else{
			$orangedoor.attr("src","assets/images/orangedoor_fire.png");
			$orangedoor.css("cursor", "default");
			$header.text("You Picked the Green Door!");
			$sub_header.eq(0).text("I opened the Orange Door which held a BAD THING.");
			$sub_header.eq(1).text("Now if you want to switch you can choose the Blue Door");
			$sub_header.eq(2).text("or you can keep your first choice and open the Green Door.");
		}
	});
});