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
            { label ? <label htmlFor={name} className={`text-[10px] ${focus ? "text-primary" : ""}`}>{label}</label> : "" }

            <div className={`flex items-center gap-2 relative rounded-[4px] bg-[#1c1c1c] w-full h-[60px] border p-2 px-3 duration-500 
                ${error && !focus ? "border-red text-red " : "border-gray-500/[0.2]"}
                ${focus ? "border-primary dark:border-primary shadow-input-active" : ""}
                ${className}
            `}>
                <span className={!focus ? "opacity-[0.4]": "text-primary"}>{ leftIcon }</span>
                <input 
                    className={` p-1 w-full outline-none bg-transparent
                        ${className} 
                        ${disabled ? "opacity-[0.25]" : ""}
                    `}
                    name={name}
                    id={name}
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onFocus={() => setFocus(true)}
                    onBlur={() => setFocus(false)}
                    onChange={onChange}
                    { ...props }
                />

                { error && !focus ? <p className="absolute right-2 px-2 text-[12px] bg-white dark:bg-dark text-red backdrop-blur-sm">{error}</p> : "" }
            </div>
        </div>
    )
}