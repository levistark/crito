import React from 'react'
import ReactDOM from 'react-dom/client'
import Articles from './views/Articles'
import './assets/css/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/articles' element={<Articles/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
