$(document).ready(function() {

  $("body").click(function() {
    $("#sun").fadeOut(1000).fadeIn(1500);
    $("#pig").animate( {top:"100%", left: "100%"} , 6000, "easeInBounce").animate( { top: "50%" } , 500, function(){
        $(this).remove();
      });
    $("#cow").delay(2500).animate( {top: "0%"} , 6000, "easeInOutBounce").animate( { top: "100%" } , 500, function(){
        $(this).remove();
      });
   
  });

  $("#man").animate({left: "+=500"}, 2000);
  $("#man").animate({left: "-=500"}, 1000);
  $("#tambourine").animate({left: "-=300"}, 6000);
  $("#tambourine").animate({left: "+=400"}, 3000);
  $("#tambourine").animate({left: "-=800"}, 1000);

  $("body").click(function(evt){
    $("<div/>").css( {
      height:110,
      width:180,
      backgroundImage:"url('images/horse.gif')",
      position:"fixed",
      top: evt.pageY,
      left: evt.pageX
    } ).appendTo("body")
      .animate( {left: "100%"} , 6000, "easeInOutQuint").animate( { top: "0%" } , 500, function(){
        $(this).remove();
      });
  });
});