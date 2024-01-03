'use client'



export default function Login() {

    const postData = ()=>{

    }

    return(
        <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-300">
         <div className=" flex flex-col  w-[60%] bg-slate-400 p-12 mt-6">
           
           <div className="flex w-auto justify-center font-semibold text-4xl ">
            Login to Your Account</div>

           <form onSubmit={postData} className="p-6 mt-2">
            <div className="p-3"><label className=" text-xl block font-normal">Email Address</label>
            <input className="w-full h-10 rounded-lg outline-slate-500" placeholder="aijeysh@gmail.com"></input></div>
            <div className="p-3"><label className=" text-xl block font-normal ">Password</label>
            <input className="w-full h-10 rounded-lg outline-slate-500" placeholder="**********"></input></div> 
            <button
            type="submit"
            className="py-3 md:w-[35%] w-fit  px-5 text-sm font-medium text-center text-white ml-[30%]   bg-blue-800 hover:bg-blue-700 contactSend"
          >
            Login
          </button>
           </form>
         </div>
         </main>
    )
}