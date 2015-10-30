/**
 * Created by aronthomas on 10/30/15.
 */
var operators = ["Add", "Subtract", "Multiply", "Divide"];

function doMath(data){
    var num1 = data.num1;
    var num2 = data.num2;
    var operator = data.type;
    var num;

    switch(operator){
        case operators[0]:
            num = Number(num1) + Number(num2);
            break;
        case operators[1]:
            num = num1 - num2;
            break;
        case operators[2]:
            num = num1 * num2;
            break;
        case operators[3]:
            num = num1 / num2;
            break;
    }
    return num;
}

module.exports = doMath;