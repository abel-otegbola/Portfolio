"use client";

import { SVGProps, useEffect, useRef } from "react";

const HeroBgMain = (props: SVGProps<SVGSVGElement>) => {
    const gradientRef = useRef<SVGRadialGradientElement>(null);

    useEffect(() => {
        const gradient = gradientRef.current;
        if (!gradient) return;

        let frameId = 0;
        let startTime = performance.now();
        let duration = 3000;
        let startX = 102.826;
        let startY = 113.5;
        let targetX = startX;
        let targetY = startY;

        const chooseTarget = () => {
            startX = targetX;
            startY = targetY;
            targetX = 55 + Math.random() * 110;
            targetY = 78 + Math.random() * 82;
            duration = 2800 + Math.random() * 3200;
            startTime = performance.now();
        };

        const animateGradient = (time: number) => {
            const progress = Math.min((time - startTime) / duration, 1);
            const easedProgress = progress * progress * (3 - 2 * progress);
            const x = startX + (targetX - startX) * easedProgress;
            const y = startY + (targetY - startY) * easedProgress;

            gradient.setAttribute(
                "gradientTransform",
                `matrix(-24.314 67.5 -146.678 -37.5591 ${x} ${y})`,
            );

            if (progress === 1) chooseTarget();
            frameId = requestAnimationFrame(animateGradient);
        };

        frameId = requestAnimationFrame(animateGradient);
        return () => cancelAnimationFrame(frameId);
    }, []);

    return (
    <svg width="316" height="233" viewBox="0 0 316 233" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
<g filter="url(#filter0_d_961_2364)">
<g clipPath="url(#clip0_961_2364)">
<rect x="28" y="20" width="256" height="184" rx="20" fill="currentColor"/>
<circle cx="43.5" cy="34" r="2.5" fill="#FF3737"/>
<circle cx="52.5" cy="34" r="2.5" fill="#FFCC00"/>
<circle cx="61.5" cy="34" r="2.5" fill="#15FF00"/>
<rect x="111.5" y="31" width="89" height="6" rx="3" fill="#848484" fillOpacity="0.2"/>
<path d="M246.812 33.0456V32.752C246.812 31.14 245.553 29.8333 244 29.8333C242.447 29.8333 241.188 31.14 241.188 32.752V33.0456C241.188 33.3979 241.087 33.7423 240.899 34.0355L240.438 34.7539C240.016 35.41 240.338 36.302 241.071 36.5095C242.989 37.0523 245.011 37.0523 246.929 36.5095C247.662 36.302 247.984 35.41 247.562 34.7539L247.101 34.0355C246.913 33.7423 246.812 33.3979 246.812 33.0456Z" stroke="#848484" strokeOpacity="0.2"/>
<path d="M242.125 36.9167C242.398 37.645 243.134 38.1667 244 38.1667C244.866 38.1667 245.602 37.645 245.875 36.9167" stroke="#848484" strokeOpacity="0.2" strokeLinecap="round"/>
<path d="M261.833 33.5833C261.833 32.012 261.833 31.2263 262.321 30.7382C262.81 30.25 263.595 30.25 265.167 30.25H266.833C268.405 30.25 269.19 30.25 269.678 30.7382C270.167 31.2263 270.167 32.012 270.167 33.5833V34.4167C270.167 35.988 270.167 36.7737 269.678 37.2618C269.19 37.75 268.405 37.75 266.833 37.75H265.167C263.595 37.75 262.81 37.75 262.321 37.2618C261.833 36.7737 261.833 35.988 261.833 34.4167V33.5833Z" stroke="#848484" strokeOpacity="0.2"/>
<path opacity="0.5" d="M267.25 37.75V30.25" stroke="#848484" strokeOpacity="0.2" strokeLinecap="round"/>
<rect width="254" height="32" transform="translate(29 47)" fill="#848484" fillOpacity="0.1"/>
<g clipPath="url(#clip1_961_2364)">
<path d="M42.6875 71.125C44.175 71.125 45.375 69.925 45.375 68.4375V65.75H42.6875C41.2 65.75 40 66.95 40 68.4375C40 69.925 41.2 71.125 42.6875 71.125Z" fill="#0ACF83"/>
<path d="M40 63.0625C40 61.575 41.2 60.375 42.6875 60.375H45.375V65.75H42.6875C41.2 65.75 40 64.55 40 63.0625Z" fill="#A259FF"/>
<path d="M40 57.6875C40 56.2 41.2 55 42.6875 55H45.375V60.375H42.6875C41.2 60.375 40 59.175 40 57.6875Z" fill="#F24E1E"/>
<path d="M45.375 55H48.0625C49.55 55 50.75 56.2 50.75 57.6875C50.75 59.175 49.55 60.375 48.0625 60.375H45.375V55Z" fill="#FF7262"/>
<path d="M50.75 63.0625C50.75 64.55 49.55 65.75 48.0625 65.75C46.575 65.75 45.375 64.55 45.375 63.0625C45.375 61.575 46.575 60.375 48.0625 60.375C49.55 60.375 50.75 61.575 50.75 63.0625Z" fill="#1ABCFE"/>
</g>
<rect x="64" y="60" width="89" height="6" fill="#848484" fillOpacity="0.2"/>
<g filter="url(#filter1_d_961_2364)">
<circle cx="269" cy="63" r="6" fill="#0059FF"/>
<circle cx="269" cy="63" r="5" stroke="currentColor" strokeWidth="2"/>
</g>
<g filter="url(#filter2_d_961_2364)">
<rect x="37" y="87" width="102" height="109" rx="10" fill="url(#paint0_radial_961_2364)" shapeRendering="crispEdges"/>
<rect x="38" y="88" width="100" height="107" rx="9" stroke="currentColor" strokeWidth="2" shapeRendering="crispEdges"/>
</g>
<g filter="url(#filter3_d_961_2364)">
<rect x="151" y="89" width="122" height="48" rx="4" fill="#848484" fillOpacity="0.1" shapeRendering="crispEdges"/>
<rect x="155" y="93" width="43" height="40" rx="4" fill="url(#paint1_linear_961_2364)"/>
<rect x="155.5" y="93.5" width="42" height="39" rx="3.5" stroke="#848484" strokeOpacity="0.12"/>
<rect x="206" y="106" width="34" height="4" fill="#848484" fillOpacity="0.2"/>
<rect x="206" y="116" width="55" height="4" fill="#848484" fillOpacity="0.2"/>
</g>
<rect x="149.5" y="87.5" width="4" height="4" fill="#848484" fillOpacity="0.1" stroke="#0059FF"/>
<rect x="149.5" y="134.5" width="4" height="4" fill="#848484" fillOpacity="0.1" stroke="#0059FF"/>
<rect x="270.5" y="134.5" width="4" height="4" fill="#848484" fillOpacity="0.1" stroke="#0059FF"/>
<rect x="270.5" y="87.5" width="4" height="4" fill="#848484" fillOpacity="0.1" stroke="#0059FF"/>
<path d="M153.5 89H270.5" stroke="#0059FF"/>
<path d="M154 137H271" stroke="#0059FF"/>
<path d="M151 92V134" stroke="#0059FF"/>
<path d="M273 92V134" stroke="#0059FF"/>
<g filter="url(#filter4_d_961_2364)">
<rect x="154" y="145" width="116" height="48" rx="8" fill="#848484" fillOpacity="0.1" shapeRendering="crispEdges"/>
<rect x="166" y="162" width="34" height="4" fill="#848484" fillOpacity="0.2"/>
<rect x="166" y="172" width="49" height="4" fill="#848484" fillOpacity="0.2"/>
<rect x="223" y="149" width="43" height="40" rx="4" fill="url(#paint2_linear_961_2364)"/>
<rect x="223.5" y="149.5" width="42" height="39" rx="3.5" stroke="#848484" strokeOpacity="0.12"/>
</g>
</g>
<rect x="28.5" y="20.5" width="255" height="183" rx="19.5" stroke="#8C8C8C" strokeOpacity="0.12"/>
</g>
<defs>
<filter id="filter0_d_961_2364" x="0" y="0" width="316" height="244" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="2" dy="10"/>
<feGaussianBlur stdDeviation="15"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_961_2364"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_961_2364" result="shape"/>
</filter>
<filter id="filter1_d_961_2364" x="253" y="51" width="32" height="32" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_961_2364"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_961_2364" result="shape"/>
</filter>
<filter id="filter2_d_961_2364" x="17" y="71" width="142" height="149" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="10"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_961_2364"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_961_2364" result="shape"/>
</filter>
<filter id="filter3_d_961_2364" x="136" y="78" width="152" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="7.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_961_2364"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_961_2364" result="shape"/>
</filter>
<filter id="filter4_d_961_2364" x="139" y="134" width="146" height="78" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
<feFlood floodOpacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dy="4"/>
<feGaussianBlur stdDeviation="7.5"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.06 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_961_2364"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_961_2364" result="shape"/>
</filter>
<radialGradient ref={gradientRef} id="paint0_radial_961_2364" cx="0" cy="0" r="1" gradientTransform="matrix(-24.314 67.5 -146.678 -37.5591 102.826 113.5)" gradientUnits="userSpaceOnUse">
<stop stopColor="#848484" stopOpacity="0.2"/>
<stop offset="0.470006" stopColor="#848484" stopOpacity="0.2"/>
<stop offset="0.690987" stopColor="#FFA807"/>
<stop offset="0.841346" stopColor="#B3419B"/>
<stop offset="1" stopColor="#1100FF"/>
</radialGradient>
<linearGradient id="paint1_linear_961_2364" x1="168.5" y1="102.5" x2="176.5" y2="133" gradientUnits="userSpaceOnUse" >
<stop stopColor="#F55CB0"/>
<stop offset="1" stopColor="#7B73E6"/>
</linearGradient>
<linearGradient id="paint2_linear_961_2364" x1="236.5" y1="158.5" x2="244.5" y2="189" gradientUnits="userSpaceOnUse">
<stop stopColor="#5CF578"/>
<stop offset="1" stopColor="#CCE673"/>
</linearGradient>
<clipPath id="clip0_961_2364">
<rect x="28" y="20" width="256" height="184" rx="20" fill="white"/>
</clipPath>
<clipPath id="clip1_961_2364">
<rect width="16" height="16" fill="white" transform="translate(37 55)"/>
</clipPath>
</defs>
</svg>
    );
};

export default HeroBgMain;