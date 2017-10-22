$(document).ready(function() {

/*  *** ITEM UI BUTTONS FUNCTIONAL *** */

//Active-Classes
$('.n-item-main').hover(function(){

	$('.goods .n-item-main:hover').addClass('active-item');

	$(this).find(".name").addClass('active-name');

	$(this).find(".price").addClass('active-price');

	$(this).find(".units").addClass('active-units');

	$(this).find(".summ").addClass('active-summ');

		},  function()  {
	
	$('.goods .n-item-main').removeClass('active-item');

	$(this).find(".name").removeClass('active-name');
	
	$(this).find(".price").removeClass('active-price');
	
	$(this).find(".units").removeClass('active-units');
	
	$(this).find(".summ").removeClass('active-summ');

	}
);

//1+
$(".one-plus").click(function(){
		
		var price = $('.active-price').val();
	
		var units = $(".active-units").val();
		
		var unitsPlusOne = +units + 1;
		
  		var summa = price*unitsPlusOne;

  		$('.active-summ').val(summa.toFixed(2));

  		$(".active-units").val(unitsPlusOne.toFixed(2));
});

//-1
$(".one-minus").click(function(){
		
		var price = $('.active-price').val();
	
		var units = $(".active-units").val();
		
		var unitsPlusOne = +units - 1;
		
  		var summa = price*unitsPlusOne;

  		$('.active-summ').val(summa.toFixed(2));

  		$(".active-units").val(unitsPlusOne.toFixed(2));
});

//+0.1
$(".zero-one-plus").click(function(){
		
		var price = $('.active-price').val();
	
		var units = $(".active-units").val();
		
		var unitsPlusOne = +units + 0.1;
		
  		var summa = price*unitsPlusOne;

  		$('.active-summ').val(summa.toFixed(2));

  		$(".active-units").val(unitsPlusOne.toFixed(2));
});

//-0.1
$(".zero-one-minus").click(function(){
		
		var price = $('.active-price').val();
	
		var units = $(".active-units").val();
		
		var unitsPlusOne = +units - 0.1;
		
  		var summa = price*unitsPlusOne;

  		$('.active-summ').val(summa.toFixed(2));

  		$(".active-units").val(unitsPlusOne.toFixed(2));
});

/* ============ end ============ */


}); //Document.end