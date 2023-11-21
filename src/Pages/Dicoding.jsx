import Undirectional from "../ComponentDicoding/Undirectional";
import News from '../componentDicoding/News'

const Dicoding = () => {

    return (
        <>
            <h1 className="text-center text-3xl tracking-wider uppercase font-bold">Halo ini dicoding</h1>
            <hr className="mt-4 text-black"/>

            <div className="flex space-x-36">
                <Undirectional />
                <News />
            </div>
        </>
    );
}

export default Dicoding;