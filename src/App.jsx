import './css/index.css'
import NavigationBar from './components/NavigationBar'
import {useState} from 'react'

const App = () => {
    const [getButtonClickValue, setButtonClickValue] = useState("");

    const changeNavTitle = () => {
        setButtonClickValue("My React Journey")
    }


    return(
        <>
            <NavigationBar name={"Justine Donovan"} navTitle={getButtonClickValue}/>
            <main className='mt-8 p-5'>
                <button className='bg-slate-800 text-white p-2 w-40 rounded-lg transition-all hover:bg-slate-600'
                onClick={() => changeNavTitle()}>Click Me</button>
                <hr />

            </main>
        </>
    );
}

export default App;