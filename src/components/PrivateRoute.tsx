import { ReactNode, useEffect, useState } from "react";

interface Props {
    children: ReactNode;
}

export function PrivateRoute({ children }: Props) {
    const [user, setUser] = useState<boolean>(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setUser(!!token);
    }, []);
    
    return user ? <>{children}</> : <div>Loading...</div>;
}
