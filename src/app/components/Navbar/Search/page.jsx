'use client';



export default function Search() {
    function handleSearch(term) {
        console.log(term);
    }

    return (
            <input
                className="searchBack rounded-lg border-[#B1C6FA] relative bg-[url('/Vector.png')] bg-no-repeat block  h-[50px] w-80  2xl:w-[396px] border-[1px] pl-10 text-sm outline-none placeholder:text-gray-500 text-gray-600"
                placeholder="Search your desired Products"
                onChange={(e) => {
                    handleSearch(e.target.value);
                }}
            />
    );
}