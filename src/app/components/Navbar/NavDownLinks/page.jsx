'use client';

import { ArrowDown, FacebookSvg, InstaSvg, TwitterSvg } from "../../Utilities/page";

export default function NavDownLinks() {



    return (
        <div className=" bg-[#2468B7] p-4 h-[68px] hidden text-white  font-[Poppins] font-normal text-base leading-4 md:flex  justify-between">
            <div className="flex w-full ml-8 gap-4">
                <ArrowDown />
            </div>
            <div className="flex justify-center items-center gap-4">
               <TwitterSvg/>
               <FacebookSvg/>
               <InstaSvg/>
            </div>
        </div>
    )
}