import React, { useContext } from 'react'
import ContactContext from '../../context/contact/ContactContext'

const ContactItem = ({ contact }) => {
    const { id, fullname, email, phone, type } = contact
    const contactContext = useContext(ContactContext)

    const handleDelete = () => {
        contactContext.deleteContact(id)
    }

    const handleEdit = () => {
        contactContext.setCurrentContact(id)
    }

    return (
        <div style={cardStyle}>
            <h6 style={{ display: 'inline', color: 'blue', marginBottom: '1rem' }}>{fullname.toUpperCase()}</h6>
            <span className={`badge text-bg-${type === 'personal' ? 'success' : 'primary'}`} style={typeStyle}>{type}</span>
            <p><i className="fa-solid fa-envelope"></i> {email}</p>
            <p><i className="fa-sharp fa-solid fa-phone"></i>{phone}</p>
            <div>
                <button className='btn btn-dark me-2' onClick={handleEdit}>Edit</button>
                <button className='btn btn-danger' onClick={handleDelete}>Delete</button>
            </div>
        </div>
    )
}

// css style

const typeStyle = {
    float: 'right',
    padding: '0.2rem 0.5rem'
}

const cardStyle = {
    border: '1px solid gray',
    padding: '1rem',
    margin: '1rem'
}
export default ContactItem