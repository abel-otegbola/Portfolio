import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

export interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tertiary" | "ghost";
    className?: string;
    href?: string;
    size?: "small" | "medium" | "large";
    disabled?: boolean,
    onClick?: () => void,
    children?: ReactNode
}

export default function Button({ variant, className, href, size, disabled, onClick, children, ...props }: buttonProps) {
    const variants = {
        primary: "hover:bg-[#000]/[0.8] dark:border border-gray-500/[0.4] bg-[#000] text-white dark:text-gray-200 shadow-lg",
        secondary: "hover:bg-primary/[0.09] border border-gray-500/[0.7] text-black dark:text-white",
        tertiary: "bg-gray-500/[0.09] hover:bg-primary/[0.2] border border-gray-500/[0.09] ",
        ghost: "bg-gray-500/[0.07] hover:bg-primary/[0.5] border border-gray-500/[0.07] "
    }

    return (
       <>
            { 
            href ? 
                <Link role="button" href={href} className={`rounded-[8px] flex items-center justify-center md:gap-3 gap-2 w-fit ${variants[variant || "primary"]} 
                    ${disabled ? "opacity-[0.25]" : ""} 
                    ${size === "small" ? "text-[10px] py-[2px] px-[12px]" : size === "large" ? "py-[16px] px-[32px]" : "text-[12px] py-[8px] px-[16px]"} 
                    ${className} 
                     `}> 
                    { children }
                </Link>

                : <button className={`rounded-[8px] duration-500 flex items-center justify-center md:gap-3 gap-2 w-fit
                    ${variants[variant || "primary"]} 
                    ${disabled ? "opacity-[0.25]" : ""} 
                    ${size === "small" ? "text-[10px] py-[2px] px-[12px]" : size === "large" ? "py-[16px] px-[32px]" : "py-[8px] px-[16px]"} 
                    ${className} 
                `}
                {...props}
                name="Button"
                role="button"
                disabled={disabled}
                onClick={onClick}
                >
                { children }
                </button>
        }
    </>
    )
}