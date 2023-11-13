import React from 'react'
import clientImage1 from '../../assets/images/Workplace/Compressed/Clients/1st.jpg'
import clientImage2 from '../../assets/images/Workplace/Compressed/Clients/2nd.jpg'
import clientImage3 from '../../assets/images/Workplace/Compressed/Clients/3rd.jpg'

const Articles = () => {
  return (
    <>
        <section className="testimonials">
            <div className="white-box">
                <div className="testimonials-container container">
                    <h4>Testimonials</h4>
                    <h2>What Our Clients Says</h2>
                    <div className="grid-container">
                        <div className="grid-item">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <div className="title-container">
                                <div className="img-container">
                                    <img src={clientImage1} loading="lazy" alt="Client Cassandra Warren, Business Manager, Dorfus"/>
                                </div>
                                <div className="text-container">
                                    <h5>Cassandra Warren</h5>
                                    <p>Business Manager, Dorfus</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <div className="title-container">
                                <div className="img-container">
                                    <img src={clientImage2} loading="lazy" alt="Client Amanda Tulling, Senior Developer, Square"/>
                                </div>
                                <div className="text-container">
                                    <h5>Amanda Tulling</h5>
                                    <p>Senior Developer, Square</p>
                                </div>
                            </div>
                        </div>
                        <div className="grid-item">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium libero, ad dignissimos velit qui, dolorum obcaecati cum saepe nesciunt nemo eligendi numquam voluptate"</p>
                            <div className="title-container">
                                <div className="img-container">
                                    <img src={clientImage3} loading="lazy" alt="Client Jack McDogglas, Key Account Manager, Gobona"/>
                                </div>
                                <div className="text-container">
                                    <h5>Jack McDogglas</h5>
                                    <p>Key Account Manager, Gobona</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <button className="btn-reviews">All Reviews<i className="fa-solid fa-arrow-right"></i></button>
                </div>
            </div>
        </section> 
    </>
  )
}

export default Articles