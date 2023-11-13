import React from 'react'
import brand1 from '../../assets/images/Brands/brand1.png'
import brand2 from '../../assets/images/Brands/brand2.png'
import brand3 from '../../assets/images/Brands/brand3.png'
import brand4 from '../../assets/images/Brands/brand4.png'
import brand5 from '../../assets/images/Brands/brand5.png'

const Brands = () => {
  return (
    <>
        <section className="container brands">
            <img src={brand1} alt="Brands we've worked with"/>
            <img src={brand2} alt="Brands we've worked with"/>
            <img src={brand3} alt="Brands we've worked with"/>
            <img src={brand4} alt="Brands we've worked with"/>
            <img src={brand5} alt="Brands we've worked with"/>
        </section>
    </>
  )
}

export default Brands