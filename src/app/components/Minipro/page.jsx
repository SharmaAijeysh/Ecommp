'use client'
import ProductDetail from "@/app/ProducDetail/page"

export default function Minipro() {

    return (
        <>
            <div className="bg-white flex-col text-gray-800">
                <div className=" font-semibold font-serif flex flex-col items-center mx-auto">
                    <h1 className="text-2xl">Most Willing Products</h1>
                    <p>Most sought models</p>
                </div>
                <div className="flex px-16 gap-6 py-12">
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                    <ProductDetail />
                </div>
            </div>
        </>
    )
}