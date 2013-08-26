 $(document).ready(function() {

 	$("#eventsBut").click(function(){
	  $('#eventsSec').ScrollTo({
	    duration: 200,
	    easing: 'linear'
		});
	});

 	$("#aboutBut").click(function(){
	  $('#aboutSec').ScrollTo({
	    duration: 200,
	    easing: 'linear'
		});
	});

	$("#projBut").click(function(){
	  $('#projSec').ScrollTo({
	    duration: 200,
	    easing: 'linear'
		});
	});

	$("#teamBut").click(function(){
	  $('#teamSec').ScrollTo({
	    duration: 200,
	    easing: 'linear'
		});
	});



	$("#contactBut").click(function(){
	  $('#contactSec').ScrollTo({
	    duration: 200,
	    easing: 'linear'
		});
	});

	$("#glowLogo").hover(function(){
	   $("#glowLogo").tooltip("show");
	});
	
	$("#aaciLogo").hover(function(){
	   $("#aaciLogo").tooltip("show");
	});

	$("#meerkatLogo").hover(function(){
	   $("#meerkatLogo").tooltip("show");
	});
});

