$(document).ready(function() {

/*  *** ITEM DEFAULT DATA FUNCTIONAL *** */


$(window).load( function() {
	
	/*$(".table-container").hide(); // table default is hidden 
	$("#ready").hide(); // creat-list button default is hidden 
	$(".total-top").hide();  // total summ in basket on top is default hidden; shown if items in basket > 15 pcs.
	$(".total-bottom").hide(); // total summ in basket on bottom is default hidden; shown if items in basket > 0 pcs.
	*/
	
	$('.n-item-main').each(function() {

	var getItemPriceDefault =  $(this).find('img').attr('atr');

		$(this).find('.price').val(getItemPriceDefault);  // set default price


	var	getItemSummDefault = $(this).find('.price').val();

		$(this).find('.summ').val(getItemSummDefault);  // set default summ


	var getItemNameDefault = $(this).find('img').attr('title');

		$(this).find('.name').val(getItemNameDefault);  // set default name

			}

		);

	}
);

}); //Document.end