$(document).ready(function(){
	$(".box").click(function(){
		$(this).animate({ top: "80%"} , 500,"linear");

	});
	$("body").click(function(evt){
		$("<div/>").css({ 
			height: 100, 
			width: 100, 
			backgroundColor: #fff
			position:"fixed",
			top: 0,
			left: 0
		}).html("Joe").
		appendTo("body")
		.animate({ top: "50%", left "50%"}, 5000);
		;

	});
});