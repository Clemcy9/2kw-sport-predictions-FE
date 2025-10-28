import { useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import AdminHeader from "./header";
import { FaArrowTrendUp, FaCheck, FaUser } from "react-icons/fa6";
import Sidebar from "./sidebar";

export default function DashBoard() {

   const numbers = [12485, 82, 3247];

   const count1 = useMotionValue(0);
   const count2 = useMotionValue(0);
   const count3 = useMotionValue(0);

   const statistics1 = useTransform(count1, (value) =>Math.floor(value).toLocaleString() );
   const statistics2 = useTransform(count2, (value) =>Math.floor(value).toLocaleString() + "%" );
   const statistics3 = useTransform(count3, (value) =>Math.floor(value).toLocaleString() );

   useEffect(() => {
       animate(count1, numbers[0], {duration: 2, ease: "easeOut"});
       animate(count2, numbers[1], {duration: 2, ease: "easeOut"});
       animate(count3, numbers[2], {duration: 2, ease: "easeOut"});
    }, []);

    return (
        <div>
            <AdminHeader />
            <div className="flex">
                <div>
               <Sidebar />
                </div>
                <div className="flex justify-between gap-6 w-full sm:h-28 sm:m-10">
                    <div className="p-4 bg-[#F3F8FF] text-[#1A365D] rounded-[0.4rem] w-60 ">
                        <h2 className="text-xl font-extralight font-sans mb-4 flex justify-center items-center gap-2">Total Predictioms
                            <FaArrowTrendUp className="text-[#D6AE3E]" />
                        </h2>

                        <div className="text-4xl font-bold">

                            <motion.span className="text-">{statistics1}</motion.span>
                        </div>
                    </div>
                    <div className="p-4 bg-[#F3F8FF] text-[#1A365D] rounded-[0.4rem] w-60 ">
                        <h2 className="text-xl font-extralight font-sans mb-4 flex justify-center items-center gap-2">Accuracy Rate
                            <span className="w-6 h-6 border-2 border-[#D6AE3E]"> <FaCheck className="text-[#D6AE3E]" /></span>
                        </h2>

                        <div className="text-4xl font-bold">

                            <motion.span className="text-">{statistics2}</motion.span>
                        </div>
                    </div>
                    <div className="p-4 bg-[#F3F8FF] text-[#1A365D] rounded-[0.4rem] w-60 ">
                        <h2 className="text-xl font-extralight font-sans mb-4 flex justify-center items-center gap-2">Active Users
                            <FaUser className="text-[#D6AE3E]" />
                        </h2>

                        <div className="text-4xl font-bold">

                            <motion.span className="text-">{statistics3}</motion.span>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
           

        </div>
    );
}
