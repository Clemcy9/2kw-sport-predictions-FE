import { useEffect } from "react";
import { useState } from "react";

export default function AdvertTags () {

    const [headerTags, setHeaderTags] = useState("");
    const [footerTags, setFooterTags] = useState("");

    useEffect (() => {
        localStorage.setItem("headerTag", headerTags);
        localStorage.setItem("footerTag", footerTags);
    }, [headerTags],[footerTags]);

    const handleSend = (e) => {
        e.preventDefault();

         localStorage.setItem("headerTag", headerTags);
         localStorage.setItem("footerTag", footerTags);

    };

    
    return (
        <div className="">
            <h1 className="font-bold font-[Inria Sans] lg:hidden">
                Header & Footer Tags
            </h1>

            <form onSubmit={handleSend} className="flex flex-col justify-center items-center lg:w-auto lg:px-10 px-5 space-y-10 py-10">

                <div className="w-full">
                    <label className="text-[#1E1E1E] font-[Inria Sans] font-normal">Header Tags</label>
                    <textarea type="text" value={headerTags} onChange={(e) => setHeaderTags(e.target.value)} className="border border-[#00000066] h-48 px-2 py-3 w-full text-left align-top" />
                </div>
                <div className="w-full">
                    <label className="text-[#1E1E1E] font-[Inria Sans] font-normal">Footer Tags</label>
                    <textarea type="text" value={footerTags} onChange={(e) => setFooterTags(e.target.value)} className="border border-[#00000066] rounded-[0.4em] h-60 px-2 py-3 w-full  text-left align-top" />
                </div>
                <button type="submit" className="bg-[#1A365D] text-white w-70 rounded-[0.6rem] py-2 mt-4">
                    Save Tags
                </button>
            </form>
        </div>
    )
}