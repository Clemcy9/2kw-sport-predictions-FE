import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import AdminHeader from "./header";

export default function LoginOtp () {

    const [otp, setOtp] = useState("");
    const [message, setMessage] = useState ("");

    const inputsRef = useRef([])

    const navigate = useNavigate();

    const handleSendOTP = () => {
        navigate("/login-complete");
    };

    const handleInput = (e, index) => {
        e.preventDefault();

        const value = e.target.value;
        
        e.target.value = value.slice(-1);

        if(value && index < inputsRef.current.length -1){
            inputsRef.current[index + 1].focus();
        }
    };

    const handleKeyDown = (e, index) => {
        if (e.key === "Backspace" && !e.target.value && index > 0) {
            inputsRef.current[index - 1].focus();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({otp: "0204" }),
            });

            const data = await res.json();

            if (!res.ok)
                throw new Error(data.msg || "OTP not valid");

            localStorage.setItem("auth Token", data.token);

            setMessage("OTP verified");
            // navigate("/admin");
            setOtp("");
        } catch (ero) {
            setMessage(ero.message);
        }

    };
    return (
        <div>
            <AdminHeader />
            <div className=" flex justify-center items-center bg-white w-full">
                <div className=" bg-[#C1CAD8] shadow-sm px-4 py-4 space-y-10 flex md:w-[36rem] justify-center items-center flex-col md:px-15 md:my-5 md:py-12">
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
                    <h2 className="font-[sora] font-semibold text-[#1E1E1E] text-2xl ">
                        Confirm OTP
                    </h2>

                    <form onSubmit={handleSubmit} className=" justify-center items-center flex-col flex space-y-8 ">
                        <div className="flex gap-6">
                            {[0,1,2,3].map((_, index) => (
                                <input type="number" key={index} maxLength={1} onChange={(e) => handleInput(e, index)} onKeyDown={(e) => handleKeyDown(e, index)} ref={(el) => (inputsRef.current[index] = el)} className="bg-[#FCFCFC] border border-[#2743FD] w-[72px] h-[57px] rounded-[0.5rem] focus:ring-2 focus:outline-none focus:ring-[#2743FD] flex justify-center items-center text-center font-semibold font-[sora] text-[#737373] text-lg" />
                            ))}
                        </div>
                        <h3 className="text-[#737373] font-[Montserrat] font-semibold">Input the four digit code sent to your email.</h3>

                        <div className="">
                            <button type="submit" onClick={handleSendOTP} className="bg-[#1A365D] text-white w-70 rounded-[0.7rem] font-semibold font-[Open Sans] text-[16px] py-2 my-6">
                                Confirm
                            </button>

                            <p className="font-[Lato] font-bold text-[#1E1E1E] text-[14px] cursor-pointer text-left">Didn’t receive OTP? <span className="font-[Lato] text-[#D6AE3E] underline font-bold px-2">Resend</span></p>
                        </div>
                    </form>
                {message && (
                    <p className="text-red-600">
                        {message}
                    </p>
                )}
                </div>

            </div>
       </div>
    )
}



