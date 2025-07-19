import { BrowserRouter, Routes, Route, Link, Router } from 'react-router'
import './App.css'
import HomePage from './components/Homepage'
import LoginPage from './components/LoginPage'
import RegisterAndEdit from './components/RegisterEditPage'
import UserProfile from './components/UserProfile'
import NewRecipe from './components/NewRecipe'
import Walkthrough from './components/Walkthrough'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/About" element={<About />} />
          <Route path="/Login-Register" element={<LoginPage />} />
          <Route path="Login-Register/user-info" element={<RegisterAndEdit />} />
          <Route path="user-profile/" element={<UserProfile />} />
          <Route path="new-recipe/" element={<NewRecipe />} />
          <Route path="walkthrough/" element={<Walkthrough />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
