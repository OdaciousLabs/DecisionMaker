// Elastic Page
document.ontouchmove = function(event){
    event.preventDefault();
}


$(document).ready(function() {

	jQuery(window).bind('orientationchange', function(e) {
	
	  switch ( window.orientation ) {
	
	    case 0:
	        $("#landscape").hide();
	    break;
	
	    case 90:
	        $("#landscape").show();
	    break;
	
	    case -90:
	        $("#landscape").show();
	    break;
	
	  }
	
	});
	
	switch ( window.orientation ) {
	
	    case 0:
	        $("#landscape").hide();
	    break;
	
	    case 90:
	        $("#landscape").show();
	    break;
	
	    case -90:
	        $("#landscape").show();
	    break;
	
	  }

	// iPhone Detect
	if (window.navigator.userAgent.indexOf('iPhone') != -1) {
		if (window.navigator.standalone == true) {
			$("#appscreen").show();
		}else{
			$("#install").show();
		}
	}else{
		$("#desktop").show();
	}  

});
