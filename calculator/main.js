var display = $(".display"),
	number = $(".number"),
	symbol = $(".symbol"),
	equal = $("#equal"),
	clear = $("#clear"),
    percentBtn = $("#percentBtn"),
	operator = false,
	operatorInit = false,
	totalValue = "",
	equalTo = false,
    equalToTotalVal ="",
	operatorVal = "";




number.click(function(){
	if(operator === true){
		display.empty();
		operator = false; 
	}
	if(equalTo === true){
		display.empty();
        totalValue = "";
        equalToTotalVal="";
		equalTo = false; 
	}

	var typingNumber = $(this).text();
	display.append(typingNumber);
	if(operatorInit === false) {
		totalValue = display.text();
	}
});

symbol.click(function(){
    if(equalTo === true){
		display.empty();
        operatorVal = indexVal;
		equalTo = false; 
	}
      if(equalToTotalVal !== "") {
         totalValue = equalToTotalVal;
         
        var a = "equalToTotalVal : " + equalToTotalVal;
        alertt(a);
        equalToTotalVal = "";
    }

	var dispalytext = display.text();
	var indexVal = symbol.index(this) + 1;
	operator = true;
    
if((totalValue !== "")&&(operatorInit === true)&&(indexVal <= 4)&&(equalToTotalVal === "")){
		cahinCalc(dispalytext, operatorVal);
        operatorVal = indexVal;
	}
	else {
         operatorVal = indexVal;
	}
	operatorInit = true;
});
equal.click(function(){
	var currentVal = display.text();
	equaltoOperation(totalValue, currentVal, operatorVal);
	operatorVal = "";
	equalTo = true;
});
percentBtn.click(function(){
    console.log("%");
    var perDispText = display.text();
    var percentage =  parseInt(perDispText) / 100;
		display.empty();
		display.append(percentage);
		totalValue = percentage;
});

function cahinCalc(disptext, operatorVal) {
	if(operatorVal === 1) {
		var add = parseInt(totalValue) + parseInt(disptext);
		display.empty();
		display.append(add);
		totalValue = add;
	}
	if(operatorVal === 2) {
		var subtract = parseInt(totalValue) - parseInt(disptext);
		display.empty();
		display.append(subtract);
		totalValue = subtract;
	}
	if(operatorVal === 3) {
		var multiplication = parseInt(totalValue) * parseInt(disptext);
		display.empty();
		display.append(multiplication);
		totalValue = multiplication;
	}
	if(operatorVal === 4) {
		var division = parseInt(totalValue) / parseInt(disptext);
		display.empty();
		display.append(division);
		totalValue = division;
	}
	
}
function equaltoOperation(total,disptext,operatorVal){
	if(operatorVal === 1) {
		var add = parseInt(total) + parseInt(disptext);
		display.empty();
		display.append(add);
        equalToTotalVal = add;
		totalValue = "";
		operatorInit = false;
        var a = "addition total : " + add;
        alertt(a);
	}
	if(operatorVal === 2) {
		var subtract = parseInt(totalValue) - parseInt(disptext);
		display.empty();
		display.append(subtract);
		totalValue = subtract;
        equalToTotalVal = subtract;
		totalValue = "";
		operatorInit = false;
        var a = "subtract total : " + subtract;
        alertt(a);
	}
	if(operatorVal === 3) {
		var multiplication = parseInt(totalValue) * parseInt(disptext);
		display.empty();
		display.append(multiplication);
		totalValue = multiplication;
        equalToTotalVal = multiplication;
		totalValue = "";
		operatorInit = false;
         var a = "multiplication total : " + multiplication;
        alertt(a);
	}
	if(operatorVal === 4) {
		var division = parseInt(totalValue) / parseInt(disptext);
		display.empty();
		display.append(division);
		totalValue = division;
        equalToTotalVal = division;
		totalValue = "";
		operatorInit = false;
         var a = "division total : " + division;
        alertt(a);
	}
    
	
}
function alertt(aValue) {
    console.log(aValue);
}

clear.click(function(){
	display.empty();
	equal = $("#equal");
	clear = $("#clear");
	operator = false;
	operatorInit = false;
	totalValue = "";
    equalToTotalVal = "";
	equalTo = false;
    operatorVal = "";
});
