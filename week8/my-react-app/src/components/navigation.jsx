import { Link } from "react-router-dom";


const Navigation = () => {

  return (
    <nav>
      <Link to="/">Home</Link>
      <ul>About
        <li><Link Link to="about">About us</Link> </li>
        <li><Link Link to="about">Our Team</Link> </li>
      </ul>
    </nav>
  )
}

export default Navigation