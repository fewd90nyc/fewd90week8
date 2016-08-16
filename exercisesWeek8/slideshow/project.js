$(document).ready(fucntion(){
	$("#prev").click(function(){
		$("#next").show();
		$("im.current").removeClass("current").prev().addClass("current");

		$("#message").html($(".current"))

		if($(".current").is(":first-child")){
			$("#prev").hide();

		}
});
$("#next").click(function(){
	$("#prev").show();

	$("img.current").removeClass("curernt").next().addClass("current");

	if($(".current").is(":last-child"){
		$("#next").hide();
	});

});