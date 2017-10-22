$(document).ready(function() {

var fish = {

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
Object.defineProperty(fish, "createNewItem", { enumerable: false } ); 


fish.createNewItem("xItem64", " ", 0.00, "05_fsh_64.jpg", "кг");
fish.createNewItem("xItem63", " ", 0.00, "05_fsh_63.jpg", "кг");
fish.createNewItem("xItem62", " ", 0.00, "05_fsh_62.jpg", "кг");


fish.createNewItem("pangasius", "Пангасиус", 60.00, "05_fsh_17_pangasius 60 kg.jpg", "кг");
fish.createNewItem("selidiVmasle", "Сельдь в Масле", 35.00, "05_fsh_16_selidi_v_masle_ 40 banka.jpg", "банка");
fish.createNewItem("ikraMoivi", "Икра Мойвы", 29.00, "05_fsh_15_ikra_moiva 29 Banka.jpg", "банка");
fish.createNewItem("sudak", "Судак", 45.00, "05_fsh_14_sudak_45 kg.jpg", "кг");
fish.createNewItem("liash", "Лящь", 80.00, "05_fsh_13_liash_susheniy 80 kg.jpg", "кг");
fish.createNewItem("taranikaSushena", "Таранька", 120.00, "05_fsh_12_taranika_sushonaya_ 120 kg.jpg", "кг");
fish.createNewItem("hek", "Хек", 62.00, "05_fsh_11_hek_ 62 kg.jpg", "кг");
fish.createNewItem("korop", "Короп", 45.00, "05_fsh_10_korop_ 45 kg.jpg", "кг");
fish.createNewItem("tolstolobik", "Толстолобик", 32.00, "05_fsh_09_tolstolobik 32 kg.jpg", "кг");
fish.createNewItem("tushkaForeli", "Тушка Форель", 240.00, "05_fsh_08_foreli_tushka 240 kg.jpg", "кг");
fish.createNewItem("lososiTushka", "Тушка Лосось", 250.00, "05_fsh_07_lososi_tushka 250 kg.jpg", "кг");
fish.createNewItem("karasi", "Карась", 22.00, "05_fsh_06_karasi 22 kg.jpg", "кг");
fish.createNewItem("kraboviePalochki", "Крабовые Палочки", 150.00, "05_fsh_05_krabovie_plochki_ 150 kg.jpg", "кг");
fish.createNewItem("skumbria", "Скумбрия", 73.00, "05_fsh_04_skumbria 73 kg.jpg", "кг");
fish.createNewItem("fileSemga", "Филе Семга", 650.00, "05_fsh_03_semga_file 650 kg.jpg", "кг");
fish.createNewItem("fileForeli", "Филе Форель", 700.00, "05_fsh_02_foreli_file 700 kg.jpg", "кг");
fish.createNewItem("seldi", "Сельдь", 53.00, "05_fsh_01_seld_ 53 kg.jpg", "кг");



// fish
												for ( key in fish) {


													var regExpAlt = /\d\d_[A-Za-z]{2,}_\d\d_[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; // get Regular Expression from img name to put into img alt='' 

													var imgString = fish[key].toString(); // get String from item-img-name to operate with it

													var alt = imgString.match(regExpAlt); // get img alt='' by Regular Expression

													var regExpItemId = /[A-Za-z]{3,}(_)?[_A-Za-z]{3,}/gi; //get Regular Expression from img name to put it into itemId 

													var itemId = imgString.match(regExpItemId); // get itemId by Regular Expression


												$('.fish').prepend(
																		//itemId
													'<!-- !!n-item!! id '+itemId+' -->'+ 
													'<div class=" col-xs-12 col-sm-6 col-md-4 col-lg-3 n-item-main">'+

														'<!-- n-item-up -->'+
														'<div class="row">'+ 
															'<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12  item-up">'+
															
																 '<div class="col-xs-8 col-sm-8 col-md-8 col-lg-10 img-block ">'+		// src='' to img
																	'<img class="img-circle img-thumbnail item-img" src="images/05_fsh/'+fish[key].img+'" alt="'+alt+'" title="' + fish[key].name + '" atr="'+fish[key].price +'" />'+
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
																'<span class=""> '+fish[key].units +' </span>'+
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









