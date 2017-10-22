$(document).ready(function() {

/*  *** SCROLL UP BUTTON *** */

//appear behavior
$(window).scroll( function() {
	if ( $( document ).scrollTop() > 400 ) {
			
		$('#scrollup').fadeIn('fast');
		
	} else {
			
		$('#scrollup').fadeOut('fast');
	}
});


// mouse interaction behavior
$('#scrollup img')
	.mouseover( function() {
		$( this )
			.animate( {opacity: 0.65}, 100 );
				})
					.mouseout( function() {
						$( this )
							.animate( {opacity: 1}, 100 );
	
	}).click( function() {
		
		window.scroll( 0, 0 ); 
		
		return false;
		
		}
	);

/* ============ end ============ */


});// end of DOCUMENT









