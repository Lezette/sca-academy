
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import { Homepage, Users, NotFound } from "./pages"


const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);


function App () {

  return (
    <RouterProvider router={router} />
  )
}

export default App
