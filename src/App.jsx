import React from "react"
import { Navbar } from "./components/Navbar/Navbar"
import { Footer } from "./components/Footer/Footer.jsx"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage } from "./pages/HomePage.jsx"
import { About } from "./pages/About.jsx"
import { Contact } from "./pages/Contact.jsx"
import { Shop } from "./pages/Shop.jsx"
import { Filmography } from "./pages/Filmography.jsx"
import { Film } from "./pages/Film.jsx"
import { Cart } from "./pages/Cart.jsx"
import ScrollToTop from "./components/ScrollToTop.jsx"
import { Login } from "./pages/Login.jsx"
import { SignUp } from "./pages/SignUp.jsx"

function App() {


  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>

          <Route path='/' element={<HomePage />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/filmography' element={<Filmography />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />

          <Route path='/film' element={<Film />} >
            <Route path=':filmId' element={<Film />} />
          </Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  )
}

export default App
