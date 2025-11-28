import { useState } from "react";
// import { data } from "react-router-dom";


export default function NewPost () {
    const [title, setTitle] = useState("");
    const [body, setbody] = useState("");
    const [image, setImage] = useState("");

    // const isImage =  (image) => image && image.type?.startsWith("image/");


    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem("authToken");



      try{
          const res = await fetch("https://twokw-backend.onrender.com/api/v1/blogs/", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${token}`,},
               body: JSON.stringify({ title, body, image }),
            });

            const data = await res.json();
            console.log( data);
        

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

                     <textarea value={body} onChange={(e) => setbody(e.target.value)} className="max-h-screen lg:h-[70vh] h-[40vh] w-full p-3 focus:ring-[#1A365D] outline-none focus:ring-1 border-1 rounded-xl border-[#00000066] placeholder:text-[#00000066] font-[Inria Sans]"></textarea>
                </div>
                <div className="flex flex-col items-center space-y-10">
                    <button type="submit" className="bg-[#1A365D] text-white w-64 text-xl rounded-xl py-2">
                        Save Article
                    </button>
                     <div className="flex flex-col justify-center items-center py-4 px-4  rounded-xl bg-[#F5FAFF] ">
                         <h3 className="w-full text-left font-bold text-black/80 font-[Inria Sans]">Feature Image</h3>
                        <article className="border border-[#1A365D] h-50 w-64 rounded-2xl my-4">
                             {/* {image && isImage(image) && (
                                <img src={URL.createObjectURL(image)} alt="image" className="w-64 h-50 object-cover rounded-2xl" />
                             )} */}
                             <input value={image} onChange={(e) => setImage(e.target.value)} className="rounded-xl border text-[#1A365D] font-semibold font-[Open Sans] border-[#1A365D] px-3 py-2 h-50 w-64" placeholder="Enter image Url" />
                        </article>
                        {/* <input onChange={(e) => setImage(e.target.files && e.target.files[0] ? e.target.files[0] : null)} id="image-upload" type="file" accept="image/*" className="hidden" />
                         <label htmlFor="image-upload" className="rounded-xl border text-[#1A365D] font-semibold font-[Open Sans] border-[#1A365D] px-3 py-2">Change Image</label> */}
                    </div>
                </div>

                
            </form>
        </div>
     );
}