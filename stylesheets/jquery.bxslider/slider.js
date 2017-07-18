$(document).ready(function(){

/*
  $('.bxslider').bxSlider({
    slideWidth: 350,
    minSlides: 1,
    maxSlides: 4,
    moveSlides: 1,
    slideMargin: 10
});
})  */
  
	// var orgProductWidth = $(".bxslider").children().eq(0).outerWidth;
	// console.log(orgProductWidth);
/*
	var maxSlides,
	width = $(window).width();

	if (width < 600) {
		minSlides =1;
	    maxSlides = 1;
	    console.log("error")
	    console.log(maxSlides)
	} else if (width <1000) {
	    maxSlides = 2;
	} else {
		maxSlides = 4;
	}

	console.log(maxSlides)
	
	$('.bxslider').bxSlider({
	    minSlides: 2,
	    // slideWidth : orgProductWidth,
    	maxSlides: 3,
	});
});
*/
var width =$(window).width();

	if (width < 600) {
	   $('.bxslider').bxSlider({
	   maxSlides:1,
	   minSlides:1,
	   slideWidth: 314,
	 });
	} else if (width < 1000){
	 $('.bxslider').bxSlider({
	   maxSlides:2,
	   minSlides:2,
	   slideWidth: 314,
	 });
	} else {
	 $('.bxslider').bxSlider({
	   maxSlides:4,
	   minSlides:4,
	   slideWidth: 314,
	 });
	}; 
})
	







