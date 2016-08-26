$("body").mouseenter(function() {
		$("h1").fadeIn(2000);
		});

		$("body").mouseenter(function() {
			$("h1").fadeOut(2000);
		});

  $("body").click(function(evt) {
     $("<div/>").css( { 
       height: 250, 
       width: 200, 
       backgroundImage: "url('images/cow1.gif')",
       position: "fixed",
       top: evt.pageY,
       left: evt.pageX
     }).appendTo("body")
     .animate({ top: "50%", left: "0%"}, 5000, function(){
       $(this).remove();
     });

   $("body").click(function(evt) {
     $("<div/>").css( { 
       height: 70, 
       width: 100, 
       backgroundImage: "url('images/cow_41.gif')",
       position: "fixed",
       top: evt.pageX,
       left: evt.pageY
     }).appendTo("body")
     .animate({ top: "50%", left: "100%"}, 5000, function(){
       $(this).remove();
    });

  });
})
