import React from "react";
import Button from "./Button";


const Header: React.FC = () => {

    function handleLogout() {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.href = '/';
    }

    return (
        <div className='Header'>
            <div className="flex fixed top-0 left-0 w-full bg-white shadow-3x1 justify-end items-center h-[70px]">
                <div className="w-[272px] my-px mr-[34px]">
                    <Button text="Logout" onClick={handleLogout} />
                </div>
            </div>
        </div>
    );
};

export default Header;

