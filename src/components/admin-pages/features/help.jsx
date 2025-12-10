export default function Help_And_Support () {

    return(
        <main className="hidden p-4 lg:px-5 flex flex-col justify-center items-center w-full">
            <div className="flex justify-between font-semibold font-sans text-2xl w-full py-4  lg:py-6">
                <h1 className="lg:font-semibold font-bold font-[Inria Sans]  text-center w-full lg:text-left">General Inquiries & Support</h1>
                
            </div>
            <form action=" " className="w-full">
                <div className="w-full">
                    <div className="flex lg:flex-row flex-col justify-between lg:gap-6">
                        <div className="flex flex-col py-3 w-full">
                            <label htmlFor="" className="py-2">First Name</label>
                            <input type="text" className="border border-[#00000066] p-2 rounded-xs" placeholder="Enter Your First Name Here" />
                        </div>

                        <div className="flex flex-col py-3 w-full">
                            <label htmlFor="" className="py-2">Last Name</label>
                            <input type="text" className="border border-[#00000066] p-2 rounded-xs" placeholder="Provide Page Slug Here" />
                        </div>
                    </div>
                    <div className="flex lg:flex-row flex-col justify-between lg:gap-6">
                        <div className="flex flex-col py-3 w-full">
                            <label htmlFor="" className="py-2">Phone No+</label>
                            <input type="number" className="border border-[#00000066] p-2 rounded-xs" placeholder="Enter Your Phone Number Here" />
                        </div>
                        <div className="flex flex-col py-3 w-full">
                            <label htmlFor="" className="py-2">Email</label>
                            <input type="email" className="border border-[#00000066] p-2 rounded-xs" placeholder="example@gmail.com" />
                        </div>
                    </div>
                    <div className="flex flex-col py-3">
                        <label htmlFor="" className="py-2">Message</label>
                        <textarea className="border border-[#00000066] h-30 p-2 rounded-xs" placeholder="Enter Your Message" />
                    </div>
                </div>
                <div className="flex justify-center lg:justify-start items-center">
                    <button className=" bg-[#1A365D] text-sm text-white px-8 py-2 shadow-sm font-normal  rounded-xl">
                        Send
                    </button>
                </div>
            </form>
       </main>
    )
}