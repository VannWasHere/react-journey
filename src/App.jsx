import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './css/index.css'
import Home from './Pages/Home';
import Counter from './Pages/Counter';
import Profile from './Pages/Profile';
import NavigationBar from './components/NavigationBar';
import Dicoding from './Pages/Dicoding';

const App = () => {
    return(
        <>
        <Router>
            <NavigationBar name={"Justine Donovan"}/>
            <main className='p-6'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/counter' element={<Counter />}/>
                    <Route path='/profile' element={<Profile />}/>
                    <Route path='/dicoding' element={<Dicoding />}/>
                </Routes>
            </main>
        </Router>
        </>
    );
}

export default App;