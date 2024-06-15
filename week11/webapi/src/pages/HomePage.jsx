import { Link } from "react-router-dom"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'


const Homepage = () => {

  return (
    <main className="container mx-auto my-12 px-8">
      <div>
        <Link to="/users" className="bg-cyan-700 py-3 px-3 rounded inline-block">See all users</Link>
      </div>

      <section className="lg:w-4/12 md:w-6/12 mx-auto md:px-0 mt-5">
        Home Page

        <FontAwesomeIcon icon={faHouse} />
      </section>
    </main>
  )

}

export default Homepage