CHROME CONSOLE
about:blank // opens blank chrome window
option + command + J // open javascript console
console.log // sends message to console. Good for debugging

PRIMITIVE DATATYPES
'string' //strings
2 // numbers or digits
Boolean // true/false statements
undefined//
null //
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
num++ // postfix increment by one
var num = 5; // postix set the variable to a number
y = num++; // define a new variable adding postfix, returns value before incementing
console.log(num); //
--num//prefix decrement

RANDOM NUMBERS
Math.random(); // get random deciman between 0 and 1
Math.random() * 10; // random decimal between 0 and 10 (excluding 0 and 10)
Math.floor(Math.random() * 11); // whole number between 0 and 10 including 0 and 10. Rounding down with math.floor
Math.floor(Math.random() * 10) + 1; // whole number between 1 and 10 rounding down
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

/*Buy Beer Example*///Use Case for conditionals so skip lines of code in the block
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


ARRAY // array is a list store in a variable
var list = ['chari', 'table', 'candle']; // array contains elements. elements can be any primitive data type
var squares = [1, 4, 9, 25]; // each element in array has a number called index(place in the array)
console.log(squares[0]); // returns 1st value array
console.log(squares.length); // returns length array
squares.indexOf(4); // tells you index of
squares.reverse();//reverse order of the array
squares[1] = 9 // change index 1 to value 9 also add element to an array like this.
squares.push(); // adds element to end of an array if you don't know exact length
squares.sort(); // makes alphabetical
squares.pop(); // removes last element of an array
console.log(squares); // prints squares array in console
squares.shift(); // removes first item of an array
squares.unshift(); // adds one or more elements to beggining of array squares.unshift(4,5) adds 4 and 5 to beginning of the array so [4, 5, 1, 4, 9, 25]
squares.slice(1, 3); // returns only elments 1 and 3 as a new array in a new variable so original array will not be changed
squares.splice(2,2); // at position 2 remove 2 items
squares.splice(2, 1, 'Lemon', 'kiwi') // at position 2 add the new items and remove 1 item
squares.splice(2, 0, 'Lemon', 'kiwi') // at position 2 add the new items and remove 0 item
var furniture = [["chair", "door"], ["dresser", "bed"]]; // multi-deminsional array
console.log(furniture[1][0]); // access dresser in the array

// selecting a random array item (currently not working )
var selectFruit = ["Apple", "Orange", "Banana", "Cherry"];
var pickAFruit = function () {
var todaysFruit = selectFruit[Math.floor(Math.random() * 4)];
return todaysFruit;
};



LOOPS
//For loop count to 1000. We use loops to repeat code
for (var num=5; num <= 100; num ++) { // num can be x or i, can be whatever I want
  console.log(num);
}

//For loop reverse loop where instead of increment there is a decrement
for (var num=100; num > 0; num--) {
    console.log(num);
}

// While loop runs as long as boolean is true. 1)A while needs a way to stop running 2)Variable we plugin into the while loop is defined before the loop
var num = 5;
while (num <= 100) {  //while boolean exrpession stays true
  console.log(num);
  num++
}

// While loop with conditionals inside
var count = 50;

while (count > 0) {

    if (count === 25) {
        console.log('Whooaao, we\'re halfway there . . .');
    }

    console.log(count);
    count--;
}

console.log('WhoaaAAo, livin\' on a prayer!');


// For loop used for accessing elements of an array. this for loop prints each item in the console
var bigLifts = ["Squats", "Deadlits", "Bench Press", "T-Bar Rows"];
for (var num=0; num < bigLifts.length; num++) {
  console.log(bigLifts[num])
}


// For loop terminate the for loop by using break
for (num = 0; num < 100, num++) {
  if (i === 3) {     // use break to exit a loop befor it has fnished. This loop will terminate when the iterator gets to 3
    break;
  }
  console.log(num);
}
console.log('the loop has ended');


FUNCTIONS // another form of control flow with conditionals and loops
LOOPS (WILL REPEAT WHAT IS IN THE BLOCKS)
CONDITIONALS (IF THEN WILL SKIP LINES OF CODE)
FUNCTIONS (STORE CODE WITHIN {} SO WE CAN USE IT LATER) // store code within a block so we can use it later (cathing a pokemon and using him later)



// write a function that logs "gotta catch em all"
var list = function () {
  console.log('gotta catch \'em all'); //saved message in function stored code inside {} to use later
}
list(); //this will run code/invoking function (letting pokemon out temporarily) have to have parentheses.

// function logs sum of 2
var list = function () {
  console.log(2+2);
}
list();

