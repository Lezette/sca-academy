// https://jsonplaceholder.typicode.com/todos

// https://nodejs.org/en/


// Public API

// https://jsonplaceholder.typicode.com/
// https://www.boredapi.com/documentation

// https://ipapi.co/8.8.8.8/json/

// https://openweathermap.org/api/one-call-3#start
// https://openlibrary.org/dev/docs/api//subjects/love.json
// https://www.thecocktaildb.com/api.php




// https://newsdata.io/documentation/#about-newdata-api
// https://restcountries.com/v3.1/all
// https://dog.ceo/dog-api/documentation/
// https://developers.giphy.com/docs/sdk/#content-types
// https://opentdb.com/api_config.php



const listContainer = document.querySelector('ul')


const fetchData = fetch("https://jsonplaceholder.typicode.com/todos");


// fetchData
//   .then(function () {

//   })


// fetchData
//   .then((response) => {

//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`)
//     }
//     return response.json()
//   })
//   .then((data) => {

//     data.map((item) => {
//       const newTask = document.createElement("li");

//       newTask.innerHTML = `

//                 <div class="todo-item">
//                   <span>State: ${item.completed}</span>
//                   <span> Task Title: ${item.title}</span>

//                 </div>

//             `;
//       listContainer.appendChild(newTask);
//     })



//   })
//   .catch((error) => listContainer.innerText = `Something went wrong: ${error}`)


const getData = async () => {

  try {

    const response = await fetch("https://opentdb.com/api.php?amount=27");
    const data = await response.json()

    data.map((item) => {
      const newTask = document.createElement("li");

      newTask.innerHTML = `

                    <div class="todo-item">
                      <span>Name: ${item.name.common}</span>
                      <span> Capital: ${item.capital[0]}</span>

                    </div>

                `;
      listContainer.appendChild(newTask);
    })

  } catch (error) {
    console.log(error);
  }
}


getData()

// async function getData2 () {

// }

// async/await


