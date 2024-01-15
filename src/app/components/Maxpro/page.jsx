'use client';
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";



export default function Maxpro() {
    const productHaru = [
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        },
        {
            "id":1,
            "name":"$1300.00",
            "nameDetail": "Laptop HP EliteBook 840G1 Intel Core i5",
            "detail":"AMD Radeon HD 8750M, with 1GB dedicated DDR5 video memory"
        }
    ]

    const [displayRows, setDisplayRows] = useState(2);

    const loadMoreRows = () => {
        // Increase the number of rows to display
        setDisplayRows(displayRows + 2);
    };



    return (
        <div className="flex bg-white flex-col text-gray-800 p-8 justify-center items-center">
            <div className="flex flex-wrap gap-6 justify-center items-center">
                {productHaru.slice(0, displayRows * 4).map((productHaru) => (
                    <div key={productHaru.id} className="bg-slate-200 p-8  w-[280px] h-[300px]">
                        <Image src="/pngwing.png" width={200} height={200} alt="Pictures of Computer" />
                        <div className="w-[250px] flex flex-col justify-center items-center p-2">
                            <h1 className=" font-futura font-normal text-base leading-5 w-full">{productHaru.nameDetail}</h1>
                            <p className="text-[#667085] text-sm font-light leading-[18px]">{productHaru.detail}</p>
                        </div>
                        <h1 className="text-[#2468B7] font-semibold text-xl leading-6 w-full flex justify-center items-center">
                            <Link href="/">{productHaru.name}</Link>
                        </h1>
                    </div>
                ))}
            </div>
            {productHaru.length > displayRows * 4 && (
                <button className="mt-4 bg-blue-500 text-white p-2 rounded" onClick={loadMoreRows}>
                    Load More
                </button>
            )}
        </div>

    )
}