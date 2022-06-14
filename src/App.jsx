import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Booking from './components/Booking/Booking';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

function App() {
    return ( 
        <div className = "App" >
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<Main/>}/>
                    <Route path='/booking' element={<Booking/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;