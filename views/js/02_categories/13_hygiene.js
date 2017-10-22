$(document).ready(function() {

var hygiene = {

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
Object.defineProperty(hygiene, "createNewItem", { enumerable: false } ); 




hygiene.createNewItem("xItem88", " ", 0.00, "13_hyg_88.jpg", "бтл");
hygiene.createNewItem("xItem87", " ", 0.00, "13_hyg_87.jpg", "бтл");
hygiene.createNewItem("xItem86", " ", 0.00, "13_hyg_86.jpg", "бтл");


hygiene.createNewItem("tBumPAK", "Туалетная Бумага 4шт.", 25.00, "13_hyg_21_tBumPAK_25_pch.jpg", "пчк");
hygiene.createNewItem("zubPasta", "Зубная Паста", 28.00, "13_hyg_20_zubPasta_28_sht.jpg", "шт");
hygiene.createNewItem("zShetka", "Зубная Щетка", 40.00, "13_hyg_19_zShetka_40_sht.jpg", "шт");
hygiene.createNewItem("kremRuki", "Крем для Рук", 35.00, "13_hyg_18_kremRuki_35_sht.jpg", "шт");
hygiene.createNewItem("krem_lico", "Крем для Лица", 50.00, "13_hyg_17_krem_lico_50_sht.jpg", "шт");
hygiene.createNewItem("salfetki", "Салфетки Столовые", 12.00, "13_hyg_16_salfetki_10_pch.jpg", "пчк");
hygiene.createNewItem("polotenca", "Полотенца Кухонные", 15.00, "13_hyg_15_polotenca_15_pch.jpg", "пчк");
hygiene.createNewItem("tBum", "Туалетная Бумага", 1.70, "13_hyg_14_hyg_tBum_1.jpg", "шт");
hygiene.createNewItem("tamponi", "Тампоны", 50.00, "13_hyg_13_tamponi_50_pch.jpg", "шт");
hygiene.createNewItem("britGel", "Гель для Бритья", 77.00, "13_hyg_12_britGel_77_sht.jpg", "шт");
hygiene.createNewItem("antiprospirant", "Дезодорант", 25.00, "13_hyg_11_antiprospirant_24_sht.jpg", "шт");
hygiene.createNewItem("vatnieDiski", "Ватные Диски", 30.00, "13_hyg_10_vatnieDiski_30_pch.jpg", "пчк");
hygiene.createNewItem("salfetkiWet", "Салфетки Влажные", 8.00, "13_hyg_09_salfetkiWet_8_sht.jpg", "пчк");
hygiene.createNewItem("geliDush", "Гель для Душа", 50.00, "13_hyg_08_geliDush_50_sht.jpg", "шт");
hygiene.createNewItem("miloTverdoePiece", "Мыло для Душа", 13.00, "13_hyg_07_miloTverdoeOdno_13_sht.jpg", "шт");
hygiene.createNewItem("miloTverdoePachka", "Мыло Пачка", 25.00, "13_hyg_06_miloTverdoe-pachka_25_pach.jpg", "пчк");
hygiene.createNewItem("miloJidkoe", "Мыло Жидкое", 32.00, "13_hyg_05_miloJidkoe_32_sht.jpg", "шт");
hygiene.createNewItem("hairPaint", "Краска для Волос", 50.00, "13_hyg_04_hairPaint_50_sht.jpg", "шт");
hygiene.createNewItem("balsamVolosiM", "Бальзам д. Волос 0.4л", 50.00, "13_hyg_03_balsamVolosiM_0.jpg", "шт");
hygiene.createNewItem("shampuM", "Шампунь 0.4л", 90.00, "13_hyg_02_shampuM_0.jpg", "шт");
hygiene.createNewItem("shampuXL", "Шампунь 0,6л", 130.00, "13_hyg_01_shampuXL_0.jpg", "шт");




												for ( key in hygiene) {


													var regExpAlt = /\d\d_[A-Za-z]{2,}_\d\d_[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; // get Regular Expression from img name to put into img alt='' 

													var imgString = hygiene[key].toString(); // get String from item-img-name to operate with it

													var alt = imgString.match(regExpAlt); // get img alt='' by Regular Expression

													var regExpItemId = /[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; //get Regular Expression from img name to put it into itemId 

													var itemId = imgString.match(regExpItemId); // get itemId by Regular Expression


												$('.hygiene').prepend(
																		//itemId
													'<!-- !!n-item!! id '+itemId+' -->'+ 
													'<div class=" col-xs-12 col-sm-6 col-md-4 col-lg-3 n-item-main">'+

														'<!-- n-item-up -->'+
														'<div class="row">'+ 
															'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  item-up">'+
															
																 '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-10 img-block ">'+		// src='' to img
																	'<img class="img-circle img-thumbnail item-img" src="images/13_hyg/'+hygiene[key].img+'" alt="'+alt+'" title="' + hygiene[key].name + '" atr="'+hygiene[key].price +'" />'+
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
																'<span class=""> '+hygiene[key].units +' </span>'+
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









