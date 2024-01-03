

export default function FlexOptions() {
    return (
        <div className=" flex flex-wrap flex-row  gap-2">
            <div className=" w-60 h-80 bg-blue-950">

            </div>
            <div className="flex flex-col w-60 h-80 gap-2">
                <div className="flex w-60 h-40 bg-blue-950">

                </div>
                <div className=" flex flex-row w-60 h-40 gap-2">
                    <div className=" flex w-[50%] h-40 bg-blue-950">

                    </div>
                    <div className=" flex w-[50%] h-40 bg-blue-950">

                    </div>
                </div>

            </div>
        </div>
    )
}