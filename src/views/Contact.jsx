import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import contactGraphic from '../assets/images/Showcase/Vector.svg'
import contactGraphic2 from '../assets/images/Showcase/Vector-2.svg'
import GoogleMaps from '../components/GoogleMaps'
import { Link } from 'react-router-dom'

const Contact = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [errorMessage, setErrorMessage] = useState({
        name: '',
        email: '',
        message: ''
    })
    const [validFields, setValidFields] = useState({
        name: false,
        email: false,
        message: false
    })
    const [validForm, setValidForm] = useState(false)
    const [submitMessage, setSubmitMessage] = useState('')


    const validateFields = (e) => {
        switch (e.target.name) {
            case 'name':
                if (name.length < 2) {
                    setErrorMessage({...errorMessage, name: 'Your name must be at least 2 characters'})
                    setValidFields({...validFields, name: false})
                } else {
                    setErrorMessage({...errorMessage, name: ''})
                    setValidFields({...validFields, name: true})
                }
                break
            
            case 'email':
                if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
                    setErrorMessage({...errorMessage, email: 'Your email must be valid'})
                    setValidFields({...validFields, email: false})
                } else {
                    setErrorMessage({...errorMessage, email: ''})
                    setValidFields({...validFields, email: true})
                }
                break
            
            case 'message':
                if (message.length < 10) {
                    setErrorMessage({...errorMessage, message: 'Your message should be more than 10 characters'})
                    setValidFields({...validFields, message: false})
                } else {
                    setErrorMessage({...errorMessage, message: ''})
                    setValidFields({...validFields, message: true})
                }   
        }
    }

    useEffect(() => {
        validateForm()
    }, [validFields])


    const validateForm = () => {
        if (!validFields.name || !validFields.email || !validFields.message) {
            validForm ? setValidForm(prev => !prev) : null
            return false
        }
        else {
            !validForm ? setValidForm(prev => !prev) : null
            return true
        }
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        const user = {name, email, message}
        const json = JSON.stringify(user)

        const result = await fetch('https://win23-assignment.azurewebsites.net/api/contactform', {
            method: 'post',
            headers: {
                'content-type': 'application/json',
            },
            body: json
        })
        switch (result.status) {
            case 200: 
                setSubmitMessage('Thanks for your message!')
                console.log(result)
                break
            case !200:
                setSubmitMessage('Something went wrong. Please contact our IT-department.')
                console.log(result)
                break
        }
    }

  return (
    <>
        <Header/>
        
        <section className="ctc-showcase">
            <div className="ctc-showcase-container container">
                <Link to="/">Home</Link>
                <Link to="/contact"><strong>Contact</strong></Link>
                <h1><strong>Let's Connect</strong></h1>
            </div>

            <img src={contactGraphic} alt="flow vector image" className="img-vector-thick"/>
            <img src={contactGraphic2} alt="flow vector image" className="img-vector-thin"/>
        </section>  

        <main className="main">
            <section className="contact-container container">
                <div className="grid-container">
                    <div className="grid-item">
                        <i className="fa-solid fa-location-dot"></i>
                        <div className="text-container">
                            <h5>Visit us</h5>
                            <address><p>Sveavägen 31 <br/>111 34 STOCKHOLM</p></address>
                        </div>
                    </div>
                    <div className="grid-item">
                        <i className="fa-solid fa-phone"></i>
                        <div className="text-container">
                            <h5>Call us</h5>
                            <address><p>+46 (8) 121 470 50 <br/>+46 (8) 121 470 51</p></address>
                        </div>
                    </div>
                    <div className="grid-item">
                        <i className="fa-light fa-envelope"></i>
                        <div className="text-container">
                            <h5>Email us</h5>
                            <address><p>info@crito.com <br/>support@crito.com</p></address>
                        </div>
                    </div>
                </div>

                <div className="form-container">
                    <h2>Leave us a message <br/>for any information.</h2>
                    <form action="#" onSubmit={(handleSubmit)}>
                        <input type="text" placeholder="Name*" name='name' required value={name} onKeyUp={validateFields} onChange={(e) => setName(e.target.value)}/>
                        <small className='mx-4 mt-3 text-danger text-start'>{errorMessage.name}</small>
                        <input type="email" placeholder="Email*" name='email' required value={email} onKeyUp={validateFields} onChange={(e) => setEmail(e.target.value)}/>
                        <small className='mx-4 mt-3 text-danger text-start'>{errorMessage.email}</small>
                        <input type="text" placeholder="Your Message*" name='message' required value={message} onKeyUp={validateFields} onChange={(e) => setMessage(e.target.value)}/>
                        <small className='mx-4 mt-3 text-danger text-start'>{errorMessage.message}</small>
                        <button type="submit" className={`${validForm ? 'enabled' : ''}`} disabled={!validForm}>Send Message<i className="fa-solid fa-arrow-right"></i></button>
                        <h6 className='mt-5' name='submitMessage'>{submitMessage}</h6>
                    </form>
                </div>
            </section>
            <GoogleMaps/>
        </main>

        <Footer/>
    </>
  )
}

export default Contact