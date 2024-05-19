import React from "react";

interface ButtonProps {
    text: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: () => void; 
}

const Button: React.FC<ButtonProps> = ({ text, type = "button", disabled = false, onClick }) => {
    return (
        <div className='Button'>
            <button
                onClick={onClick}
                type={type}
                disabled={disabled}
                className="block text-center w-full bg-[#02274F] text-[#FAFAFA] font-[700] text-[16px] py-[14px] rounded-lg focus:outline-none focus:shadow-outline"
            >
                {text}
            </button>
        </div>
    );
};

export default Button;
