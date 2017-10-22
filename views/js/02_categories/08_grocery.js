$(document).ready(function() {

var grocery = {

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
Object.defineProperty(grocery, "createNewItem", { enumerable: false } ); 


grocery.createNewItem("xItem73", " ", 0.00, "08_bk_73.jpg", "пчк");
grocery.createNewItem("xItem72", " ", 0.00, "08_bk_72.jpg", "бнк");
grocery.createNewItem("xItem71", " ", 0.00, "08_bk_71.jpg", "шт");





grocery.createNewItem("ikraBaklazhan", "Икра Баклажаная", 35.00, "08_bk_58_ikra_baklazhan-35-banka.jpg", "бнк");
grocery.createNewItem("shushenka", "Сгущенное Молоко", 16.00, "08_bk_57_sgushenka_16_sht.jpg", "шт");
grocery.createNewItem("olivki", "Оливки", 34.00, "08_bk_56_olivki_34_sht.jpg", "шт");
grocery.createNewItem("maslini", "Маслины", 29.00, "08_bk_55_maslini_29_sht.jpg", "шт");
grocery.createNewItem("goroshekKonserv", "Горошек Консервированый", 32.00, "08_bk_54_goroshek_konserv_32_sht.jpg", "шт");
grocery.createNewItem("pomidoriKonserv", "Помидоры Консервированые", 22.00, "08_bk_53_pomidori_konserv_22_sht.jpg", "бнк");
grocery.createNewItem("ogyrciMarinBanka", "Огурцы Консервированые", 24.00, "08_bk_52_ogurci_marinovani_24_sht.jpg", "бнк");
grocery.createNewItem("fasoliConserv", "Консервы Фасоль", 27.00, "08_bk_51_konserv_fasoli_27_sht.jpg", "шт");
grocery.createNewItem("shproti", "Шпроты", 25.00, "08_bk_50_shproti_25_sht.jpg", "шт");
grocery.createNewItem("fishKonserv", "Консервы Рыбные", 18.00, "08_bk_50_riba_konserv_18_sht.jpg", "шт");
grocery.createNewItem("gribMarinovaniy", "Грибы Маринованые", 45.00, "08_bk_49_gribi_marinovani_45_sht.jpg", "бнк");
grocery.createNewItem("sauseX", "Соус", 15.00, "08_bk_48_sous_14_sht.jpg", "шт");
grocery.createNewItem("uksus", "Уксус", 12.00, "08_bk_47_uksus_12_sht.jpg", "бтл");
grocery.createNewItem("tomatPasta", "Паста Томатная", 5.00, "08_bk_46_tomatna_pasta_5_sht.jpg", "шт");
grocery.createNewItem("gorchicaFr", "Горчица Французкая", 11.00, "08_bk_45_gorchica_france_11_sht.jpg", "бнк");
grocery.createNewItem("gorchica", "Горчица", 6.00, "08_bk_44_gorchica_6_sht.jpg", "бнк");
grocery.createNewItem("ketchup", "Кетчуп", 12.00, "08_bk_43_ketchup_12_sht.jpg", "шт");
grocery.createNewItem("kukuruzaConserv", "Кукуруза", 21.00, "08_bk_42_kukuruza_konserv_21_sht.jpg", "бнк");
grocery.createNewItem("paprica", "Приправа Паприка", 4.00, "08_bk_41_priprava_paprika_4.jpg", "пчк");
grocery.createNewItem("korica", "Корица", 4.00, "08_bk_40_priprava_korica_4_sht.jpg", "пчк");
grocery.createNewItem("pripravaChesnok", "Приправа Чеснок", 8.00, "08_bk_39_priprava_chesnokSusheniy_8_sht.jpg", "пчк");
grocery.createNewItem("pripravaPerecGoroh", "Приправа Перец Горошек", 17.00, "08_bk_38_priprava_perecCherniyGoroshek_17.jpg", "пчк");
grocery.createNewItem("pripravaPerecCherniy", "Приправа Перец Черный", 9.00, "08_bk_37_priprava_perecCherniyMeleniy_9.jpg", "пчк");
grocery.createNewItem("pripravaKurcuma", "Приправа Куркума", 5.00, "08_bk_36_priprava_kurkuma_5.jpg", "пчк");
grocery.createNewItem("pripravaLavrList", "Приправа Лавровый Лист", 4.00, "08_bk_35_priprava_lavroviyList_4.jpg", "пчк");
grocery.createNewItem("pripravaPerec", "Приправа Перец Красный", 3.00, "08_bk_34_priprava_perec_red_3.jpg", "пчк");
grocery.createNewItem("chipsi", "Чипсы", 23.00, "08_bk_33_chipsi_23_sht.jpg", "пчк");
grocery.createNewItem("tunecSush", "Тунец Сушеный", 23.00, "08_bk_32_tunec_susheniy_23_pch.jpg", "пчк");
grocery.createNewItem("kalamarSush", "Кальмар Сушеный", 22.00, "08_bk_31_kalmar_susheniy_22_sht.jpg", "пчк");
grocery.createNewItem("suhariki", "Сухарики", 7.00, "08_bk_30_suhariki_7_sht.jpg", "пчк");
grocery.createNewItem("semki", "Семечки", 14.00, "08_bk_29_semki_13_sht.jpg", "пчк");
grocery.createNewItem("vanilin", "Ваниль", 2.00, "08_bk_28_vanilin_2.jpg", "пчк");
grocery.createNewItem("razrihliteli", "Разрыхлитель", 2.00, "08_bk_27_razrihliteli_2.jpg", "пчк");
grocery.createNewItem("lemonKislota", "Лимонная Кислота", 3.00, "08_bk_26_lemon_kislota_3_sht.jpg", "пчк");
grocery.createNewItem("jelatin", "Желатин", 7.00, "08_bk_25_jelatin_7.jpg", "пчк");
grocery.createNewItem("drojiSuhie", "Дрожжи Сухие ", 5.00, "08_bk_24_droji_suhie_5.jpg", "пчк");
grocery.createNewItem("honney", "Мёд", 57.00, "08_bk_23_med_57_banka.jpg", "бнк");
grocery.createNewItem("coffeRastvor", "Кофе Растворимый 100гр", 120.00, "08_bk_22_koffe_rastvor_140_sht.jpg", "бнк");
grocery.createNewItem("coffeNatur", "Кофе Натуральный 250гр", 140.00, "08_bk_21_koffe_naturalniy_250gr_140_pch.jpg", "пчк");
grocery.createNewItem("tea", "Чай", 40.00, "08_bk_20_tea_40_pch.jpg", "пчк");
grocery.createNewItem("kusKus", "Кус-Кус 800гр", 60.00, "08_bk_19_kus_kus_800gr_60_pch.jpg", "пчк");
grocery.createNewItem("bulgur", "Булгур", 40.00, "08_bk_18_bulgur_40_kg.jpg", "кг");
grocery.createNewItem("ris", "Рис", 31.00, "08_bk_17_ris_1kg_31_pch.jpg", "кг");
grocery.createNewItem("pshenichnaKrupa", "Крупа Пшеничная 700гр", 17.00, "08_bk_16_krupa_pshenichna_700gr_17_pch.jpg", "пчк");
grocery.createNewItem("grechka", "Крупа Гречка", 40.00, "08_bk_15_grechka_40_kg.jpg", "кг");
grocery.createNewItem("suggarr", "Сахар", 19.00, "08_bk_14_suggar_1kg_18_pch.jpg", "кг");
grocery.createNewItem("salt", "Соль", 4.00, "08_bk_13_salt_1kg_4_pch.jpg", "кг");
grocery.createNewItem("spagetti", "Спагетти 500гр", 20.00, "08_bk_12_spagetti_500gr_20_pch.jpg", "пчк");
grocery.createNewItem("vermisheli", "Макароны 500гр", 27.00, "08_bk_11_vermisheli_500gr_27_pch.jpg", "пчк");
grocery.createNewItem("makaroni", "Макароны 250гр", 14.00, "08_bk_10_makaroni_250gr_14_pch.jpg", "пчк");
grocery.createNewItem("mukaRzhano", "Мука Ржаная", 11.00, "08_bk_09_muka_rzhanaya_1kg_11_pch.jpg", "кг");
grocery.createNewItem("mukaPsheno", "Мука Пшеничная", 25.00, "08_bk_08_muka_1kg_25_pch.jpg", "кг");
grocery.createNewItem("soyaSauceS", "Соевый Соус 120мл", 23.00, "08_bk_07_sous_soyaaa_119gr_23_btl.jpg", "бтл");
grocery.createNewItem("soyaSauceM", "Соевый Соус 150мл", 137.00, "08_bk_06_sous_soyaa_150ml_137_btl.jpg", "бтл");
grocery.createNewItem("soyaSauceL", "Соевый Соус 1лт", 360.00, "08_bk_05_sous_soya_1lt_360_btl.jpg", "бтл");
grocery.createNewItem("sunOilL", "Масло Подсолнечное 5лт", 175.00, "08_bk_04_sun_oilll_5lt_175_btl.jpg", "бтл");
grocery.createNewItem("sunOilM", "Масло Подсолнечное 3лт", 105.00, "08_bk_03_sun_oill_3lt_105_btl.jpg", "бтл");
grocery.createNewItem("sunOilS", "Масло Подсолнечное 1лт", 28.00, "08_bk_02_sun_oil_1lt_30_btl.jpg", "бтл");
grocery.createNewItem("olive_oilS", "Масло Оливковое 0.5лт", 110.00, "08_bk_01_olivee_oil_05lt_110_btl.jpg", "бтл");
grocery.createNewItem("olive_oilL", "Масло Оливковое 1лт", 285.00, "08_bk_01_olive_oil_1lt_285_btl.jpg", "бтл");








												for ( key in grocery) {


													var regExpAlt = /\d\d_[A-Za-z]{2,}_\d\d_[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; // get Regular Expression from img name to put into img alt='' 

													var imgString = grocery[key].toString(); // get String from item-img-name to operate with it

													var alt = imgString.match(regExpAlt); // get img alt='' by Regular Expression

													var regExpItemId = /[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; //get Regular Expression from img name to put it into itemId 

													var itemId = imgString.match(regExpItemId); // get itemId by Regular Expression


												$('.grocery').prepend(
																		//itemId
													'<!-- !!n-item!! id '+itemId+' -->'+ 
													'<div class=" col-xs-12 col-sm-6 col-md-4 col-lg-3 n-item-main">'+

														'<!-- n-item-up -->'+
														'<div class="row">'+ 
															'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  item-up">'+
															
																 '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-10 img-block ">'+		// src='' to img
																	'<img class="img-circle img-thumbnail item-img" src="images/08_bk/'+grocery[key].img+'" alt="'+alt+'" title="' + grocery[key].name + '" atr="'+grocery[key].price +'" />'+
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
																'<span class=""> '+grocery[key].units +' </span>'+
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









