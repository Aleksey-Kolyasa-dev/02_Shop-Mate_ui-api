$(document).ready(function() {

var drinks = {

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
Object.defineProperty(drinks, "createNewItem", { enumerable: false } ); 


drinks.createNewItem("xItem82", " ", 0.00, "11_dr_82.jpg", "бтл");
drinks.createNewItem("xItem81", " ", 0.00, "11_dr_81.jpg", "бтл");
drinks.createNewItem("xItem80", " ", 0.00, "11_dr_80.jpg", "бтл");





drinks.createNewItem("kognac", "Коньяк 0.5л", 110.00, "11_dr_19_kognac_0.5lt_110_btl.jpg", "бтл");
drinks.createNewItem("pivoRazliv", "Пиво Разливное 1л", 38.00, "11_dr_18_pivoRasliv_38_ltr.jpg", "бтл");
drinks.createNewItem("shampanskoe", "Шампанское 0.75л", 85.00, "11_dr_17_shompain_0.jpg", "бтл");
drinks.createNewItem("kognacDor", "Коньяк 0.5л", 140.00, "11_dr_16_kognac_0.jpg", "бтл");
drinks.createNewItem("vodka", "Водка 0.7л", 78.00, "11_dr_15_vodka_0.jpg", "бтл");
drinks.createNewItem("vinoR", "Вино Красное", 50.00, "11_dr_14_vinoRede_0.jpg", "бтл");
drinks.createNewItem("vinoW", "Вино Белое", 45.00, "11_dr_13_vinoWhite_0.jpg", "бтл");
drinks.createNewItem("sidr", "Сидр Яблочный 1лт", 18.00, "11_dr_12_sidr_18_ltr.jpg", "бтл");
drinks.createNewItem("pivoS", "Пиво 0.5", 14.00, "11_dr_11_pivoS_0.jpg", "бтл");
drinks.createNewItem("pivoXL", "Пиво 2л дор.", 36.00, "11_dr_10_pivoXM_1.jpg", "бтл");
drinks.createNewItem("pivoMG", "Пиво Стекло 1л", 30.00, "11_dr_09_pivoM_glass_30_ltr.jpg", "бтл");
drinks.createNewItem("pivoM", "Пиво 1л", 21.00, "11_dr_08_pivoM_1lt_21_btl.jpg", "бтл");
drinks.createNewItem("pivoL", "Пиво 2л", 28.00, "11_dr_07_pivoB_2.jpg", "бтл");
drinks.createNewItem("pivoBA", "Пиво БА 0.5л", 21.00, "11_dr_06_pivo_BA_05_21_btl.jpg", "бтл");
drinks.createNewItem("sweetVoda", "Вода Сладкая 2л", 17.00, "11_dr_05_sladkaVoda_2lt_17_btl.jpg", "бтл");
drinks.createNewItem("pepsi", "Pepsi 2л", 20.00, "11_dr_04_pepsi_2lt_20_btl.jpg", "бтл");
drinks.createNewItem("minVodaEssen", "Ессентуки 0.5л", 16.00, "11_dr_03_minVodaEsentuki_05lt_16_btl.jpg", "бтл");
drinks.createNewItem("minVoda", "Вода Минеральная", 7.00, "11_dr_02_minVoda_7.jpg", "бтл");
drinks.createNewItem("juce", "Сок 2л", 31.00, "11_dr_01_sok_2lt_31.jpg", "шт");







												for ( key in drinks) {


													var regExpAlt = /\d\d_[A-Za-z]{2,}_\d\d_[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; // get Regular Expression from img name to put into img alt='' 

													var imgString = drinks[key].toString(); // get String from item-img-name to operate with it

													var alt = imgString.match(regExpAlt); // get img alt='' by Regular Expression

													var regExpItemId = /[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; //get Regular Expression from img name to put it into itemId 

													var itemId = imgString.match(regExpItemId); // get itemId by Regular Expression


												$('.drinks').prepend(
																		//itemId
													'<!-- !!n-item!! id '+itemId+' -->'+ 
													'<div class=" col-xs-12 col-sm-6 col-md-4 col-lg-3 n-item-main">'+

														'<!-- n-item-up -->'+
														'<div class="row">'+ 
															'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  item-up">'+
															
																 '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-10 img-block ">'+		// src='' to img
																	'<img class="img-circle img-thumbnail item-img" src="images/11_dr/'+drinks[key].img+'" alt="'+alt+'" title="' + drinks[key].name + '" atr="'+drinks[key].price +'" />'+
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
																'<span class=""> '+drinks[key].units +' </span>'+
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









