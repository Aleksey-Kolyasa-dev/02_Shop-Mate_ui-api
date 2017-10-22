$(document).ready(function() {

var fruits = {

	createNewItem : function(item, iName, iPrice, iImg, iUnits) {

		return this[item] = {
			
			name : iName,
			
		   price : iPrice,
			
			 img : iImg,
			
		   units : iUnits,

		   toString: function(){ return iImg; }

		};
	}
};

//To prevent generation of  new Item from Constructor Property-Function "createNewItem" :
Object.defineProperty(fruits, "createNewItem", { enumerable: false } ); 


fruits.createNewItem("xItem55", " ", 0.00, "02_frt_55.jpg", "кг");
fruits.createNewItem("xItem54", " ", 0.00, "02_frt_54.jpg", "кг");
fruits.createNewItem("xItem53", " ", 0.00, "02_frt_53.jpg", "кг");


fruits.createNewItem("mango", "Манго", 50.00, "02_fr_12_mango_50 pc.jpg", "кг");
fruits.createNewItem("malina", "Малина", 60.00, "02_fr_11_malina_ 60kg.jpg", "кг");
fruits.createNewItem("arbuz", "Арбуз", 5.00, "02_fr_10_arbuz_5 kg.jpg", "кг");
fruits.createNewItem("apple", "Яблоки", 20.00, "02_fr_10_apple_20.jpg", "кг");
fruits.createNewItem("persik", "Персики", 40.00, "02_fr_09_persik_40.jpg", "кг");
fruits.createNewItem("mandarin", "Мандарины", 50.00, "02_fr_08_mandarin_50 kg.jpg", "кг");
fruits.createNewItem("lemon", "Лимон", 78.00, "02_fr_07_limon_78kg.jpg", "кг");
fruits.createNewItem("greipfrut", "Грейпфрут", 55.00, "02_fr_06_greipfrut_55kg.jpg", "кг");
fruits.createNewItem("grusha", "Груша", 25.00, "02_fr_05_grusha_25kg.jpg", "кг");
fruits.createNewItem("banan", "Бананы", 26.00, "02_fr_04_banan_26.0kg.jpg", "кг");
fruits.createNewItem("dinia", "Дыня", 10.00, "02_fr_03_dinia_10_kg.jpg", "кг");
fruits.createNewItem("abrikos", "Абрикос", 35.00, "02_fr_02_abrikos_35 kg.jpg", "кг");
fruits.createNewItem("apelsin", "Апельсин", 18.00, "02_fr_01_apelsin 18 kg.jpg", "кг");

// fruits
												for ( key in fruits) {


													var regExpAlt = /\d\d_[A-Za-z]{2,}_\d\d_[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; // get Regular Expression from img name to put into img alt='' 

													var imgString = fruits[key].toString(); // get String from item-img-name to operate with it

													var alt = imgString.match(regExpAlt); // get img alt='' by Regular Expression

													var regExpItemId = /[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; //get Regular Expression from img name to put it into itemId 

													var itemId = imgString.match(regExpItemId); // get itemId by Regular Expression


												$('.fruits').prepend(
																		//itemId
													'<!-- !!n-item!! id '+itemId+' -->'+ 
													'<div class=" col-xs-12 col-sm-6 col-md-4 col-lg-3 n-item-main">'+

														'<!-- n-item-up -->'+
														'<div class="row">'+ 
															'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  item-up">'+
															
																 '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-10 img-block ">'+		// src='' to img
																	'<img class="img-circle img-thumbnail item-img" src="images/02_frt/'+fruits[key].img+'" alt="'+alt+'" title="' + fruits[key].name + '" atr="'+fruits[key].price +'" />'+
																 '</div>'+
															  
																 '<div class="col-xs-2 col-sm-2 col-md-2 col-lg-2  ui-ctrl">'+
																	'<ul class="">'+
																		 '<li ><button class="btn btn-primary btn-sm one-plus" ><span class="glyphicon glyphicon-chevron-up"></span></button></li>'+
																		 '<li><button class="btn btn-info btn-xs zero-one-plus" ><span class="glyphicon glyphicon-chevron-up"></span></button></li>'+
																		 '<li><button class="btn btn-warning btn-xs zero-one-minus" ><span class="glyphicon glyphicon-chevron-down"></span></button></li>'+
																		 '<li><button class="btn btn-danger btn-sm one-minus" ><span class="glyphicon glyphicon-chevron-down"></span></button></li>'+
																	'</ul>'+
																 '</div>'+
															
															 '</div>'+
														'</div><!-- //n-item-up -->'+
													  
														'<!-- n-item-down -->'+
														'<div class="row">'+
															'<div class="col-xs-12 col-sm-12  col-md-12 col-lg-12 item-down   text-center">'+
															  
															  '<div class="col-xs-12 col-sm-12  col-md-12 col-lg-12 name-block">'+
																'<input class="text-center name" type="textarea" value="Огурцы" />'+
															  '</div>'+
															         
															  '<div class="col-xs-4 col-sm-4  col-md-4 col-lg-4 text-center price-block">'+
																'<input class="text-center price" type="textarea"  value="18.00" />'+
																'<span class=""> $ </span>'+
															  '</div>'+

															  '<div class="col-xs-3 col-sm-4  col-md-4 col-lg-4 text-center units-block ">'+
																'<input class="text-center units" type="textarea" value="1.00" />'+
																'<span class=""> '+fruits[key].units +' </span>'+
															  '</div>'+		  	 
															  
															  '<div class="col-xs-5 col-sm-4  col-md-4 col-lg-4 text-center summ-block">'+
																'<input class="text-center summ" type="textarea"  value="00.00" />'+
																'<span class=""> sum </span>'+
															  '</div>'+
															  

															'</div>'+
														'</div><!-- //n-item-down -->'+
												
													'</div><!-- //!!n-item!! id '+itemId+'-->'

											);

                                       }

});// end of DOCUMENT









