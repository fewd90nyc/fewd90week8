$(document).read(fucntion(){
	$("#prev").click(function(){
		});
	$("#next").click(function() {

		$("img.current").removeClass("current").next().addClass("current");
		//var i = $("img.current").index();
		//$("img.current").removeClass("current");
		//$(".slide").eq(i-2).addClass("current");
	});
	
});
