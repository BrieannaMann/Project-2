// Add to cart number 
var addCart= document.getElementsByClassName("add-to-cart");
var cartNum= document.getElementById("cart-num");
for (var i= 0; i<addCart.length; i++){
  addCart[i].onclick = function(){
    var orgVal=cartNum.innerHTML;
    cartNum.innerHTML = parseInt(orgVal) +1;
    document.getElementById("cart-total-hide").setAttribute('style','visibility:visible');
    document.getElementById("price-total-hide").setAttribute('style','visibility:visible');
}}

//Add Cart Total 
/*
var addCart= document.getElementsByClassName("add-to-cart");
var totalPrice = document.getElementById("total-price");
for (var i= 0; i<addCart.length; i++){
addCart[i].onclick = function(){
  console.log("clicked")
var orgPrice=totalPrice.innerHTML;
    addCart.getAttribute('data-price');
    addCart.setAttribute('data-price');
    console.log(addCart)
    // totalPrice.innerHTML = parseInt(orgPrice) + parseInt(itemPrice);
}
}
*/