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

(myVariable as string).toUpperCase();
