import React from 'react';
import "./index.css";
import Home from "./pages/Home/Home";
import Login from './pages/login/Login';
import Signup from "./pages/signup/Signup";

function App() {
    return (
        <>
            <div className='p-4 h-screen flex items-center justify-center'>
                
                <Home />

            </div>
        </>
    )
}

export default App