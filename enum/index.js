/**
 * Enum
 * is used to define named constants
 * A variable of enum type
 * can represent only values from the
 * set of named constants of that
 * enum.
 * Lke role can be either User or Admin
 */
var enumRole;
(function (enumRole) {
    enumRole["USER"] = "User";
    enumRole["ADMIN"] = "Admin";
})(enumRole || (enumRole = {}));
var p1 = {
    name: "sai",
    role: enumRole.USER
};
var p2 = {
    name: "sai",
    role: enumRole.ADMIN
};
console.log(p1, p2);
