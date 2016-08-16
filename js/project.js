$(document).ready(function(){
	$("#sun").click(function(){
	if ($("#start").html()=="Ready?"){

		$("#start").html("Farm Party!");
		$("#sun").find("p").hide();	
		$("#start").show().css({
			display:"block"
		});

		// racing horse
		$("#horse").animate({
			bottom: "0%", 
			left: "95%"
		},6000, function(){
			$("#horse").fadeOut(50);
			$("#sun").find("p")
			.css({"display":"block"})
			.html("click anywhere");
		});

		// fading pig
		$("#flyingpig").css({
			display:"block"
		}).animate({
			bottom:"40%",
			right:"20%"
		},300,"swing")
		.delay(5000)
		.animate(1000,function(){
			$(this).fadeOut(8000);
		});

		$("#cow").css({
			display:"block"
		});

		$("#roosterdance").css({
			display:"block"
		});

		$("#lamb").css({
			display:"block"
		});

		$("#pig").css({
			display:"block"
		});

	}
	});

	// climbing cow
	$("#sky").click(function(evt){
		if ($("#sun").find("p").html()=="click anywhere"){
			$("<img src='images/dancing20cow.gif'>").css({
				width:100,
				position:"fixed",
				top:evt.pageY,
				left:evt.pageX
			}).appendTo("body")
			.animate({
				left:"95%",
				top:"10%"
			}, 5000, "easeInBounce")
			.delay(100)
			.animate({
				left:"120%",
				top:"10%"
			}, 1000, function(){
				$(this).fadeOut(1000);
			});
		}
	});

	// falling cow
	$("#grass").click(function(evt){
		if ($("#sun").find("p").html()=="click anywhere"){
			$("<img src='images/cow1.gif'>").css({
				width:100,
				position:"fixed",
				top:evt.pageY,
				left:evt.pageX
			}).appendTo("body")
			.animate({
				top:"90%"
			}, 3000, "easeOutBounce")
			.delay(100)
			.animate({
				top:"90%"
			}, 100, function(){
				$(this).fadeOut(500);
			});
		}
	});

	// elastic pig
	$("#pig").on("mouseover", function(d){
		$("#pig").animate({
			left:"-8%"
		}, 2000, "easeOutBack");
	}).on("mouseout", function(){
		$("#pig").animate({
			left:"30%"
		}, 5000, "easeOutBounce");
	});

	// dancing rooster
	$("#roosterdance").on("click", function(d){
		$("#roosterdance").animate({
			left:"90%"
		}, 10000, "easeOutBounce")
		.delay(10)
		.animate({
			left:"0%"
		},10000,"easeOutBounce");
	});


});