import CatLists from "./CatLists/page"

export default function Categories() {


    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <h3 className=" font-medium font-[Inter] text-3xl text-[#2468B7]">Categories</h3>
            <div className="flex gap-40">
                <CatLists />
            </div>
        </div>
    )
}