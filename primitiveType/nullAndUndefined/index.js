"use strict";
/**
 * null->respresents complete absence of
 * data within a variable.
 * undefined-> variable is just declared but no data is assigned to it.
 *
 * variables which are declared as null or undefined are
 * associated with other types whose value
 * variable may contain in future
 */
var userName = null;
var login = true;
if (login) {
    userName = "sai Krishna";
}
var userName1 = undefined;
var login = true;
if (login) {
    userName1 = "sai Krishna";
}
/**
 * typeof null is always ->object
 */
console.log(typeof null);
/**
 * null==undefined -> true(equal because no value)
 * null===undefined - > false(no value in both but data type is different)
 */
