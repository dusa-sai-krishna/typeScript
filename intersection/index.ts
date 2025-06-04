/**
 * Intersection is the technique which allows
 * you to combine two user-defined data types
 * These data types are usually interfaces or types.
 * 
 * Primarily used to comgine two objects
 */

type personData1={
    name:string
}

type personData2={
    age:number
}

type personData = personData1 & personData2;

var pData:personData={
    name:"sai Krishna",
    age:22
}
