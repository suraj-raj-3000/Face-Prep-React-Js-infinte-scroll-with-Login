import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import useToken from './components/App/useToken';
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'

import './App.css'

function App() {
const { token, setToken } = useToken();

//   if(!token) {
//     return <LoginPage setToken={setToken}/>
//   }

    return (
        <BrowserRouter>
            <div>
                <Routes>
                    <Route exact path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage/> } />
                    <Route path="/forget-password" component={ <ForgetPasswordPage/> } />
                    <Route path="/home" element={ <HomePage/> } />
                    <Route path='/*' element={<HomePage />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}

export default App;

