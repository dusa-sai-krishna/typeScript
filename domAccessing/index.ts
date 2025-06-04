/**
 * In typescript while accessing DOM elements, it is crucial
 * to handle null values when required element 
 * is not present. For that we use eiter `?` or `! `
 * 
 * 
 * `?` is used as a suffix when the said tag
 * is used with other operations. It acts like 
 * Calesce of SQL
 */
var heading = document.querySelector("h1");
console.log(heading?.textContent);


/**
 * ! is used as the last character while 
 * assiging an element to a variable.
 * Indicating that element will never be null.
 */
var anchor = document.querySelector("a")!;
console.log(anchor.href);


/**
 * Typecasting 
 * This is very crucial. 
 * TS doesn't allow operations to be performed
 * on the elements without first defining 
 * the type of elements they are.
 * When we access an element 
 * from using tag name, ts already knows the type of element
 * 
 * But when we access based on class or id. Then manually typecasting
 * becomes necessary
 */

var anchor2 = document.querySelector(".anchorTag")! as HTMLAnchorElement;
console.log(anchor2.href);
