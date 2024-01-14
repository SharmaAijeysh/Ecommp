'use client';

import { GlobalContext } from "@/app/context/page";
import { useContext, useState } from "react";
import NavDownUtils from "./utils/page";

export default function NavDownLinks() {
    const { showNavModal, setShowNavmodal } = useContext(GlobalContext);
    let batTick = showNavModal, classForNav;



    return (
        <div className="flex">
        <div className="hidden md:flex w-full">
            <NavDownUtils  />
        </div>
        <div className="absolute top-20 w-full opacity-100 bg-blue-950">
        {batTick == true && <NavDownUtils/>}
        </div>
        </div>
    )
}