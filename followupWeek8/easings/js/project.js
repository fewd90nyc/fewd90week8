$(document).ready(function(){
  $(".box").click(function(){
    $(this).animate( { top: "80%" } , 500, "easeOutBounce")
      .delay(1000)
      .animate( { top: "0%" } , 1000);
  });

  $("body").click(function(evt){

    $("<div/>").css( { 
      height: 100, 
      width: 100, 
      backgroundColor: "#fff",
      position: "fixed",
      top: evt.pageY,
      left: evt.pageX
    }).html("Joe")
    .appendTo("body")
    .animate({ top: "50%", left: "50%"}, 5000, function(){
      $(this).remove();
    });
    
  });
});