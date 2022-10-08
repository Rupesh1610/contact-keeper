import React, { useReducer } from "react";
import uuid from 'uuid'
import ContactContext from './ContactContext'
import ContactReducer from './ContactReducer'

import {
    ADD_CONTACT,
    DELETE_CONTACT,
    SET_CURRENT,
    CLEAR_CURRENT,
    UPDATE_CONTACT,
    FILTER_CONTACT,
    CLEAR_FILTER,
    SET_ALERT,
    REMOVE_ALERT
} from '../Types'

const ContactState = props => {
    const initialState = {
        contacts: [
            {
                id: 0,
                fullname: 'jull johnson',
                email: 'jull@gmail.com',
                phone: '111-111-1111',
                type: 'personal'
            },
            {
                id: 1,
                fullname: 'sara watson',
                email: 'saral@gmail.com',
                phone: '111-111-1112',
                type: 'personal'
            },
            {
                id: 2,
                fullname: 'marry white',
                email: 'jmart@gmail.com',
                phone: '111-111-1113',
                type: 'professional'
            }
        ]
    }

    const [state, dispatch] = useReducer(ContactReducer, initialState);

    //add contact
    const addContact = (contact) => {
        dispatch({ type: ADD_CONTACT, payload: contact })
    }

    //delete contact
    const deleteContact = (id) => {
        dispatch({ type: DELETE_CONTACT, payload: id })
    }

    //set current contact
    const setCurrentContact = (id) => {
        dispatch({ type: SET_CURRENT, payload: id })
    }

    //clear current contact

    //update contact

    //filter contact

    //clear filter

    return (
        <ContactContext.Provider value={{ contacts: state.contacts, addContact, deleteContact, setCurrentContact }}>
            {props.children}
        </ContactContext.Provider>
    )
}

export default ContactState;