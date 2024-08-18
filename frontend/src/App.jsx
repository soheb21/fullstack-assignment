import { useEffect, useState } from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import Add_Card from './components/Add_Card/Add_Card'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CardDetail from './components/CardDetail/CardDetail';
import { useDispatch } from 'react-redux';
import { getAllCardsAsync } from './store/card/cardAPI';

function App() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState('');

  useEffect(() => {
    let timerout = setTimeout(() => {
      dispatch(getAllCardsAsync(query));
    }, 500)
    return () => clearTimeout(timerout)
  }, [query])
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home setQuery={setQuery} />} />
          <Route path='/:id' element={<CardDetail />} />
          <Route path='/add' element={<Add_Card />} />
        </Routes>
      </Router>

    </>
  )
}

export default App
