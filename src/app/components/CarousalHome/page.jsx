'use client';
import Image from "next/image";
import { useEffect, useState } from "react";



export default function CarousalHome() {

    const slides = ["APP", "AGG", "Another", "Hand", "APP", "ADJHD", "ASGA"];

    const [currentSlide, setCurrentSlide] = useState(0);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => {
            const newIndex = prev - 1;
            return newIndex < 0 ? slides.length - 1 : newIndex;
        });
    }

    // Effect to automatically change the slide every 5 seconds
    useEffect(() => {
        const intervalId = setInterval(() => {
            nextSlide();
        }, 5000);

        // Cleanup function to clear the interval when the component is unmounted or the current slide changes
        return () => clearInterval(intervalId);
    }, [currentSlide]);



    return (
        <div className="flex bg-[#F0F3FF]">
            <div className="flex flex-col font-[Poppins] gap-[10px] p-4 ml-8 relative">
                {/* Render each slide with opacity transition based on the current slide index */}
                {slides.map((slide, index) => (<div key={index} className={`flex flex-col w-[60%] ${index === currentSlide ? '' : 'hidden'}`}>
                    <h2 className=" font-medium text-5xl leading-[58px]"><span className="text-[#2468B7]">{slide}</span> your click.<br /> Transform your pick.</h2>
                    <p className=" font-normal text-base">"Your one-stop destination for all things tech. Discover a world of cutting-edge computers, accessories, and expert advice at our computer shop.
                        Elevate your digital experience with us.</p>
                </div>))}
                <button className="felx flex-row h-14 bg-[#B77325] font-[Outfit] rounded-lg  w-fit text-white p-[6px] font-semibold text-base justify-center items-center">Explore Now
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline ml-2">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg>
                </button>
                <div className="flex gap-3">
                    <button onClick={prevSlide} className=" text-xl font-black h-8 w-8 bg-white">&lt;</button>
                    {/* Slide indicators at the bottom */}
                    <div className=" flex justify-center">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={` truncate w-[40px] mr-2 border-b-2 border-black ${index === currentSlide ? ' border-b-4 bg-slate-200' : ''
                                    }`}
                                onClick={() => setCurrentSlide(index)}
                            >{index + 1}</button>
                        ))}
                    </div>
                    <button className=" text-xl font-black h-8 w-8 bg-white" onClick={nextSlide}>&gt;</button>
                </div>
            </div>


            <div className="w-[40%] relative">
                <Image src="/ttt.png" width={549} height={496} alt="Woman with Computer" />
                <Image className="absolute right-14 bottom-16" src="/logofoot.png " width={130.5} height={43.5} alt="logo" />
            </div>

        </div>
    )
}