import Button from '../components/Button'

const ContactForm = () => {
    return(
        <div className="w-full p-2">
            <h2 className="text-lg mt-3 mb-3 text-center">Add Contact</h2>
            <form className="p-3">
                <input type="text" placeholder="Input Name" className="w-full p-2 bg-neutral-600 rounded-lg text-white placeholder:text-white"/>
                <input type="text" placeholder="Input Tag" className="w-full p-2 bg-neutral-600 rounded-lg mt-4 text-white placeholder:text-white"/>
                <Button buttonText={"Add Name"}/>
            </form>
        <hr className="mt-3"/>
        </div>
    );
};

export default ContactForm;