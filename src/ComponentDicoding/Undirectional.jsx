import { useState } from "react";

const Undirectional = () => {
    const names = ['Justine', 'Donovan', 'Ilham', 'Kurniawan'];
    const [getContact, setContact] = useState("");

    const callContacts = (names) => {
        if(getContact == "") {
            setContact(
                <ul className="mt-2">
                    {names.map((item, key) => (
                        <li key={key}>{item}</li>
                    ))}
                </ul>
            );
        } else {
            setContact("")
        }
    }
    
    return (
        <div className="w-2/5 mt-5 p-10 border">
            <h2 className="font-bold">Undirectional Data Flow</h2>
            <hr className="mt-5"/>
            <h2 className="font-bold text-center">Daftar Mahasiswa</h2>
            <p>{getContact}</p>
            <button 
            className="bg-stone-700 p-3 text-white rounded-lg mt-2 w-full"
            onClick={() => callContacts(names)}>Click Me</button>
        </div>
    );
}

export default Undirectional;