import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { FaApple, FaSpinner } from "react-icons/fa6";


export default function SignIn () {

    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");
    // const [error, setError] = useState ("");
    const [eyePassword, setEyePassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState ("");

    const navigate = useNavigate();

    useEffect(() => {
        window.history.pushState(null, "", window.location.href);
        window.addEventListener("popstate", () => {
            window.history.pushState(null, "", window.location.href);
        });
    }, []);


    const userData = {email,password}; localStorage.setItem("user", JSON.stringify(userData));
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!email || !password) {
            setError("All information is required");
            setLoading(false);
            return;
        }

        const user_Email = localStorage.getItem("UserEmail");
        if(email !== user_Email) {
            setError("This Email is not registered on this device");
            setLoading(false);
            return;
        }

        try{
            const res = await fetch("https://twokw-backend.onrender.com/api/v1/auth/login", {
                method: "POST",
                headers: {"Content-Type": "application/json" },
                body: JSON.stringify({email, password}),
            });

            const data = await res.json();

            if(!res.ok) 
                throw new Error(data.msg || "sign-In not successful");
                setLoading(false);

            localStorage.setItem("authToken", data.token);

            if(res.ok) {
                localStorage.setItem("isLOggedIn", "true");
            }else {
                setError(data.msg || "Login Failed");
                setLoading(false);
            }

            setError("sign-In successful");
            navigate("/login-complete", { replace: true });
            setEmail("");
            setpassword("");
        }catch (err) {
            console.log(ero.msg);
            setError( "NetWork Error");
            setLoading(false)
        }finally{
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="overflow-y-hidden md:min-h-screen flex justify-center md:items-center bg-white w-full">
                <div className="w-full md:w-auto md:bg-[#C1CAD8] md:shadow-lg px-4 py-4 space-y-5 flex md:justify-center md:items-center flex-col md:px-20 md:mx-0 mx-2">
                <h1
                    className="text-3xl cursor-pointer flex items-center font-bold justify-center font-serif text-[#1A365D] pt-5"
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
                    Sign In
                </h2>
                <form onSubmit={handleSubmit} className="w-full md:w-auto justify-center items-center flex-col flex space-y-4 md:space-y-0 ">

                        <div className="w-full my-3">
                        <label className="block text-[#1E1E1E] font-sans">Email</label>
                        <input
                            type="email"
                            autoComplete="on"
                            required
                            value={email}
                            placeholder="example04@gamail.com"
                            onChange={(e) => setEmail(e.target.value)}
                            className="border border-[#00000066] md:border-none md:bg-[#F5F2F2] w-full md:min-w-[381px] md:py-1 py-2 md:px-3 px-4 rounded-[0.4rem] focus:ring-[#1A365D] outline-none focus:ring-1 placeholder-[#1A365D]/80" />
                    </div>

                    <div className="w-full my-3">
                        <label className="block text-[#1E1E1E] font-sans">Password</label>
                        <div className="relative">
                            <input
                                type={eyePassword ? "text" :"password"}
                                autoComplete="on"
                                required
                                value={password}
                                placeholder="......"
                                onChange={(e) => setpassword(e.target.value)}
                                className="border border-[#00000066] md:border-none placeholder:font-semibold placeholder:text-2xl placeholder:tracking-widest md:bg-[#F5F2F2] w-full md:min-w-[381px] md:py-1 py-2 md:px-3 px-4 rounded-[0.4rem] focus:ring-[#1A365D] outline-none focus:ring-1 placeholder-[#1A365D]/80" />
                                <button
                                className="absolute right-3 top-2.5 text-[#1E1E1E]/60"
                                    type="button"
                                    onClick={() => setEyePassword(!eyePassword)}>
                                    {eyePassword ? <Eye size={15} /> : <EyeOff size={15} />}
                                </button>
                        </div>
                    </div>
                        
                    
                    <div className="flex flex-col items-start w-full sp">
                        <Link to={"/forgot-password"} className="text-[#1A365D] ">Forgot Password</Link>

                            {error && (
                                <p className=" py-1 mt-2 text-sm rounded-[0.4rem] w-fit text-[#1A365D]">
                                    {error}
                                </p>
                            )}

                        <label className="flex items-center gap-1 py-8">
                            <input type="checkbox" required className="accent-[#1A365D] w-5 h-5 rounded-[0.2rem] "/>
                            <span>Remember me </span>
                        </label>
                    </div>
                        

                    <button type="submit" className="bg-[#1A365D] flex justify-center items-center text-white w-70 rounded-[0.6rem] py-2 mt-6">
                        {loading ? (
                            <div className="flex justify-center items-center gap-1.5 py-1">Sign IN  <FaSpinner className="animate-spin justify-center items-center" /></div>
                           ):(
                               "Sign IN"
                           )}
                    </button>
                    <p className="text-[#1E1E1E] p-0.5">
                        Dont have an account?
                        <Link className="p-0.5 text-[#D7A006] font-normal font-[Sora]" to={"/sign-Up"}>
                            Sign-Up
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
        </div>
    )
}

