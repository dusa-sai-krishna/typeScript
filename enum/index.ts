/**
 * Enum 
 * is used to define named constants
 * A variable of enum type
 * can represent only values from the 
 * set of named constants of that 
 * enum. 
 * Lke role can be either User or Admin
 */

enum enumRole{
    USER="User",
    ADMIN="Admin"
}

type person={
    name:string,
    role:enumRole
}

var p1:person={
    name:"sai",
    role:enumRole.USER
}

var p2:person={
    name:"sai",
    role:enumRole.ADMIN
}

console.log(p1,p2);