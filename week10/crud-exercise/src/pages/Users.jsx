import { Link } from "react-router-dom"

import { useEffect } from "react"
import { getUsers } from "../api"

const Users = () => {

  useEffect(() => {
    const fetctUsers = async () => {
      const data = await getUsers()

      console.log({ data });
    }

    fetctUsers()
  }, [])

  return (
    <main className=" container mx-auto my-12 px-10 lg:px-0">
      <div>
        <Link to="/" className="bg-cyan-700 py-3 px-3 rounded inline-block">Homepage</Link>
      </div>

      <section className="grid lg:grid-cols-4 md:grid-cols-2 gap-6 my-10">
        <article className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 text-black">
          <h3 className="text-lg text-black font-semibold">Erin Lindford</h3>
          <p className="text-slate-500 font-medium">erin-lindford@gmail.com</p>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View user</button>
        </article>
        <article className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 text-black">
          <h3 className="text-lg text-black font-semibold">Erin Lindford</h3>
          <p className="text-slate-500 font-medium">erin-lindford@gmail.com</p>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View user</button>
        </article>
        <article className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 text-black">
          <h3 className="text-lg text-black font-semibold">Erin Lindford</h3>
          <p className="text-slate-500 font-medium">erin-lindford@gmail.com</p>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View user</button>
        </article>
        <article className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 text-black">
          <h3 className="text-lg text-black font-semibold">Erin Lindford</h3>
          <p className="text-slate-500 font-medium">erin-lindford@gmail.com</p>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View user</button>
        </article>
        <article className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 text-black">
          <h3 className="text-lg text-black font-semibold">Erin Lindford</h3>
          <p className="text-slate-500 font-medium">erin-lindford@gmail.com</p>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View user</button>
        </article>
        <article className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 text-black">
          <h3 className="text-lg text-black font-semibold">Erin Lindford</h3>
          <p className="text-slate-500 font-medium">erin-lindford@gmail.com</p>
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">View user</button>
        </article>
      </section>
    </main>
  )

}

export default Users