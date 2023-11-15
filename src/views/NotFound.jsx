import React from 'react'
import Header from '../components/general/Header'
import Footer from '../components/general/Footer'

const NotFound = () => {
  return (
    <>
        <Header/>
        <div>
            <h2 className='text-center p-5'>404 Not Found</h2>
        </div>
        <Footer/> 
    </>
  )
}

export default NotFound