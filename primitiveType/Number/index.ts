/**
 * var num1:number = num_value
 * 
 *
 */

var num1:number=10;
var num2:number=20;
var total:number=num1+num2;

console.log(total);

/**
 * But TS is intelligent enough to auto assign data type
 * to a variable.
 * But this comes in handy in situations where
 * a varaible may store one data type
 */

var data:number|string =40;
data ="sai";
console.log(data);// variable may store either a number or variable.


/**
 * Declaring 
 * binary values -> prefix 0b
 * hexaDec values-> prefix 0x
 * octa values -> prefix 0o1
 */

var bin = 0b0001;
var hexa = 0x0001;
var oct = 0o10001;
console.log(bin,hexa,oct);