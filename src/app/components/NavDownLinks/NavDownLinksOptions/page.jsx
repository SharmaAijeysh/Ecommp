'use client';

import { GlobalContext } from "@/app/context/page";
import Link from "next/link";
import { useContext } from "react";


export default function NavDownLinksOptions() {
     const {showNavDownOptions,setShowNavDownOptions} = useContext(GlobalContext);
    const NavDownOptions = [
        {
            "id": 1,
            "name": "Laptops & Desktops",
            "value": "/o1"
        },
        {
            "id": 2,
            "name": "Accessories",
            "value": "/o2"
        },
        {
            "id": 3,
            "name": "Gaming",
            "value": "/o3"
        },
        {
            "id": 4,
            "name": "Features",
            "value": "/o4"
        },
        {
            "id": 5,
            "name": "PC Builder",
            "value": "/o5"
        },
        {
            "id": 1,
            "name": "Laptops & Desktops",
            "value": "/o1"
        },
        {
            "id": 2,
            "name": "Accessories",
            "value": "/o2"
        },
        {
            "id": 3,
            "name": "Gaming",
            "value": "/o3"
        },
        {
            "id": 4,
            "name": "Features",
            "value": "/o4"
        },
        {
            "id": 5,
            "name": "PC Builder",
            "value": "/o5"
        },
        {
            "id": 1,
            "name": "Laptops & Desktops",
            "value": "/o1"
        },
        {
            "id": 2,
            "name": "Accessories",
            "value": "/o2"
        },
        {
            "id": 3,
            "name": "Gaming",
            "value": "/o3"
        },
        {
            "id": 4,
            "name": "Features",
            "value": "/o4"
        },
        {
            "id": 5,
            "name": "PC Builder",
            "value": "/o5"
        },
        {
            "id": 1,
            "name": "Laptops & Desktops",
            "value": "/o1"
        },
        {
            "id": 2,
            "name": "Accessories",
            "value": "/o2"
        },
        {
            "id": 3,
            "name": "Gaming",
            "value": "/o3"
        },
        {
            "id": 4,
            "name": "Features",
            "value": "/o4"
        },
        {
            "id": 5,
            "name": "PC Builder",
            "value": "/o5"
        }
    ]
    return (
        <div onMouseLeave={() => setShowNavDownOptions(false)} className="w-full bg-white flex flex-wrap gap-12  text-[#2468B7]">
            {NavDownOptions.map((options) => (
                <div key={options.id} className="flex justify-center w-36 items-center p-4">
                    <Link className="flex justify-center items-center gap-2" href={options.value}>{options.name}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" className="w-4 h-4">
                        <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                    </svg></Link>
                </div>
            ))}
        </div>)
}