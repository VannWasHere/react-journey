import { useState } from "react";

const Counter = () => {
    const [getCounter, setCounter] = useState(0);
    const listButton = ['Add Counter', 'Reset Counter', 'Min Counter'];
    const addCounterValue = () => {
        setCounter(getCounter + 1)
    }

    const minCounterValue = () => {
        if(!getCounter == 0) {
            setCounter(getCounter - 1)
        } else {
            setCounter(0)
        }
    }

    const resetCounter = () => {
        setCounter(0);
    }
    return (
        <>
            <p id='counter' className='mt-10 text-center text-5xl'>{getCounter}</p>
            <div className="flex justify-center p-2">
                {listButton.map((item, index) => (
                    <button key={index} 
                    className='outline bg-zinc-600 m-3 text-white p-2 rounded-lg w-3/4 h-40 transition-all hover:bg-zinc-400' 
                    onClick={() => (index == 0 ? addCounterValue() : index == 1 ? resetCounter() : minCounterValue() )}>{item}</button>
                ))}
            </div>
        </>
    );
}

export default Counter;