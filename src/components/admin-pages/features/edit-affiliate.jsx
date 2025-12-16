// import { useState } from "react";
import GoBack from "../../shared/Back";
// const [linkType, seLinkTpe] = useState("");
// const [location, setLocation] = useState("");
// const [label, setLabel] = useState("");
// const [url, setUrl] = useState("");
// const [loading, setLoading] = useState(false);
// const [error, setError] = useState(null);





export default function Edit_Affiliate () {
    return(
        <main className="p-4 lg:px-5 flex flex-col w-full">
               {/* <button className="lg:hidden"> */}
                <GoBack />
               {/* </button> */}
            <div className="flex justify-between font-semibold font-sans text-2xl w-full py-4  lg:py-6">
                <h1 className="lg:font-semibold font-bold font-[Inria Sans]  text-center w-full lg:text-left">Edit Affiliate Links</h1>
                <button className="hidden lg:block bg-[#DA3737] text-sm text-white px-8 py-2 shadow-sm font-normal  rounded-xl">
                    Cancel
                </button>
            </div>

            <form action="">
                <div className="flex lg:flex-row flex-col justify-between gap-10">
                    <div className="flex flex-col py-3 w-full">
                        <label htmlFor="" className="py-2">Link Type</label>
                        <input type="text" className="border border-[#00000066] p-2 rounded-xs" placeholder="Provide Page Title Here" />
                    </div>
                
                    <div className="flex flex-col py-3 w-full">
                        <label htmlFor="" className="py-2">Location</label>
                        <input type="text" className="border border-[#00000066] p-2 rounded-xs" placeholder="Provide Page Slug Here" />
                    </div>
                </div>
                <div className="flex flex-col py-3"> 
                    <label htmlFor="" className="py-2">Label</label>
                    <input type="text" className="border border-[#00000066] p-2 rounded-xs" placeholder="Provide Page Description Here"/>
                </div>
                <div className="flex flex-col py-3">
                    <label htmlFor="" className="py-2">URL</label>
                    <input type="text" className="border border-[#00000066] p-2 rounded-xs" placeholder="Enter URL"/>
                </div>
                <div className="pb-10 space-y-4">
                    <h3 className="py-3">Set Visibility</h3>
                    <aside className="flex items-center gap-5">
                        <div className="flex justify-center items-center gap-1 text-[#00000066] font-semibold">
                            <label  className="text-[#1A365D]">Visible</label>
                            <input type="radio" name="visible" id="visible" className=" accent-[#1A365D] w-5 h-5 rounded-[0.2rem]" />
                        </div>
                        <div className="flex justify-center items-center gap-1 text-[#00000066] font-semibold">
                            <label  className="text-[#DA3737]">Not Visible</label>
                            <input type="radio" name="visible" id="visible" className="accent-[#DA3737] w-5 h-5 rounded-[0.2rem]" />
                        </div>
                    </aside>
                </div>

                <div className="flex justify-between items-center">
                    <button className="w-40 lg:w-auto bg-[#1A365D] text-sm text-white lg:px-10 lg:py-2 py-3 shadow-sm font-normal  rounded-xl">
                        Save Content
                    </button>
                    <button className="w-40 lg:hidden bg-[#DA3737] text-sm text-white lg:px-8 lg:py-1.5 py-3 shadow-sm font-normal  rounded-xl">
                        Cancel
                    </button>
                </div>
            </form>
        </main>
    )
}