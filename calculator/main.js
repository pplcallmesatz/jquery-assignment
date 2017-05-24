// Initial variables
var initialValue = 0;
var secondaryValue = 0;
var operator = 0;
var sub = "";
var multi = "";
var divi = "";
var totalValue = 0;
var eqal = false;
var ope = false;

// Numbers
$(".number").click(function(){
  //Check wether am coming here after any operation
 if (eqal === true) {
   $(".display").empty();
   eqal = false;
 } 
    else if (ope === true) {
  $(".display").empty();
    ope = false;
}
//  Append the text to the display
var text =  $(this).text();
  $(".display").append(text);
});

$(".symbol").click(function(){
var indexVal = $(".symbol").index(this) + 1;
  
  //initial value
 var displayValue = $(".display").text();
 $(".display").empty();
  
//Assign operatop
  operator = indexVal;
  
   if (operator === 5){
    totalValue = parseInt(initialValuee) / 100; 
      $(".display").append(totalValue);
  }
   chain(displayValue, operator);
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
 sub = "";
multi = "";
 divi = "";
 totalValue = 0;
 eqal = false;
 ope = false;
  $(".display").empty();
});




function chain(displayValuee, operatorr){
  if(operatorr === 1){
   var z =  parseInt(initialValue) + parseInt(displayValuee);
    initialValue = z; 
    $(".display").append(initialValue);
    ope = true;
  }
  if(operatorr === 2){ 
    if (sub === "") {
      console.log("none");
      sub = displayValuee;
      initialValue = parseInt(displayValuee);
          ope = true;
    }
    else {
            console.log("execute");
      var z =  parseInt(initialValue) - parseInt(displayValuee);
    initialValue = z; 
    $(".display").append(initialValue);
    ope = true;
    }   
  }
  
   if(operatorr === 3){ 
    if (multi === "") {
      console.log("none");
      multi = displayValuee;
      initialValue = parseInt(displayValuee);
          ope = true;
    }
    else {
            console.log("execute");
      var z =  parseInt(initialValue) * parseInt(displayValuee);
    initialValue = z; 
    $(".display").append(initialValue);
    ope = true;
    }   
  }
  
     if(operatorr === 4){ 
    if (divi === "") {
      console.log("none");
      divi = displayValuee;
      initialValue = parseInt(displayValuee);
          ope = true;
    }
    else {
            console.log("execute");
      var z =  parseInt(initialValue) / parseInt(displayValuee);
    initialValue = z; 
    $(".display").append(initialValue);
    ope = true;
    }   
  }
  
  
  
}