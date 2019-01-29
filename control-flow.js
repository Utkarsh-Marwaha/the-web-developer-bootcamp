// Unit Objectives
// 1. Evaluate complex logical expressions
// 2. Write 3-part conditional statements
// 3. Write JS while loops and for loops
// 4. Translate between while and for loop


// Boolean Logic

// Everything starts with the idea that a statement is either True or False.
// Then we can combine those initial statements to create more complex statements
// that also evaluate to True or False.

// Assignment x = 5
// Operator	|	Name 					   |	Example	   |	Result
//=====================================================================
// >		|	Greater than			   |	x > 10	   |	false
// >=		|	Greater than or equal to   |    x >= 5	   |	true
// <		|	Less than				   |	x <-50	   |	false
// <=		|	Less than or equal to      |    x <=100    |	true
// ==		|	Equal to       			   |	x == "5"   | 	true
// !=		|	Not equal to       		   |	x != "b"   | 	true
// ===		|	Equal value and type	   |	x === "5"  | 	false
// !==		|	Not (Equal value and type) | 	x == "5"   | 	true
//=====================================================================


// Equality Operators == vs ===

var x = 99; // x is a number

x == "99" //true

x === "99" //false

// The == operator takes the two operands and converts them into a similar
// type before comparing their values.


var y = null;

y == undefined //true

y === undefined // false

// The === operator compares the value as well as the data type of the two
// operands

// == performs type coercion, while === does not


// A few interesting cases

true == "1" // true
0 	== false // true
null == undefined // true
NaN == NaN //false

// The last case which compares 2 NaNs is peculiar and is a JS quirk