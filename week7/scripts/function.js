let counter = 0;


// function add () {
//   let counter = 0
//   counter += 1;
//   console.log({ counter });
// }

// add();
// add();
// add();


const add = (function () {
  let counter = 0;
  return function () { counter += 1; return console.log({ counter }); }
})();

// const arrFunction = () => {

// }


shorterArr = () => "This is a shorter arr function"

console.log(shorterArr());