

$(document).ready(function() {


$(window).load( function() {


	//-- for developers, to show the window loading time in ms.
	var end = new Date();

	var result = end - start;

	$('#back').hide();

	$('.header-main').find('#time').text("loaded with " + result + " ms");
	//--

});

/*  *** TABLE-LIST SHOW/HIDE *** */

$('#ready').click(function(){
	$(this).hide();
	$('.row:not(.header-main)').hide()
	$('.header').hide();
	$('#back').show('scale', 500);
	$('.table-container').show('drop', 1000);

}
	);


$('#back').click(function(){
	$(this).hide();
	$('.row').show();
	$('.header').show();
	$('.table-container').hide();
	$('#ready').show('scale', 500);

}
	);

/* ============ end ============ */

}); //Document.end