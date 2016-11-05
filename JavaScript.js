CHROME CONSOLE
about:blank // opens blank chrome window
option + command + J // open javascript console

PRIMITIVE DATATYPES
'string' //strings
2 // numbers or digits
var item = 'chair' // variables can equal strings or numbers, cannot begin with a number or include special characters, are camelCase, case sensitive
variable1 = variable2   // JavaScript evaluates from right to left


CONCATENATION
'hello' + 'world' // combine two strings

INTERPOLATION
var item = 'chair' //
'desk' + item + 'dresser' // insert variables into strings
'desk ${item} , dresser' // using ES6

STRING METHODS
item.toUpperCase(); //variable name to uppercase
item.toLowerCase(); //variable name to lowercase
item.slice(); // extracts a section of a string and returns a new string

replace // finds match between regular expression and a string, replaces matched substrign with new substring
var s = 'I like food'
var re = /I/g
var result = s.replace(re, 'we');
document.write(result);

split // splits a string object into an array of strings
var s = 'I like food'
var ss = s.split(' ');
for (var i in ss) {
    document.write(ss[i]);
    document.write('<br/>');
}



FUNCTIONS


CONDITIONALS (IF THEN WILL SKIP LINES OF CODE)

LOOPS (WILL REPEAT WHAT IS IN THE BLOCKS)

FUNCTIONS (STORE CODE WITHIN {} SO WE CAN USE IT LATER)


WRITE FUNCTION THAT LOGS "THIS FUNCTION" TO THE CONSOLE & INVOKE
var list = function () {
  console.log('this function'); //saved message in function stored code inside {} to use later
}
list(); //this will run code/invoking function

WRITE FUNCTIION LOGS SUM OF 2 + 2
var list = function () {
  console.log(2+2);
}
list();

FUNCTION TAKES PARAMETER
var nameIt = function(name) {  //paramater or variable name is between parentehses
  console.log('Hi. I am ' + name);
}
nameIt("Mike") // mike is the argument (argument is data we supply to the function) this is what we supply to our function.

FUNCTION WITH MULTIPLE PARAMATERS
var multiply = function (num1, num2) {    // 2 paramaters in ()
  console.log(num1 * num2);
}
multiply(5, 4) // must have 2arguments here

FUNCTION THAT TAKES PARAMATERS(NUMBERS) AND MAKES IT INTO A STRING
var multiply = multiply.toString();

FUNCTION TAKES 2 PARAMATERS AND CONSOLE.LOGS WHETHER 2 STRINGS ARE IDENTICAL


FUNCTION RETURN STATEMENT //STOPS FUNCTION IN ITS TRACKS SO SUBSEQUENT CODE WON'T RUN
var ten = function() {
  return 10;  // stops function in its tracks  console.log(10) will not work
}
console.log(ten()+8);


var example = function(input) {
  if (input == "none") {
    return 0;               // quits out of function and immediately gives function it's value of 0 immeditely won't run below code
  }
    return 1;
}
console.log(example("none")); // this will return 0


FUNCTION 2 PARAMATERS RERUENS FIRST PARAMATER EVALUATED POWER SECOND PARAMATER
var toThePower = function(num1, num2) {
  return(Math.pow(num1, num2));
}
console.log(toThePower(5, 4));

var plusOne = function(num1,num2) { //takes return of previous function adds one
  return(toThePower() + 1);
}


FUNCTION PALINDROME
var palindrome = function(word) {
  var reversedWord = word.split('').reverse().join(''); // reverse() only works on array;
       //return whetehr the word is the same as the reverse of that word (comparison)
       // word === reverse word
  return word;
}
console.log(palindrome("radar"));

ARRAYS CONCATINATING
var andyArray = ['hello', 'world', 'tennis', 'fiat'];
    console.log('my first item is' + andyArray[0] ); //concatinating
    console.log('my first item ${andyArray[0]}') // also concatinates

ARRAY MULTIDIMENSIONAL
var thomsCloset = [
      [
        // These are Thom's shirts
        "grey button-up",
        "dark grey button-up",
        "light blue button-up",
        "blue button-up",
      ],[
        // These are Thom's pants
        "grey jeans",
        "jeans",
        "PJs"
      ],[
        // Thom's accessories
        "wool mittens",
        "wool scarf",
        "raybans"
      ]
    ];
console.log(thomsCloset[0]);
console.log('Thom's wears ${thomsCloset[1][2]}); //find thom's grey button up
var thomsBedPants = thomsCloset[1][2];
console.log(thomsBedPants);

thomsBedPants = "adult onsie";
console.log(thomsBedPants);

console.log


FUNCTION SYNTAX
var addOne = function() {    //inside curly braces is whatever I want to happen when function is run
  total = num +1;
  console.log(total);   // or you can return total and console.log name function
}
addOne(7);  // call its name so you can tell it to do something


var greeting = function (name, time) {
  if (time === "morning") {
    console.log("Good Morning" + name);
  } else {
    console.log("you don't know the time," + name);
  }
}

greeting("Thom", "afternoon"); // calling function greeting putting thom in variable name , taking afternoon and comparing it to "morning"
