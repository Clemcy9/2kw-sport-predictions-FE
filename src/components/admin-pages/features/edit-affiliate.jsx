// import { useState } from "react";
import { useState } from "react";
// import GoBack from "../../shared/Back";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import { userToken } from "../../hooks/useAuth";
import AnimationModal from "../../store/animation-modal";
// import { userToken } from "../hooks/auth";




export default function Edit_Affiliate () {

    const [link_type,setLink_type] = useState("");
    const [label, setLabel] = useState("");
    const [url, setUrl] = useState("");
    const [dropdown, setDropdown] = useState(null);
    const [status, setStatus] = useState("draft");
    const [modal, setModal] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const token = userToken();

    const dropdown_items = [
        {
        title: "navbar",
        id: 1,
       },
        {
        title: "footer",
        id: 2,
       },
    ];
    const reset_data = () => {
        setLabel("");
        // setLocation("");
        setUrl("");
       setLink_type("");
        setStatus("draft");
        // setpublished("");
        // setDraft("");
    };

    const edit_Affiliate = async (e) => {
        e.preventDefault();
        setLoading(true);
        setModal(null)

        try{
            const res = await fetch("https://twokw-backend.onrender.com/api/v1/affiliatelinks",
                {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({link_type, label, url, status: status.trim(),}),
              }
            );
            const data = await res.json();

            if (!res.ok) {
				throw new Error(data.message || "Failed to delete prediction");
			}

            reset_data();
            console.log("response after affiliate:", data)

            if (res.ok) {
                setModal(true)
                
                setTimeout(() => {
                setModal(null)
            }, 1500);
            }
            


           setLabel("");
           setUrl("");
           setLink_type("");
           setStatus("draft");


        } catch(err) {
            console.error("error while posting data:", err);
            setError(err.message || "Network Error")
            reset_data();
        }finally{
            setError(null);
        }
    }
 

    return(
        <main className="p-4 lg:px-5 flex flex-col  w-full">
               {/* <button className="lg:hidden"> */}
                {/* <GoBack /> */}
               {/* </button> */}
            <div className="flex justify-between font-semibold font-sans text-2xl w-full py-4  lg:py-6">
                <h1 className="lg:font-semibold font-bold font-[Inria Sans]  text-center w-full lg:text-left">Edit Affiliate Links</h1>
                <button onClick={() => reset_data()} className="hidden lg:block bg-[#DA3737] text-sm text-white px-8 py-2 shadow-sm font-normal  rounded-xl">
                    Cancel
                </button>
            </div>

            <form onSubmit={edit_Affiliate} onClick={() => setDropdown(false)} className="py-12" >
                <div className="flex lg:flex-row flex-col justify-between items-center gap-10" onClick={(e) => e.stopPropagation()}>
                    <div className="relative w-full">
                        <div className=" py-3 w-full">
                        <label className="py-2">Link Type</label>
                        <input readOnly onClick={() => setDropdown(false)} value={link_type} required autoComplete="on" onChange={(e) =>setLink_type(e.target.value)} type="text" className="w-full focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white appearance-none border  border-[#1A365D] lg:border-[#00000066] p-2 rounded-xs" placeholder="Provide Page Title Here" />
                        <button onClick={() => setDropdown(!dropdown)} type="button" className="absolute right-3 top-1/2 ">
                            {dropdown ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                        </button>

                        <section className="w-full absolute flex justify-end items-end ">
                            {dropdown && (
                         <motion.div
                         className="flex justify-end items-end flex-col w-full max-w-40 border shadow-xl rounded-xs border-[#1A365D] bg-white"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        {dropdown_items.map((items) => (
                            <div key={items.id} onClick={() => {setLink_type(items.title); setDropdown(false)}} className="p-2  w-full flex justify-center items-center hover:bg-[#1A365D] text-[#1A365D] hover:text-white ">
                               {items.title}
                           </div>
                        ))}
                        </motion.div>
                    )}
                    </section>
                    </div>
                    </div>

                    
                
                    {/* <div className="flex flex-col py-3 w-full">
                        <label className="py-2">Location</label>
                        <input value={location} required autoComplete="on" onChange={(e) => setLocation(e.target.value)} type="text" className="border border-[#00000066] p-2 rounded-xs" placeholder="Provide Page Slug Here" />
                    </div> */}
                </div>
                <div className="flex flex-col py-3"> 
                    <label className="py-2">Label</label>
                    <input value={label} onClick={() => setDropdown(false)} required autoComplete="on" onChange={(e) => setLabel(e.target.value)} type="text" className="border border-[#1A365D] lg:border-[#00000066] p-2 rounded-xs" placeholder="Provide Page Description Here"/>
                </div>
                <div className="flex flex-col py-3">
                    <label className="py-2">URL</label>
                    <input value={url} onClick={() => setDropdown(false)} required autoComplete="on" onChange={(e) => setUrl(e.target.value)} type="text" className="border border-[#1A365D] lg:border-[#00000066] p-2 rounded-xs" placeholder="Enter URL"/>
                </div>
                <div className="pb-10 space-y-4" onClick={() => setDropdown(false)}>
                    <h3 className="py-3">Set Visibility</h3>
                    <aside className="flex items-center gap-5">
                        <div className="flex justify-center items-center gap-1 text-[#00000066] font-semibold">
                            <label  className="text-[#1A365D]">Visible</label>
                            <input required checked={status === "published"} onChange={(e) => setStatus(e.target.value)} value="published" type="radio" name="visible" id="visible" className=" accent-[#1A365D] w-5 h-5 rounded-[0.2rem]" />
                        </div>
                        <div className="flex justify-center items-center gap-1 text-[#00000066] font-semibold">
                            <label  className="text-[#DA3737]">Not Visible</label>
                            <input required checked={status === "draft"} onChange={(e) => setStatus(e.target.value)} value="draft" type="radio" name="visible" id="visible" className="accent-[#DA3737] w-5 h-5 rounded-[0.2rem]" />
                        </div>
                    </aside>
                </div>

                <div className="flex justify-between items-center">
                    <button type="submit" className="w-40 lg:w-auto bg-[#1A365D] text-sm text-white lg:px-10 lg:py-2 py-3 shadow-sm font-normal  rounded-xl">
                        Save Content
                    </button>
                    <button onClick={() => {reset_data(); }} className="w-40 lg:hidden bg-[#DA3737] text-sm text-white lg:px-8 lg:py-1.5 py-3 shadow-sm font-normal  rounded-xl">
                        Cancel
                    </button>
                </div>
                {error && (
                    <h2 className="text-red-700 p-4">{error}</h2>
                )}
            </form>
            {modal && (
                <AnimationModal title="Link Created Successfully"/>
            )}
        </main>
    )
}