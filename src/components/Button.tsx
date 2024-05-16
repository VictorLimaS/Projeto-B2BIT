import { Link } from 'react-router-dom';

interface ButtonProps {
    to: string;
    text: string;
}

const Button: React.FC<ButtonProps> = ({ to, text }) => {
    return (
        <Link
            to={to}
            className="block text-center w-full bg-[#02274F] text-[#FAFAFA] font-[700] text-[16px] py-[14px] rounded-lg focus:outline-none focus:shadow-outline"
        >            {text}
        </Link>
    );
};

export default Button;
