/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];
let totalPaid = 0;
currentCurrency ="USD";
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
  const cherry  = {
    name: "Cherry",
    price: 4.5,
    quantity: 0,
    productId: 0,
    image : "../images/cherry.jpg"
  }
  const orange  = {
    name: "Orange",
    price: 5.30,
    quantity: 0,
    productId: 1,
    image : "../images/orange.jpg"
  }
  const strawberry  = {
    name: "Strawberry",
    price: 6.25,
    quantity: 0,
    productId: 2,
    image : "../images/strawberry.jpg"
  }
  products.push(cherry);
  products.push(orange);
  products.push(strawberry);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];



/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function findProduct(productId){
  return products.find((prod) => prod.productId === productId);
}
function addProductToCart(productId){
  const product = findProduct(productId);  
  product.quantity +=1;
  if (cart.filter(prod => prod.productId === productId).length === 0){
     cart.push(product)
  }

  
}

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/

function increaseQuantity(productId){
  const product = findProduct(productId);
  
  product.quantity +=1;
  

  
}

/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId){
  const product = findProduct(productId);  
  product.quantity -=1;
  if (product.quantity === 0){
    removeProductFromCart(productId)
    // cart = cart.filter(prod => prod.productId !== productId);
  }
  

  
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart(productId){
  const product = findProduct(productId);  
  product.quantity =0;
  console.log(cart.indexOf(product));
  cart.splice(cart.indexOf(product), 1);
 


  
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total cost of all products
  - cartTotal should return the total cost of the products in the cart
  Hint: price and quantity can be used to determine total cost
*/
function cartTotal(){
  let total = 0;
  for (let i = 0; i < cart.length; i++){
    total += (cart[i].price * cart[i].quantity);
  }
  return total;
}


/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
   for(let i = 0; i< cart.length; i++){
    cart[i].quantity = 0;

   }
   cart.splice(0, cart.length);
}
/* Create a function named pay that takes in an amount as an argument
  - amount is the money paid by customer
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
  Hint: cartTotal function gives us cost of all the products in the cart  
*/
function pay(amount){
  if(amount =="" || isNaN(amount)){
    amount = 0;
  }
  totalPaid += amount;
  // console.log(remainingBalance)
  // if (remainingBalance === 0 && cartTotal() !== 0 ){
  //   remainingBalance  = amount - cartTotal();
  // }
  // if( cartTotal() === 0 ){
  //   totalPaid = 0;
  //   return amount;
    
  // }
  // else {
  //   console.log(cartTotal());
  //   remainingBalance += amount;
  // }
  
  // return remainingBalance;
  let balance = totalPaid - cartTotal();
  if(balance > 0){
    totalPaid = 0;
  }
  return balance;
}

/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/

function currency(value){
 // get currency multipler with switch statement
//apply the multplier to all items
  let conversionRate = 1;

  if(value == currentCurrency){
    return;
  }else if (value === "EUR" && currentCurrency === "USD"){
    conversionRate = 0.92;
  }
  else if (value === "YEN" && currentCurrency === "USD"){
    conversionRate = 151.73;
  }
  else if (value === "YEN" && currentCurrency === "EUR"){
    conversionRate = 164.79;
  }
  else if (value === "USD" && currentCurrency === "EUR"){
    conversionRate = 1.08695652174;
  }
  else if (value === "USD" && currentCurrency === "YEN"){
    conversionRate = 0.00659065445;
  }
  else if (value === "EUR" && currentCurrency === "YEN"){
    conversionRate = 0.00606832938;
  }
  currentCurrency = value;
  

  

  for (let i= 0; i < products.length; i++){
    products[i].price *= conversionRate;
  }

}
/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
   /* Uncomment the following line if completing the currency converter bonus */
   currency
}
