import Button from '../components/Button';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

const ContactForm = ({ contact, onContactUpdate }) => {
    const [getContact, setGetContact] = useState(contact);
    const [name, setName] = useState('');
    const [tag, setTag] = useState('');

    useEffect(() => {
        setGetContact(contact);
    }, [contact]);

    const buttonClicked = () => {
        const objInserted = {
        id: +new Date(),
        name: name,
        tag: tag,
        imageUrl: '/src/img/images.jpg',
        };

        // Update the state using setGetContact function
        setGetContact([...getContact, objInserted]);

        // Update the parent state using the onContactUpdate callback
        onContactUpdate([...getContact, objInserted]);

        // Clear the form inputs
        setName('');
        setTag('');
    };

    return (
        <div className="w-full p-2">
        <h2 className="text-lg mt-3 mb-3 text-center">Add Contact</h2>
        <div className="p-3">
            <input
            type="text"
            placeholder="Input Name"
            className="w-full p-2 bg-neutral-600 rounded-lg text-white placeholder:text-white"
            value={name}
            required
            onChange={(e) => setName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Input Tag"
            className="w-full p-2 bg-neutral-600 rounded-lg mt-4 text-white placeholder:text-white"
            value={tag}
            required
            onChange={(e) => setTag(e.target.value)}
            />
            <Button onClick={buttonClicked} buttonText="Add Name" />
        </div>
        <hr className="mt-3" />
        </div>
    );
};

ContactForm.propTypes = {
  contact: PropTypes.array,
  onContactUpdate: PropTypes.func,
};

export default ContactForm;
