/******************************************************************************
WELCOME TO YOUR FIRST JAVASCRIPT BASIC ASSIGNMENT!

All the assignment instructions are commented out so that you can write your 
code in between them. Remember to read the instructions CAREFULLY, write short 
comments for your code, and feel free to ask for help if you're stuck.

GOOD LUCK!
******************************************************************************/

/******************************************************************************
ASSIGNMENT 1

Your first task will be to link this javascript file to the index.html file
using one of the methods I showed in the first lecture.

<-- Locate the index.html file in the file browser and link it to this file, 
javascript.js
******************************************************************************/

/****************************************************************************** 
ASSIGNMENT 2

Last lecture I showed you how to make variables that can hold values of the 
various data types. Make some variables of the following datatypes: 
String, number, boolean, array
You can choose what the actual content is.
Try to use both the let and const keywords
******************************************************************************/

//your code here

const telephoneNumber = 12345;
let myText = "Hello";
let myBoolen = true;
let myCar = { carBrand: "Ionic", modelYear: 2020 };
const myFamiley = ["Ahmmed", "Mostafa", "Yara"];
console.log(myFamiley);
/****************************************************************************** 
ASSIGNMENT 3

Try out a few of the operators we looked at (+, -, /, *)
as well as a few of the shorthand operators (++, --, +=, -=)
******************************************************************************/

//your code here

let x = 2 + 4;
let y = 3 + 9;
let z = y / x;
// console.log(z);
z *= 2;
// console.log(z);
z++;
z++;
console.log(z);
console.log(z == x);

/****************************************************************************** 
ASSIGNMENT 4

Write an IF/ELSE conditional statement that checks that userName isn't 
empty(""), that the user age is 18+, and that userIsBlocked is false. 

(HINT: Use the && (logical AND) to check all 3 in one IF statement)

If all of these conditions are true, change the userIsLoggedIn variable to true 
and the goToPage variable to "/home" then console.log a welcome message. 

If any of the conditions for logging in are not met, console.log an error 
message.

Try changing the values of the variables to make sure your IF/ELSE conditional
can handle all cases correctly 
******************************************************************************/

let userName = "Ahmed";
let userAge = 18;
let userIsLoggedIn = true;
let userIsBlocked = false;
let goToPage = "";

//your code here
if (userName !== "" && userAge >= 18 && userIsBlocked === false) {
  (userIsLoggedIn = true), (goToPage = "/home");
  console.log("welcome");
} else {
  console.log("Error");
}
console.log(goToPage);

// Ternary
const allAreTrue =
  userName !== "" && userAge >= 18 && userIsBlocked === false
    ? ((goToPage = "/home"), "welcome")
    : "Error";
console.log(allAreTrue);
console.log(goToPage);

/******************************************************************************
ASSIGNMENT 5

Make a variable called userTitle and set the content equal to "Mr." if userMale 
is true, or to "Mrs." if userMale is false. Use the TERNARY conditional to do 
this:

const variable = statement ? "this if true" : "this if not true"

Try changing userMale to both true and false and console.log your new variable,
to see that your conditional is working.
******************************************************************************/

const userMale = false;

//your code here
const userTitle = userMale === true ? "Mr." : "Mrs.";
console.log(userTitle);
