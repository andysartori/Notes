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

STRING METHODS // point is to save work
item.toUpperCase(); //variable name to uppercase (empty parentheses is what will run it, it will trigger/call it)
item.toLowerCase(); //variable name to lowercase, you can put exception in parentheses so only for first two words
item.slice(); // extracts a section of a string and returns a new string

replace // finds match between regular expression and a string, replaces matched substrign with new substring
var s = 'I like food'
var re = /I/g
var result = s.replace(re, 'we');
document.write(result); // document.write is user sees what is typed, not a popup but shows up on page . console.log is only in chrome developer

split // splits a string object into an array of strings
var s = 'I like food';
var array = s.split(' ');
console.log(array);

NUMBERS
Integers // whole numbers , JavaScript is accurate to 15 digits
Floats// decimals
NaN // used to denote unrepresentable valeu like square - number. NaN is never equal to NaN

OPERATORS
-, +, *, /, %
% // 100 % 1; tells if it is odd or even
var num = 4;
num = num + num; /*same as*/ num += num
num = num * num /*same as*/ num *= num
num++ // postfix increment
var num = 5; // postix set the variable to a number
y = num++; // define a new variable adding postfix, returns value before incementing
console.log(num); //
--num//prefix decrement

RANDOM NUMBERS
Math.random(); // get random deciman between 0 and 1
Math.random() * 10; // random decimal between 0 and 10 (excluding 0 and 10)
Math.floor(Math.random() * 11); // whole number between 0 and 10 including 0 and 10. Rounding down with math.floor
Maath.floor(Math.random() * 10) + 1; // whole number between 1 and 10 rounding down
Math.sqrt(Math.PI); // square pi
Math.pow(5,4);// 5 to the power of 4


UNDEFINED AND NULL
undefined // uninitialized variable, no value assigned
null // deliberate non-value. Can be used as a placeholder

DATA TYPES
typeof() // command allows you to check what data type dealing with
parseInt('7') // converts 7 from string to a number & rounds
(888).toString() // converts 888 int string '888'

COERCION
5 + 5 + 'j'; // + coerces numbers into strings
5 * '55'; // * coerces string into numbers
'10' / 2 // / coerces string into numbers
'10' - 2 // - coerces string into numbers

CONTROL FLOWS // if boolean expression within our condition is ture, a branch will execute, if it is false, it will not execute
Conditionals // skip lines of code
Loops // repeat lines of code
Functions // save and later deploy lines of code

BOOLEANS // true and false values. (binary values, transistors)
true
false
! // not something ('bang')

OPERATORS
==,!=, === /*strict equality*/, !== // strict inequality
>, <, >=, <= // relational operators
&& (and), || (or)// are logical operators (comparing 2 sides of the equation not to each other but weather both sides evaluate to true)

TRUTHINESS
false, 0, ''(empty string), NaN, null, undefined
Boolean('hi');// test it in the chrome console

IF STATEMENT
if (BOOLEAN EXPRESSION) {   //block start
  // if boolean expression is true run this code
}                           // block end

PROMPT ASKING YOUR NAME
prompt('What is your name'); // chrome will generate a popup
var input = Prompt(); // save value of prompt to a variable
console.log('hello' + input); // say hello
if (input === 'andy') { // if the input is andy the code is run, otherwise the code is never run
  console.log('andy is in');
}

IF, IF / ELSE IF / ELSE IF , ELSE
if (input === 'andy') {....} // code in block will run if parentheses evaluate to true

/*If else statements*/
if (input === 'andy') {
    console.log('admin login');
} else {                         // it is a catch all
   console.log('regular login');
}

/*else if statement*/
var input = 'andy';

if (input == 'andy') {
  console.log('andy block');
} else {
  console.log('else block');
}

/* else if */
var input = 'andy'
if (input == 'andy') {
  // run this piece of code
} else if (input == 'steven') {
  // run this piece of code
} else {
  console.log ('Else Block');
}

/*Buy Beer Example*/
prompt('What is your age');
var input = prompt( );

if (input > 21) {
	console.log('you can buy beer');
} else if (input <= 0 ) {
	console.log ("you don't exist");
} else if (input == 2) {
	console.log ('toddlers are not allowed');
} else if (input < 9) {
	console.log ('where are your parents');
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
