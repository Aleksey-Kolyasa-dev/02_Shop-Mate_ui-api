$(document).ready(function() {

var items = {

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
Object.defineProperty(items, "createNewItem", { enumerable: false } ); 

items.createNewItem("xItem99", " ", 0.00, "14_itm_99.jpg", "шт");
items.createNewItem("xItem98", " ", 0.00, "14_itm_98.jpg", "шт");
items.createNewItem("xItem97", " ", 0.00, "14_itm_97.jpg", "шт");
items.createNewItem("xItem96", " ", 0.00, "14_itm_96.jpg", "шт");
items.createNewItem("xItem95", " ", 0.00, "14_itm_95.jpg", "шт");
items.createNewItem("xItem94", " ", 0.00, "14_itm_94.jpg", "шт");
items.createNewItem("xItem93", " ", 0.00, "14_itm_93.jpg", "шт");
items.createNewItem("xItem92", " ", 0.00, "14_itm_92.jpg", "шт");
items.createNewItem("xItem91", " ", 0.00, "14_itm_91.jpg", "шт");
items.createNewItem("xItem90", " ", 0.00, "14_itm_90.jpg", "шт");
items.createNewItem("xItem89", " ", 0.00, "14_itm_89.jpg", "шт");






items.createNewItem("cleanObuvi", "Губка для Обуви", 16.00, "14_itm_08_cleanObuvi_13_sht.jpg", "шт");
items.createNewItem("perchatki_resina", "Перчатки Резиновые", 28.00, "14_itm_07_perchatki_resina_28_pch.jpg", "пчк");
items.createNewItem("salfetkiKuhinie", "Салфетки Кухонные 5шт", 26.00, "14_itm_06_salfetkiKuhinie_5_26_pch.jpg", "пчк");
items.createNewItem("paket_musor", "Пакеты Мусорные", 31.00, "14_itm_05_paket_musor_31_pch.jpg", "пчк");
items.createNewItem("foil", "Фольга Пищевая 50м", 118.00, "14_itm_04_foil_50m_118_sht.jpg", "шт");
items.createNewItem("pishPenka", "Пленка Пищевая 200м", 76.00, "14_itm_03_pishPenka_200m_76_sht.jpg", "шт");
items.createNewItem("pergament_bum", "Пергамент. Бумага 70м", 70.00, "14_itm_02_pergament_bum_20m_70_sht.jpg", "шт");
items.createNewItem("batareiki", "Батарейки 1шт", 22.00, "14_itm_01_batareiki_22_sht.jpg", "шт");



												for ( key in items) {


													var regExpAlt = /\d\d_[A-Za-z]{2,}_\d\d_[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; // get Regular Expression from img name to put into img alt='' 

													var imgString = items[key].toString(); // get String from item-img-name to operate with it

													var alt = imgString.match(regExpAlt); // get img alt='' by Regular Expression

													var regExpItemId = /[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; //get Regular Expression from img name to put it into itemId 

													var itemId = imgString.match(regExpItemId); // get itemId by Regular Expression


												$('.items').prepend(
																		//itemId
													'<!-- !!n-item!! id '+itemId+' -->'+ 
													'<div class=" col-xs-12 col-sm-6 col-md-4 col-lg-3 n-item-main">'+

														'<!-- n-item-up -->'+
														'<div class="row">'+ 
															'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  item-up">'+
															
																 '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-10 img-block ">'+		// src='' to img
																	'<img class="img-circle img-thumbnail item-img" src="images/14_itm/'+items[key].img+'" alt="'+alt+'" title="' + items[key].name + '" atr="'+items[key].price +'" />'+
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
																'<span class=""> '+items[key].units +' </span>'+
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









