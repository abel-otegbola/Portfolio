'use client'
import { useRouter } from "next/navigation";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface buttonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "tetiary";
    className?: string;
    href?: string;
    size?: "full";
    disabled?: boolean,
    onClick?: () => void,
    children?: ReactNode
}

export default function Button({ variant, className, href, size, disabled, onClick, children, ...props }: buttonProps) {
    const router = useRouter()
    const variants = {
        primary: "bg-primary text-white focus:bg-primary/[0.8] hover:bg-primary/[0.8] dark:hover:",
        secondary: "bg-white dark:bg-black text-primary focus:bg-tetiary dark:bg-gray/[0.08] hover:bg-tetiary  dark:focus:bg-gray/[0.2] dark:hover:bg-gray/[0.2] border border-primary",
        tetiary: "bg-white dark:bg-dark text-dark dark:text-gray focus:bg-tetiary dark:bg-gray/[0.08] hover:bg-tetiary dark:focus:bg-gray/[0.2] dark:hover:bg-gray/[0.2] border border-gray/[0.5] dark:border-gray/[0.04]"
    }

    return (
        <button className={`rounded-[4px] h-[40px] p-[12px_32px] flex items-center justify-center
            ${variants[variant || "primary"]}
            ${disabled ? "opacity-[0.25]" : ""}
            ${size === "full" ? "w-full" : "w-fit"}
            ${className} 
        `}
        {...props}
        disabled={disabled}
        onClick={() => href ? router.push(href) : onClick? onClick() : ""}
        >
            { children }
        </button>
    )
}