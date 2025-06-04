/**
 * Array in js are of dynamic length and only contain homogenous data types.
 * There are two ways to declare an array
 * data_type[] or Array<data_type>. Latter is intiuitive to use.
 */

let numbers: Array<number> = [10,20,30];
let names: Array<string> = "sai krishna dusa".split(" ");
console.log(numbers,names);

/**
 * You can create read only arrays. So others can't manipulate data within it.
 * Use prefix Readonly
 */

let staticMarks:ReadonlyArray<number> = [30,40,50];
//staticMarks.push(30); causes error
console.log(staticMarks);