$(document).ready(function() {

var meat = {

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
Object.defineProperty(meat, "createNewItem", { enumerable: false } ); 


meat.createNewItem("xItem61", " ", 0.00, "04_mt_61.jpg", "кг");
meat.createNewItem("xItem60", " ", 0.00, "04_mt_60.jpg", "кг");
meat.createNewItem("xItem59", " ", 0.00, "04_mt_59.jpg", "кг");


meat.createNewItem("sardeli", "Сардельки", 80.00, "04_mt_29_sardeli_-80-kg.jpg", "кг");
meat.createNewItem("sosiski", "Сосиски", 68.00, "04_mt_28_sosiski-68-kg.jpg", "кг");
meat.createNewItem("kolbasaSiroKopchena", "Колбаса Сыро-Копченая", 145.00, "04_mt_27_kolbasa_sirokopchena_145-kg.jpg", "кг");
meat.createNewItem("kolbasaVarena", "Колбаса Вареная", 118.00, "04_mt_26_kolbasa_varena_doktorskaya-118-kg.jpg", "кг");
meat.createNewItem("kolbasaVarenaKopchena", "Колбаса Варено-Копченая", 90.00, "04_mt_25_kolbasa_varena_kopchena-90kg.jpg", "кг");
meat.createNewItem("kupatiSvinie", "Купаты Свиные", 60.00, "04_mt_24_kupaty_svinie-60-kg.jpg", "кг");
meat.createNewItem("kupatiKurica", "Купаты Куриные", 57.00, "04_mt_23_kupaty_kurica-57-kg.jpg", "кг");
meat.createNewItem("svininaFarsh", "Шарш Свиной", 50.00, "04_mt_22_farsh_svinina-50-kg.jpg", "кг");
meat.createNewItem("goviadinaFarsh", "Фарш Говяжий", 60.00, "04_mt_21_goviadina_farsh_-60-kg.jpg", "кг");
meat.createNewItem("kuricaFarsh", "Фарш Куриный", 60.00, "04_mt_20_kurica_farsh-60kg.jpg", "кг");
meat.createNewItem("indukPecheni", "Печень Индюшиная", 43.00, "04_mt_19_induk_pecheni-43-kg.jpg", "кг");
meat.createNewItem("kuricaCelaya", "Курица Целая", 37.00, "04_mt_18_kurica_celaya-37-kg.jpg", "кг");
meat.createNewItem("kuricaPecheni", "Печень Куриная", 42.00, "04_mt_17_kurica_pecheni_-42-kg.jpg", "кг");
meat.createNewItem("kuricaKrilo", "Крылья Куриные", 40.00, "04_mt_16_kurica_krilo-40-kg.jpg", "кг");
meat.createNewItem("kuricaBedro", "Бедро Куриное", 30.00, "04_mt_15_kurica_bedro.-30-kg.jpg", "кг");
meat.createNewItem("kuricaFile", "Филе Куриное", 60.00, "04_mt_14_kurica_file-60-kg.jpg", "кг");
meat.createNewItem("svininaSalo", "Сало", 35.00, "04_mt_13_svinina_salo-35-kg.jpg", "кг");
meat.createNewItem("svininaChelogach", "Челогач Свиной", 65.00, "04_mt_12_svinina_chelogach_-65-kg.jpg", "кг");
meat.createNewItem("svininaSheya", "Шея Свиная", 95.00, "04_mt_11_svinina_sheya_-95-kg.jpg", "кг");
meat.createNewItem("svininaVirezka", "Вырезка Свиная", 100.00, "04_mt_10_svinina_virezka_-100-kg.jpg", "кг");
meat.createNewItem("svininaRebra", "Ребра Свиные", 80.00, "04_mt_09_svinie_rebra-80-kg.jpg", "кг");
meat.createNewItem("svininaPecheni", "Печень Свиная", 30.00, "04_mt_08_svinina_pecheni_-30-kg.jpg", "кг");
meat.createNewItem("svininaOkost", "Окост Свиной", 70.00, "04_mt_07_svinina_okost_-70kg.jpg", "кг");
meat.createNewItem("svininaLopatka", "Лопатка Свиная", 70.00, "04_mt_06_svinina_lopatka_-70kg.jpg", "кг");
meat.createNewItem("goviadinaPecheni", "Печень Говяжья", 45.00, "04_mt_05_goviadina_pecheni_-45-kg.jpg", "кг");
meat.createNewItem("goviadinaGrudina", "Грудина Говяжья", 56.00, "04_mt_03_goviadina_grudinka-56-kg.jpg", "кг");
meat.createNewItem("goviadinaVirezka", "Вырезка Говяжья", 120.00, "04_mt_02_goviadina_virezka_120-kg.jpg", "кг");
meat.createNewItem("goviadinaOkost", "Окост Говяжий", 95.00, "04_mt_01_goviadina_okost-95-kg.jpg", "кг");




// meat
												for ( key in meat) {


													var regExpAlt = /\d\d_[A-Za-z]{2,}_\d\d_[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; // get Regular Expression from img name to put into img alt='' 

													var imgString = meat[key].toString(); // get String from item-img-name to operate with it

													var alt = imgString.match(regExpAlt); // get img alt='' by Regular Expression

													var regExpItemId = /[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; //get Regular Expression from img name to put it into itemId 

													var itemId = imgString.match(regExpItemId); // get itemId by Regular Expression


												$('.meat').prepend(
																		//itemId
													'<!-- !!n-item!! id '+itemId+' -->'+ 
													'<div class=" col-xs-12 col-sm-6 col-md-4 col-lg-3 n-item-main">'+

														'<!-- n-item-up -->'+
														'<div class="row">'+ 
															'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  item-up">'+
															
																 '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-10 img-block ">'+		// src='' to img
																	'<img class="img-circle img-thumbnail item-img" src="images/04_mt/'+meat[key].img+'" alt="'+alt+'" title="' + meat[key].name + '" atr="'+meat[key].price +'" />'+
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
																'<span class=""> '+meat[key].units +' </span>'+
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









