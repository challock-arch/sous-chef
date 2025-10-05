import {BrowserRouter, Routes, Route} from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
