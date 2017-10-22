$(document).ready(function() {

var pickles = {

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
Object.defineProperty(pickles, "createNewItem", { enumerable: false } ); 


pickles.createNewItem("xItem58", " ", 0.00, "03_sl_58.jpg", "кг");
pickles.createNewItem("xItem57", " ", 0.00, "03_sl_57.jpg", "кг");
pickles.createNewItem("xItem56", " ", 0.00, "03_sl_56.jpg", "кг");

pickles.createNewItem("kapustaKvashena", "Квашеная Капуста", 25.00, "03_sl_04_kvashena_kapusta-25-kg.jpg", "кг");
pickles.createNewItem("koreyskayaMokovi", "Морковь по Корейски", 60.00, "03_sl_03_koreyskaya_morkov-35-kg.jpg", "кг");
pickles.createNewItem("pomidoriSolenie", "Соленые Помидоры", 35.00, "03_sl_02_solenie_pomidori-35-kg.jpg", "кг");
pickles.createNewItem("ogurciSolenie", "Соленые Огурцы", 27.00, "03_sl_01_solenie_ogurci-27-kg.jpg", "кг");


// pickles
												for ( key in pickles) {


													var regExpAlt = /\d\d_[A-Za-z]{2,}_\d\d_[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; // get Regular Expression from img name to put into img alt='' 

													var imgString = pickles[key].toString(); // get String from item-img-name to operate with it

													var alt = imgString.match(regExpAlt); // get img alt='' by Regular Expression

													var regExpItemId = /[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; //get Regular Expression from img name to put it into itemId 

													var itemId = imgString.match(regExpItemId); // get itemId by Regular Expression


												$('.pickles').prepend(
																		//itemId
													'<!-- !!n-item!! id '+itemId+' -->'+ 
													'<div class=" col-xs-12 col-sm-6 col-md-4 col-lg-3 n-item-main">'+

														'<!-- n-item-up -->'+
														'<div class="row">'+ 
															'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  item-up">'+
															
																 '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-10 img-block ">'+		// src='' to img
																	'<img class="img-circle img-thumbnail item-img" src="images/03_sl/'+pickles[key].img+'" alt="'+alt+'" title="' + pickles[key].name + '" atr="'+pickles[key].price +'" />'+
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
																'<span class=""> '+pickles[key].units +' </span>'+
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









