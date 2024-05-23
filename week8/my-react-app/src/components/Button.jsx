/* eslint-disable react/prop-types */


const Button = ({ children }) => {
  return (
    <button className="bg-red-600 text-white inline-block m-6">{children}</button>
  )
}

export default Button