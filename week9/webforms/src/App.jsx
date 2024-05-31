import { useEffect, useState } from "react"


import { getPosts } from "./api/requests";

import useFormValidation from "./hooks/useFormValidation";



const App = () => {

  const [response, setResponse] = useState([])

  // const { formData } = useFormValidation()



  useEffect(() => {
    const fetchData = async () => {
      const data = await getPosts('PromiseResult')
      setResponse(data)
    }

    fetchData()
  }, [])


  console.log(response);




  return (
    <div className="max-w-3xl mx-auto h-screen flex justify-center items-center">
      <div>

      </div>
    </div>
  )
}




export default App

