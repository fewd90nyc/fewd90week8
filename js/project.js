$("document").ready(function(){

	$("body").click(function(pig){
		$("<div/>").css({
			top: pig.pageY,
			left: pig.pageX,
		}).addClass("piggy").appendTo("body")
		.animate({top:"90%"}, 100).delay(4000).animate({top:"90%"}, 1000, function(){
			$(this).remove();
		});
	});

	$(".cow41").click(function(moon){
		$(this).css({
			position: "fixed",
		})
		.animate({top:"0%", left:"35%",}, 2000).animate({left:"0%", top:"5%"}, 1000, function(){
			$(this).remove();
		});
	});

	// $("body").click(function(){
	// 	$("<div/>").addClass("horse").appendTo("body"), function(runhorse){

	// 	};
	// });

		$(".horse").click(function(runhorse){
		$(this).animate({left:"100%"}, 4000).loop();
	});
	

});