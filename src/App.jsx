import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './css/index.css'
import Home from './Pages/Home';
import Counter from './Pages/Counter';
import Profile from './Pages/Profile';
import NavigationBar from './components/NavigationBar';

const App = () => {
    return(
        <>
        <Router>
            <NavigationBar />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/counter' element={<Counter />}/>
                <Route path='/profile' element={<Profile />}/>
            </Routes>
        </Router>
        </>
    );
}

export default App;