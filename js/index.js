$(function(){

	var counts = 1;
	var img1 = $('#page-1-img');
	var img2 = $('#page-2-img');
	var img3 = $('#page-3-img');
	var img4 = $('#page-4-img'); 
	setInterval(function(){
		if(counts % 4 == 0){			
			img1.animate({opacity:0}, 2000);
			img2.animate({opacity:0}, 2000);
			img3.animate({opacity:0}, 2000);
			img4.animate({opacity:1}, 1000);
		}else if(counts % 4 == 3){
			img1.animate({opacity:0}, 2000);
			img2.animate({opacity:0}, 2000);
			img3.animate({opacity:1}, 1000);
			img4.animate({opacity:0}, 2000);
		}else if(counts % 4 == 2){
			img1.animate({opacity:0}, 2000);
			img2.animate({opacity:1}, 1000);
			img3.animate({opacity:0}, 2000);
			img4.animate({opacity:0}, 2000);
		}else if(counts % 4 == 1){
			img1.animate({opacity:1}, 1000);
			img2.animate({opacity:0}, 2000);
			img3.animate({opacity:0}, 2000);
			img4.animate({opacity:0}, 2000);
		}
		counts ++;
	},7000);

	// 下拉菜单
	var menuTop = -100;
	var clientTop1;
	document.addEventListener('touchmove',function(e) {
		e.preventDefault();					
		var touch = e.touches[0];
		clientTop1 = parseInt(touch.pageY);
		return false;
	},true);
	$("#menu-top img").on("touchmove",function(e){
		e.preventDefault();
		if((innerHeight - clientTop1) <= 0){
			$("#menu-top").css({bottom:0 + "%"});
		}else{
			$("#menu-top").css({bottom:(innerHeight - clientTop1) / innerHeight * 100 + "%"});
		}		
		return false;
	});
	$("#menu-top img").on("touchend",function(e){

		if(clientTop1 >= (innerHeight / 2)){
			$("#menu-top").animate({bottom:5 + "%"},200);
			$("#menu-top img").css({"-webkit-transform":"translateX(-50%)"});
		}else{
			$("#menu-top").animate({bottom:100 + "%"},100);
			$("#menu-top img").css({"-webkit-transform":"translateX(-50%) rotate(180deg)"});
		}
	});
});