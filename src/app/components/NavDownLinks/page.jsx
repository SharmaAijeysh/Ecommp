'use client';

import { GlobalContext } from "@/app/context/page";
import { useContext, useState } from "react";
import NavDownUtils from "./utils/page";
import NavDownLinksOptions from "./NavDownLinksOptions/page";

export default function NavDownLinks() {
    const { showNavModal, showNavDownOptions } = useContext(GlobalContext);
    let batTick = showNavModal;



    return (
        <>
        <div className="flex">
        <div className="hidden md:flex w-full">
            <NavDownUtils  />
        </div>
        <div className="absolute top-20 w-full opacity-100 bg-blue-950">
        {batTick == true && <NavDownUtils/>}
        </div>
        </div>
        {showNavDownOptions &&<NavDownLinksOptions/>}
        </>
    )
}