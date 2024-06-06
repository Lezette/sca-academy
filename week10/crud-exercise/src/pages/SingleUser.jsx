import { Link, useHref, useNavigate } from "react-router-dom"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useEffect, useState } from "react"
import { getUser, editUser, deleteUser } from "../api"


const Users = () => {

  const href = useHref()

  const navigate = useNavigate()

  const userId = href.split('/users/')[1];



  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: ''
  })


  useEffect(() => {
    const fetctUser = async () => {
      const data = await getUser(userId)
      if (data.statusCode
        === 404) {
        navigate("/not-found")

      } else {
        setFormData(data)
      }
    }

    fetctUser()

  }, [])


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
    const response = await editUser(JSON.stringify(formData), userId)

    if (response?.response.status === 200) {
      toast.success("User info has been updated")
    } else {
      toast.error("An error occured")
    }
  }

  const handleDelete = async () => {
    const response = await deleteUser(userId)

    if (response.response.status === 200) {
      navigate("/users")
    } else {
      toast.error("An error occured");
    }
  }


  return (
    <main className=" container mx-auto my-12 px-10 lg:px-0">
      <div>
        <Link to="/users" className="bg-cyan-700 py-3 px-3 rounded inline-block">Back</Link>
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

          <div className="text-center flex justify-between">
            <button type="submit" className="px-12 py-3 text-sm text-purple-600 font-semibold rounded-lg border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Edit User</button>


            <button onClick={handleDelete} type="button" className="px-12 py-3 text-sm text-red-500 font-semibold rounded-lg border border-purple-200 hover:text-white hover:bg-red-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Delete User</button>
          </div>
        </form>

        <ToastContainer />
      </section>

    </main>
  )

}

export default Users