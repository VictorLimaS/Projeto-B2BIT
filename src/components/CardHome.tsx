import React, { useEffect, useState } from "react";
import Header from "./Header";
import { api } from "../api/axios";
import { IProfileResponse } from "../models/interface/response/IProfileResponse";

const CardHome: React.FC = () => {
    const [userProfile, setUserProfile] = useState<IProfileResponse | null>(null);
    const headers = {
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Accept': 'application/json;version=v1_web',
        'Content-Type': 'application/json',
    };

    async function handleGetProfile() {
        try {
            const response = await api.get('/auth/profile/', { headers });
            setUserProfile(response.data);
        } catch (error) {
            console.error('Error fetching profile:', error);
        }
    }

    useEffect(() => {
        handleGetProfile();
    }, []);

    return (
        <div className='CardHome'>
            <div className="flex flex-col items-center justify-center min-h-screen">
                <Header />
                <div className="bg-white rounded-2xl p-[30px] shadow-3x1 w-[356px] h-auto">
                    <p className="text-md mb-[9px] text-center text-[12px] text-[#2F2F2F]">Profile picture</p>
                    <div className="flex items-center justify-center mb-[30px]">
                        {userProfile && userProfile.avatar && (
                            <img src={userProfile.avatar.high} alt="Foto de perfil" className="rounded-lg w-[58px] h-[56px]" />
                        )}
                    </div>
                    <p className="text-[14px] mb-[8px] font-medium text-left text-[#262626] "><span className="font-normal">Your</span> Name</p>
                    <div className="mb-[20px]">
                        <span className="flex items-center p-[16px] font-[400] text-[12px] w-full h-[44px] border-none rounded-md bg-[#F4F4F4]">
                            {userProfile ? userProfile.name : 'Loading...'}
                        </span>
                    </div>
                    <p className="text-[14px] mb-[8px] font-medium text-left text-[#262626]"><span className="font-normal">Your</span> E-mail</p>
                    <div>
                        <span className="flex items-center p-[16px] font-[400] text-[12px] w-full h-[44px] border-none rounded-md shadow-sm bg-[#F4F4F4]">
                            {userProfile ? userProfile.email : 'Loading...'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardHome;
