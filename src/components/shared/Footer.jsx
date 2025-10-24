import { FaTelegram, FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Footer() {
    const footerLinks = useNavigate();
    const links = [
        {title:"About", path:"/about"},
        {title:"Contact", path:"/"},
        {title:"Privacy", path:"/"},
        {title:"Terms", path:"/"},
    ]
    const iconsLinks =[
        { icon: <FaTelegram />, url: "/", styles:"hover:text-white text-[20px]"},
        { icon: <FaFacebook />, url: "/", styles:"hover:text-white text-[20px]"},
        { icon: <FaInstagram />, url: "/", styles:"hover:text-white text-[20px]"},
        { icon: <FaXTwitter />, url: "/", styles:"hover:text-white text-[20px]"},
    ]
    
    return (
        <footer className="bg-[#1A365D] relative shadow-sm backdrop-blur-md flex flex-col items-center font-sans py-6 md:px-10" >
            <div className="flex md:flex-row md:space-x-6 items-center justify-center md:justify-between flex-col space-y-10 py-10 w-full text-gray-50">
                <div className="flex items-center justify-center flex-col">
                    <h1 className="font-bold text-[32px] items-center flex text-shadow-lg">
                        <motion.span
                            animate={{ rotate:360 }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            ⚽
                        </motion.span>
                        2KwPredict</h1>
                    <p className="text-[14px] text-[#fff]/70">Start your winning journey with us</p>
                </div>
                <div className="flex flex-col items-center">
                    <h2 className="text-[16px] font-bold text-shadow-lg">Company</h2>
                    <div className="flex items-center justify-center gap-6 ">
                        {links.map((link, index) => (
                            <button key={index}
                                onClick={() => footerLinks(link.path)}
                                className="text-[#fff]/70 hover:text-white cursor-pointer transition">
                                {link.title}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h2 className="text-[16px] font-bold text-shadow-lg">Follow us</h2>
                    <div className="flex gap-6 items-center justify-center text-[#D6AE3E] mb-[55px]">
                        {iconsLinks.map((logo, index) => (
                            <a 
                                key={index}
                                href={logo.url}
                                target="_blank"
                                rel="noopener noreferrer" 
                                className= {`${logo.styles} transition-all duration-300`}>
                                {logo.icon}
                            </a>
                        ))}
                    </div>
                   
                </div>
            </div>
            <div className="text-[#fff]/70  border-t-1 border-[#fff]/80 w-full items-center">
                <div className="flex items-center justify-center flex-col space-y-6 md:flex-row md:justify-between ">
                    <p className="text-sm mt-[50px]">
                        &copy; {new Date().getFullYear()} 2KwPreddict. All rights reserved.
                    </p>
                    <ul className="flex space-x-6 md:mt-[40px]">
                        <li >Privacy Policy</li>
                        <li>Terms Of Service</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}


