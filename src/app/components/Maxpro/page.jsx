import ProductDetail from "@/app/ProducDetail/page";





export default function Maxpro() {

    return (
        <div className="bg-white flex-col text-gray-800">
            <div className="flex px-16 gap-6 py-12">
                <ProductDetail/>
                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
            </div>
            <div className="flex px-16 gap-6 py-12">
                <ProductDetail/>
                <ProductDetail />
                <ProductDetail />
                <ProductDetail />
            </div>
        </div>
    )
}