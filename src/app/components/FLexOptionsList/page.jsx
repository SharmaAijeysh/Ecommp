import Image from "next/image";




export default function FLexOptionsList ()
{
    return(
        <div className="flex flex-row">
            <ul className="flex flex-row gap-4">
                <li><Image
                src="/compa.png" 
                height={50}
                width={50}
                alt="PNG"
                />
                <h1>Tdhs fdu fsudfgsd </h1>
                <p></p>
                </li>
                <li><Image
                src="/compa.png" 
                height={50}
                width={50}
                alt="PNG"
                /></li>
                <li><Image
                src="/compa.png" 
                height={50}
                width={50}
                alt="PNG"
                /></li>
                <li><Image
                src="/compa.png" 
                height={50}
                width={50}
                alt="PNG"
                /></li>
            </ul>
        </div>
    )
}