'use client'

import Link from "next/link"

export default function Footer() {

    return (
        <>
            <div className=" flex flex-row bg-gradient-to-r from-[#444443]  to-black  text-gray-200 gap-24 w-full px-28 pt-12 h-[50vh]">
                <div className="flex flex-col mt-4">
                    <div className="flex text-blue-700">
                        <h1 className="font-semibold  text-3xl">ONIN</h1>
                    </div>
                    <div><p>Copyright@ 2023 reserved</p></div>
                    <div><p>
                        Terms of Service | Privacy Policy</p></div>

                </div>
                <div className="flex gap-24">
                <div className="flex flex-col gap-3 ">
                    <div><h3 className="flex text-xl font-semibold">Products</h3></div>
                    <ul className="flex flex-col gap-3">
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
                <div className="flex flex-col gap-3">
                 <div><h3 className="flex text-xl font-semibold">About us</h3></div>
                 <ul className="flex flex-col gap-3" >
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
                <div className="flex flex-col gap-3">
                 <div><h3 className="flex text-xl font-semibold">Resources</h3></div>
                 <ul className="flex flex-col gap-3" >
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
                <div className=" flex flex-col gap-8 mt-4">
                    <div><h3 className="flex text-xl">Get in Touch</h3></div>
                     <div><p>Questions or feedback?</p>
                     <p>We'd love to hear from you.</p></div>

                </div>
            </div>
        </>
    )
}
