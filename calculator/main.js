// Initial variables
//var initialValue = "";
//var secondaryValue = "";
//var operator = "";
//var sub = "";
//var multi = "";
//var divi = "";
//



var display = $(".display"),
	number = $(".number"),
	symbol = $(".symbol"),
	equal = $("#equal"),
	clear = $("#clear"),
	operator = false,
	operatorInit = false,
	totalValue = "",
	equalTo = false,
	operatorVal = "";




number.click(function(){
	if(operator === true){
		display.empty();
		operator = false; 
		console.log("number");
	}
	var typingNumber = $(this).text();
	display.append(typingNumber);
	if(operatorInit === false) {
		totalValue = display.text();
		console.log("without any operation", totalValue);
	}
});

symbol.click(function(){
	var dispalytext = display.text();
	var indexVal = symbol.index(this) + 1;
	operator = true;
	operatorVal = indexVal;
	if((totalValue !== "")&&(operatorInit === true)&&(indexVal <= 4)){
		cahinCalc(dispalytext, indexVal);
	}
	else {
//	totalValue = dispalytext;
//		console.log("initial T Value:",totalValue);
		console.log("operator Init false");
		if(indexVal === 5){
		var percentage =  parseInt(dispalytext)/100;
		display.empty();
		display.append(percentage);
		totalValue = percentage;
		console.log("Add operation T Value:",totalValue);
			}
	
	}
	operatorInit = true;
});
equal.click(function(){
	var currentVal = display.text();
	equaltoOperation(totalValue, currentVal, operatorVal);
	operatorVal = "";
});

function cahinCalc(disptext, operatorVal) {
	if(operatorVal === 1) {
		var add = parseInt(totalValue) + parseInt(disptext);
		display.empty();
		display.append(add);
		totalValue = add;
		console.log("Add operation T Value:",totalValue);
	}
	if(operatorVal === 2) {
		var subtract = parseInt(totalValue) - parseInt(disptext);
		display.empty();
		display.append(subtract);
		totalValue = subtract;
		console.log("Add operation T Value:",totalValue);
	}
	if(operatorVal === 3) {
		var multiplication = parseInt(totalValue) * parseInt(disptext);
		display.empty();
		display.append(multiplication);
		totalValue = multiplication;
		console.log("Add operation T Value:",totalValue);
	}
	if(operatorVal === 4) {
		var division = parseInt(totalValue) / parseInt(disptext);
		display.empty();
		display.append(division);
		totalValue = division;
		console.log("Add operation T Value:",totalValue);
	}
	
}
function equaltoOperation(total,disptext,operatorVal){
	console.log(total,disptext,operatorVal);
	if(operatorVal === 1) {
		var add = parseInt(total) + parseInt(disptext);
		display.empty();
		display.append(add);
		totalValue = add;
		console.log("Add operation T Value:",totalValue);
	}
	if(operatorVal === 2) {
		var subtract = parseInt(totalValue) - parseInt(disptext);
		display.empty();
		display.append(subtract);
		totalValue = subtract;
		console.log("Add operation T Value:",totalValue);
	}
	if(operatorVal === 3) {
		var multiplication = parseInt(totalValue) * parseInt(disptext);
		display.empty();
		display.append(multiplication);
		totalValue = multiplication;
		console.log("Add operation T Value:",totalValue);
	}
	if(operatorVal === 4) {
		var division = parseInt(totalValue) / parseInt(disptext);
		display.empty();
		display.append(division);
		totalValue = division;
		console.log("Add operation T Value:",totalValue);
	}
	
}


clear.click(function(){
	display.empty();
	equal = $("#equal");
	clear = $("#clear");
	operator = false;
	operatorInit = false;
	totalValue = "";
	equalTo = false;
});


//
//
//// Numbers
//$(".number").click(function(){
//  //Check wether am coming here after any operation
// if (eqal === true) {
//   $(".display").empty();
//   eqal = false;
// } 
//    else if (ope === true) {
//  $(".display").empty();
//    ope = false;
//}
////  Append the text to the display
//var text =  $(this).text();
//  $(".display").append(text);
//});
//
//$(".symbol").click(function(){
//var indexVal = $(".symbol").index(this) + 1;
//  
//  //initial value
// var displayValue = $(".display").text();
// $(".display").empty();
//  
////Assign operatop
//  operator = indexVal;
//  
//   if (operator === 5){
//    totalValue = parseInt(initialValuee) / 100; 
//      $(".display").append(totalValue);
//  }
//   chain(displayValue, operator);
//});
//
//$("#equal").click(function(){ 
//  //secondary value
//secondaryValue = $(".display").text();
//  $(".display").empty();
//  totalVal(initialValue, secondaryValue, operator);
//  eqal = true;
//});
//
//// Operation function
//function totalVal(initialValuee, secondaryValuee, operatorr) {
//    if (operatorr === 1){
//    totalValue = parseInt(initialValuee) + parseInt(secondaryValuee);
//      $(".display").append(totalValue);
//  }
//     else if (operatorr === 2){
//    totalValue = parseInt(initialValuee) - parseInt(secondaryValuee);
//      $(".display").append(totalValue);
//  }
//     else if (operatorr === 3){
//    totalValue = parseInt(initialValuee) * parseInt(secondaryValuee);
//      $(".display").append(totalValue);
//  }
//      else if (operatorr === 4){
//    totalValue = parseInt(initialValuee) / parseInt(secondaryValuee);
//      $(".display").append(totalValue);
//  }
//  if (operator === 5){
//    totalValue = parseInt(initialValuee) / 100; 
//      $(".display").append(totalValue);
//  }
//}
//$("#clear").click(function(){
// initialValue = 0;
// secondaryValue = 0;
// operator = 0;
// sub = "";
//multi = "";
// divi = "";
// totalValue = 0;
// eqal = false;
// ope = false;
//  $(".display").empty();
//});
//
//
//
//
//function chain(displayValuee, operatorr){
//  if(operatorr === 1){
//   var z =  parseInt(initialValue) + parseInt(displayValuee);
//    initialValue = z; 
//    $(".display").append(initialValue);
//    ope = true;
//  }
//  if(operatorr === 2){ 
//    if (sub === "") {
//      console.log("none");
//      sub = displayValuee;
//      initialValue = parseInt(displayValuee);
//          ope = true;
//    }
//    else {
//            console.log("execute");
//      var z =  parseInt(initialValue) - parseInt(displayValuee);
//    initialValue = z; 
//    $(".display").append(initialValue);
//    ope = true;
//    }   
//  }
//  
//   if(operatorr === 3){ 
//    if (multi === "") {
//      console.log("none");
//      multi = displayValuee;
//      initialValue = parseInt(displayValuee);
//          ope = true;
//    }
//    else {
//            console.log("execute");
//      var z =  parseInt(initialValue) * parseInt(displayValuee);
//    initialValue = z; 
//    $(".display").append(initialValue);
//    ope = true;
//    }   
//  }
//  
//     if(operatorr === 4){ 
//    if (divi === "") {
//      console.log("none");
//      divi = displayValuee;
//      initialValue = parseInt(displayValuee);
//          ope = true;
//    }
//    else {
//            console.log("execute");
//      var z =  parseInt(initialValue) / parseInt(displayValuee);
//    initialValue = z; 
//    $(".display").append(initialValue);
//    ope = true;
//    }   
//  }
//  
//  
//  
//}