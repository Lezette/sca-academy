import './App.css'
import {
  BrowserRouter,
  Routes, Route
} from "react-router-dom";

import { Homepage, NotFound } from './pages';

function App () {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  )
}




export default App
