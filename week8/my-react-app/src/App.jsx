
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';

import Home from './views/home';
import About from './views/about';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
]);


function App () {

  return (
    <RouterProvider router={router} />

  )
}

export default App
