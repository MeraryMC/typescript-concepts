export {} //this makes the file be treated as a module instead of a script even though we're not exporting anything
let message = "Hello World";
console.log(message);

//On the command line, use the command “tsc /*file name*/ --watch” to have the file recompile whenever you save

let x = 10;
const y = 20;

let sum;
const title = "Codevolution";

let isBeginner: boolean = true;
let total: number = 0;
let name: string = "Merary"

let sentence: string = `My name is ${name}. 
I am a beginner in TypeScript;.`;

console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: boolean = null;
let myName: string = undefined;

//The two ways of declaring an array are equivalent
let list1: number[] = [1, 2, 3]; 
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Merary', 26];

//Data Type - Enums allow us to declare a set of named constants i.e. a collection of related values that can be numeric or string values.
enum Color {Red = 6, Green, Blue}; 
let c: Color = Color.Green;
console.log(c);

//any type
let randomValue: any = 10;
randomValue = true;
randomValue = 'Merary';

//uknown type
let myVariable: unknown = 10;

function hasName(obj: any): obj is { name: string } {
    return !!obj &&
        typeof obj === "object" && 
        "name" in obj
}

if(hasName(myVariable)) {
    console.log(myVariable.name);
}

// (myVariable as string).toUpperCase();

//this behaves like regular JS
let a;
a = 10;
a = true;

//this will give a red squiggly error because TS is inferring the var type
let b = 20;
// b = true;

//a var can have several different types; good for when the var aren't under your control
let multiType: number | boolean;
multiType = 20;
multiType = true;

let anyType: any;
anyType = 20;

/* FUNCTIONS */ 

//the ? after num2 allows us to call the function with just one parameter; 
//optional parameters must always be after required ones, so if you wanted num1 to 
//be optional, you would have to change the param order 
function add(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2;
    else        
        return num1;
}

add(5, 10)
add(5);

//default params: like optional ones but with default values instead of undefined
function add2(num1: number, num2: number = 10): number {
    if (num2)
        return num1 + num2;
    else        
        return num1;
}

add2(5, 10)
add2(5);

/* INTERFACES */ 

//It's possible to specify objs as a type in TS

interface Person {
    firstName: string;
    lastName: string; //you could also make lastName have a ? at the end to denote an optional parameter. This is useful for things such as forms. 

}

//we want to have 'person' be an interface because this way any changes to Person would happen in one place and
//it is much easier to maintain the code
function fullName(person : Person) {
    console.log(`${person.firstName} ${person.lastName}`);
}

let p = {
    firstName: 'Bruce',
    lastName: 'Wayne'
};

fullName(p);

/* CLASSES */

class Employee {
    employeeName: string;

    constructor(name: string) {
        this.employeeName = name;
    }

    greet() {
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp1 = new Employee('Merary');
console.log(emp1.employeeName);
emp1.greet();

class Manager extends Employee {
    constructor(managerName: string) {
        super(managerName);
    }
    delegateWork() {
        console.log(('Manager delegating tasks'));
    }
}

let m1 = new Manager('Merary');
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);

/* ACCESS MODIFIERS  */

