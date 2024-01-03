'use client'

import Image from "next/image"
import Link from "next/link";

export default function Navbar() {


    const handleSearch = () => {

        console.log("Damn");
    }



    return (
        <>

            <div>
                <nav className="fixed p-4 mt-0  h-24 w-full  bg-white text-gray-400">
                    <div className="flex flex-row">
                        <div className="flex flex-row">
                            <div className="flex flex-left text-blue-500 font-serif text-2xl text-center ">
                                <Image
                                    src="/compa.png"
                                    height={50}
                                    width={50}
                                    alt="Logo"
                                />
                                <Link href="/register">ONIN</Link>
                            </div>
                        </div>

                        <div className=" flex  flex-row rounded-full w-72 text-center ml-[250px]   border-2 border-blue-400 ">
                            <div className="flex w-12  p-2 ">
                                <Image
                                    src="/compa.png"
                                    width={20}
                                    height={20}
                                    alt="search button" />
                            </div>

                            <form className=" w-60 " onSubmit={handleSearch}>
                                <input placeholder="Search for products" className=" h-10 w-full p-2  text-slate-50 placeholder-slate-50 text-sm bg-[#2468B7] rounded-e-full outline-none">
                                </input></form>
                        </div>

                        <div className=" absolute right-0">
                            <div className="flex gap-6">
                                <div className="flex font-bold text-blue-800  bg-slate-400 rounded-full h-8 w-8 text-center">H</div>
                                <div className="flex font-bold text-blue-800  bg-slate-400 rounded-full h-8 w-8 text-center">H</div>
                                <div className="flex font-bold text-blue-800  bg-slate-400 rounded-full h-8 w-8 text-center">H</div>
                                <div className="flex font-bold text-blue-800  bg-slate-400 rounded-full h-8 w-8 text-center">H</div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )

}