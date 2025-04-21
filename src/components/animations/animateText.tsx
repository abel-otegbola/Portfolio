import { useIsVisible } from "@/helpers/isVisible";
import { ReactNode, useEffect, useRef, useState } from "react"

interface AnimateProps {
    speed?: number,
    children: ReactNode,
    className?: string,
    animateOnce?: boolean
}

export default function AnimateText({ speed, children, className, animateOnce }: AnimateProps) {
    const ref = useRef<HTMLDivElement>(null);
    const isVisible = useIsVisible(ref); // Check if the parent container is visible
    const [content, setContent] = useState<string[]>([]);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        setContent(children?.toString().split("") || [])
    }, [children])

    useEffect(() => {
        if (isVisible && !hasAnimated) {
            setHasAnimated(true); // Lock the animation state
        }
    }, [isVisible, hasAnimated]);

    useEffect(() => {
        if (!animateOnce && !isVisible) {
            setHasAnimated(false)
        }
    }, [animateOnce, isVisible])

    return (
        <p ref={ref} className={className}>
            {content.map((char, index) => (
                <span
                    key={index}
                    className={`opacity-0 translate-y-4 rotate-x-[20deg] transition duration-700 ease-in-out ${
                        hasAnimated  ? "opacity-100 translate-y-0 text-shadow-none rotate-x" : "text-shadow-lg/50"
                    }`}
                    style={{ transitionDelay: `${(speed || 25) * index}ms` }}
                >
                    {char}
                </span>
            ))}
        </p>
    )
}