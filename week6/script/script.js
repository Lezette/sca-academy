const searchBox = document.getElementById("searchBox");
const list = document.getElementById("list");

const fruits = ['banana', 'apple', 'kiwi', 'pineapple'];

const people = [
  { name: 'Alice', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'Bob', age: 30 },
  { name: 'Jane', age: 30 },
  { name: 'Lily', age: 30 },
];


searchBox.addEventListener('change', (e) => {
  console.log({ e });
  const newPeople = people.filter((person) => person.name.toLowerCase().includes(searchBox.value.toLowerCase()))

  list.innerHTML = '';
  listFruit(newPeople)

});

// const sum = people.reduce((total, person) => total + person.age, 0);
// console.log(sum);



const listFruit = (items) => {
  items.map((item) => {
    list.innerHTML += item.name + '<br />';
  })
}

listFruit(people)


function sum (a, b, c) {
  return a + b + c;
}

const numbers = [1, 2, 3];

// console.log(sum(...numbers));


const arr1 = [1, 2, 3];
const arr2 = [...arr1];

const mergerdArr = [...arr1, ...arr2];

// console.log({ mergerdArr });


const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1 };

// console.log({ mergerdObj: { ...obj1, ...obj2 } });


let x = true, y = false



/*

== equal to
===
!=
!==
>
<
>=
<=


&& - Logical AND
|| - Logical OR
! - Logical Not
*/


// if (!x) {
//   console.log("It's true");
// } else {
//   console.log("It's not true");
// }

// let score = 75;


// if (score >= 90) {

//   console.log("You got an A.");

// } else if (score >= 80) {

//   console.log("You got a B.");

// } else if (score >= 70) {

//   console.log("You got a C.");

// } else {

//   console.log("You got a D or F.");

// }


// switch (key) {
//   case value:

//     break;

//   default:
//     
// }



let day = 2;

switch (day) {

  case 1:

    console.log("Monday");

    break;

  case 2:

    console.log("Tuesday");

    break;

  case 3:

    console.log("Wednesday");

    break;

  default:

    console.log("Not a valid day");

}


let weather = "sunny";

switch (weather) {

  case "sunny":

    console.log("Wear sunglasses.");

  // intentional fall-through

  case "cloudy":

    console.log("It might be a good idea to carry an umbrella.");

    break;

  case "rainy":

    console.log("Don't forget your umbrella!");

    break;

  default:

    console.log("Check the weather forecast before you go out.");

}