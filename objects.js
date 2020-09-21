function sayHi() {
  console.log(`Hello there ${name}`); // 2
  changeName(); // 4
  console.log(`sayHi is finished`); // 8
}

function changeName() {
  name = "Bobby"; // 6
  console.log(`we changed it to ${name}`); // 5
  console.log(`changeName is finished`); // 7
}

let name = "dev ed"; // 3

sayHi(); // 1

console.log(`We are done with the code`); // 9

// Run the code top to bottom line by line
// This name Callstacks, way of keeping track of the execution context
// https://developedbyed.com/courses/844150/lectures/15340043
