import React from 'react'
import signupImage from '../../assets/images/Graphics/Element.png'

const Signup = ({h2}) => {
  return (
    <>
        <section className="signup">
            <div className="signup-container container">
                <h2>{h2}</h2>
                <form action="signup">
                    <input type="email" placeholder="username@domain.com"/>
                    <button type="submit" value="Subscribe">Subscribe<i className="fa-solid fa-arrow-right"></i></button>
                </form>
            </div>
            <img src={signupImage} loading="lazy" alt="graphic element"/>
        </section>
    </>
  )
}

export default Signup