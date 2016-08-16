$(document).ready(function(){
  $("#prev").click(function(){
    $("#next").show();

    $("img.current").removeClass("current").prev().addClass("current");

    $("#message").html($(".current").attr("alt"));

    if($(".current").is(":first-child")){
      $("#prev").hide();
    }
  });
  $("#next").click(function(){
    $("#prev").show();

    $("img.current").removeClass("current").next().addClass("current");

    $("#message").html($(".current").attr("alt"));

    if($(".current").is(":last-child")){
      $("#next").hide();
    }
    // var i = $("img.current").index();
    // if(i == ($(".slide").length-1)) {
    //   i = -1;
    // }
    // $("img.current").removeClass("current");
    // $(".slide").eq(i+1).addClass("current");
  });
});