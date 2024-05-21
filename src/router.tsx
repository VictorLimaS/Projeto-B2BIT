import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './pages/Home';
import Login from './pages/Login';

export function Router() {
    const [redirect, setRedirect] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            setRedirect(false);
        } else {
            setRedirect(true);
        }
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={redirect ? <Navigate to="/home" /> : <Login />} />
                <Route path='/home' element={redirect ? <Home /> : <Navigate to="/" />} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </BrowserRouter>
    );
}
