import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { FaApple} from "react-icons/fa6";
import {FcGoogle} from "react-icons/fc";
import { useNavigate, Link, data } from "react-router-dom";
import { FaSpinner } from "react-icons/fa";

export default function SignUp () {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [eyePassword, setEyePassword] = useState(false);
    const [showPassword, setShowassword] = useState(false);
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState (false);
    const [error, setError] = useState("");

    const navigate = useNavigate();



    const handleSubmit = async (e) => {
        e.preventDefault();
         setLoading(true)

        if (name.trim().split(" ").length < 2) {
            setError("Please enter your full name FirstName and LastName");
            setLoading(false)
            return;
        }

        if(password.length<8){
            setError("password to short!")
            setLoading(false)
            return;
        }

        if(password !== confirmPassword) {
            setError("passwords do not match!");
            setLoading(false)
            return;
        }

        try{
            const res = await fetch("https://twokw-backend.onrender.com/api/v1/auth/register", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password}),
            });

            const data = await res.json();
            console.log("Backend Response", data);

            if(!res.ok){
                setError(data.msg || "sign-Up not successful");
                setLoading(false);
                return;
            }

            if (res.ok){
                localStorage.setItem("userEmail", email);
                onSignUP();
            } else{
                setError(data.msg || "SignUp Failed");
            }

            // seterror(data.error || "Account Created Successfully");

            localStorage.setItem("name", JSON.stringify(name));
            localStorage.setItem("authToken", data.token);
            localStorage.setItem("userId",data.userId);

           
        }catch (err) {
            console.error(data.msg);
            setError(data.msg);
        }finally{
            setLoading(false)
            setError("sign-Up successful");
            navigate("/sign-in", { replace: true });
            setName("");
            setEmail("");
            setPassword("");
            setConfirmPassword("");

        }
    };

    return (
        <div className="flex justify-center md:items-center md:min-h-screen bg-white w-full overflow-y-hidden">
            <div className=" w-full md:w-auto md:bg-[#C1CAD8] md:shadow-lg px-4 py-4 space-y-5 flex md:justify-center md:items-center flex-col md:px-20 md:mx-0 mx-2">
                <h1
                    className="text-3xl cursor-pointer flex items-center font-bold justify-center font-serif text-[#1A365D] pt-3"
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
                    Sign Up
                </h2>
                <form onSubmit={handleSubmit} className="w-full md:w-auto justify-center items-center flex-col flex md:space-y-4 ">

                    <div className="w-full my-3 ">
                        <label className="block text-[#1E1E1E] font-sans">Full Name</label>
                        <input
                            type="text"
                            required
                            autoComplete="on"
                            value={name}
                            placeholder="Your Full Name"
                            onChange={(e) => setName(e.target.value)}
                            className="border border-[#00000066] md:border-none md:bg-[#F5F2F2] w-full md:min-w-[381px] md:py-1 py-2 md:px-3 px-4 rounded-[0.6rem] focus:ring-[#1A365D] outline-none focus:ring-1 placeholder-[#1A365D]/80" />
                    </div>

                    <div className="w-full my-3 ">
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

                    <div className="w-full my-3 ">
                        <label className="block text-[#1E1E1E] font-sans">Password</label>
                        <div className="relative">
                            <input
                                type={eyePassword ? "text" :"password"}
                                autoComplete="on"
                                required
                                value={password}
                                placeholder="......"
                                onChange={(e) => setPassword(e.target.value)}
                                className="border border-[#00000066] md:border-none placeholder:font-semibold placeholder:text-2xl placeholder:tracking-widest md:bg-[#F5F2F2] w-full md:min-w-[381px] md:py-1 py-2 md:px-3 px-4 rounded-[0.6rem] focus:ring-[#1A365D] outline-none focus:ring-1 placeholder-[#1A365D]/80" />
                                <button
                                className="absolute right-3 top-2.5 text-[#1E1E1E]/60"
                                    type="button"
                                    onClick={() => setEyePassword(!eyePassword)}>
                                    {eyePassword ? <Eye size={15} /> : <EyeOff size={15} />}
                                </button>
                        </div>
                    </div>
                    <div className="w-full my-3 ">
                        <label className="block text-[#1E1E1E] font-sans">Confirm Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" :"password"}
                                autoComplete="on"
                                required
                                value={confirmPassword}
                                placeholder="......"
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                className="border border-[#00000066] md:border-none placeholder:font-semibold placeholder:text-2xl placeholder:tracking-widest md:bg-[#F5F2F2] w-full md:min-w-[381px] md:py-1 py-2 md:px-3 px-4 rounded-[0.6rem] focus:ring-[#1A365D] outline-none focus:ring-1 placeholder-[#1A365D]/80" />
                                <button
                                className="absolute right-3 top-2.5 text-[#1E1E1E]/60"
                                    type="button"
                                    onClick={() => setShowassword(!showPassword)}>
                                    {showPassword ? <Eye size={15} /> : <EyeOff size={15} />}
                                </button>
                        </div>

                        {error && (
                            <p className= " py-1 mt-2 text-sm rounded-[0.4rem] w-fit text-[#1A365D]">
                                {error}
                            </p>
                        )}

                    </div>

                    <button disabled={loading} type="submit"  className="flex justify-center items-center bg-[#1A365D] text-white w-70 rounded-[0.6rem] py-2 mt-4">

                        {loading ? (
                            <div className="flex justify-center items-center gap-1.5 py-1"> Sign UP <FaSpinner className="animate-spin justify-center items-center" /></div>
                        ):(
                            "Sign UP"
                        )}
                    </button>
                    <p className="text-[#1E1E1E] p-0.5">
                        Already have an account?
                        <Link className="p-0.5 text-[#D7A006] font-normal font-[Sora]" to={"/sign-in"}>
                           Sign-In 
                        </Link>
                    </p>
                </form>

                
                <div className="md:hidden flex justify-center items-center flex-col space-y-4 pt-8">
                    <h3>
                        Continue With
                    </h3>
                    <div className="flex gap-6 w-80">
                       
                        <button className="cursor-pointer flex justify-center items-center gap-2 border border-[#1A365D] px-4 py-2 rounded-[0.5rem] text-[#1A365D] font-normal font-[Sora] min-w-auto w-full">
                            <FcGoogle />
                            <span>
                                Google
                            </span>
                        </button>
                        <button className="cursor-pointer flex justify-center items-center gap-2 border border-[#1A365D] px-4 py-2 rounded-[0.5rem] text-[#1A365D] font-normal font-[Sora] min-w-auto w-full">
                            <FaApple className="text-black"/>
                            <span>
                                Apple 
                            </span>
                        </button>
                    </div>
                </div>
            </div>
               
        </div>
    )
}
