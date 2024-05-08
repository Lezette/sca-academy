const guesser = document.getElementById("guesser");
const submit = document.getElementById("submit");
const tip = document.getElementById("tip");
const showNumber = document.getElementById("showNumber");

const randNumber = Math.floor(Math.random() * 100);




const randNumberChecker = () => {
  const value = guesser.value;

  if (value) {
    if (value == randNumber) {
      tip.textContent = "Fantastic!!!"
    } else if (value > randNumber) {
      tip.textContent = `Too high: ${value} is higer than the number, you need to try a lower number`
    } else {
      tip.textContent = `Too low: ${value} is lower than the number, you need to try a higher number`
    }


  } else {
    tip.textContent = "Please enter a number"
  }

}

submit.addEventListener('click', (event) => {
  event.preventDefault();
  randNumberChecker();

})