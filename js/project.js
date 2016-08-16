$(document).ready(function() {

  $("body").click(function(evt) {

    $("<img/>").addClass("farm").attr("src", "images/horse.gif").css({
      top: evt.pageY,
      left: evt.pageX
    }).appendTo("body").animate({ top: "80%", left: "100%"}, 5000, function(){
      $(this).remove();
    });

  });

 });