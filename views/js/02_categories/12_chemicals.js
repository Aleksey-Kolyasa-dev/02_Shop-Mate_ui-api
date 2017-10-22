$(document).ready(function() {

var chemicals = {

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
Object.defineProperty(chemicals, "createNewItem", { enumerable: false } ); 



chemicals.createNewItem("xItem85", " ", 0.00, "12_chm_85.jpg", "шт");
chemicals.createNewItem("xItem84", " ", 0.00, "12_chm_84.jpg", "шт");
chemicals.createNewItem("xItem83", " ", 0.00, "12_chm_83.jpg", "шт");






chemicals.createNewItem("cleanMebeli", "Пронто", 56.00, "12_chm_17_cleanMebeli_59_sht.jpg", "шт");
chemicals.createNewItem("opolaskivateli", "Кондиционер Белье 2л", 70.00, "12_chm_16_opolaskivateli_2lt_70_sht.jpg", "шт");
chemicals.createNewItem("cleanPipes", "Для Прочистки Труб", 17.00, "12_chm_16_cleanPipes_17.jpg", "шт");
chemicals.createNewItem("otbelivateli", "Отбеливатель", 16.00, "12_chm_15_otbelivateli_16_sht.jpg", "шт");
chemicals.createNewItem("cleanUnitazAuto", "Для Смыва Унитаза", 34.00, "12_chm_14_clean_unitazAuto_34_sht.jpg", "шт");
chemicals.createNewItem("cleanKover", "Для Ковров 0.4л", 75.00, "12_chm_13_cleanKover_04lt_75_sht.jpg", "шт");
chemicals.createNewItem("cleanWoodPol", "Для Деревяных Полов 0.75л", 60.00, "12_chm_12_cleanWoodPol_0.jpg", "шт");
chemicals.createNewItem("cleanPol", "Для Полов 0.5л", 26.00, "12_chm_11_cleanPol_05lt_26_sht.jpg", "шт");
chemicals.createNewItem("cleanRakovina", "Для Раковин 0.5л", 47.00, "12_chm_10_cleanRakovina_05lt_47_sht.jpg", "шт");
chemicals.createNewItem("cleanUnitazS", "Для Унитаза 0.5л", 27.00, "12_chm_09_cleanUnitaz_05lt_27_sht.jpg", "шт");
chemicals.createNewItem("cleanUnitaz", "Для Унитаза 1л", 52.00, "12_chm_08_cleanUnitaz_1lt_52_sht.jpg", "шт");
chemicals.createNewItem("cleanPechi", "Для Печей", 32.00, "12_chm_07_cleanPechi_05lt_32_sht.jpg", "шт");
chemicals.createNewItem("cleanSredstvoKuhnia", "Ср-во Анти-Жир 0.5л", 49.00, "12_chm_06_cleanSredstvoKuhnia_05lt_49_sht.jpg", "шт");
chemicals.createNewItem("creamCleanUni", "Cif Крем 0.5л", 37.00, "12_chm_05_kremChisnkaUniversal_05lt_37_sht3.jpg", "шт");
chemicals.createNewItem("sredstvoPosudaM", "Fairy д. Посуды 0.5л", 22.00, "12_chm_04_dliaPosudi_0.jpg", "бтл");
chemicals.createNewItem("sredstvoPosudaL", "Fairy д. Посуды 1л", 40.00, "12_chm_03_dliaPosudi_1lt_40_sht.jpg", "бтл");
chemicals.createNewItem("powderWashS", "Стир. Порошок 0.45кг", 26.00, "12_chm_02_powderWashS_26_sht.jpg", "шт");
chemicals.createNewItem("powderWashL", "Стир. Порошок 1.5кг", 75.00, "12_chm_02_powderWashL_1.jpg", "шт");
chemicals.createNewItem("jidkiyPowderWash", "Жидкое Ср-во для Стирки", 48.00, "12_chm_01_jidkiyPowderWash_48_sht.jpg", "шт");







												for ( key in chemicals) {


													var regExpAlt = /\d\d_[A-Za-z]{2,}_\d\d_[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; // get Regular Expression from img name to put into img alt='' 

													var imgString = chemicals[key].toString(); // get String from item-img-name to operate with it

													var alt = imgString.match(regExpAlt); // get img alt='' by Regular Expression

													var regExpItemId = /[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; //get Regular Expression from img name to put it into itemId 

													var itemId = imgString.match(regExpItemId); // get itemId by Regular Expression


												$('.chemicals').prepend(
																		//itemId
													'<!-- !!n-item!! id '+itemId+' -->'+ 
													'<div class=" col-xs-12 col-sm-6 col-md-4 col-lg-3 n-item-main">'+

														'<!-- n-item-up -->'+
														'<div class="row">'+ 
															'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  item-up">'+
															
																 '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-10 img-block ">'+		// src='' to img
																	'<img class="img-circle img-thumbnail item-img" src="images/12_chm/'+chemicals[key].img+'" alt="'+alt+'" title="' + chemicals[key].name + '" atr="'+chemicals[key].price +'" />'+
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
																'<span class=""> '+chemicals[key].units +' </span>'+
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









