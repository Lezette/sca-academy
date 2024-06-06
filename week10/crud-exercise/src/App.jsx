
import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";

import { Homepage, Users, NotFound, SingleUser } from "./pages"


function App () {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route>
          <Route path="/users" index element={<Users />} />
          <Route path="users/:userId" element={<SingleUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
