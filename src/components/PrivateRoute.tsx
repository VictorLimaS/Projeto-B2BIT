import { ReactNode } from "react";
import { Navigate } from "react-router";

interface Props{
    children: ReactNode
}

export function PrivateRoute({children}:Props) {
    const user = true;

    return user ? children : <Navigate to='/'/>
}