const api = import.meta.env.VITE_API_URL;




export const createUser = async (body) => {

  try {

    const response = await fetch(`http://localhost:3011/user`, {
      method: "POST",
      body: body,
      mode: 'no-cors',
      headers: {
        "Content-Type": "application/json"
      }
    }).then((res) => {
      if (res.status !== 200 || res.status !== 201) {
        throw new Error(res.statusText)
      }
    })

    return response;

  } catch (error) {
    return error
  }

}


export const getUsers = async () => {
  try {

    const response = await fetch(`${api}/user`)
      .then((res) => res.json())

    return response;

  } catch (error) {
    return error
  }
}