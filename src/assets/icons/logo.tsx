import { SVGProps } from "react";

const LogoIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="18.5" cy="18.5" r="18.5" fill="currentColor"/>
        <path d="M22.9024 11.7922H17.0298C15.3729 11.7922 14.0298 13.1354 14.0298 14.7922V23.0746C14.0298 24.7314 15.3729 26.0746 17.0298 26.0746H22.9024" stroke="url(#paint0_linear_934_1087)" strokeWidth="2" strokeLinecap="round"/>
        <path d="M17.5183 18.9334H22.1372" stroke="url(#paint1_linear_934_1087)" strokeWidth="2" strokeLinecap="round"/>
        <defs>
        <linearGradient id="paint0_linear_934_1087" x1="18.4661" y1="11.7922" x2="18.4661" y2="26.0746" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="#C98EFF"/>
        </linearGradient>
        <linearGradient id="paint1_linear_934_1087" x1="19.8278" y1="18.9334" x2="19.8278" y2="19.9334" gradientUnits="userSpaceOnUse">
        <stop stopColor="white"/>
        <stop offset="1" stopColor="#C98EFF"/>
        </linearGradient>
        </defs>
    </svg>
)

export default LogoIcon;