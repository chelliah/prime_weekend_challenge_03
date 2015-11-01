/**
 * Created by aronthomas on 10/30/15.
 */
var numObject;
var operators = ["Add", "Subtract", "Multiply", "Divide"];

$(document).ready(function(){
    enable();
});

function enable(){
    reset();

    $('.numbers > .num').on('click',function(){
        var number = $(this).data('type');
        if ('operator' in numObject){
            numObject.num2.push(number);
            appendDom(numObject.num2);
        }else{
            numObject.num1.push(number);
            appendDom(numObject.num1);
        }
    });

    //OPERATORS
    $('.operators > .operator').on('click',function(){
        var operator = $(this).data('type');
        addOperator(operator);
    });

    //CLEAR BUTTON
    $('.clear > .btn').on('click',reset);

    //EQUALS
    $('#equals').on('click',function(){
        clickPostData();
        numObject = new createObject();
    });
}

//creates new object and resets DOM value to 0
function reset(){
    numObject = new createObject();
    clearInputDom();
}

//OBJECT CONSTRUCTOR METHOD
function createObject(){
    this.num1 = [];
    this.num2 = [];
}


//Object Editor Methods
function addOperator(operator){
    console.log(operator);
    numObject['operator'] = operator;
}

function prepareData(){
    numObject.num1 = Number.parseFloat(numObject.num1.join(''));
    numObject.num2 = Number.parseFloat(numObject.num2.join(''));
}

//AJAX CALLS
function clickPostData(){
    console.log(numObject);
    $.ajax({
        type: "POST",
        url: "/" + numObject.operator,
        data: numObject,
        beforeSend: prepareData(),
        success: function(data){
            console.log(data);
            appendDom(data.result);
        }
    });

}

///DOM MANIPULATION FUNCTIONS
function appendDom(number){
    //console.log(typeof number);
    if(typeof number == "object"){
        number = number.join('')
    }
    $('.inputNumber').text(number);
}

function clearInputDom(){
    $(".inputNumber").text('0');
}