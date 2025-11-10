import {BrowserRouter, Routes, Route} from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import Home from './pages/Home'
import About from './pages/About'
import Login from './pages/Login'
import Recipes from './pages/Recipes'
import MealPlanning from './pages/MealPlanning'
import MisEnPlace from './pages/MisEnPlace'
import Walkthrough from './pages/Walkthrough'
import NewRecipe from './pages/NewRecipe'
import EditRecipe from './pages/EditRecipe'

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
      <Route path="/newRecipe" element ={<NewRecipe />} />
      <Route path="/editRecipe/:id" element = {<EditRecipe />} />
      <Route path="/meal-plan" element ={<MealPlanning />} />
      <Route path ="/recipe/:id" element ={<MisEnPlace />} />
      <Route path ="/recipe/walkthrough/:id" element ={<Walkthrough />} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
