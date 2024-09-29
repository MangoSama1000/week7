import {Route, Routes} from "react-router-dom"
import Home from "./pages/Home"
import Recipes from "./pages/Recipes.jsx"
import NavBar from "./components/Nav.jsx"
export default function App() {

  return (
    <div>
      <h2>Sams books</h2>
      <NavBar />

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Recepies' element={<Recipes />} />
      </Routes>
    </div>
  )
}