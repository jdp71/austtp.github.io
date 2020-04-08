$(document).ready(function(){
	$("#navbar a").click(function(e){
		e.preventDefault();
		var n = $("#n ul");
		
		if(n.is(":visible")) {
			n.slideUp();
		} else {
			n.slideDown();
		}
	});
	
	$("#dropdown").click(function(e){
		e.preventDefault();
		var n = $("#secondary");
		
		if(n.is(":visible")) {
			n.fadeOut("fast");
		} else {
			n.show();
		}
	});
	
	$(window).resize(function() {
		var n = $("#n > ul, #n > div > ul");
		if($(window).width() > 620) {
			n.hide();
		}
	});
});
