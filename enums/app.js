var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: "joseph",
    age: 25,
    hobbies: ['Sports', 'Dancing'],
    role: Role.ADMIN
};
console.log(person.role);
