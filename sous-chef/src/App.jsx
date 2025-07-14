import { BrowserRouter, Routes, Route, Link, Router } from 'react-router'
import './App.css'
import HomePage from './components/Homepage'
import LoginPage from './components/LoginPage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login-Register" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
