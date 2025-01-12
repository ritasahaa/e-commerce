// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom"
import CardsDetail from './components/CardsDetail'
import Cards from './components/Cards'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetail />} />
      </Routes>
    </>
  )
}

export default App
