import { useState } from "react";

export default function AdvertTags () {

    const [headerTags, setHeaderTags] = useState("");
    const [footerTags, setFooterTags] = useState("");
    const [messages, setMessages] = useState([]);
    const[quote, setQuote] = useState("");
   

    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const today = new Date(); 
    
    const postMessage = (e) => {
        e.preventDefault();
        if (!headerTags || !footerTags) return;
        const newMsg = {
            id: `${days[today.getDay()]} ${today.getDate()}`,
            status: "Success 👍🏼",
            text: headerTags && footerTags,
            time: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
               
            }),
        };
        if(headerTags !== footerTags){
            setQuote("Cannot send different links") 
            return;
        } 
        if (headerTags.length < 8){
            setQuote("Link is too short")
            return;
        }
        setMessages([...messages, newMsg]);
        
    

         localStorage.setItem("headerTag", headerTags);
         localStorage.setItem("footerTag", footerTags);
    };
    
    return (
        <div className="">
            <h1 className="lg:hidden block font-bold font-[Inria Sans] lg:hidden text-center py-4">
                Header & Footer Tags
            </h1>

            <form onSubmit={postMessage} className="flex flex-col justify-center items-center lg:w-auto lg:px-10 px-5 space-y-5 lg:space-y-10 lg:py-10 py-5">

                <div className="w-full">
                    <label className="text-[#1E1E1E] font-[Inria Sans] text-xl font-normal">Header Tags</label>
                    <textarea required type="text" value={headerTags} onChange={(e) => setHeaderTags(e.target.value)} className="border border-[#00000066] lg:h-48 h-36 px-2 py-3 w-full text-left align-top" />
                </div>
                {quote && (
                    <p className="text-[#1A365D] font-[Inria Sans] text-xl font-light">{quote}</p>
                )};
                <div className="w-full">
                    <label className="text-[#1E1E1E] font-[Inria Sans] text-xl font-normal">Footer Tags</label>
                    <textarea required type="text" value={footerTags} onChange={(e) => setFooterTags(e.target.value)} className="border border-[#00000066] rounded-[0.6em] lg:h-60 h-40 px-2 py-3 w-full  text-left align-top" />
                </div>
               <div className="flex justify-center gap-4">
                    <button type="submit" className="bg-[#1A365D] text-white w-80 text-xl rounded-[0.6rem] py-2 mt-4">
                        Add Tags
                    </button>
                   
               </div>
               </form>

                {messages.map((msg) => (
                    <div className="flex flex-col justify-center items-center lg:w-auto lg:px-10 px-5 space-y-10 lg:py-10 py-5">
                        <div key={msg} className="w-full px-4 border border-[#1A365D] flex justify-between gap-6 rounded-[0.6rem]">
                            <h3 className="text-xl font-semibold text-[#1A365D] flex justify-center flex-col">Link Name: <span className="font-light">{msg.text}</span></h3>
                            <p className="text-xl font-semibold text-[#1A365D] flex justify-center flex-col">Date Published: <span className="font-light">{msg.id}</span></p>
                            <p className="text-xl font-semibold text-[#1A365D] flex justify-center flex-col">Time Published: <span className="font-light">{msg.time}</span></p>
                            <p className="text-xl font-semibold text-[#1A365D] flex justify-center flex-col">Status: <span className="font-light">{msg.status}</span></p>
                        </div>
                   </div>
                ))}

        </div>
    )
}