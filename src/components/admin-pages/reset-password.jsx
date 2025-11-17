import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function ResetPassword() {

    const [newPassword, setNewPassword] = useState("");
    const [message, setMessage] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowassword] = useState(false);
    const [eyePassword, setEyePassword] = useState(false);
    

    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (newPassword !== password) {
            setMessage("passwords do not match");
            return;
        }

        try {
            const res = await fetch("https://twokw-backend.onrender.com/api/v1/auth/reset-password", {
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
            navigate("/reset-success-otp", { replace: true });
        } catch (ero) {
            setMessage(ero.message);
        }
    };

    return (
        <div className="">
            
            <div className="overflow-y-hidden md:min-h-screen flex justify-center md:items-center bg-white w-full">
                <div className="w-full mx-2 md:w-auto md:mx-0  md:bg-[#C1CAD8]  shadow-sm px-4 py-4 space-y-10 flex justify-center items-center flex-col md:px-20">
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
                    <h2 className="md:hidden text-center py-4 text-[#1E1E1E] font-semibold font-[Sora] text-[1.2rem]">
                        New Password
                    </h2>
                    <form onSubmit={handleSubmit} className="w-full justify-center items-center flex-col flex space-y-8 ">

                        <div className="w-full md:w-auto">
                            <label className="block text-[#1E1E1E] font-sans">Enter New Password</label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    autoComplete="on"
                                    required
                                    value={newPassword}
                                    placeholder="******"
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    className="border border-[#00000066] md:border-none placeholder:font-semibold placeholder:text-2xl text-2xl placeholder:tracking-widest md:bg-[#F5F2F2] w-full md:min-w-[381px] md:py-1 py-2 md:px-3 px-4 rounded-[0.4rem] focus:ring-[#1A365D] outline-none focus:ring-1 placeholder-[#1A365D]/80" />
                                <button
                                    className="absolute right-3 top-2.5 text-[#1E1E1E]/60"
                                    type="button"
                                    onClick={() => setShowassword(!showPassword)}>
                                    {showPassword ? <Eye size={15} /> : <EyeOff size={15} />}
                                </button>
                            </div>
                        </div>

                        <div className="mb-2 w-full md:w-auto">
                            <label className="block text-[#1E1E1E] font-sans">Re-type Password</label>
                            <div className="relative">
                                <input
                                    type={eyePassword ? "text" : "password"}
                                    autoComplete="on"
                                    required
                                    value={password}
                                    placeholder="******"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="border text-2xl border-[#00000066] md:border-none placeholder:font-semibold placeholder:text-2xl placeholder:tracking-widest md:bg-[#F5F2F2] w-full md:min-w-[381px] md:py-1 py-2 md:px-3 px-4 rounded-[0.4rem] focus:ring-[#1A365D] outline-none focus:ring-1 placeholder-[#1A365D]/80" />
                                <button
                                    className="absolute right-3 top-2.5 text-[#1E1E1E]/60"
                                    type="button"
                                    onClick={() => setEyePassword(!eyePassword)}>
                                    {eyePassword ? <Eye size={15} /> : <EyeOff size={15} />}
                                </button>
                            </div>


                        </div>

                        <button type="submit" className="bg-[#1A365D] text-white w-70 rounded-[0.7rem] font-semibold font-[Open Sans] text-[16px] py-2 my-6">
                            Confirm
                        </button>

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

