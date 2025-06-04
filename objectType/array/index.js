/**
 * Array in js are of dynamic length and only contain homogenous data types.
 * There are two ways to declare an array
 * data_type[] or Array<data_type>. Latter is intiuitive to use.
 */
var numbers = [10, 20, 30];
var names = "sai krishna dusa".split(" ");
console.log(numbers, names);
/**
 * You can create read only arrays. So others can't manipulate data within it.
 * Use prefix Readonly
 */
var staticMarks = [30, 40, 50];
//staticMarks.push(30); causes error
console.log(staticMarks);
