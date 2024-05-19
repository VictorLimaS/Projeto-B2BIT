import React from "react";
import { Formik, Form } from 'formik';
import { LoginSchema } from '../validation/LoginSchema';
import Input from "./input";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
import toast from "react-hot-toast";
import logoImg from "../assets/img/B2Bit Logo.png"; 

const CardLogin: React.FC = () => {
    const navigate = useNavigate();
    const headers = {
        'Accept': 'application/json;version=v1_web',
        'Content-Type': 'application/json',
    };

    interface FormValues {
        email: string;
        password: string;
    }

    async function handleSubmit(values: FormValues){
        try {
            const res = await axios.post('https://api.homologation.cliqdrive.com.br/auth/login/', values, { headers });
            localStorage.setItem('token', res.data.tokens.access);
            localStorage.setItem('refreshToken', res.data.tokens.refresh);
            navigate('/home');
        } catch (error) {
            toast.error('Credenciais Inválida');
        }
    }

    return (
        <Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
        >
            {({ isSubmitting }) => (
                <div className="CardLogin">
                    <Form>
                        <div className="bg-[#FFFFFF] rounded-2xl p-padding shadow-3x1 w-[438px] h-[534px]">
                            <img src={logoImg} alt="Logo" className="w-[309.6px] mx-auto mb-[35px]" />
                            <Input name="email" placeholderText="@gmail.com" text="Email" />
                            <Input name="password" placeholderText="****************" text="Password" maxLength={10} />
                            <Button type="submit" text="Sign In" disabled={isSubmitting} />
                        </div>
                    </Form>
                </div>
            )}
        </Formik>
    );
};

export default CardLogin;
