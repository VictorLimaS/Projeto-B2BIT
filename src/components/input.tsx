import React from "react";
import { Field, ErrorMessage } from 'formik';

interface InputProps {
    name: string;
    text: string;
    placeholderText: string;
    maxLength?: number;
}

const Input: React.FC<InputProps> = ({ name, text, placeholderText, maxLength }) => {
    const inputType = name === "password" ? "password" : "text";

    return (
        <div className="input-group flex flex-col gap-[9px] mb-[27px] relative">
            <div className="flex flex-col">
                <label htmlFor={name} className="text-[18px] font-[600] text-[#262626]">{text}</label>
                <div className="relative">
                    <Field
                        id={name}
                        name={name}
                        type={inputType}
                        maxLength={maxLength}
                        placeholder={placeholderText}
                        className="p-[18px] text-[16px] w-full border-none rounded-lg focus:outline-none bg-[#F1F1F1] text-[#999999]"
                    />
                    <ErrorMessage name={name} component="div" className="text-red-500 text-lg font-bold absolute top-[20px] right-[20px]" />
                </div>
            </div>
        </div>
    );
};

export default Input;
