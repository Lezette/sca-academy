import { Link } from "react-router-dom"

import { useEffect, useState } from "react"
import { getUsers } from "../api"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Users = () => {

  const [users, setUsers] = useState([])
  const [searchResult, setSearchResult] = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const fetctUsers = async () => {
      const data = await getUsers()

      if (Array.isArray(data)) {

        const _data = data.sort((a, b) => a.first_name.localeCompare(b.first_name))
        setUsers(_data)
        setSearchResult(_data)

      } else {
        toast.error("An error occured")
      }
    }

    fetctUsers()
  }, [])

  const handleChange = (e) => {
    const { value } = e.target;
    setSearchValue(value)

    const _result = users.filter(user => user.first_name.includes(value) || user.last_name.includes(value) || user.email.includes(value))
    setSearchResult(_result)
  }

  return (
    <main className=" container mx-auto my-12 px-10 lg:px-0">
      <div className="flex items-center justify-between">
        <Link to="/" className="bg-cyan-700 py-3 px-3 rounded inline-block">Homepage</Link>

        <input
          type="text"
          className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  rounded-md sm:text-sm focus:ring-1"
          placeholder="Search Users"
          value={searchValue}
          onChange={handleChange}
        />
      </div>

      <section className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-6 my-10 lg:mx-5 xl:px-0">
        {searchValue && searchResult.length === 0 ? <div className="text-white text-center">User does not exist</div> : null}
        {searchResult.map((user, index) => (
          <article key={index} className="py-8 px-8 bg-white rounded-xl shadow-lg space-y-2 sm:py-4 text-black">
            <h3 className="text-lg text-black font-semibold">{`${user.first_name} ${user.last_name}`}</h3>
            <p className="text-slate-500 font-medium">{user.email}</p>
            <Link to={`/users/${user.id}`} className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View user</Link>
          </article>
        ))}

      </section>
      <ToastContainer />
    </main>
  )

}

export default Users