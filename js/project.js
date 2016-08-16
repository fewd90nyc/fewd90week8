$(document).ready(function(){
	$(".tree").click(function(evt) {
		// var $div = $("<div/>").css({ 
		// 	height: "100%",
		// 	width: "100%",
		// 	backgroundImage: "url(images/8.gif)",
		// 	backgroundRepeat: "no-repeat",
		// 	position: "absolute",
		// 	top: 0,
		// 	left: 0,
		// });
		// $("body").append($div)
		// .animate({ top:"20%", left:"80%"}, 5000,function(){
		// 	$($div).remove()
		// });

		$("<img/>").addClass("man").attr("src", "images/8.gif").css({
    		top: evt.pageY,
    		left: evt.pageX
    		}).appendTo("body").animate({ top: evt.pageY, left: "100%"}, 5000, "easeOutQuad", function(){
    			$(this).remove();
    	});
	});
});