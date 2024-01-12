
import Image from "next/image"
import Link from "next/link";
import Search from "./Search/page";
import Options from "./Options/page";

export default function Navbar() {
   

    return (
        <nav className="p-4 ml-8 mt-0  bg-white text-gray-400 2xl:h-28 h-20 ">
            <div className="flex flex-row  justify-between">
                <div className="flex flex-row">
                    <Link className="flex flex-left text-blue-500 font-serif text-2xl text-center " href="/"><Image
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