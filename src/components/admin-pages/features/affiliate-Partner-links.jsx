import { useEffect } from "react";
import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Affiliate_Partner_Links () {

    const [affiliateLinks, setAffiliateLinks] = useState([]);

    const token = localStorage.getItem("authToken");

    useEffect(() => {
        fetch("https://twokw-backend.onrender.com/api/v1/affiliatelinks", 
            {
                 headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
            }
        )
        .then((res) => res.json())
        .then((data) =>{
            console.log(data)
            setAffiliateLinks(data.data);
        });
    }, [token]);

    // const handle_delete = (id) => {
    //     setItems(del => del.filter(item => item.id !== id));
    // };


    return(
        <main className="p-4 lg:px-5 lg:min-h-screen flex flex-col w-full">
            <div className="flex justify-start font-semibold font-sans text-2xl w-full  lg:my-6">
                <h1 className="lg:font-semibold font-bold font-[Inria Sans] mb-4 text-center w-full lg:text-left">Affiliate/Partner Links</h1>
            </div>

            <section>
                        
                <table className="w-full">
                    <thead className="lg:block  hidden">
                            <tr>
                                <div className="flex w-full gap-6">
                                <th className="font-semibold lg:px-1 p-0 lg:py-3 idden lg:block">ID</th>
                               <div className="px-6">
                                    <th className="font-semibold lg:px-10 p-0 lg:py-3">Type</th>
                                    <th className="font-semibold lg:px-1 p-0 lg:py-3">Location</th>
                               </div>
                                <th className="font-semibold lg:px-15 p-0 lg:py-3">Label</th>
                                <th className="font-semibold lg:px-13 p-0 lg:py-3">URL</th>
                               <div className="pl-25">
                                    <th className="font-semibold lg:px-15 p-0 lg:py-3"> Status</th>
                                    <th className="font-semibold lg:px-1 p-0 lg:py-3"> Action</th>
                               </div>
                                </div>
                            </tr>
                        </thead>
                 {affiliateLinks?.map((items,index) => (
                    <tbody  className="w-full">
                            <tr key={items.id} className="w-full">
                               <td>
                                 <div className="border-b-[#00000066] space-y-2 lg:space-y-2 lg:items-center   border-b w-full lg:w-auto flex lg:flex-row flex-col gap-4 lg:gap-22 lg:justify-between">
                                     <article className="px-4 lg:px-1 hidden lg:block">
                                         <h1 className="font-semibold p-0 lg:py-3 lg:hidden">ID</h1>
                                         <p>{index + 1}</p>
                                     </article>
                                     <div className="flex justify-between lg:justify-center lg:gap-10 lg:flex-row">
                                         <article className="lg:px-1 ">
                                             <h1 className="lg:hidden block font-semibold p-0 lg:py-3">Type</h1>
                                             <p className="text-[#1F2128CC]">{items.type}</p>
                                         </article>
                                         <article className=" lg:px-1 ">
                                             <h1 className="font-semibold lg:hidden block p-0 lg:py-3">Location</h1>
                                             <p className="text-[#1F2128CC]">{items.location}</p>
                                         </article>
                                     </div>
                                     <article className="lg:px-1 ">
                                         <h1 className="font-semibold lg:hidden block p-0 lg:py-3">Label</h1>
                                         <p className="text-[#1F2128CC]">{items.label}</p>
                                     </article>
                                     <article className="lg:px-1">
                                         <h1 className="font-semibold lg:hidden block p-0 lg:py-3">URL</h1>
                                         <p className="text-[#1F2128CC]">{items.url}</p>
                                     </article>
                                     <div className="flex justify-between lg:justify-center lg:gap-20 lg:pb-0 pb-2 items-center">
                                         <article className="lg:px-1 ">
                                             <h1 className="font-semibold  p-0 lg:py-3 lg:hidden"> Status</h1>
                                             <p className="text-[#1F2128CC]">{items.status}</p>
                                         </article>
                                         <article className="lg:px-1 ">
                                             <h1 className="hidden font-semibold p-0 lg:py-3"> Action</h1>
                                             <p className=" flex justify-center gap-3 items-center">
                                                 <Link to={"/admin/edit-affiliate"} className="text-amber-400"><FaEdit /></Link>
                                                 <button onClick={() => handle_delete(items.id)} className="text-rose-600"><FaTrash /></button>
                                             </p>
                                         </article>
                                     </div>
                                 </div>
                               </td>
                            </tr>
                        </tbody>
                     ))}
                </table>
            </section>
        </main>
    );
}