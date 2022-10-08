import React, { useState, useContext } from 'react'
import ContactContext from '../../context/contact/ContactContext'

import './css/contact_form.css'

const ContactForm = () => {
    const contactContext = useContext(ContactContext)
    const [contact, setContact] = useState({
        fullname: '',
        email: '',
        phone: '',
        type: 'personal'
    })
    const { fullname, email, phone, type } = contact

    const onChange = e => {
        setContact({ ...contact, [e.target.name]: e.target.value })
    }

    const onSubmit = (e) => {
        e.preventDefault();
        contactContext.addContact(contact)
        setContact({
            fullname: '',
            email: '',
            phone: '',
            type: 'personal'
        })
    }


    return (
        <form onSubmit={onSubmit} style={{ margin: '0 auto' }}>
            <h3 className='text-center'>ADD CONTACT</h3>
            <input className='input_field' type="text" name='fullname' placeholder='Name' value={fullname} onChange={onChange} />
            <input className='input_field' type="email" name='email' placeholder='Email' value={email} onChange={onChange} />
            <input className='input_field' type="text" name='phone' placeholder='Phone' value={phone} onChange={onChange} />
            <div className='mb-3'>
                <div>
                    <label>Contact Type</label>
                </div>
                <input type="radio" name='type' value='personal' checked={type === 'personal'} onChange={onChange} />{" "}Personal{" "}
                <input type="radio" name='type' value='professional' checked={type === 'professional'} onChange={onChange} />{"  "}Professional
            </div>
            <div className='d-grid gap-2'>
                <button type='submit' className='btn btn-dark'>ADD CONTACT</button>
            </div>
        </form>
    )
}

export default ContactForm