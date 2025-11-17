import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function ForgotPassword () {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState ("");

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        try{
            const res = await fetch("http://localhost:5000/api/v1/auth/forgot-password", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({ email}),
            });

            const data = await res.json();

            if(!res.ok) {
                setMessage(data.message || "Another Problem");
                return;
            }
            
            setMessage("email upload successful");
            setEmail("");
            navigate("/reset-otp", { replace: true });
            
        }catch (ero) {
            setMessage(ero.message);
        }
    };

    return (
        <div>
            <div className="flex justify-center md:items-center md:min-h-screen bg-white w-full overflow-y-hidden">
            <div className="w-full md:w-auto mx-2 md:mx-0 md:bg-[#C1CAD8] shadow-sm px-4 py-4 space-y-10 flex justify-center items-center flex-col md:px-15 md:my-5 md:py-12">
                <h1
                    className="text-3xl cursor-pointer flex items-center font-bold justify-center font-serif text-[#1A365D] py-6"
                >
                    <motion.span
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="text-[24px]"
                    >
                        ⚽
                    </motion.span>
                    2KwPredicts
                </h1>
                    <h2 className="font-[sora] font-semibold text-[#1E1E1E] text-2xl">
                    Forgot Password
                </h2>
                    <h3 className="font-[sora] font-normal text-[#1E1E1E] text-[20px]"> 
                    Enter Your Email
                </h3>
                <form onSubmit={handleSubmit} className=" justify-center items-center flex-col flex space-y-8 w-full">

                    <div className="w-full">
                        <label className="block text-[#1E1E1E] font-sans">Email</label>
                        <input
                            type="email"
                            autoComplete="on"
                            required
                            value={email}
                            placeholder="example04@gamail.com"
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-[#00000066] md:border-none md:bg-[#F5F2F2] w-full md:min-w-[381px] md:py-1 py-2 md:px-3 px-4 rounded-[0.6rem] focus:ring-[#1A365D] outline-none focus:ring-1 placeholder-[#1A365D]/80" />
                    </div>

                        
                        <button type="submit" className="bg-[#1A365D] text-white w-70 rounded-[0.6rem] py-2 mt-6">
                        Send OTP
                    </button>
                </form>
            </div>    
        </div>
       
        </div>
    )
}

