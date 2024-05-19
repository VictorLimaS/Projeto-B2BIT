import { ReactNode, useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface Props {
    children: ReactNode;
}

export function PrivateRoute({ children }: Props) {
    const [user, setUser] = useState<boolean>(false);
    const location = useLocation();

    useEffect(() => {
        const token = localStorage.getItem('token');
        setUser(!!token);
    }, []);
    
    return user ? <>{children}</> : <div>Loading...</div>;
}
