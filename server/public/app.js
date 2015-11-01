/**
 * Created by aronthomas on 10/30/15.
 */
var numObject;

$(document).ready(function(){
    enable();
});

//ENABLE STARTS THE CALCULATOR FUNCTIONALITY
function enable(){
    reset();
    //number buttons
    $(".num").on('click',function(){
        joinNumber(this);
    });

    //operators
    $('.operator').on('click',function(){
        var operator = $(this).data('type');
        addOperator(operator);
    });

    //CLEAR BUTTON
    $('.clear').on('click',reset);

    //EQUALS
    $('#equals').on('click',clickPostData);
}

//RESET METHOD creates new object and resets DOM value to 0
function reset(){
    numObject = new CreateObject();
    clearInputDom();
}

//OBJECT CONSTRUCTOR METHOD
function CreateObject(){
    this.num1 = [];
    this.num2 = [];
}



//OBJECT EDITOR METHODS
function addOperator(operator){
    console.log(operator);
    numObject['operator'] = operator;
}

function prepareData(){
    numObject.num1 = Number.parseFloat(numObject.num1.join(''));
    numObject.num2 = Number.parseFloat(numObject.num2.join(''));
}

//Compiles first or second number by pushing the value of each button press to an array
function joinNumber(context){
    var number = $(context).data('type');
    if ('operator' in numObject){
        numObject.num2.push(number);
        appendDom(numObject.num2);
    }else{
        numObject.num1.push(number);
        appendDom(numObject.num1);
    }
}

//AJAX CALL
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
    numObject = new CreateObject();

}

///DOM MANIPULATION FUNCTIONS
function appendDom(number){
    if(typeof number == "object"){
        number = number.join('')
    }
    $('.inputNumber').text(number);
}

function clearInputDom(){
    $(".inputNumber").text('0');
}