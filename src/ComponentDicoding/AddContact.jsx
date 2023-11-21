import ContactForm from './ContactForm'
import ListContact from './ListContact';
import {getData} from '../Data/data'


const AddContact = () => {
    const containData = getData();
    console.log(containData);
    return (
        <div className="mt-7 border p-4">
            <h1 className="text-3xl font-bold tracking-wider">Contact Appliaction</h1>
            <ContactForm />
            <ListContact contact={containData}/>
        </div>
    );
}

export default AddContact;