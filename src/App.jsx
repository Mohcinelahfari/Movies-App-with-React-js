import React from 'react'
import './index.css'
import Headers from './Components/Headers'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import WatchList from './Components/WatchList'
import Watched from './Components/Watched'
import Add from './Components/Add'
import ContextProvider from './Components/context/GlobalContext';
function App() {
  return (
    <Router>
      <ContextProvider>
      <Headers />
      <Routes>
        <Route path='/' element={<WatchList />} />
        <Route path='/watched' element={<Watched />} />
        <Route path='/add' element={<Add />} />
      </Routes>
      </ContextProvider>
    </Router>

  )
}

export default App