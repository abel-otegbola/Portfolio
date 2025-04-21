import { useIsVisible } from "@/helpers/isVisible";
import { ReactNode, useEffect, useRef, useState } from "react"

interface AnimateProps {
    type?: "slideUp" | "slideDown" | "slideLeft" | "slideRight" | "blurIn" | "zoomIn" | "blurIn2"
    duration?: number,
    delay?: number,
    children: ReactNode
}

export default function Animate({ type, duration, delay, children }: AnimateProps) {
    const ref1 = useRef<HTMLDivElement>(null)
    const isVisible = useIsVisible(ref1);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        if (isVisible && !hasAnimated) {
            setHasAnimated(true); // Lock the animation state
        }
    }, [isVisible, hasAnimated]);

    const animationStart = type === "slideUp" ? "opacity-[0] translate-y-[-60%]"
                        : type === "slideDown" ? "opacity-[0] translate-y-[60%]"
                        : type === "slideLeft" ? "opacity-[0] translate-x-[-60%]"
                        : type === "slideRight" ? "opacity-[0] translate-x-[60%]"
                        : type === "blurIn2" ? "opacity-[0] text-shadow-lg/50 translate-y-[60%]"
                        : type === "blurIn" ? "opacity-[0]"
                        : "scale-0"

    const animationEnd = type === "slideUp" ? "opacity-[1] translate-y-[0%]"
                        : type === "slideDown" ? "opacity-[1] translate-y-[0%]"
                        : type === "slideLeft" ? "opacity-[1] translate-x-[0%]"
                        : type === "slideRight" ? "opacity-[1] translate-x-[0%]"
                        : type === "blurIn2" ? "opacity-[1] text-shadow-none translate-y-[0%]"
                        : type === "blurIn" ? "opacity-[1]"
                        : "scale-100"

    return (
        <div ref={ref1} className={`${hasAnimated ? animationEnd : animationStart}`} 
        style={{transitionDelay: `${delay || 500}ms`, transitionDuration: `${duration || 500}ms`}} >
            { children }
        </div>
    )
}