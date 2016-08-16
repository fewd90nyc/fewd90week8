$(document).ready(function(){
  $(".box").click(function(){
    $(this).animate( { top: "-=100px" }, 600, "easeOutBack")
      .delay(1000)
      .animate( { top: "0%" } , 1000);
  });

  $("body").click(function(evt){

    $("<div/>").css( ).html("")
    .appendTo("body")
    .animate({ top: "100%", left: "50%"}, 5000, function(){
      $(this).remove();
    });
  });
});
