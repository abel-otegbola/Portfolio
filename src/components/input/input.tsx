'use client'
import { InputHTMLAttributes, ReactNode, useState } from "react";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    disabled?: boolean;
    label?: string;
    name?: string;
    type?: string;
    value?: string | number;
    error?: string | undefined;
    placeholder?: string;
    leftIcon?: ReactNode;
}

export default function Input({ className, disabled, label, name, value, type, onChange, error, placeholder, leftIcon, ...props }: inputProps) {
    const [focus, setFocus] = useState(false)

    return (
        <div className="flex flex-col w-full gap-1">
            { label ? <label htmlFor={label} className={`text-[10px] ${focus ? "text-primary" : ""}`}>{label}</label> : "" }

            <div className={`flex items-center gap-2 relative rounded-[4px] dark:bg-[#1c1c1c] bg-transparent w-full h-[40px] border p-1 px-3 duration-500 
                ${error && !focus ? "border-red-500 text-red-500 " : "border-gray-500/[0.4]"}
                ${focus ? "border-primary dark:border-primary shadow-input-active" : ""}
                ${className}
                ${disabled ? "opacity-[0.5]  cursor-not-allowed" : ""}
            `}>
                <span className={!focus ? "opacity-[0.4]": "text-primary"}>{ leftIcon }</span>
                <input 
                    className={` p-1 w-full outline-none bg-transparent
                        ${className} 
                        ${disabled ? "cursor-not-allowed" : ""}
                    `}
                    name={name}
                    id={label}
                    type={type}
                    value={value}
                    disabled={disabled}
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={onChange}
                    { ...props }
                />

                { error && !focus ? <label htmlFor={label} className="absolute right-2 px-2 text-[12px] bg-white dark:bg-dark text-red-500 backdrop-blur-sm">{error}</label> : "" }
            </div>
        </div>
    )
}