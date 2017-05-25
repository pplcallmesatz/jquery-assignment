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
	}
	if(equalTo === true){
		display.empty();
		equalTo = false; 
	}
	var typingNumber = $(this).text();
	display.append(typingNumber);
	if(operatorInit === false) {
		totalValue = display.text();
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
		if(indexVal === 5){
		var percentage =  parseInt(dispalytext)/100;
		display.empty();
		display.append(percentage);
		totalValue = percentage;
			}
	
	}
	operatorInit = true;
});
equal.click(function(){
	var currentVal = display.text();
	equaltoOperation(totalValue, currentVal, operatorVal);
	operatorVal = "";
	equalTo = true;
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
		totalValue = "";
		operatorInit = false;

	}
	if(operatorVal === 2) {
		var subtract = parseInt(totalValue) - parseInt(disptext);
		display.empty();
		display.append(subtract);
		totalValue = subtract;
		totalValue = "";
		operatorInit = false;
	}
	if(operatorVal === 3) {
		var multiplication = parseInt(totalValue) * parseInt(disptext);
		display.empty();
		display.append(multiplication);
		totalValue = multiplication;
		totalValue = "";
		operatorInit = false;
	}
	if(operatorVal === 4) {
		var division = parseInt(totalValue) / parseInt(disptext);
		display.empty();
		display.append(division);
		totalValue = division;
		totalValue = "";
		operatorInit = false;
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
