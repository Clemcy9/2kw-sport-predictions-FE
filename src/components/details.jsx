import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function PredictionDetails() {
    const navigate = useNavigate();
    const [prediction, setPrediction] = useState(null);
    
   useEffect( () =>{
    setPrediction("");
    });
   
    if (!prediction)
        return (
            <div className="min-h-screen flex flex-col items-center justify-center  text-[#1a365d]">
                <p className="text-gray-400 text-lg mb-4">No prediction found.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-[#D6AE3E] text-[#1a365d] px-6 py-2 rounded-md font-semibold hover:bg-[#b89030] transition-all"
                >
                    Go Back
                </button>
            </div>
        );

    return (
        <section className="min-h-screen bg-white text-[#1a365d] py-10 px-4 md:px-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-3xl mx-auto bg-[#1A365D]/70 border border-[#D6AE3E]/40 rounded-lg p-6 shadow-lg"
            >
               

                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate(-1)}
                        className="bg-[#D6AE3E] text-[#0A0A0A] px-8 py-2 rounded-md font-semibold hover:bg-[#b89030] transition-all"
                    >
                        Back to Predictions
                    </button>
                </div>
            </motion.div>
        </section>
    );
}
