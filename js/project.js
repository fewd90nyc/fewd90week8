

$(document).ready(function(){

 $("<img/>").addClass("character").attr("src","images/Sun.gif").appendTo("body").animate({top: "10%", right: "10%"},5000);
 $("<img/>").addClass("character").attr("src","images/Tree.png").appendTo("body").animate({top: "40%", right:"50%"}, 5000, "easeInCubic");

 $("html").click(function(evt){
    $("<img/>").addClass("character").attr("src", "images/cow1.gif").css({
      top: evt.pageY,
      left: evt.pageX
    }).appendTo("body").animate({top: "70%", left: "70%"}, 5000, function(){
    	$(this).remove();
    });

     $("<img/>").addClass("character").attr("src", "images/dancing20cow.gif").css({
      top: evt.pageY,
      left: evt.pageX
    }).appendTo("body").animate({top: "30%", left: "30%"}, 5000, function(){
    	$(this).remove();
    });

 });



});