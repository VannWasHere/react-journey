import ContactForm from './ContactForm'
import ListContact from './ListContact';
import {getData} from '../Data/data'
import { useState } from 'react';
import PropTypes from 'prop-types';

const AddContact = () => {
    const [containData, setContainData] = useState(getData);
    
    // Callback function to uodate the state with new data
    const contactUpdateHandler = (updatedContact) => {
        return setContainData(updatedContact);
    };

    return (
        <div className="mt-7 border p-4">
            <h1 className="text-3xl font-bold tracking-wider">Contact Appliaction</h1>
            <ContactForm contact={containData} onContactUpdate={contactUpdateHandler}/>
            <ListContact contact={containData} onContactUpdate={contactUpdateHandler}/>
        </div>
    );
}

AddContact.propTypes = {
    containData: PropTypes.array,
}

export default AddContact;