import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import EditRecipe from './pages/EditRecipe'
import Home from './pages/Home'
import Login from './pages/Login'
import MealPlanning from './pages/MealPlanning'
import MisEnPlace from './pages/MisEnPlace'
import NewRecipe from './pages/NewRecipe'
import Recipes from './pages/Recipes'
import Walkthrough from './pages/Walkthrough'

function App() {

  return (
    <>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/newRecipe" element={<NewRecipe />} />
          <Route path="/editRecipe/:id" element={<EditRecipe />} />
          <Route path="/meal-plan" element={<MealPlanning />} />
          <Route path="/recipe/:id" element={<MisEnPlace />} />
          <Route path="/recipe/walkthrough/:id" element={<Walkthrough />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
