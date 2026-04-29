import Link from "next/link";
import { ReactNode, ButtonHTMLAttributes } from "react";

export interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tertiary" | "ghost";
    className?: string;
    href?: string;
    size?: "small" | "medium" | "large";
    disabled?: boolean,
    onClick?: () => void,
    children?: ReactNode,
    target?: string
}

export default function Button({ variant, className, href, size, disabled, onClick, children, target, ...props }: buttonProps) {
    const variants = {
        primary: "bg-primary hover:bg-primary/90 text-white border border-primary",
        secondary: "hover:bg-primary/9 border border-gray-500/20 text-black dark:text-white",
        tertiary: "bg-gray-500/9 hover:bg-primary/20 border border-gray-500/9 ",
        ghost: "bg-gray-500/[0.07] hover:bg-primary/50 border border-gray-500/[0.07] "
    }

    return (
       <>
            { 
            href ? 
                <Link role="button" href={href} target={target} className={`rounded flex flex-col justify-center text-[14px] gap-[2px] w-fit ${variants[variant || "primary"]} 
                    ${disabled ? "opacity-[0.25]" : ""} 
                    ${size === "small" ? "text-[12px] py-[2px] px-[8px]" : size === "large" ? "py-[16px] px-[24px]" : "py-[8px] px-[12px]"} 
                    ${className} 
                     `}> 
                    { children }
                </Link>

                : <button className={`rounded duration-500 flex flex-col justify-center text-[14px] gap-[2px] w-fit
                    ${variants[variant || "primary"]} 
                    ${disabled ? "opacity-[0.25]" : ""} 
                    ${size === "small" ? "text-[12px] py-[2px] px-[8px]" : size === "large" ? "py-[16px] px-[24px]" : "py-[8px] px-[12px]"} 
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