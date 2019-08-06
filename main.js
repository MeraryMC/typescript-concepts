"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
// (myVariable as string).toUpperCase();
//this behaves like regular JS
var a;
a = 10;
a = true;
//this will give a red squiggly error because TS is inferring the var type
var b = 20;
// b = true;
//a var can have several different types; good for when the var aren't under your control
var multiType;
multiType = 20;
multiType = true;
var anyType;
anyType = 20;
/* FUNCTIONS */
//the ? after num2 allows us to call the function with just one parameter; 
//optional parameters must always be after required ones, so if you wanted num1 to 
//be optional, you would have to change the param order 
function add(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add(5, 10);
add(5);
//default params: like optional ones but with default values instead of undefined
function add2(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
add2(5, 10);
add2(5);
//we want to have 'person' be an interface because this way any changes to Person would happen in one place and
//it is much easier to maintain the code
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};
fullName(p);
/* CLASSES */
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee('Merary');
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log(('Manager delegating tasks'));
    };
    return Manager;
}(Employee));
var m1 = new Manager('Merary');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
/* ACCESS MODIFIERS  */