PARAMATERS AND ARGUMENTS// In a function
var nameIt = function(name) {  //paramater or variable name is between parentehses
  console.log('Hi. I am ' + name);
}
nameIt("Mike"); // Inside parenteheses put the value of the paramater also called argument . Mike is the argument (argument is data we supply to the function).
nameIt('lee');
nameIt('sam'); // we can invoke function with whatever arguments we want

// multiple paramaters
var multiply = function (num1, num2) {    // 2 paramaters in ()
  console.log(num1 * num2);
}
multiply(5, 4) // must have 2arguments here
var multiply = multiply.toString(); // Takes paramaters and make into a string




FUNCTION RETURN //return gives function its value or stops function
var example = function(input) {
    if (input == "none") {
        return 0; // sends value of function  immediately and quits it so code below not returned
    } else {  // else { not needed here
        return 1; // sends value function immediately
    }
};
example('none');//invoke function with argument none
example('two'); // invoke function with argument two
example // run with no parentheses function itself appears - this is called referring a function
console.log(example("none")); // to see result of an invoked functon console log it.

// two paramaters
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
  if (word == reversedWord) { // compare words
    return true;
  }
    return false ;
}
console.log(palindrome("radar"));




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

//build calculator
var calc = function (num1, num2, operation) {
  if (operation === "add") {
    return num1 + num2;
  } else if (operation === "sub") {
    return num1 - num2;
  } else if (operation === "mult") {
    return num1 * num2; {
  } else if (operation === "div") {
    return num1 / num2;
  } else if (operation === "exp") {
    return Math.pow(num1, num2);
  }
}
console.log(calc(4,3, "mult"));


OBJECTS // is a variable that sotres data with great specifiicty. Objects delcared using {}. Objects use . notation, they do not use index values.
var dog = {
  name: ('tom'), // name = key and 'tom' = value/property. The key has to be unique, value can be any datatype
  age: ('5') // age = key and '5' = value
}
console.log(dog); // we can print entire object
console.log(dog.name); // we can print just a value

// adding key value pairs to previusly exigint ojects or changing key value pairs
var house = {
  doors: 9
}
console.log(house);
house.windows = 30;
console.log(house);
house.squarefootage = 300;
console.log(house);

// nest data in object
var adventure = {
  name: ('Timothy'),
  hitpoints: 13,
  belongings: ['sword', 'poiton', 'tums'],
}
console.log(adventure);
console.log(adventure.belongings[2]);

// nest data in object
var adventure = {
  name: ('Timothy'),
  hitpoints: 13,
  belongings: ['sword', 'poiton', 'tums'],  // array is a list
  companion: {name: 'velma', type: 'bat'}  // object has more information
}
console.log(adventure);
console.log(adventure.belongings[2]);
console.log(adventure.companion); // only console logging companion object
console.log(adventure.companion.name); // access velma inside of object
adventure.companion.name = 'susan'

// in class activity
var user = {
  name: ('andy'),
  email: ('andysartori04@gmail.com'),
  age: 24,
  purchased: [],
}
user.email = "andrewsartori@yahoo.com"; // change email
user.age = user.age + 1; // add age
user.location = "California"; // add location
user.purchased.push('carbohydrates');
user.purchased.push('peace of mind');
user.purchased.push('merino jodhpurs');

user.friend = {
  name: 'Grace Hopper',
  age: 85,
}

var updateUser = function(){
  user.age++; // destructive process, changes in place
  user.name = user.name.toUpperCae(); // alters in memory but does not actualy alter value in sdie object set =
}
udateUser();
console.log(user);


SCOPES
// Global variable calls function
var test = 'I am here'; // global variable
var iSeeYou = function () {
  return test;
}
console.log(iSeeYou());

//Hidden variable
var test = function () {
  var example = 'I can not see you';
}

var iCanNotSeeYou = function () {
  return example;
}
test(); //invoke
console.log(iCanNotSeeYou());


//Function within a function. Value will be visible
item = 'chari';
var outerFunction = function () {
  var test = "yippee";
  var innerFunction = function() {
    console.lg(test);
  }
  innerFunction();
}
outerFunction();


//
var parent = function () {
  var parentVar = false;
  var child = function () {
    console.log(parentVar);
    var childVar = true;
  }
  child();
  console.log(childVar); // not avialable childvar locked inside of {}
}
parent ();

// why we use var?
var someFunc = function() {
  var item = 'chair'; //var keeps chair inside function. var is what gives variables the scope. Always keep variable locked in functions so you don't pollute your global scope.
}
