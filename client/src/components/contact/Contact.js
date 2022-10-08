import React, { useContext } from 'react'
import ContactContext from '../../context/contact/ContactContext'
import ContactItem from './ContactItem'

const Contact = () => {

    const contactContext = useContext(ContactContext)
    const { contacts } = contactContext

    return (
        <div>
            {contacts.map(contact => (
                <ContactItem key={contact.id} contact={contact} />
            ))}
        </div>
    )
}

export default Contact