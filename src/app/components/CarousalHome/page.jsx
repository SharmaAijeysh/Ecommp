import Image from "next/image";



export default function CarousalHome() {
    return (
        <div className="flex bg-[#F0F3FF]">
        <div className="flex flex-col font-[Poppins] gap-[10px] p-4 ml-8 relative">
            <div className="flex flex-col w-[60%]">
                <h2 className=" font-medium text-5xl leading-[58px]"><span className="text-[#2468B7]">Empower</span> your click.<br /> Transform your pick.</h2>
                <p className=" font-normal text-base">"Your one-stop destination for all things tech. Discover a world of cutting-edge computers, accessories, and expert advice at our computer shop.
                    Elevate your digital experience with us.</p>
            </div>
            <button className="felx flex-row h-14 bg-[#B77325] font-[Outfit] rounded-lg  w-fit text-white p-[6px] font-semibold text-base justify-center items-center">Explore Now
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline ml-2">
                    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
        <div className="w-[40%] relative">
            <Image src="/ttt.png" width={549} height={496} alt="Woman with Computer"/>
            <Image className="absolute right-14 bottom-16" src="/logofoot.png " width={130.5} height={43.5} alt="logo"/>
        </div>

        </div>
    )
}