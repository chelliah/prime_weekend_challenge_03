/**
 * Created by aronthomas on 10/30/15.
 */
var numObject;
var displayString;

$(document).ready(function(){
    init();
});

function init(){
    numObject = new createObject();

    $('.operators > .btn').on('click',function(){
        var data = $(this).data('type');
        addOperator(data);
        //clickPostData(data);
    });

    $('.clear > .btn').on('click',clear);

    $('#equals').on('click',function(){
       clickPostData();
    });

    $('.numbers > .btn').on('click',function(){
        var number = $(this).data('type');
        if ('type' in numObject){
            numObject.num2.push(number);
            //console.log("num2 is:", numObject.num2);
            appendInputDom(numObject.num2);
        }else{
            numObject.num1.push(number);
            //console.log("num1 is:", numObject.num1);
            appendInputDom(numObject.num1);
        }
    })
}

//OBJECT CONSTRUCTOR METHOD
function createObject(){
    this.num1 = [];
    this.num2 = [];
}

//clears inputs
function clear(){
    $('#input').find("input[type=number]").val("");
    $('.result').text('');
    clearInputDom();
    numObject = new createObject();
}

function addOperator(type){
    numObject['type'] = type;
    clearInputDom();
}

function prepareData(){
    numObject.num1 = parseInt(numObject.num1.join(''));
    numObject.num2 = parseInt(numObject.num2.join(''));
}

//AJAX CALLS
function clickPostData(){
    //numObject['type'] = type;
    //var values = {};
    //$.each($("#input").serializeArray(),function(i,field){
    //    values[field.name] = field.value;
    //    values["type"] = type;
    //});
    //console.log(values);
    prepareData();
    console.log(numObject);
    $.ajax({
        type: "POST",
        url: "/data",
        data: numObject,
        success: function(data){
            console.log(data);
            clear();
            appendDom(data.result);
        }
    });
}

///DOM MANIPULATION FUNCTIONS
function appendDom(number){
    $(".result").text(number);
    $('.inputNumber').text(number);
}

function appendInputDom(number){
    console.log(number);
    $(".inputNumber").text(number.join(''));
}

function clearInputDom(){
    $(".inputNumber").text('');
}