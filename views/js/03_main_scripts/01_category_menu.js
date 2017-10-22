$(document).ready(function() {
	
	
/*  *** CATEGORY MENU *** */

//Default Category
$(window).load( function() {
	//$('.category').show();
	$('.category').hide(); //$('.category:not(.vegetables)').hide();

	}
);

//vegetables button
$('#vegetables').click( function() {
	$('.category').hide();
	$('.vegetables').show('drop', 500);
	//$('.category:not(.vegetables)').hide().effect('drop', 500);

	}
);

//Fruits button
$('#fruits').click( function() {
	$('.category').hide();
	$('.fruits').show('drop', 500);
	}
);

//pickles button
$('#pickles').click( function() {
	$('.category').hide();
	$('.pickles').show('drop', 500);

	}
);

//meet button
$('#meat').click( function() {
	$('.category').hide();
	$('.meat').show('drop', 500);

	}
);

//fish button
$('#fish').click( function() {
	$('.category').hide();
	$('.fish').show('drop', 500);

	}
);

//milk button
$('#milk').click( function() {
	$('.category').hide();
	$('.milk').show('drop', 500);

	}
);

//freezing button
$('#freezing').click( function() {
	$('.category').hide();
	$('.freezing').show('drop', 500);

	}
);

//grocery button
$('#grocery').click( function() {
	$('.category').hide();
	$('.grocery').show('drop', 500);

	}
);

//bred button
$('#bred').click( function() {
	$('.category').hide();
	$('.bred').show('drop', 500);

	}
);

//sweets button
$('#sweets').click( function() {
	$('.category').hide();
	$('.sweets').show('drop', 500);

	}
);

//drinks button
$('#drinks').click( function() {
	$('.category').hide();
	$('.drinks').show('drop', 500);

	}
);

//chemicals button
$('#chemicals').click( function() {
	$('.category').hide();
	$('.chemicals').show('drop', 500);

	}
);

//hygiene button
$('#hygiene').click( function() {
	$('.category').hide();
	$('.hygiene').show('drop', 500);

	}
);

//items button
$('#items').click( function() {
	$('.category').hide();
	$('.items').show('drop', 500);

	}
);


/* ============ end ============ */


}); //Document.end