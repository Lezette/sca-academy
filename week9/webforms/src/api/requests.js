// eslint-disable-next-line no-undef
const API_URL = import.meta.env.VITE_API_URL;



export const createPost = async (formData) => {

  try {
    const response = fetch(`${API_URL}/posts`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })

    if ((await response).status === 404) {
      throw new Error('Not found')
    }

    return response
  } catch (error) {
    return error
  }
}

export const getPosts = () => {
  fetch(`${API_URL}/items?list=10`)
    .then((res) => res)
}

