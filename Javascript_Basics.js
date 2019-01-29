// Objectives

// 1. Introduce the 5 primitive data types
// 2. Work with numbers and numeric operators
// 3. Work with strings and common string methods

// 5 Primitive Datatypes

// Numbers
4
9.3
-10
// Javascript treats all numbers be it positive, negative, decimal or fractional as same

//Strings
"Hello World"
"43"

// Booleans
true
false

// null and undefined
null
undefined



// Numbers
4
9.3
-10

// We can do mathematical operations with them

4 + 10	//14
1/5		//0.2

// Modulo - remainder operator

10 % 3	//1
24 % 2	//0
15 % 11 //4


// Single or Double quotes OK
"hello world"
"hello world"

// Concatenation
"charlie" + "brown" // charliebrown

// Escape characters start with "\"
"Signin \"Do wah diddy, dum diddy do\""
"This is a backslash \\"

//Strings have a length property
"hello world".length //11

//Access individual characters using [] and an index
"hello"[0] //"h"
"hello"[4] //"o"
"hello"["hello".length-1]

// Exercise for Javascript Basics

// Evaluate the following statements without executing them on the browser
// 1.
100 % 3 
// Answer: 1

// 2.
("blah" + "blah")[6]
// Answer: "a"

// 3.
"hello".length % "hi\\".length
// Answer: 5 % 3 = 2



// Variables

// Variables are simply containers that store values
// They follow this pattern:
var yourVariableName = "yourValue" // does not have to be a string

// They can store all of the values we've seen
var name = "Rusty";
var secretNumber = 73;
var isAdorable = true;

// Recall the stored value by calling the variable name
var name = "Rusty";
"hello there " + name

var num = 37;
num + 3 + 10     //50

//We can also update existing variables
var name = "Robert";
name = "Bob";

// Javascript is dynamically typed which means we can change the data type of the value stores in the variables
secretNumber = "Seven Two One";