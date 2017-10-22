$(document).ready(function() {

/*  *** BASKET Functional *** */


var goodsCount = 0;

var goodsSumm = 0;

// DRAGABBLE - Shelf
	$('.n-item-main').draggable({
		
		revert:'invalid',
		
		helper: 'clone',
		
		cursor:'move',
		
		containment: '.content-main'
	});

// DROPPABLE - Basket
	$('.basket').droppable({
		
		accept:'.goods .n-item-main',
		
		activeClass: 'active',
		
		drop: function(event, ui) {
			
			var item = $(ui.draggable);

			var itemId = item.find('img').attr('alt');




				goodsCount += 1;
				$('.basket-goods-num').text(goodsCount);

					
				if ( goodsCount == 1 ) {

					$(".total-bottom")
						.show('fold', 500);
					
					$(".ready")
						.show('slide', 500)
							.effect('bounce', 500);

					
					}


				if ( goodsCount > 15 ) {

					$(".total-top").show('fold', 500);
					
					}

				goodsSumm += +item.find('.summ').val();
				$('.basket-goods-summ').text(goodsSumm.toFixed(2)); // to show total summ in basket
				$('.t-price').text(goodsSumm.toFixed(2) + " $"); // to show total summ in table-list


		item.hide('scale', 500, 
						
						function() {
							
							$(this)
								.prependTo($('.basket-head'))
									.show('drop', 500)
										.find(".item-down, .ui-ctrl")
											.hide();
							
							$(this)
								.css({
									'border':'0px solid white',
									'margin':'0.5vmax 0.5vmax' 
								});
							
							$(this)
								.find('.img-block')
									.removeClass('col-lg-10')
										.width('6vmax');
			}
		);
	
				// add item to the table-list if item was dropped in to the basket
				$('.t-dynamic-list').prepend(
										'<tr class=' + '' + itemId + '>'
											
											+ '<td>'
												+ item.find('.name').val() 
											+ '</td>'
											+ '<td class="text-center">'
												+ item.find('.units').val()
											+ '</td>' 
											+ '<td class="text-center">'
												+ item.find('.units-block span').text()
											+ '</td>'
											+ '<td class="text-center">'
												+ item.find('.summ').val() + " $"
											+ '</td>'

										+'</tr>'
														);
	 				
	}
});

   
// DROPPABLE-BACK Shelf
	$('.category:visible').droppable({
		
		accept:'.basket .n-item-main',
		
		activeClass: 'active',
		
		drop: function(event, ui) {
				
				var item = $(ui.draggable);

				var itemId = item.find('img').attr('alt'); // get Item "id" from img atr="..."



					goodsCount -= 1;
					$('.basket-goods-num').text(goodsCount);

					if ( goodsCount == 0 ) {

					$(".total-bottom")
						.hide('fold', 500);
					
					$(".ready")
						.effect('bounce', 500)
							.hide('puff', 500);
					
					}

					if ( goodsCount < 15 )	{

						$(".total-top").hide('fold', 500);
					
						}

					goodsSumm -= +item.find('.summ').val();
					$('.basket-goods-summ').text(goodsSumm.toFixed(2)); // to show total summ in basket
					$('.t-price').text(goodsSumm.toFixed(2) + " $"); // to show total summ in table-list

		item.hide('drop', 500, 
						
						function()	{
							
							$(this)
								.prependTo($('.category:visible'))
									.show('scale', 500)
										.find(".item-down, .ui-ctrl")
											.show();
							
							$(this)
								.css({ 
									'border':'2px solid #FFFF00',
									'margin': '0'
								});
							
							$(this)
								.find('.img-block')
									.addClass('col-lg-10')
										.width('');
									
			}
		);
					// this is to remove the row in the table-list with dropped back to shelf item 
					$('.t-dynamic-list')
						.find('tr[class='+ itemId + ']')
							.remove();

	}
});


/* ============ end ============ */


}); //Document.end