
const person: {
  name: string;
  age: number;
  hobbies: string[];
  /* Tuple types allow you to express an array with a fixed number of elements whose types are known, but need not be the same. */
  role: [number, string];
} = {
  name: "joseph",
  age: 25,
  hobbies: ['Sports', 'Dancing'],
  role: [2, 'author']
};