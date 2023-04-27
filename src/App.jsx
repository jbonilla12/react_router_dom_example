import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Nosostros from "./components/Nosotros"
import Inicio from "./components/Inicio"
import Contacto from "./components/Contacto"
import Blog from "./components/Blog"
import LayoutPublic from "./components/layouts/LayaoutPublic"
import NotFound from "./components/NotFound"
import BlogDetails from "./components/BlogDetails"

function App() {
  

  return (
    <>
      <Navbar/>
      App
      <Routes>
        <Route path="/" element={<LayoutPublic/>}>
          <Route element={<Inicio/>} index></Route>
          <Route element={<Nosostros/>} path="/nosotros"></Route>
          <Route element={<Contacto/>} path="/contacto"></Route>
          <Route element={<Blog/>} path="/blog"></Route>
          <Route element={<BlogDetails/>} path="/blog/:id"></Route>
          <Route element={<NotFound/>} path="*"></Route>
        </Route>
      </Routes>
    </>
  )
}

export default App
