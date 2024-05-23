/* eslint-disable react/prop-types */
const Square = ({ value, onClick }) => {

  return <button className="border text-2xl h-10" onClick={onClick}>{value}</button>
}

export default Square;
