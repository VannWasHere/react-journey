import Undirectional from "../componentDicoding/Undirectional";
import News from '../componentDicoding/News'
import ContactApplication from '../componentDicoding/ContactApplication'

const Dicoding = () => {

    return (
        <>
            <h1 className="text-center text-3xl tracking-wider uppercase font-bold">Halo ini dicoding</h1>
            <hr className="mt-4 text-black"/>

            <div className="flex space-x-36 justify-between">
                <div className="flex w-full flex-col">
                    <Undirectional />
                    <ContactApplication />
                </div>
                <News />
            </div>
        </>
    );
}

export default Dicoding;