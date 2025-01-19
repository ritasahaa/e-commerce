// import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { Routes, Route } from "react-router-dom"
import CardsDetail from './components/CardsDetail'
import Cards from './components/Cards'
import Buy from './components/Buy'

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Cards />} />
        <Route path="/cart/:id" element={<CardsDetail />} />
        <Route path="/cart/buy" element={<Buy />} />
      </Routes>
    </>
  )
}

export default App
