import { useState } from "react";
// import { data } from "react-router-dom";


export default function NewPost () {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [media, setMedia] = useState(null);

    const isImage =  (media) => media && media.type?.startsWith("image/");
    const isVideo =  (media) => media && media.type?.startsWith("video/");

    const handleSubmit = async (e) => {
        e.preventDefault();
    

      try{
          const res = await fetch("https://twokw-backend.onrender.com/api/blogs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, content, media }),
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
                 <h2 className="lg:hidden w-full text-center font-bold text-black/80 font-[Inria Sans] py-6 text-xl">New Article</h2>
                <div className="w-full lg:space-y-10 space-y-5">
                     <input type="text" value={title} placeholder="Article Title" onChange={(e) => setTitle(e.target.value)} className="p-3 focus:ring-[#1A365D] outline-none focus:ring-1 border-2 rounded-[0.1em] border-[#00000066] placeholder:text-[#00000066] w-full font-[Inria Sans]" />

                     <textarea value={content} onChange={(e) => setContent(e.target.value)} className="max-h-screen lg:h-[90vh] h-[40vh] w-full p-3 focus:ring-[#1A365D] outline-none focus:ring-1 border-1 rounded-xl border-[#00000066] placeholder:text-[#00000066] font-[Inria Sans]"></textarea>
                </div>
                <div className="flex flex-col items-center space-y-10">
                    <button type="submit" className="bg-[#1A365D] text-white w-64 text-xl rounded-xl py-2">
                        Save Article
                    </button>
                     <div className="flex flex-col justify-center items-center py-4 px-4  rounded-xl bg-[#F5FAFF] ">
                         <h3 className="w-full text-left font-bold text-black/80 font-[Inria Sans]">Feature Image</h3>
                        <article className="border border-[#1A365D] h-50 w-64 rounded-2xl my-4">
                             {media && isImage(media) && (
                                <img src={URL.createObjectURL(media)} alt="image" className="w-64 h-50 object-cover rounded-2xl" />
                             )}
                             
                        </article>
                        <input onChange={(e) => setMedia(e.target.files && e.target.files[0] ? e.target.files[0] : null)} id="image-upload" type="file" accept="image/*" className="hidden" />
                         <label htmlFor="image-upload" className="rounded-xl border text-[#1A365D] font-semibold font-[Open Sans] border-[#1A365D] px-3 py-2">Change Image</label>
                    </div>
                </div>

                
            </form>
        </div>
     );
}