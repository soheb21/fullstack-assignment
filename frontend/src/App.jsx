import { useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Add_Card from './components/Add_Card/Add_Card'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardDetail from './components/CardDetail/CardDetail';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<CardDetail />} />
          <Route path='/add' element={<Add_Card />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
