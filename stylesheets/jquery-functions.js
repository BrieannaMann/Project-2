
$(document).ready(function(){
	/*
ADD CART NUMBER 
	$(".add-to-cart").click (function() {
		//NC = Cart Number
		var nc = $("#cart-num").text();
		$("#cart-num").text(parseInt(nc) +1);	
	});

*/
	$(".add-to-cart").click (function() {
		console.log("clicked atc");
	//TC Total Cost of an item
		var tc = $("#total-price").text();
	//CT Cart Total 
		var ct = $(this).data('price');
		console.log(tc);
		var parsect = parseInt(ct);
		console.log(parsect);
		var parsetc = parseInt(tc);
		console.log(parsetc);
		$("#total-price").text(parsect + parsetc);
		// get current number in #cart total and set to var
		// add tc to cart total
		// change the text value of the cart to new value	
	});
	$(".subscribe").on ("click", function(){
		alert("You are now subscribed");
	});
});






