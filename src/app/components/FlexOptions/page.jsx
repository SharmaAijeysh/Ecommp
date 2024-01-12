import Link from "next/link";


export default function FlexOptions() {
    return (
        <div className=" flex flex-wrap flex-row  gap-2 text-white">
            <div className=" w-72 h-96 flexlist flex justify-center  items-center">
                <Link className="text-xl font-semibold " href="/laptops">ALL Laptops<span className="block font-thin text-sm text-center underline">View All</span> </Link>
            </div>
            <div className="flex flex-col w-72 h-96 gap-2">
                <div className="flex w-72 h-48 flexlista  justify-center  items-center">
                <Link className="text-xl font-semibold " href="/gaming-products">Gaming Products<span className="block font-thin text-sm text-center underline">View All</span> </Link>
                </div>
                <div className=" flex flex-row w-72 h-48 gap-2">
                    <div className=" flex w-[50%] h-48 flexlistb  justify-center  items-center">
                    <Link className="text-xl font-semibold " href="/speakers">Speakers<span className="block font-thin text-sm text-center underline">View All</span> </Link>
                    </div>
                    <div className=" flex w-[50%] h-48 flexlistc  justify-center  items-center">
                    <Link className="text-xl font-semibold " href="/watches">Watches<span className="block font-thin text-sm text-center underline">View All</span> </Link>
                    </div>
                </div>

            </div>
        </div>
    )
}