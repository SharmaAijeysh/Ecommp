
import Image from "next/image"
import Link from "next/link"

export default function ProductDetail() {

    return (
        <div className="bg-slate-200 p-8  w-[280px] h-[300px]">
            <Image
                src="/compa.png"
                width={200}
                height={200}
                alt="Pictures of Computer"
            />
            <div className="w-[250px] mx-auto">
                <h1 className=" font-bold">Ausus model ghg</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <h1 className=" text-blue-600 font-semibold text-xl"><Link href="/">ZenTX</Link></h1>
        </div>
    )
}