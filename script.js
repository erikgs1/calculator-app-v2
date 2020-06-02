var buttons = document.querySelectorAll(".buttons");
var operator = document.querySelectorAll(".operator");
var equal = document.querySelector(".equal");
var clear = document.querySelector(".clear");
var cliqueiNum1 = false;
var cliqueiResult = false;
var operations = {
    '+': function (param1, param2) {return param1 + param2;},
    '-': function (param1, param2) {return param1 - param2;},
    '*': function (param1, param2) {return param1 * param2;},
    '/': function (param1, param2) {return param1 / param2;},
    '%': function (param1, param2) {return param1 % param2;}
}
for (var i = 0; i < buttons.length; i++ ){
    buttons[i].onclick = function(){
        // firstNumber(this.innerHTML);
        if(cliqueiNum1 === false){
           firstNumber(this.innerHTML);
         }
        else {
            secondNumber(this.innerHTML);
         }
    };
}
for (var j = 0; j < operator.length; j++ ){
    operator[j].onclick = function(){
        operation(this.innerHTML);
    };
}
function firstNumber(num){
    var number = document.getElementById('result1').innerHTML;
    document.getElementById('result1').innerHTML = number + num;
}

function secondNumber(num2){
    if(cliqueiResult === false){
        var number = document.getElementById('result2').innerHTML;
        document.getElementById('result2').innerHTML = number + num2;
    };
}

function operation(ope){
    document.getElementById('operator').innerHTML = ope;
    cliqueiNum1 = true
}

equal.onclick = function(){
    var op = document.getElementById('operator').innerHTML;
    var soma = Number(document.getElementById('result1').innerHTML) + Number(document.getElementById('result2').innerHTML);
    var subtration = Number(document.getElementById('result1').innerHTML) - Number(document.getElementById('result2').innerHTML);
    var multiplication = Number(document.getElementById('result1').innerHTML) * Number(document.getElementById('result2').innerHTML);    
    var divison = Number(document.getElementById('result1').innerHTML) / Number(document.getElementById('result2').innerHTML);
    var mod = Number(document.getElementById('result1').innerHTML) % Number(document.getElementById('result2').innerHTML);
    if(op === '+'){
        document.getElementById('result').innerHTML = soma;
    }
    else if(op === '-'){
        document.getElementById('result').innerHTML = subtration;
    }
    else if(op === 'x'){
        document.getElementById('result').innerHTML = multiplication;
    }
    else if(op === '&#247;'){
        document.getElementById('result').innerHTML = divison;
    }
    else{
        document.getElementById('result').innerHTML = mod;
    }
    cliqueiResult = true;
}
clear.onclick = function(){
    document.getElementById('result').innerHTML = '';
    document.getElementById('result1').innerHTML = '';
    document.getElementById('result2').innerHTML = '';
    document.getElementById('operator').innerHTML = '';
    cliqueiNum1 = false;
    cliqueiResult = false;
}
