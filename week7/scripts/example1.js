// const originalObject = {
//   name: 'John',
//   age: 30,
//   hobbies: ['reading', 'cooking']
// };


// // Creating a shallow copy using the spread operator

// const shallowCopyObject = { ...originalObject };

// const deepCopyObj = JSON.parse(JSON.stringify(originalObject))


// shallowCopyObject.age = 35

// shallowCopyObject.hobbies.push('Sleeping')

// deepCopyObj.hobbies.push('Jumping')

// console.log({ deepCopyObj });
// console.log({ originalObject });



const cars = ['Toyota', 'BMW', 'Some cars', 'Anoter car', 'etcx'];

let text = "Here are my cars: ";

let index = 0;


function readFile (filename) {

  let somethoing = "Hey"

  let index = 5;

  console.log(`Reading file: ${filename}`);


}



readFile("file")
console.log(index);

// text += cars[0] + ", ";
// text += cars[1] + ", ";
// text += cars[2] + ", ";
// text += cars[3] + ", ";

// for (let index = 0; index < cars.length; index++) {
//   text += cars[index] + ", ";
// }



// while (index < cars.length) {
//   text += cars[index] + ", ";

//   index++;

// }


// do {
//   text += `${cars[index]}, `;
//   index++;
// } while (index < cars.length);



// let arr = new Array(-1); 


// null


function validateAge (age) {

  if (age < 18) {

    throw "Age must be at least 18.";

  }

  return "Age is valid.";

}


// try {
//   console.log(validateAge(16)); // This will throw an exception

// } catch (error) {

//   console.log("Error:", error); // Handle the error

// }







// try {

//   readFile("example.txt");

// } catch (error) {

//   console.log("Caught an error:", error.message);

// } finally {

//   console.log("Cleaning up resources.");

// }



