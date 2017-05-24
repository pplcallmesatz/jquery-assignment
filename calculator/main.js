// Initial variables
var initialValue = 0;
var secondaryValue = 0;
var operator = 0;
var totalValue = 0;
var eqal = false;

// Numbers
$(".number").click(function(){
  //Check wether am coming here after any operation
 if (eqal === true) {
   $(".display").empty();
   eqal = false;
 } 
//  Append the text to the display
var text =  $(this).text();
  $(".display").append(text);
});

$(".symbol").click(function(){
var indexVal = $(".symbol").index(this) + 1;
  
  //initial value
 initialValue = $(".display").text();
 $(".display").empty();
  
//Assign operatop
  operator = indexVal;
  
   if (operator === 5){
    totalValue = parseInt(initialValuee) / 100; 
      $(".display").append(totalValue);
  }

  
});

$("#equal").click(function(){ 
  //secondary value
secondaryValue = $(".display").text();
  $(".display").empty();
  totalVal(initialValue, secondaryValue, operator);
  eqal = true;
});

// Operation function
function totalVal(initialValuee, secondaryValuee, operatorr) {
  console.log(initialValuee, secondaryValuee, operatorr);
    if (operatorr === 1){
    totalValue = parseInt(initialValuee) + parseInt(secondaryValuee);
      $(".display").append(totalValue);
  }
     else if (operatorr === 2){
    totalValue = parseInt(initialValuee) - parseInt(secondaryValuee);
      $(".display").append(totalValue);
  }
     else if (operatorr === 3){
    totalValue = parseInt(initialValuee) * parseInt(secondaryValuee);
      $(".display").append(totalValue);
  }
      else if (operatorr === 4){
    totalValue = parseInt(initialValuee) / parseInt(secondaryValuee);
      $(".display").append(totalValue);
  }
  if (operator === 5){
    totalValue = parseInt(initialValuee) / 100; 
      $(".display").append(totalValue);
  }
}
$("#clear").click(function(){
initialValue = 0;
 secondaryValue = 0;
 operator = 0;
 totalValue = 0;
  eqal = false;
  $(".display").empty();
});