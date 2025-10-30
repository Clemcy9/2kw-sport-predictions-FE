import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import AdminHeader from "./header";

export default function SignIn () {

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState ("");
    const [password, setPassword] = useState("");
    const [eyePassword, setEyePassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!email || !password) {
            setMessage("Please fill all data");
            return;
        }

        try{
            const res = await fetch ("backend/api/url", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({ email, password}),
            });

            const data = await res.json();

            if(!res.ok) 
                throw new Error(data.msg || "sign-In not successful");

            localStorage.setItem("auth Token", data.token);

            setMessage("sign-In successful");
            setEmail("");
            setPassword("");
        }catch (ero) {
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
                        <label className="block text-[#1E1E1E] font-sans">Email</label>
                        <input
                            type="email"
                            autoComplete="on"
                            required
                            value={email}
                            placeholder="example04@gamail.com"
                            onChange={(e) => setEmail(e.target.value)}
                            className=" bg-[#F5F2F2] w-full md:min-w-[381px] py-1 px-3 rounded-[0.4rem] focus:ring-[#1A365D] outline-none focus:ring-1 placeholder-[#1A365D]/80" />
                    </div>

                    <div className="mb-2">
                        <label className="block text-[#1E1E1E] font-sans">Password</label>
                        <div className="relative">
                            <input
                                type={eyePassword ? "text" :"password"}
                                autoComplete="on"
                                required
                                value={password}
                                placeholder="......"
                                onChange={(e) => setPassword(e.target.value)}
                                className=" bg-[#F5F2F2] w-full md:min-w-[381px] py-1 px-3 rounded-[0.4rem] focus:ring-[#1A365D] outline-none focus:ring-1 placeholder-[#1A365D]/80" />
                                <button
                                className="absolute right-3 top-2.5 text-[#1E1E1E]/60"
                                    type="button"
                                    onClick={() => setEyePassword(!eyePassword)}>
                                    {eyePassword ? <Eye size={15} /> : <EyeOff size={15} />}
                                </button>
                        </div>

                        <Link to={"/forgot-password"} className="text-[#1A365D] ">Forgot Password</Link>
                        
                    </div>

                    <button type="submit" className="bg-[#1A365D] text-white w-70 rounded-[0.4rem] py-2 my-6">
                        Sign In
                    </button>
                </form>
            </div>    
        </div>
        </div>
    )
}

