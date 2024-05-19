import React from "react";
import Header from "./Header";
import perfilImg from "./assets/img/perfil.png"; 

const CardHome: React.FC = () => {
    return (
        <div className='CardHome'>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Header />
                <div className="bg-white rounded-2xl p-[30px] shadow-3xl w-[356px] h-auto">
                    <p className="text-md mb-[9px] text-center text-[12px] text-[#2F2F2F]">Profile picture</p>
                    <div className="flex items-center justify-center mb-[30px]">
                        <img src={perfilImg} alt="Foto de perfil" className="rounded-lg w-[58px] h-[56px]" />
                    </div>
                    <p className="text-[14px] mb-[8px] font-medium text-left text-[#262626] "><span className="font-normal">Your</span> Name</p>
                    <div className="mb-[20px]">
                        <span className=" flex items-center p-[16px] font-[400] text-[12px] w-full h-[44px] border-none rounded-md bg-[#F4F4F4]">Victor Lima</span>
                    </div>
                    <p className="text-[14px] mb-[8px] font-medium text-left text-[#262626]"><span className="font-normal">Your</span> E-mail</p>
                    <div>
                        <span className="flex items-center p-[16px] font-[400] text-[12px] w-full h-[44px] border-none rounded-md shadow-sm bg-[#F4F4F4]">victor@gmail.com</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardHome;
