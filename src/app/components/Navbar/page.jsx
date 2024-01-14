"use client";
import Image from "next/image"
import Link from "next/link";
import Search from "./Search/page";
import Options from "./Options/page";

export default function Navbar() {
   

    return (
        <nav className="p-4 lg:pl-8 md:pl-3 mt-0  bg-white text-gray-400 2xl:h-28 h-20 ">
            <div className="flex flex-row  justify-between">
                <div className="flex flex-row">
                    <Link className="flex" href="/"><Image
                        src="/logofoot.png"
                        height={40}
                        width={132}
                        alt="Logo"
                    /></Link>
                </div>

                <div className=" flex justify-center text-center items-center ">
                       <Search/>
                </div>

                <div className=" flex right-0">
                   <Options/>
                </div>
            </div>
        </nav>
    )

}