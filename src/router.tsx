import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import { useEffect, useState } from 'react';


export function Router() {
    let token = localStorage.getItem('token');
    const [redirect, setRedirect] = useState(false)

    useEffect(() => {
        if (!token) {
            setRedirect(false);
        }
        else {
            setRedirect(true);
        }
    }, [token])

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={redirect ? <Navigate to="/home" />:<Login />} />
                <Route path='/home' element={
                    redirect ? <Home /> : <Navigate to="/" />
                } />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    )
}

