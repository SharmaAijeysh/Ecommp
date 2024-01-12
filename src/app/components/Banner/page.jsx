import Image from "next/image";



export default function Banner(){
    return(
        <div className="py-14 px-16 bgFlex">
         <Image
         src="/frame.svg"
         width={70}
         height={60}
         alt="two-computer"
         />
        </div>
    )
}