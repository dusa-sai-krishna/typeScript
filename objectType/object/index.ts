/**
 * Object  is a collection of key value pairs
 * wrapped around curly braces.
 * There are two ways to declare 
 * an object . 
 * 
 * Strict -> used when we all the keys and the data types 
 * that are to be present within the object. That means 
 * you cannot add additional keys to your object.
 * 
 * Flexible-> U define the 
 * possible data types of keys and strings
 * You can add as many keys you want 
 * but their type should be compatible 
 * with declared types in object declaration
 * 
 */

//Strict
var person:{
    name:string,
    age:number,
    company:undefined|string,
    address:{
        hno:string,
        city:string
    }
}
={
    name:"Sai Krishna",
    age:22,
    company:"Hashedin",
    address:{
        hno:"30-225",
        city:"Hyd"
    }
}

console.log(person)


//flexible
//accepts string,number and object types as values
var person2:{[key:string]:string|number|{}}={
    name:"Sai Krishna",
    age:22,
    company:"Hashedin",
    
}

person2.address={
    hno:"30-225",
    city:"Hyd"
}

console.log(person2)