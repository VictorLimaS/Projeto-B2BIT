import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

import Home from './pages/Home';
import Login from './pages/Login';


export function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Login/>}/>
                <Route path='/home' element={
                    <PrivateRoute>
                        <Home/>
                    </PrivateRoute>
                }/>
            </Routes>
        </BrowserRouter>
    )
}

