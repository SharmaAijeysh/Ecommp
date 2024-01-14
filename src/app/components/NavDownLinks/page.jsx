'use client';

import { FacebookSvg, InstaSvg, TwitterSvg } from "@/app/utils/page";
import { useState } from "react";

export default function NavDownLinks() {

    const [clickedButton, setClickedButton] = useState("");

    const handleClick = (value) => {
        setClickedButton(value);
        console.log(clickedButton);
    }
    const NavLinkData = [
        {
            "id": 1,
            "name": "Laptops & Desktops",
            "value": "o1"
        },
        {
            "id": 2,
            "name": "Accessories",
            "value": "o2"
        },
        {
            "id": 3,
            "name": "Gaming",
            "value": "o3"
        },
        {
            "id": 4,
            "name": "Features",
            "value": "o4"
        },
        {
            "id": 5,
            "name": "PC Builder",
            "value": "o5"
        }
    ]


    return (
        <div className=" bg-[#2468B7] p-4 h-[68px] hidden text-white  font-[Poppins] font-normal text-base leading-4 md:flex  justify-between">
            <div className="flex w-full ml-8 gap-4">
            {NavLinkData.map((navData) => (
            <button onMouseEnter={() => handleClick(navData.value)} onClick={() => handleClick("")} key={navData.id} className="flex justify-center items-center gap-1">{navData.name}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
            </svg>
            </button>))}
            </div>
            <div className="flex justify-center items-center gap-4">
               <TwitterSvg/>
               <FacebookSvg/>
               <InstaSvg/>
            </div>
        </div>
    )
}