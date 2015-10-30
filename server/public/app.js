/**
 * Created by aronthomas on 10/30/15.
 */
$(document).ready(function(){
    console.log('hi');
    $('.operators > .btn').on('click',function(){
        var data = $(this).data('type');
        clickPostData(data);
    });

    $('.clear > .btn').on('click',init);
});

//clears inputs
function init(){
    $('#input').find("input[type=number]").val("");
}

function clickPostData(type){
    var values = {};
    $.each($("#input").serializeArray(),function(i,field){
        values[field.name] = field.value;
        values["type"] = type;
    });
    console.log(values);

    init();

    $.ajax({
        type: "POST",
        url: "/data",
        data: values,
        success: function(data){
            console.log(data);
            appendDom(data.result);
        }
    });
}

function getData(){}

function appendDom(number){
    $(".result").text(number);
}