$(document).ready(function() {

  $("body").mouseenter(function() {
    $("h1").fadeOut(1000);
  
  });
  $("html").mouseleave(function() {
    $("h2").animate()
      .fadeIn(2000)
      .fadeOut(2000);
    });
  
  $(".box1").click(function loop(){
    $(this).animate( 500, "easeOutElastic")
      .delay(1000)
      .animate( { left: "0%" } , 1000, function()
      {
        $(this).fadeOut(10000);
      })
  });
  $(".box2").click(function(){
    $(".box2").animate( 500, "easeOutElastic")
      .delay(1000)
      .animate( { right: "0%" } , 1000, function()
      {
        $(this).fadeOut(10000);
      })
      
  });
  $(".box3").click(function(){
    $(".box3").animate( 500, "easeOutElastic")
      .delay(1000)
      .animate( { right: "10%" } , 1000, function()
      {
        $(this).fadeOut(10000);
      })
      
  });
  $(".box4").click(function(){
    $(".box4").animate( 500, "easeOutElastic")
      .delay(1000)
      .animate( { left: "30%" } , 4000, function()
      {
        $(this).fadeOut(10000);
      })
  });
  $(".box5").click(function(){
    $(".box5").animate( 500, "easeOutElastic")
      .delay(1000)
      .animate( { right: "20%" } , 2000, function()
      {
        $(this).fadeOut(10000);
      })
  });
  $(".box6").click(function(){
    $(".box6").animate( 500, "easeOutElastic")
      .delay(1000)
      .animate( { left: "10%" } , 2000, function()
      {
        $(this).fadeOut(10000);
      })
  });
  $(".box7").click(function(){
    $(".box7").animate( 500, "easeOutElastic")
      .delay(1000)
      .animate( { top: "30%" } , 1000, function()
      {
        $(this).fadeOut(10000);
      })
      
  });
  $(".box8").click(function(){
    $(".box8").animate( 1000, "easeOutElastic")
      .delay(1000)
      .animate( { left: "40%" } , 1000, function()
      {
        $(this).fadeOut(10000);
      })
      
  });
  $(".box9").click(function(){
    $(".box9").animate( 500, "easeOutElastic")
     .delay(1000)
      .animate( { left: "70%" } , 1000, function()
      {
        $(this).fadeOut(10000);
      })
  
  
  });
  
});
  