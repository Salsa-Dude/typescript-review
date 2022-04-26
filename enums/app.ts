/*
  Enum is a enumerated list which makes it easier to handle named sets of constants.
  By default an enum is number based, starting at zero,
  and each option is assigned an increment by one.
*/

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person = {
  name: "joseph",
  age: 25,
  hobbies: ['Sports', 'Dancing'],
  role: Role.ADMIN
};

console.log(person.role) // 0

