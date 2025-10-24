import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";

export default function SignUp () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState ("");
    const [password, setPassword] = useState("");
    const [eyePassword, setEyePassword] = useState(false);
    const [showPassword, setShowassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(password !== confirmPassword) {
            setMessage("passwords do mot math");
            return;
        }

        try{
            const res = await fetch ("backend/api/url", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, confirmPassword}),
            });

            const data = await res.json();

            if(!res.ok) 
                throw new Error(data.msg || "sign-Up not successful");

            localStorage.setItem("name", JSON.stringify(name));
            localStorage.setItem("authToken", data.token);

            setMessage("sign-Up successful");
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");
        }catch (ero) {
            setMessage(ero.msg);
        }
    };

    return (
        <div className="min-h-screen flex justify-center items-center bg-white w-full">
            <div className="l  bg-[#C1CAD8]  shadow-sm px-4 py-4 space-y-5 flex justify-center items-center flex-col md:px-20">
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
                <form onClick={handleSubmit} className=" justify-center items-center flex-col flex space-y-4 ">

                    <div className="">
                        <label className="block text-[#1E1E1E] font-sans">Full Name</label>
                        <input
                            type="text"
                            required
                            autoComplete="on"
                            value={name}
                            placeholder="Your Full Name"
                            onChange={(e) => setName(e.target.value)}
                            className=" bg-[#F5F2F2] w-full md:min-w-[381px] py-1 px-3 rounded-[0.4rem] focus:ring-[#1A365D] outline-none focus:ring-1 placeholder-[#1A365D]/80" />
                    </div>

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

                    <div className="">
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
                    </div>
                    <div className="">
                        <label className="block text-[#1E1E1E] font-sans">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" :"password"}
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

                    <button type="submit" className="bg-[#1A365D] text-white w-70 rounded-[0.4rem] py-2 my-6">
                        Sign UP
                    </button>
                </form>
            </div>
               
        </div>
    )
}

