import React from 'react';
import { Routes, Route } from "react-router-dom"
import "./index.css";
import Home from "../src/pages/Home/Home"
import Login from "../src/pages/login/Login"
import Signup from "../src/pages/signup/Signup"
import { Toaster } from "react-hot-toast"


function App() {
    return (
        <>
            <Toaster />
            <div className='p-4 h-screen flex items-center justify-center'>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </div>
        </>
    )
}

export default App