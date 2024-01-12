import Image from "next/image";



export default function CatLists() {


    const productOptions = [
        {
            "id": 1,
            "productName": "Laptops",
            "productImage": "/lap1.png"
        },
        {
            "id": 2,
            "productName": "Laptops",
            "productImage": "/lap2.png"
        },
        {
            "id": 3,
            "productName": "Desktops",
            "productImage": "/lap3.png"
        },
        {
            "id": 4,
            "productName": "Peripherals",
            "productImage": "/lap4.png"
        },
        {
            "id": 5,
            "productName": "Gaming",
            "productImage": "/lap5.png"
        }
    ]
    return (<>
        {productOptions.map((productOption) => (
            <div className="flex flex-col justify-center items-center" key={productOption.id}>
                <Image src={productOption.productImage} width={55} height={55} alt="Laptop" />
                <p className="font-[Poppins] text-base">{productOption.productName}</p>
            </div>))}
    </>
    )
}