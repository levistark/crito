import React from 'react'
import ReactDOM from 'react-dom/client'
import Articles from './views/Articles'
import './assets/css/main.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import Contact from './views/Contact'
import ArticleDetails from './views/ArticleDetails'
import { ArticleProvider } from './contexts/ArticleProvider'
import AutoScrollToTop from './components/functionality/AutoScrollToTop'
import NotFound from './views/NotFound'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <AutoScrollToTop />
      <ArticleProvider>
        <Routes>
          <Route path='*' element={<NotFound/>}/>
          <Route path='/' element={<Home />} />
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/articles' element={<Articles/>}/>
          <Route path='/articles/:id' element={<ArticleDetails/>}/>
        </Routes>
      </ArticleProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
