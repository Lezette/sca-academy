import { Link } from "react-router-dom"


const NotFound = () => {
  return (
    <main className="flex flex-col justify-center items-center h-svh overflow-y-auto text-center">
      <h1 className="text-9xl font-bold mb-5">404</h1>
      <div>
        <h2 className="text-2xl mb-6">This url does not exist</h2>
        <div>
          <Link to="/" className="bg-cyan-700 py-3 px-3 rounded inline-block">Go back to homepage</Link>
        </div>
      </div>
    </main>
  )

}

export default NotFound