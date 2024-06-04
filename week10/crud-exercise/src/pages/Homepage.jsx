import { Link } from "react-router-dom"

import { useState } from "react"



import { createUser } from "../api"

// const initialValue = {
//   first_name: '',
//   last_name: '',
//   email: ''
// }


const Homepage = () => {

  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })


  }

  const handleSubmit = async (e) => {

    e.preventDefault();


    const response = await createUser(JSON.stringify(formData))

    console.log(response);
  }



  return (
    <main className="container mx-auto my-12 px-8">
      <div>
        <Link to="/users" className="bg-cyan-700 py-3 px-3 rounded inline-block">See all users</Link>
      </div>

      <section className="lg:w-4/12 md:w-6/12 mx-auto md:px-0 mt-5">
        <form className="bg-white p-5 rounded-xl" onSubmit={handleSubmit}>
          <div className="my-4 flex flex-col gap-y-2">
            <label
              className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">First name:</label>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Jane"
              value={formData.first_name}
              onChange={handleChange}
              name="first_name"
            />
          </div>
          <div className="my-4 flex flex-col gap-y-2">
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Last name:</label>
            <input
              type="text"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="Smith"
              value={formData.last_name}
              onChange={handleChange}
              name="last_name"
            />
          </div>
          <div className="my-4 flex flex-col gap-y-2">
            <label className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email:</label>
            <input
              type="email"
              className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
              placeholder="jane@email.com"
              value={formData.email}
              onChange={handleChange}
              name="email"
            />
          </div>

          <div className="text-center">
            <button className="px-12 py-3 text-sm text-purple-600 font-semibold rounded-lg border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Add User</button>
          </div>
        </form>
      </section>
    </main>
  )

}

export default Homepage