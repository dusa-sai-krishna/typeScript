/**
 * Interface is used to define the structure
 * of an object or an function.
 * An interface can inherit structure from other interfaces.
 * But this inheritance is only possible while defining the structure
 * of an object
 */

interface Student{
    name:string,
    rn:string
}

interface SchoolInfo extends Student{
    school:string,
    address:string
}

var std1:SchoolInfo={
    name:"Sai Krishna",
    rn:"2001",
    school:"SRKVN",
    address:"Hyderabad"
}

console.log(std1);


/**
 * Defining structure of arrow funcitons only
 */

interface Add{
    (a:number,b:number):number
}

var addThem:Add = (a,b)=>{return a+b;}