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
            <p id='counter' className='mt-2 mb-3 text-center'>{getCounter}</p>
            <div className="flex justify-center">
                {listButton.map((item, index) => (
                    <button key={index} 
                    className='outline ml-6 bg-zinc-600 text-white p-2 rounded-lg' 
                    onClick={() => (index == 0 ? addCounterValue() : index == 1 ? resetCounter() : minCounterValue() )}>{item}</button>
                ))}
            </div>
        </>
    );
}

export default Counter;