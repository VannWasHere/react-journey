import './css/index.css'
import NavigationBar from './components/NavigationBar'
import {useState} from 'react'

const App = () => {
    const [getButtonClickValue, setButtonClickValue] = useState("");
    const [getCounter, setCounter] = useState(0);
    const listButton = ['Add Counter', 'Reset Counter', 'Min Counter'];

    const changeNavTitle = () => {
        setButtonClickValue("My React Journey")
    }

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

    return(
        <>
            <NavigationBar name={"Justine Donovan"} navTitle={getButtonClickValue}/>
            <main className='mt-8 p-5'>
                <button className='bg-slate-800 text-white p-2 w-40 rounded-lg transition-all hover:bg-slate-600'
                onClick={() => changeNavTitle()}>Click Me</button>
                <hr />

                <p id='counter' className='mt-2 mb-3 text-center'>{getCounter}</p>
                <div className="flex justify-center">
                    {listButton.map((item, index) => (
                        <button key={index} 
                        className='outline ml-6 bg-zinc-600 text-white p-2 rounded-lg' 
                        onClick={() => (index == 0 ? addCounterValue() : index == 1 ? resetCounter() : minCounterValue() )}>{item}</button>
                    ))}
                </div>
            </main>
        </>
    );
}

export default App;