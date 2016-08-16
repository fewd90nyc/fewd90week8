$(document).ready(function(){

  $(".fa-play-circle").click(function(){
    $(this).remove();
    $("h1").fadeOut(500);
    $(".sky").fadeIn(100);
    $(".grass").fadeIn(500);
  });

  $(".sun").click(function(evt){
     $(this).remove();
     $("<img/>").addClass("character").attr("src", "images/Sun.gif").css({
      height: 180, 
      width: 220, 
      top: evt.pageY,
      left: evt.pageX
    }).appendTo(".sky").animate({ top: "3%", left: "80%"}, 1500, "swing");
  });
  $(".plant").click(function(evt){
     $(this).remove();
     $("<img/>").addClass("character").attr("src", "images/Tree.png").css({ 
      top: evt.pageY,
      left: evt.pageX
    }).appendTo(".grass").animate({ top: "-40%", left: "60%"}, 1500);
  });
 $(".farm").click(function(evt){
     // $(this).remove();
     $("<img/>").addClass("character").attr("src", "images/cow_41.gif").css({ 
      width: 150,
      height: 130,
      top: evt.pageY,
      left: evt.pageX
    }).appendTo(".grass").animate({ top: "10%", left: "85%"}, 1000, "swing");
  });
   $(".farm").click(function(){ 
   $(this).fadeOut(100);
   $(".farm2").fadeIn(200);
});
    $(".farm2").click(function(evt){
    $(this).fadeOut(100);
    $(".farm3").fadeIn(200);
     $("<img/>").addClass("character").attr("src", "images/lamb.gif").css({ 
      height: 130, 
      width: 150,
      top: evt.pageY,
      left: evt.pageX
    }).appendTo(".grass").animate({ top: "45%", left: "65%"}, 1000);
  });
    $(".farm2").click(function(evt){
    $("<img/>").addClass("character").attr("src", "images/roosterFoot.gif").css({ 
     height: 130, 
     width: 100,
     top: evt.pageY,
     left: evt.pageX
   }).appendTo(".grass").animate({ top: "10%", left: "50%"}, 1000);
  });
    $(".farm2").click(function(evt){
    $("<img/>").addClass("character").attr("src", "images/Pig_dives.gif").css({ 
     height: 150, 
     width: 150,
     top: evt.pageY,
     left: evt.pageX
   }).appendTo(".grass").animate({ top: "-5%", left: "65%"}, 1000);
  });
  $(".farm3").click(function(evt){
    $(this).remove();
    $("<img/>").addClass("character").attr("src", "images/cow1.gif").css({ 
      height: 130, 
      width: 150,
      top: evt.pageY,
      left: evt.pageX
    }).appendTo(".grass").animate({ top: "50%", left: "20%"}, 1000);
  });
  $(".farm3").click(function(evt){
    $("<img/>").addClass("character").attr("src", "images/dancing1.gif").css({ 
      height: 150, 
      width: 130,
      top: evt.pageY,
      left: evt.pageX
    }).appendTo(".grass").animate({ top: "25%", left: "7%"}, 1000);
  });
  $(".farm3").click(function(evt){
    $("<img/>").addClass("character").attr("src", "images/dancing2.gif").css({ 
      height: 130, 
      width: 150,
      top: evt.pageY,
      left: evt.pageX
    }).appendTo(".grass").animate({ top: "75%", left: "5%"}, 1000);
  });
    $(".farm3").click(function(evt){
    $("<img/>").addClass("character").attr("src", "images/chicken.gif").css({ 
      height: 130, 
      width: 150,
      top: evt.pageY,
      left: evt.pageX
    }).appendTo(".grass").animate({ top: "25%", left: "30%"}, 1000);
  });
    $(".farm3").click(function(evt){
    $("<img/>").addClass("character").attr("src", "images/farm_1.gif").css({ 
      height: 130, 
      width: 100,
      top: evt.pageY,
      left: evt.pageX
    }).appendTo(".grass").animate({ top: "60%", left: "40%"}, 1000);
  });
    $(".farm3").click(function(evt){
    $("<img/>").addClass("character").attr("src", "images/sheep-006.gif").css({ 
      height: 130, 
      width: 150,
      top: evt.pageY,
      left: evt.pageX
    }).appendTo(".grass").animate({ top: "47%", left: "50%"}, 1000);
  });
    $(".farm3").click(function(evt){
    $("<img/>").addClass("character").attr("src", "images/horse.gif").css({ 
      height: 130, 
      width: 150,
      top: evt.pageY,
      left: evt.pageX
    }).appendTo(".grass").animate({ top: "60%", left: "80%"}, 1000);
  });
  });
  //    $(".box").click(function(){
  //   $(this).animate( { top: "80%" } , 500, "easeOutBounce")
  //     .delay(1000)
  //     .animate( { top: "0%" } , 1000);
  // });

  // $("body").click(function(evt){

  //   $("<div/>").css( { 
  //     height: 100, 
  //     width: 100, 
  //     backgroundColor: "#fff",
  //     position: "fixed",
  //     top: evt.pageY,
  //     left: evt.pageX
  //   }).html("Joe")
  //   .appendTo("body")
  //   .animate({ top: "50%", left: "50%"}, 5000, function(){
  //     $(this).remove();
  //   });
    
