import Image from "next/image";




export default function FLexOptionsList() {
    return (
        <div className="flex flex-row p-4 m-6">
            <div className="flex flex-row gap-20">
                <div className="flex flex-col items-center justify-center">
                    <Image
                        src="/del.png"
                        height={40}
                        width={40}
                        alt="PNG"
                    />
                    <h3 className=" font-semibold text-xl leading-6">Free Shipping</h3>
                    <p className=" text-gray-500 text-base font-normal leading-5">When Ordering over $100</p>
                </div>
                <div className="flex flex-col items-center justify-center"><Image
                    src="/ret.png"
                    height={40}
                    width={40}
                    alt="PNG"
                />
                    <h3 className=" font-semibold text-xl leading-6">Free Return</h3>
                    <p className=" text-gray-500 text-base font-normal leading-5">Get Return within 30 days</p>
                </div>
                <div className="flex flex-col items-center justify-center"><Image
                    src="/card.png"
                    height={40}
                    width={40}
                    alt="PNG"
                />
                    <h3 className=" font-semibold text-xl leading-6">Secure Payments</h3>
                    <p className=" text-gray-500 text-base font-normal leading-5">100% Secure Online Payment</p>
                </div>
                <div className="flex flex-col items-center justify-center"><Image
                    src="/badge.png"
                    height={40}
                    width={40}
                    alt="PNG"
                />
                    <h3 className=" font-semibold text-xl leading-6">Best Quality</h3>
                    <p className=" text-gray-500 text-base font-normal leading-5">Original Product Guarenteed</p>
                </div>
            </div>
        </div>
    )
}