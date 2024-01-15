'use client'

import Image from "next/image"
import Link from "next/link"

export default function Footer() {

    return (
        <>
            <div className=" flex flex-col  md:flex-row footback  text-[#FFFFFF] md:gap-20 w-full pl-4 md:pl-28  2xl:pl-[301px] pt-[38px] md:h-[404px]">
                <div className="flex flex-col mt-[19]">
                    <Image
                    src="/logofoot.png"
                    width={186}
                    height={62}
                    alt="Logo"
                    />
                    <div className="mt-[15px] flex flex-col gap-6 font-medium text-base w-64">
                    <p>Copyright@ 2023 reserved</p>
                    <p>Terms of Service | Privacy Policy</p>
                    </div>

                </div>
                <div className="flex gap-6 md:gap-20">
                <div className="flex flex-col gap-3 md:gap-6 ">
                    <div><h3 className="flex text-xl leading-6 font-bold">Products</h3></div>
                    <ul className="flex flex-col gap-6 font-normal text-base leading-[19px] w-[120px]">
                        <li>
                            <Link href="/products">Product</Link>
                        </li>
                        <li>
                        <Link href="/pricing">Pricing</Link>
                        </li>
                        <li>
                            <Link href="/login">Log in</Link>
                        </li>
                        <li>
                        <Link href="/request-access">Request Access</Link>
                        </li>
                        <li>
                        <Link href="/partnerships">Partnerships</Link>
                        </li>
                    </ul>

                </div>
                <div className="flex flex-col gap-6 ">
                    <div><h3 className="flex text-xl leading-6 font-bold">About us</h3></div>
                    <ul className="flex flex-col gap-6 font-normal text-base leading-[19px] w-[106px]">
                        <li>
                        <Link href="/about-gadget">About Gadget</Link>
                        </li>
                        <li>
                        <Link href="/contact">Contact us</Link>
                        </li>
                        <li>
                        <Link href="/feature">Feature</Link>
                        </li>
                        <li>
                        <Link href="/careers">Careers</Link>
                        </li>
                    </ul>
                </div>
                <div className="flex flex-col gap-6 ">
                    <div><h3 className="flex text-xl leading-6 font-bold">Resources</h3></div>
                    <ul className="flex flex-col gap-6 font-normal text-base leading-[19px] w-[104px]">
                        <li>
                        <Link href="/help">Help Center</Link>
                        </li>
                        <li>
                        <Link href="/book-demo">Book a demo</Link>
                        </li>
                        <li>
                        <Link href="/server">Sever status</Link>
                        </li>
                        <li>
                        <Link href="/blog">Blog</Link>
                        </li>
                    </ul>
                </div>
                </div>
                <div className=" flex flex-col gap-8 2xl:gap-[50px] mt-5 w-52">
                    <div><h3 className="flex text-xl leading-6 font-bold">Get in Touch</h3></div>
                     <div className=" flex flex-col gap-6 font-semibold text-base leading-5"><p>Questions or feedback?</p>
                     <p>We'd love to hear from you.</p></div>

                </div>
            </div>
        </>
    )
}
