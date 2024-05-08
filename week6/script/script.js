

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function () {
//     return this.firstName + " " + this.lastName;
//   }
// };

// person.lastName;

// person["lastName"];

let x = this

// console.log({ x });



// objectName.methodName()

// console.log(person.fullName());

// const person = { name: 'Alice', age: 25 };

// for (const key in person) {
//   console.log(`${key}:  ${person[key]}`);
// }


// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));


// const person = { name: 'Alice', age: 25 };

// Object.keys(person).forEach(key => {

//   console.log(`${key}: ${person[key]}`);

// });



const cars = ["Saab", "Volvo", "BMW", "Lexus", "BMW"];

// cars[0] = "saab";

// const cars = new Array("Saab", "Volvo", "BMW");

// let car = cars[2]


// let car = cars.pop();
// console.log(cars)

// let car = cars.push("Toyota")

// cars.shift()
// cars.unshift("Toyota")

console.log(cars)

// console.log(cars.join("  "))


// console.log(typeof cars)
// console.log(Array.isArray(cars))

// const myGirls = ["Cecilie", "Lone"];
// const myBoys = ["Emil", "Tobias", "Linus"];

// console.log(myGirls.concat(myBoys))

// cars.copyWithin(2, 0)

// cars.splice(2, 2)

// console.log(cars)

// toSplice



// const myArr = [[1, 2], [3, 4], [5, 6]];

// console.log(myArr.flat());

// const months = ["Jan", "Feb", "Mar", "Apr"];
// const spliced = months.toSpliced(0, 1);
// console.log(spliced);






// const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
// const citrus = fruits.slice(1);

// console.log({ fruits });
// console.log({ citrus });


// console.log(cars.indexOf("BMW"));
// console.log(cars.includes("BMW"));


// console.log(cars.find(car => car == "BMW"));


// const numbers = [1, 2, 3, 4, 5];


// Find the first element that is greater than 3

// const found = numbers.find(number => number > 3);


// console.log(found); // Output: 4


const people = [

  { name: 'Alice', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'Bob', age: 30 },

];

people.sort((a, b) => a.name.localeCompare(b.name));

console.log(people);


// Find the first person whose age is greater than 28

const person = people.find(person => person.age > 28);


console.log(person); // Output: { name: 'Bob', age: 30 }


const fruits = ['banana', 'apple', 'orange'];

fruits.sort();

console.log(fruits);


// const numbers = [12, 5, 2, 7];

// numbers.sort();

// console.log(numbers);

// const numbers = [12, 5, 2, 7];

// numbers.sort((a, b) => a - b);

// console.log(numbers);
