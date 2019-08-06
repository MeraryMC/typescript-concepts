"use strict";
exports.__esModule = true;
var message = "Hello World";
console.log(message);
//On the command line, use the command “tsc /*file name*/ --watch” to have the file recompile whenever you save
var x = 10;
var y = 20;
var sum;
var title = "Codevolution";
var isBeginner = true;
var total = 0;
var name = "Merary";
var sentence = "My name is " + name + ". \nI am a beginner in TypeScript;.";
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
//The two ways of declaring an array are equivalent
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Merary', 26];
//Data Type - Enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.
var Color;
(function (Color) {
    Color[Color["Red"] = 6] = "Red";
    Color[Color["Green"] = 7] = "Green";
    Color[Color["Blue"] = 8] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
//any type
var randomValue = 10;
randomValue = true;
randomValue = 'Merary';
//uknown type
var myVariable = 10;
function hasName(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName(myVariable)) {
    console.log(myVariable.name);
}
myVariable.toUpperCase();
