const guesser = document.getElementById("guesser");
const submit = document.getElementById("submit");
const tip = document.getElementById("tip");
const showNumber = document.getElementById("showNumber");


const people = [

  { name: 'Alice', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'Bob', age: 30 },

];

people.sort((a, b) => a.name.localeCompare(b.name));

// console.log(people);


// Find the first person whose age is greater than 28

const person = people.find(person => person.age > 28);


// console.log(person); // Output: { name: 'Bob', age: 30 }


const fruits = ['banana', 'apple', 'kiwi', 'pineapple'];

fruits.sort();




const numbers = [12, 5, 2, 7];

// const doubled = numbers.map(num => num * 2);

// console.log(numbers.map(number => number * 2));


const evens = fruits.filter((fruit) => fruit.includes("a"));
console.log(evens);





// fruits.forEach((fruit) => {

//   console.log(fruit);

// });



// numbers.forEach((number) => {

//   console.log({ number: number + 20 });

// });






// numbers.sort();

// console.log(numbers);

// const numbers = [12, 5, 2, 7];

// numbers.sort((a, b) => a - b);

// console.log(numbers);



