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
        <div className="px-8 pt-14 ">
            <form onSubmit={handleSubmit} className="grid grid-cols-[2fr_0.8fr] w-full gap-8 ">
                 <div className="w-full space-y-10">
                     <input type="text" value={title} placeholder="Article Title" onChange={(e) => setTitle(e.target.value)} className="p-3 focus:ring-[#1A365D] outline-none focus:ring-1 border-2 rounded-[0.1em] border-[#00000066] placeholder:text-[#00000066] w-full font-[Inria Sans]" />

                     <textarea value={content} onChange={(e) => setContent(e.target.value)} className="max-h-screen h-[80vh] w-full p-3 focus:ring-[#1A365D] outline-none focus:ring-1 border-1 rounded-xl border-[#00000066] placeholder:text-[#00000066] font-[Inria Sans]"></textarea>
                 </div>
                <div >
                     <button type="submit" className="bg-[#1A365D] text-white w-64 text-xl rounded-xl py-2">
                        Save Article
                     </button>
                     <div className="flex flex-col justify-center items-center gap-6 p-4 space-y-5">
                        {media && isImage(media) &&(
                            <img src={URL.createObjectURL(media)} alt="image" className="w-48 h-48 object-cover " />
                        )}
                        {media && isVideo(media) &&(
                            <video controls src={URL.createObjectURL(media)} className="w-48 h-48 object-cover " />
                        )}
                         <input onChange={(e) => setMedia(e.target.files && e.target.files[0] ? e.target.files[0] : null)} id="image-upload" type="file" accept="image/*, video/*" className="hidden" />
                         <label htmlFor="image-upload" className="rounded-xl border border-[#1A365D] px-3 py-2">Change Image</label>
                     </div>
                </div>

                
            </form>
        </div>
     );
}