import Button from '../components/Button'

const ContactForm = () => {

    const buttonClicked = () => {

    }

    return(
        <div className="w-full p-2">
            <h2 className="text-lg mt-3 mb-3 text-center">Add Contact</h2>
            <div className="p-3">
                <input type="text" placeholder="Input Name" className="w-full p-2 bg-neutral-600 rounded-lg text-white placeholder:text-white"/>
                <input type="text" placeholder="Input Tag" className="w-full p-2 bg-neutral-600 rounded-lg mt-4 text-white placeholder:text-white"/>
                <Button onClick={() => buttonClicked()} buttonText={"Add Name"}/>
            </div> 
        <hr className="mt-3"/>
        </div>
    );
};

export default ContactForm;