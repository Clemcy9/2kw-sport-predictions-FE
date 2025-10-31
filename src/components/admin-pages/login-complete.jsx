// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import successAnimation from "../../assets/lottieflow-success-08-059D3F-linear.json"
// import { CheckCircle } from "lucide-react";

export default function LoginCompleted() {
    
    const navigate = useNavigate();

    const handleSendOTP = (e) => {
        navigate("/admin");
        e.preventDefault();
    };

    // const handleSubmit = async (e) => {

    // };

    

    return (
        <div className="min-h-screen flex justify-center items-center bg-white w-full">

            <div className="w-full md:w-auto mx-2 md:mx-0 bg-[#C1CAD8] shadow-sm px-4 py-4 space-y-10 flex justify-center items-center flex-col md:px-15 md:my-5 md:py-8">
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

                <AnimatePresence>
                    <motion.h2 initial={{ opacity: 0, y: 10 }}
                        key="otp title"
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            delay: 0.6,
                            duration: 0.5,
                            ease: "easeOut",
                        }} className="font-[sora] font-semibold text-[#1E1E1E] text-2xl">
                          Confirm OTP
                    </motion.h2>

                        <motion.div
                            key="lottie animation"
                            initial={{ scale: 0.5, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 200,
                                damping: 15,
                            }}
                            className="flex flex-col items-center"
                        >
                          
                                {/* <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: [0, 1.3, 1] }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeOut",
                                        delay: 0.2,
                                    }}
                                >
                                    <CheckCircle className="text-green-600 w-16 h-16" />
                                </motion.div> */}

                        <Lottie
                        key="animation"
                            animationData={successAnimation}
                            loop={true}
                            autoplay
                            className="w-30 h-30"
                        />

                                </motion.div>
                            <motion.h3
                                
                                key="mode"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 0.8, y: 0 }}
                                transition={{
                                    delay: 0.8,
                                    duration: 0.5,
                                }}
                                className=" text-[20px] font-[sora] font-normal text-[#1E1E1E]"
                            >
                                Success
                            </motion.h3>
                    
                </AnimatePresence>


            <button type="button" onClick={handleSendOTP} className="bg-[#1A365D] text-white md:w-70 w-56 rounded-[0.7rem] py-2 my-6">
                Done
            </button>

            </div>    

        </div>
    );
}

