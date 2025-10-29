import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

import AdminHeader from "./header";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {

    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowassword] = useState(false);
    const [eyePassword, setEyePassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate()

    const handleSendOTP = () => {
        navigate("/success-otp");
    };


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== password) {
            setMessage("passwords do not match");
            return;
        }

        try {
            const res = await fetch("backend/api/url", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ newPassword, password }),
            });

            const data = await res.json();

            if (!res.ok)
                throw new Error(data.msg || "change password not successful");

            localStorage.setItem("auth Token", data.token);

            setMessage("password successfully successful");
            setNewPassword("");
            setPassword("");
        } catch (ero) {
            setMessage(ero.msg);
        }
    };

    return (
        <div>
            <AdminHeader />
            <div className="min-h-screen flex justify-center items-center bg-white w-full">
                <div className="l  bg-[#C1CAD8]  shadow-sm px-4 py-4 space-y-10 flex justify-center items-center flex-col md:px-20">
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
                    <form onClick={handleSubmit} className=" justify-center items-center flex-col flex space-y-8 ">

                        <div className="">
                            <label className="block text-[#1E1E1E] font-sans">Enter New Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="on"
                                    required
                                    value={confirmPassword}
                                    placeholder="......"
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className=" bg-[#F5F2F2] w-full md:min-w-[381px] py-1 px-3 rounded-[0.4rem] focus:ring-[#1A365D] outline-none focus:ring-1 placeholder-[#1A365D]/80" />
                                <button
                                    className="absolute right-3 top-2.5 text-[#1E1E1E]/60"
                                    type="button"
                                    onClick={() => setShowassword(!showPassword)}>
                                    {showPassword ? <Eye size={15} /> : <EyeOff size={15} />}
                                </button>
                            </div>
                        </div>

                        <div className="mb-2">
                            <label className="block text-[#1E1E1E] font-sans">Re-type Password</label>
                            <div className="relative">
                                <input
                                    type={eyePassword ? "text" : "password"}
                                    autoComplete="on"
                                    required
                                    value={password}
                                    placeholder="******"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className=" bg-[#F5F2F2] w-full md:min-w-[381px] placeholder:gap-3 py-1 px-3 rounded-[0.4rem] focus:ring-[#1A365D] outline-none focus:ring-1 placeholder-[#1A365D]/80" />
                                <button
                                    className="absolute right-3 top-2.5 text-[#1E1E1E]/60"
                                    type="button"
                                    onClick={() => setEyePassword(!eyePassword)}>
                                    {eyePassword ? <Eye size={15} /> : <EyeOff size={15} />}
                                </button>
                            </div>


                        </div>

                        <button type="button" onClick={handleSendOTP} className="bg-[#1A365D] text-white w-70 rounded-[0.7rem] font-semibold font-[Open Sans] text-[16px] py-2 my-6">
                            Confirm
                        </button>

                    </form>
                </div>
            </div>
           
        </div>
    )
}

