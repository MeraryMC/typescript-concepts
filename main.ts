export {} //this makes the file be treated as a module instead of a script even though we're not exporting anything
let message = "Hello World";
console.log(message);

//On the command line, use the command “tsc /*file name*/ --watch” to have the file recompile whenever you save