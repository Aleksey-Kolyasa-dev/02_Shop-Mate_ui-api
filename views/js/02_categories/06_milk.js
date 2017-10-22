$(document).ready(function() {

var milk = {

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
Object.defineProperty(milk, "createNewItem", { enumerable: false } ); 

milk.createNewItem("xItem67", " ", 0.00, "06_mk_67.jpg", "шт");
milk.createNewItem("xItem66", " ", 0.00, "06_mk_66.jpg", "кг");
milk.createNewItem("xItem65", " ", 0.00, "06_mk_65.jpg", "лтр");



milk.createNewItem("riazhenka", "Ряженка", 25.00, "06_mk_09_riazhenka-25-litr.jpg", "лтр");
milk.createNewItem("maslo_slivochnoe", "Масло Сливочное", 125.00, "06_mk_08_maslo_slivochnoe-125-kg.jpg", "кг");
milk.createNewItem("slivki", "Сливки", 86.00, "06_mk_07_slivki-86-litr.jpg", "лтр");
milk.createNewItem("kefir", "Кефир", 20.00, "06_mk_06_kefir_-20-litr.jpg", "лтр");
milk.createNewItem("smetana", "Сметана", 18.00, "06_mk_05_smetana-18-banka.jpg", "шт");
milk.createNewItem("cheeze", "Сыр Твердый", 100.00, "06_mk_05_siri_-100kg.jpg", "кг");
milk.createNewItem("eggs", "Яйца", 22.00, "06_mk_04_eggs_-22.jpg", "10-ок");
milk.createNewItem("tvorog", "Творог", 71.00, "06_mk_03_tvorog_-71-kg.jpg", "кг");
milk.createNewItem("milk", "Молоко", 19.00, "06_mk_02_milk_19-bottle.jpg", "лтр");
milk.createNewItem("yogurt", "Йогурт", 20.00, "06_mk_01_yogurt--20-pc.jpg", "шт");




// milk
												for ( key in milk) {


													var regExpAlt = /\d\d_[A-Za-z]{2,}_\d\d_[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; // get Regular Expression from img name to put into img alt='' 

													var imgString = milk[key].toString(); // get String from item-img-name to operate with it

													var alt = imgString.match(regExpAlt); // get img alt='' by Regular Expression

													var regExpItemId = /[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; //get Regular Expression from img name to put it into itemId 

													var itemId = imgString.match(regExpItemId); // get itemId by Regular Expression


												$('.milk').prepend(
																		//itemId
													'<!-- !!n-item!! id '+itemId+' -->'+ 
													'<div class=" col-xs-12 col-sm-6 col-md-4 col-lg-3 n-item-main">'+

														'<!-- n-item-up -->'+
														'<div class="row">'+ 
															'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  item-up">'+
															
																 '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-10 img-block ">'+		// src='' to img
																	'<img class="img-circle img-thumbnail item-img" src="images/06_mk/'+milk[key].img+'" alt="'+alt+'" title="' + milk[key].name + '" atr="'+milk[key].price +'" />'+
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
																'<span class=""> '+milk[key].units +' </span>'+
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









