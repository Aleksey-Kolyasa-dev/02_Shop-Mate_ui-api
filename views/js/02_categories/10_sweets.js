$(document).ready(function() {

var sweets = {

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
Object.defineProperty(sweets, "createNewItem", { enumerable: false } ); 

sweets.createNewItem("xItem79", " ", 0.00, "10_swt_79.jpg", "пчк");
sweets.createNewItem("xItem78", " ", 0.00, "10_swt_78.jpg", "бнк");
sweets.createNewItem("xItem77", " ", 0.00, "10_swt_77.jpg", "шт");





sweets.createNewItem("vafli", "Вафли", 47.00, "10_swt_04_vafli_47_kg.jpg", "кг");
sweets.createNewItem("shokoladWhite", "Шоколад Белый", 23.00, "10_swt_03_shokolad_beliy_22_sht.jpg", "шт");
sweets.createNewItem("shokoladMilk", "Шоколад Молочный", 27.00, "10_swt_02_shokolad_molochniy_18_sht.jpg", "шт");
sweets.createNewItem("shokoladBlack", "Шоколад Черный", 28.00, "10_swt_01_shokolad_cherniy_28_sht.jpg", "шт");








												for ( key in sweets) {


													var regExpAlt = /\d\d_[A-Za-z]{2,}_\d\d_[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; // get Regular Expression from img name to put into img alt='' 

													var imgString = sweets[key].toString(); // get String from item-img-name to operate with it

													var alt = imgString.match(regExpAlt); // get img alt='' by Regular Expression

													var regExpItemId = /[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; //get Regular Expression from img name to put it into itemId 

													var itemId = imgString.match(regExpItemId); // get itemId by Regular Expression


												$('.sweets').prepend(
																		//itemId
													'<!-- !!n-item!! id '+itemId+' -->'+ 
													'<div class=" col-xs-12 col-sm-6 col-md-4 col-lg-3 n-item-main">'+

														'<!-- n-item-up -->'+
														'<div class="row">'+ 
															'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  item-up">'+
															
																 '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-10 img-block ">'+		// src='' to img
																	'<img class="img-circle img-thumbnail item-img" src="images/10_swt/'+sweets[key].img+'" alt="'+alt+'" title="' + sweets[key].name + '" atr="'+sweets[key].price +'" />'+
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
																'<span class=""> '+sweets[key].units +' </span>'+
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









