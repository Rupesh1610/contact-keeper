import React from 'react'
import Contact from '../contact/Contact'
import ContactForm from '../contact/ContactForm'
// import './css/home.css'

const Home = () => {

    return (
        <div className='row home' style={{ width: '80%', margin: '2rem auto' }}>
            <div className='col-lg-6 col-md-12 home_form'>
                <ContactForm />
            </div>
            <div className='col-lg-6 col-md-12 home_list'>
                <Contact />
            </div>
        </div>
    )
}

export default Home