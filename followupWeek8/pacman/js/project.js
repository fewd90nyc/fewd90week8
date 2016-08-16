$(document).ready(function() {

  $("body").mouseenter(function() {
    $("h1").fadeOut(500);
  });

  //Pacman animations will go here
  $("body").click(function(evt) {
    // $("<div/>").css( { 
    //   height: 114, 
    //   width: 108, 
    //   backgroundImage: "url('img/pacman.png')",
    //   position: "fixed",
    //   top: evt.pageY,
    //   left: evt.pageX
    // }).appendTo("body")
    // .animate({ top: "50%", left: "50%"}, 5000, function(){
    //   $(this).remove();
    // });

    $("<img/>").addClass("character").attr("src", "img/ghost3.png").css({
      top: evt.pageY,
      left: evt.pageX
    }).appendTo("body").animate({ top: "50%", left: "50%"}, 5000, function(){
      $(this).remove();
    });

  });


  //Audio will go here
});