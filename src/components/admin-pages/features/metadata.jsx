import { useState } from "react";
// import { data } from "react-router-dom";


export default function MetaData () {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    

    const handleSubmit = async (e) => {
        e.preventDefault();
    

      try{
          const res = await fetch("https://twokw-backend.onrender.com/api/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, content }),
            });

            const data = await res.json();
            console.log("backend response", data);

            

        }catch (ero) {
            console.log(ero)
        }
     };


     return(
        <div className="px-8 lg:pt-6 ">
            <form onSubmit={handleSubmit} className="lg:grid lg:grid-cols-[2fr_0.8fr] w-full lg:gap-8 ">
                 <h2 className="lg:hidden w-full text-center font-bold text-black/80 font-[Inria Sans] py-6 text-xl">Metadata</h2>
                <div className="w-full lg:space-y-10 space-y-5">
                     <input type="text" value={title} placeholder="Provide page header sub-content here" onChange={(e) => setTitle(e.target.value)} className="p-3 focus:ring-[#1A365D] outline-none focus:ring-1 border-2 rounded-[0.1em] border-[#00000066] placeholder:text-[#00000066] w-full font-[Inria Sans]" />

                     <textarea value={content} onChange={(e) => setContent(e.target.value)} className="max-h-screen lg:h-[90vh] h-[40vh] w-full p-3 focus:ring-[#1A365D] outline-none focus:ring-1 border-1 rounded-xl border-[#00000066] placeholder:text-[#00000066] font-[Inria Sans]"></textarea>
                </div>
                <div className="flex flex-col items-center space-y-10">
                    <button type="submit" className="bg-[#1A365D] text-white w-64 text-xl rounded-xl py-2">
                        Metadata
                    </button>
                     
                </div>

                
            </form>
        </div>
     );
}