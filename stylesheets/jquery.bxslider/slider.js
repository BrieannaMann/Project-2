$(document).ready(function(){

var width =$(window).width();

	if (width < 600) {
	   $('.bxslider').bxSlider({
	   maxSlides:1,
	   minSlides:1,
	   slideWidth: 300,
	 });
	} else if (width < 1100){
	 $('.bxslider').bxSlider({
	   maxSlides:2,
	   minSlides:2,
	   slideWidth: 300,
	 });
	} else {
	 $('.bxslider').bxSlider({
	   maxSlides:4,
	   minSlides:4,
	   slideWidth: 300,
	 });
	}; 
	/* $(window).on('resize',function(){

   if (width > 0) {  
      location.reload(); 
    } 
});  */

 })







