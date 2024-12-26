'use client'
import { useEffect, useState } from "react"
// import Button from "../button/button"
// import { CaretLeft, CaretRight } from "@phosphor-icons/react"

type SliderProps = {
    images: string[]
}

export default function Slider({ images }: SliderProps) {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [dragStartX, setDragStartX] = useState<number | null>(null);
    const [dragEndX, setDragEndX] = useState<number | null>(null);

    // Slider transition classes for three states
    const states = useState([
        "w-[4%] left-[94%] z-[1]",
        "w-[82%] left-[8%] scale-100 z-[2]",
        "w-[4%] left-[0] z-[-1]",
    ])

    const prevSlide = (): void => {
        setCurrentIndex(
            (prevIndex) => (prevIndex + 1 + images.length) % images.length
        );
    };

    const nextSlide = (): void => {
        setCurrentIndex(
            (prevIndex) => (prevIndex + 1 + images.length) % images.length
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            if(images.length > 1) {
                nextSlide();
            }
        }, 3000);
        return () => {
            clearInterval(interval);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    const handleDragEnd = (): void => {
        if (dragStartX !== null && dragEndX !== null) {
          const dragDistance = dragEndX - dragStartX;
          if (dragDistance > 50) {
              nextSlide();
          } else if (dragDistance < -50) {
              prevSlide();
          }
        }
        setDragStartX(null);
        setDragEndX(null);
    };

    // Dynamically render slides based on the number of images
    const getSlideIndex = (offset: number) => {
        const newIndex = (currentIndex + offset + images.length) % images.length;
        return newIndex;
    };

    return (
        <div className="relative flex items-center justify-center md:w-[98%] w-[100%] mx-auto overflow-hidden">
            <div
                className="flex gap-[3%] md:h-[140px] h-[140px]"
                onMouseUp={handleDragEnd}
                onMouseLeave={handleDragEnd}
                onTouchEnd={handleDragEnd}
            >
                {
                images.map((_, offset) => {
                    const slideIndex = getSlideIndex(offset - 2);
                    return (
                        
                        <div
                            key={offset}
                            className={`absolute top-0 overflow-hidden md:h-[180px] h-[180px] transition-all ${states[offset]} duration-700 rounded bg-cover bg-top bg-no-repeat transition-all ease-in-out cursor-pointer`}
                            style={{
                                backgroundImage: `url("/images${images[slideIndex]}")`,
                            }}
                        >
                        </div>
                    )
                })}
            </div>
        </div>
    );
}
