'use client';
import Image from "next/image";
import Link from "next/link";



export default function Maxpro() {

    const productHaru = 
        [
            {
                "id":1,
                "name":"ZenTx",
                "nameDetail": "lorem dhfd laodh dsdfhfhss",
                "detail":"dgajhj adgasfgag fasgfhasgf asgfag fhfgasghfa jf agfgsgafasgjfgafas"
            },
            {
                "id":1,
                "name":"ZenTx",
                "nameDetail": "lorem dhfd laodh dsdfhfhss",
                "detail":"dgajhj adgasfgag fasgfhasgf asgfag fhfgasghfa jf agfgsgafasgjfgafas"
            },
            {
                "id":1,
                "name":"ZenTx",
                "nameDetail": "lorem dhfd laodh dsdfhfhss",
                "detail":"dgajhj adgasfgag fasgfhasgf asgfag fhfgasghfa jf agfgsgafasgjfgafas"
            },
            {
                "id":1,
                "name":"ZenTx",
                "nameDetail": "lorem dhfd laodh dsdfhfhss",
                "detail":"dgajhj adgasfgag fasgfhasgf asgfag fhfgasghfa jf agfgsgafasgjfgafas"
            },
            {
                "id":1,
                "name":"ZenTx",
                "nameDetail": "lorem dhfd laodh dsdfhfhss",
                "detail":"dgajhj adgasfgag fasgfhasgf asgfag fhfgasghfa jf agfgsgafasgjfgafas"
            },
            {
                "id":1,
                "name":"ZenTx",
                "nameDetail": "lorem dhfd laodh dsdfhfhss",
                "detail":"dgajhj adgasfgag fasgfhasgf asgfag fhfgasghfa jf agfgsgafasgjfgafas"
            }
        ]

    return (
        <div className="bg-white flex-col text-gray-800 justify-center items-center">
            <div className="flex flex-wrap px-16 gap-6 py-12">
               {productHaru.map((productHaru)=> <div key={productHaru.id} className="bg-slate-200 p-8  w-[280px] h-[300px]">
                    <Image
                        src="/pngwing.png"
                        width={200}
                        height={200}
                        alt="Pictures of Computer"
                    />
                    <div className="w-[250px] mx-auto">
                        <h1 className=" font-bold">{productHaru.nameDetail}</h1>
                        <p>{productHaru.detail}</p>
                    </div>
                    <h1 className=" text-blue-600 font-semibold text-xl"><Link href="/">{productHaru.name}</Link></h1>
                </div>)}
            </div>
        </div>
    )
}