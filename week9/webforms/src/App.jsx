import { useState, useRef } from "react"

import useFormValidation from "./hooks/useFormValidation";

import { createPost } from "./api/requests";

const initialState = {
  name: '',
  email: '',
  password: ''
}


const App = () => {

  const inputRef = useRef(null)
  const [isPasswordShown, setIsPasswordShown] = useState(false)

  const { formData, errors, handleChange, validateForm, setFormData } = useFormValidation(initialState, validate)




  const togglePassword = () => {
    if (isPasswordShown) {
      inputRef.current.type = "password"
    } else {
      inputRef.current.type = "text"
    }
    setIsPasswordShown(!isPasswordShown);
  }



  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      const data = await createPost(formData)

      console.log({ data });
    }
  }




  return (
    <div className="max-w-3xl mx-auto h-screen flex justify-center items-center">
      <div>
        <form onSubmit={handleSubmit}>

          <div className="my-3">
            <label htmlFor="name" className="block mb-1">Name <span className="text-red-500">*</span></label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              className="flex border border-blue-500 rounded-md py-2 focus:outline-none focus:border focus:border-indigo-400 w-full"
              onChange={handleChange}
            />
            <span className="text-red-600 text-xs">{errors.name ? errors.name : null}</span>
          </div>
          <div className="my-3">
            <label htmlFor="email" className="block mb-1">Email</label>
            <input
              type="text"
              name="email"
              id="email"
              value={formData.email}
              className="flex border border-blue-500 rounded-md py-2 focus:outline-none focus:border focus:border-indigo-400 w-full"
              onChange={handleChange}
            />
            <span className="text-red-600 text-xs">{errors.email ? errors.email : null}</span>
          </div>
          <div className="my-3">
            <label htmlFor="password" className="block mb-1">Password</label>
            <div className="flex border border-blue-500 rounded-md py-2 focus-within:border focus-within:border-indigo-400">
              <input
                type="password"
                ref={inputRef}
                value={formData.password}
                name="password"
                id="password"
                className="block w-9/12 bg-transparent focus:outline-none"
                onChange={handleChange}
              />

              <button type="button" onClick={togglePassword}>{isPasswordShown ? "Hide" : "Show"}</button>
            </div>
            <span className="text-red-600 text-xs">{errors.password}</span>
          </div>
          <div className="my-10 flex justify-center">
            <button className=" bg-red-400 py-2 px-8 rounded">Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}



const validate = (values) => {

  let errors = {};

  if (!values.name) errors.name = 'Name is required';

  if (!values.email) errors.email = 'Email is required';

  else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = 'Email is invalid';

  if (!values.password) errors.password = 'Password is required';

  else if (values.password.length < 6) errors.password = 'Password must be at least 6 characters long';

  return errors;

};



export default App

