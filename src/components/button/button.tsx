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
        primary: "",
        secondary: "hover:bg-primary/[0.09] border border-gray-500/[0.7] text-black dark:text-white",
        tertiary: "bg-gray-500/[0.09] hover:bg-primary/[0.2] border border-gray-500/[0.09] ",
        ghost: "bg-gray-500/[0.07] hover:bg-primary/[0.5] border border-gray-500/[0.07] "
    }

    return (
       <>
            { 
            href ? 
                <Link role="button" href={href} className={`rounded-[6px] flex flex-col justify-center gap-[2px] w-fit ${variants[variant || "primary"]} 
                    ${disabled ? "opacity-[0.25]" : ""} 
                    ${size === "small" ? "md:text-[12px] text-[10px] py-[2px]" : size === "large" ? "py-[16px]" : "py-[8px]"} 
                    ${className} 
                     `}> 
                    { children }
                    <span className="w-[75%] h-[2px] bg-primary relative"></span>
                </Link>

                : <button className={`rounded-[6px] duration-500 flex flex-col justify-center gap-[2px] w-fit
                    ${variants[variant || "primary"]} 
                    ${disabled ? "opacity-[0.25]" : ""} 
                    ${size === "small" ? "md:text-[12px] text-[10px] py-[2px]" : size === "large" ? "py-[16px]" : "py-[8px]"} 
                    ${className} 
                `}
                {...props}
                name="Button"
                role="button"
                disabled={disabled}
                onClick={onClick}
                >
                { children }
                    <span className="w-[75%] h-[2px] bg-primary relative"></span>
                </button>
        }
    </>
    )
}