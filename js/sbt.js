$(function() {
	"use strict";
	$("#emailsubscribe").submit(function(e) {
		$.ajax({
		   type: "POST",
		   url: "/mailgun/mailing-list-add.php",
		   data: $("#emailsubscribe").serialize(),
		   success: function(data)
		   {
		   		if( data.indexOf('API were invalid') > 0)
		   		{
		   			// error
		   			$('#emailsubscribe').append('<span class="subcribe-error">You may already be subscribed. Check your email.<span>');
		   			setTimeout(function() {
					  $('.subcribe-error').fadeOut('fast');
					}, 3000); // <-- time in milliseconds
		   		}
		   		else{
		   			$('#emailsubscribe').hide();
		   			$('.subscribe-form').html('<div class="subscribe-success">You have been subscribed.</div>');
		   		}
		   },
		   error: function(errorThrown) {
	            console.log('in error',errorThrown);
	    	}
		 });
		e.preventDefault(); 
	});
});

