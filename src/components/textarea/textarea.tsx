'use client'

import { ReactNode, useState, TextareaHTMLAttributes } from "react";

interface inputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    className?: string;
    disabled?: boolean;
    label?: string;
    name?: string;
    value?: string | number;
    error?: string | undefined;
    placeholder?: string;
    leftIcon?: ReactNode;
}

export default function Textarea({ className, disabled, label, name, value, onChange, error, placeholder, leftIcon, ...props }: inputProps) {
    const [focus, setFocus] = useState(false)

    return (
        <div className="flex flex-col w-full gap-1">
            { label ? <label htmlFor={name} className={`text-[10px] ${focus ? "text-primary" : ""}`}>{label}</label> : "" }

            <div className={`flex items-start relative rounded bg-[#1C1C1C] w-full border p-2 px-1 duration-500 
                ${error && !focus ? "border-red text-red " : "border-gray-500/[0.2]"}
                ${focus ? "border-primary dark:border-primary shadow-input-active" : ""}
                ${className}
            `}>
                <span className={`${!focus ? "opacity-[0.4]": "text-primary"} p-2`}>{ leftIcon }</span>
                <textarea 
                    className={` p-1 w-full outline-none bg-transparent h-[100px]
                        ${className} 
                        ${disabled ? "opacity-[0.25]" : ""}
                    `}
                    name={name}
                    id={name}
                    value={value}
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={onChange}
                    { ...props }
                ></textarea>
            </div>
        </div>
    )
}