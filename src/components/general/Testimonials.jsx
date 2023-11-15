import React from 'react'
import clientImage1 from '../../assets/images/Workplace/Compressed/Clients/1st.jpg'
import clientImage2 from '../../assets/images/Workplace/Compressed/Clients/2nd.jpg'
import clientImage3 from '../../assets/images/Workplace/Compressed/Clients/3rd.jpg'
import Testimonial from './Testimonial'

const Articles = ({h2, h4}) => {
  return (
    <>
        <section className="testimonials">
            <div className="white-box">
                <div className="testimonials-container container">
                    <h4>{h4}</h4>
                    <h2>{h2}</h2>
                    <div className="grid-container">
                        <Testimonial 
                            name='Cassandra Warren' 
                            position='Business Manager, Dorfus' 
                            imgUrl={clientImage1} 
                            imgAlt='Client Cassandra Warren, Business Manager, Dorfus' 
                            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate'
                        />
                        <Testimonial 
                            name='Amanda Tulling' 
                            position='Senior Developer, Square' 
                            imgUrl={clientImage2} 
                            imgAlt='Client Amanda Tulling, Senior Developer, Square' 
                            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate'
                        />
                        <Testimonial 
                            name='Jack McDogglas' 
                            position='Key Account Manager, Gobona' 
                            imgUrl={clientImage3} 
                            imgAlt='Client Jack McDogglas, Key Account Manager, Gobona' 
                            text='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate'
                        />
                    </div>
                    <button className="btn-reviews">All Reviews<i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Articles