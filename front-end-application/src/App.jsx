import {BrowserRouter, Routes, Route} from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Recipes from './pages/Recipes'
import MealPlanning from './pages/MealPlanning'
import GroceryList from './pages/GroceryList'

function App() {

  return (
    <>
    <BrowserRouter>
    <Navigation/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/recipes" element ={<Recipes />} />
      <Route path="/meal-plan" element ={<MealPlanning />} />
      <Route path="/grocery-list" element ={<GroceryList />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
