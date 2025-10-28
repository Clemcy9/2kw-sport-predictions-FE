import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "../shared/Footer";
import AdminHeader from "./header";

export default function ForgotPassword () {

    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState ("");

    const navigate = useNavigate();

    const handleSendOTP = () => {
        navigate("/confirm");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        
        try{
            const res = await fetch ("backend/api/url", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({ email}),
            });

            const data = await res.json();

            
            setMessage("email upload successful");
            setEmail("");
        }catch (ero) {
            setMessage(ero.msg);
        }
    };

    return (
        <div>
            <AdminHeader />
        <div className="min-h-screen flex justify-center items-center bg-white w-full">
            <div className="l  bg-[#C1CAD8]  shadow-sm px-4 py-4 space-y-10 flex justify-center items-center flex-col md:px-15 md:py-10">
                <h1
                    className="text-3xl cursor-pointer flex items-center font-bold justify-center font-serif text-[#1A365D] py-5"
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
                    <h2 className="font-sans text-[#1E1E1E] text-2xl">
                    Confirm OTP
                </h2>
                   
                <form onClick={handleSubmit} className=" justify-center items-center flex-col flex space-y-8 ">
                    <div>
                        <input type="number" className="bg-[#FCFCFC] border border-[#2743FD] w-16 h-16"/>
                        <input type="number" className="bg-[#FCFCFC] border border-[#2743FD] w-16 h-16"/>
                        <input type="number" className="bg-[#FCFCFC] border border-[#2743FD] w-16 h-16"/>
                        <input type="number" className="bg-[#FCFCFC] border border-[#2743FD] w-16 h-16"/>
                    </div>
                        
                        <button type="button" onClick={handleSendOTP} className="bg-[#1A365D] text-white w-70 rounded-[0.4rem] py-2 my-6">
                        Conirm
                    </button>
                </form>
            </div>    
        </div>
         <Footer />
        </div>
    )
}

