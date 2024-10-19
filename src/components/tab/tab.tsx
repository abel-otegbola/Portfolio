'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LinkHTMLAttributes } from "react";

interface tabProps extends LinkHTMLAttributes<HTMLLinkElement> {
    to: string;
    label: string;
}

export default function Tab ({ to, label }: tabProps) {
    const pathname = usePathname()

    return (
        <Link
            href={to}
            className={`flex items-center justify-center md:flex-row flex-col md:gap-1 gap-2 h-[32px] p-[8px_16px] hover:text-primary
                ${pathname === to ? "font-bold" : "font-light"}
            `}
        >
            <span className="md:inline">{label}</span>
        </Link>
    )
}