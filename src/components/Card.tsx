import Button from './Button';

interface CardProps { }

const Card: React.FC<CardProps> = () => {
    return (
        <div className="bg-[#FFFFFF] rounded-2xl p-padding shadow-3x1 w-[438px] h-[534px]">
            <img src="../src/assets/img/B2Bit Logo.png" alt="Logo" className="w-[309.6px] mx-auto mb-[35px]" />
            <div className="flex flex-col">
                <div className="input-group flex flex-col gap-[9px] mb-[27px]">
                    <label className=" text-[18px] font-[600] text-[#262626]">E-mail</label>
                    <input
                        type="email"
                        placeholder="@gmail.com"
                        className="p-[18px] text-[16px] w-full border-none rounded-lg focus:outline-none bg-[#F1F1F1] text-[#999999]"
                    />
                </div>
                <div className="input-group flex flex-col gap-[9px] mb-[36px]">
                    <label className="text-[18px] font-[600] text-[#262626]">  Password</label>
                    <input
                        type="password"
                        placeholder="****************"
                        className="p-[18px] text-[16px] w-full border-none rounded-lg focus:outline-none bg-[#F1F1F1] text-[#999999]"
                    />
                </div>
                <Button to="/Home" text="Sign In" />
            </div>
        </div>

    );
};

export default Card;
