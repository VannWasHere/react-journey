import ContactForm from './ContactForm'
import ListContact from './ContactContainer';

const AddContact = () => {
    return (
        <div className="mt-7 border p-4">
            <h1 className="text-3xl font-bold tracking-wider">Contact Appliaction</h1>
            <ContactForm />
            <ListContact />
        </div>
    );
}

export default AddContact;