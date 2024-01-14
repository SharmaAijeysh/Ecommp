import { useState } from "react";


export default function NavDownUtils(){


    const [clickedButton, setClickedButton] = useState("");
    const handleClick = (term) => {
        setClickedButton(term);
        console.log(clickedButton);
    }
    const NavLinkData = [
        {
            "id": 1,
            "name": "Laptops & Desktops",
            "value": "o1"
        },
        {
            "id": 2,
            "name": "Accessories",
            "value": "o2"
        },
        {
            "id": 3,
            "name": "Gaming",
            "value": "o3"
        },
        {
            "id": 4,
            "name": "Features",
            "value": "o4"
        },
        {
            "id": 5,
            "name": "PC Builder",
            "value": "o5"
        }
    ]

    return(
        <div className= "text-white w-full bg-[#2468B7] p-4 h-[68px]text-white  font-[Poppins] font-normal text-base leading-4 md:flex  justify-between">
        <div className="flex flex-col md:flex-row justify-between md:justify-normal flex-wrap w-full ml-8 gap-4">
            {NavLinkData.map((navData) => (
                <button onMouseEnter={() => handleClick(navData.value)} key={navData.id} onClick={() => handleClick("")} className="flex justify-center items-center gap-1">{navData.name}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
                </button>))}
        </div>
        <div className="flex justify-center items-center gap-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 12C24 18.63 18.63 24 12 24C5.37 24 0 18.63 0 12C0 5.37 5.37 0 12 0C18.63 0 24 5.37 24 12ZM9.804 18.33C15.126 18.33 18.036 13.92 18.036 10.098C18.036 10.0002 18.036 9.90236 18.0332 9.80734C18.0317 9.75659 18.0549 9.70816 18.0956 9.67782C18.4946 9.38062 18.8562 9.03192 19.1696 8.64268C19.2638 8.52564 19.1363 8.36545 18.994 8.41366C18.8353 8.46743 18.6733 8.51468 18.5083 8.5551C18.351 8.59364 18.2553 8.36374 18.3702 8.24962C18.6039 8.01765 18.7977 7.74643 18.9413 7.44566C19.0007 7.32129 18.8638 7.20676 18.7408 7.26876C18.3008 7.4904 17.8285 7.65843 17.3318 7.76505C17.281 7.77594 17.2286 7.75874 17.1921 7.72188C16.6678 7.19337 15.9419 6.87 15.138 6.87C13.542 6.87 12.246 8.166 12.246 9.762C12.246 9.91906 12.2574 10.0733 12.2821 10.2227C12.2986 10.3224 12.2214 10.4169 12.1206 10.4094C9.8748 10.2421 7.88333 9.17443 6.4996 7.56477C6.43115 7.48513 6.30396 7.49561 6.25835 7.59021C6.07481 7.97092 5.97 8.39954 5.97 8.85C5.97 9.66488 6.30731 10.4044 6.85283 10.9297C6.96136 11.0342 6.88923 11.2258 6.74195 11.1941C6.47346 11.1361 6.21895 11.0399 5.98359 10.9133C5.96936 10.9056 5.952 10.9158 5.952 10.932C5.952 12.1159 6.66018 13.1291 7.67725 13.5796C7.82155 13.6435 7.81312 13.8607 7.65548 13.8685C7.6079 13.8708 7.56005 13.872 7.512 13.872C7.41235 13.872 7.31443 13.8668 7.2173 13.8565C7.10371 13.8444 7.00957 13.9513 7.05368 14.0567C7.43135 14.9589 8.2535 15.6258 9.24564 15.7896C9.38496 15.8126 9.4414 15.9972 9.32417 16.0759C8.39534 16.6996 7.27626 17.064 6.072 17.064C6.06067 17.064 6.04936 17.064 6.03806 17.0639C5.87853 17.0631 5.80653 17.2829 5.94679 17.3589C7.0909 17.9788 8.40793 18.33 9.804 18.33Z" fill="white" />
            </svg>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-full">
                <path d="M0 1C0 0.447716 0.447715 0 1 0H23C23.5523 0 24 0.447715 24 1V23C24 23.5523 23.5523 24 23 24H1C0.447716 24 0 23.5523 0 23V1Z" fill="white" />
                <path d="M9.93555 24C9.6594 24 9.43555 23.7761 9.43555 23.5V13.7344C9.43555 13.4582 9.21169 13.2344 8.93555 13.2344H7.94238C7.66624 13.2344 7.44238 13.0105 7.44238 12.7344V10.7637C7.44238 10.4875 7.66624 10.2637 7.94238 10.2637H8.93555C9.21169 10.2637 9.43555 10.0398 9.43555 9.76367V9.17188C9.43555 7.60612 9.89681 6.3916 10.8193 5.52832C11.7419 4.66504 13.0368 4.2334 14.7041 4.2334C15.2055 4.2334 15.747 4.29356 16.3286 4.41388C16.5535 4.46041 16.7106 4.66127 16.7115 4.89097L16.72 6.97983C16.7213 7.31375 16.3966 7.56697 16.0633 7.54583C15.9409 7.53806 15.8095 7.53418 15.6689 7.53418C14.374 7.53418 13.7266 8.09277 13.7266 9.20996V9.76367C13.7266 10.0398 13.9504 10.2637 14.2266 10.2637H15.9053C16.1814 10.2637 16.4053 10.4875 16.4053 10.7637V12.7344C16.4053 13.0105 16.1814 13.2344 15.9053 13.2344H14.2266C13.9504 13.2344 13.7266 13.4582 13.7266 13.7344V23.5C13.7266 23.7761 13.5027 24 13.2266 24H9.93555Z"
                    fill="#556edd" />
            </svg>
            <svg width="24px" height="24px" viewBox="0 0 24 24" role="img" xmlns="http://www.w3.org/2000/svg"><title>Instagram icon</title><path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" fill="white" />
            </svg>
        </div>
    </div>
    )


}