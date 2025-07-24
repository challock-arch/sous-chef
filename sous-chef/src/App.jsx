import { BrowserRouter, Routes, Route } from 'react-router'
import { useState } from 'react'
import './App.css'
import HomePage from './components/Pages/Homepage'
import RegisterAndEdit from './components/Pages/RegisterEditPage'
import UserProfile from './components/Pages/UserProfile'
import NewRecipe from './components/Pages/NewRecipe'
import Walkthrough from './components/Pages/Walkthrough'
import NavMenu from './components/Elements/NavMenu'
import Footer from './components/Elements/Footer'
import MisEnPlace from './components/Pages/MisEnPlace'
import EditRecipe from './components/Pages/EditPage'

function App() {

// user Info state variable
  let [formData, setFormData] = useState({
    name: "Guest",
    username: "guest",
  })

//Recipe Data state variable
  let [recipes, setRecipes] = useState([
        {
        recipeNo: 1,
        name: "Peanut Butter and Jelly",
        servingSize: 1,
        ingredients: [
            "Bread",
            "Peanut Butter",
            "Jelly"
        ],
        steps: {
            1: "Pull two pieces of bread out onto a plate",
            2: "With a knife or spatula, spread the peanut butter onto on slice of bread.",
            3: "With a knife or spatula, spread the jelly onto the other slide of bread.",
            4: "Put both slices of bread together, mashing the peanut butter and jelly together between them.",
            5: "OPTIONAL: Slice the sandwich in half diagonally and share with a friend"
        }
    },
        {
        recipeNo: 2,
        name: "Sausage and Egg Casserole",
        servingSize: 8,
        ingredients: [
            "Pillsbury Crescent Rolls",
            "Sausage",
            "Eggs",
            "Milk",
            "American Cheese"
        ],
        steps: {
            1: "Spread Crescent Roll dough in bottom of dish",
            2: "Whip eggs and milk together (add salt and pepper to taste)",
            3: "Cook sausage, drain the grease, & spread over crescent roll dough.",
            4: "Pour egg mixture over sausage and top with American Cheese Slices.",
            5: "Bake at 375 deg. for 25 minutes or until egg is fully cooked"
        }
    }
  ])

  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterAndEdit formDataChange={setFormData} formData={formData} />} />
          <Route path="/user-profile" element={<UserProfile userData={formData} recipeData={recipes} updateRecipes={setRecipes} />} />
          <Route path="/new-recipe" element={<NewRecipe currentRecipes={recipes} updateRecipes={setRecipes} />} />
          <Route path="/edit-recipe/:recipeNum" element={<EditRecipe currentRecipes={recipes} updateRecipes={setRecipes} />} />
          <Route path="/recipe/:recipeNum" element={<Walkthrough />} />
          <Route path="/misenplace/:recipeNum" element={<MisEnPlace />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App;
