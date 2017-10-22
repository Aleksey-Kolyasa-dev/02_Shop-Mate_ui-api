$(document).ready(function() {

var vegetables = {

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
Object.defineProperty(vegetables, "createNewItem", { enumerable: false } ); 



vegetables.createNewItem("xItem52", " ", 0.00, "01_vg_52.jpg", "кг");
vegetables.createNewItem("xItem51", " ", 0.00, "01_vg_51.jpg", "кг");
vegetables.createNewItem("xItem50", " ", 0.00, "01_vg_50.jpg", "кг");

vegetables.createNewItem("shampinion", "Шампиньоны", 34.00, "01_vg_22_shampinion_34 kg.jpg", "кг");
vegetables.createNewItem("shavel", "Щавель", 65.00, "01_vg_20_shavel_65 kg.jpg", "кг");
vegetables.createNewItem("bazilik", "Базилик", 15.00, "01_vg_20_bazilik_15 PC.jpg", "пч");
vegetables.createNewItem("LukZeleniy", "Лук Зеленый", 8.00, "01_vg_19_lukZeleniy_8.0 PC.jpg", "пч");
vegetables.createNewItem("ukrop", "Укроп", 7.00, "01_vg_18_ukrop_7.0 PC.jpg", "пч");
vegetables.createNewItem("petrushka", "Петрушка", 5.60, "01_vg_17_petrushka_5.60 PC.jpg", "пч");
vegetables.createNewItem("kukuruza", "Кукуруза", 5.60, "01_vg_16_kukuruza_5.60 PC.jpg", "шт");
vegetables.createNewItem("chesnok", "Чеснок", 113.00, "01_vg_15_chesnok_113.0k.jpg", "кг");
vegetables.createNewItem("buriak", "Буряк", 3.50, "01_vg_14_burak_3.5.jpg", "кг");
vegetables.createNewItem("rediska", "Редиска", 19.00, "01_vg_13_redis_19.0.jpg", "кг");
vegetables.createNewItem("luck", "Лук", 6.30, "01_vg_12_luk_6.30.jpg", "кг");
vegetables.createNewItem("perecBolgarskiy", "Перец Болгарский", 9.00, "01_vg_11_perec_8.90.jpg", "кг");
vegetables.createNewItem("morkov", "Морковь", 7.00, "01_vg_10_morkov_7.0.jpg", "кг");
vegetables.createNewItem("lukMolodoy", "Лук Молодой", 9.00, "01_vg_09_lukMolod_9.0.jpg", "кг");
vegetables.createNewItem("kapustaCvetnaya", "Капуста Цветная", 16.00, "01_vg_08_kapustaCvet_15.99.jpg", "кг");
vegetables.createNewItem("kapustaPekinskaya", "Капуста Пекинская", 13.00, "01_vg_07_kapustaPekina_12.99.jpg", "кг");
vegetables.createNewItem("kapusta", "Капуста", 2.70, "01_vg_06_kapusta_2.69.jpg", "кг");
vegetables.createNewItem("kartoshka", "Картошка", 5.60, "01_vg_05_potato_5.55.jpg", "кг");
vegetables.createNewItem("kabachek", "Кабачек", 9.00, "01_vg_04_kabachek_8.98.jpg", "кг");
vegetables.createNewItem("baklazhan", "Баклажаны", 8.80, "01_vg_03_baklazhan_8.80k.jpg", "кг");
vegetables.createNewItem("pomidori", "Помидоры", 20.00, "01_vg_02_pomidor_18k.jpg", "кг");
vegetables.createNewItem("ogurci", "Огурцы", 18.00, "01_vg_01_ogurec_18k.jpg", "кг");




												for ( key in vegetables) {


													var regExpAlt = /\d\d_[A-Za-z]{2,}_\d\d_[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; // get Regular Expression from img name to put into img alt='' 

													var imgString = vegetables[key].toString(); // get String from item-img-name to operate with it

													var alt = imgString.match(regExpAlt); // get img alt='' by Regular Expression

													var regExpItemId = /[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; //get Regular Expression from img name to put it into itemId 

													var itemId = imgString.match(regExpItemId); // get itemId by Regular Expression


												$('.vegetables').prepend(
																		//itemId
													'<!-- !!n-item!! id '+itemId+' -->'+ 
													'<div class=" col-xs-12 col-sm-6 col-md-4 col-lg-3 n-item-main">'+

														'<!-- n-item-up -->'+
														'<div class="row">'+ 
															'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  item-up">'+
															
																 '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-10 img-block ">'+		// src='' to img
																	'<img class="img-circle img-thumbnail item-img" src="images/01_vg/'+vegetables[key].img+'" alt="'+alt+'" title="' + vegetables[key].name + '" atr="'+vegetables[key].price +'" />'+
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
																'<span class=""> '+vegetables[key].units +' </span>'+
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