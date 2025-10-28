import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function PredictionDetails() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [prediction, setPrediction] = useState(null);

    useEffect(() => {
        const stored = localStorage.getItem("selectedPrediction");
        if (stored) setPrediction(JSON.parse(stored));
    }, [id]);

    if (!prediction)
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] text-white">
                <p className="text-gray-400 text-lg mb-4">No prediction found.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-[#D6AE3E] text-[#0A0A0A] px-6 py-2 rounded-md font-semibold hover:bg-[#b89030] transition-all"
                >
                    Go Back
                </button>
            </div>
        );

    return (
        <section className="min-h-screen bg-[#0A0A0A] text-white py-10 px-4 md:px-10">
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="max-w-3xl mx-auto bg-[#1A365D]/70 border border-[#D6AE3E]/40 rounded-lg p-6 shadow-lg"
            >
                <h1 className="text-3xl font-bold text-[#D6AE3E] mb-6 text-center">
                    {prediction.league} Match Details
                </h1>

                <div className="flex justify-between items-center mb-6">
                    <div className="flex items-center gap-3">
                        <img
                            src={prediction.homeLogo}
                            alt={prediction.homeTeam}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                        <h2 className="text-lg font-semibold">{prediction.homeTeam}</h2>
                    </div>

                    <span className="text-[#D6AE3E] font-bold text-lg">vs</span>

                    <div className="flex items-center gap-3">
                        <h2 className="text-lg font-semibold">{prediction.awayTeam}</h2>
                        <img
                            src={prediction.awayLogo}
                            alt={prediction.awayTeam}
                            className="w-12 h-12 rounded-full object-cover"
                        />
                    </div>
                </div>

                <div className="space-y-3 text-gray-300 text-sm md:text-base">
                    <p>
                        <span className="font-semibold text-[#D6AE3E]">Date:</span>{" "}
                        {prediction.date}
                    </p>
                    <p>
                        <span className="font-semibold text-[#D6AE3E]">Time:</span>{" "}
                        {prediction.time}
                    </p>
                    <p>
                        <span className="font-semibold text-[#D6AE3E]">Tips:</span>{" "}
                        {prediction.odd.Tips}
                    </p>
                    <p>
                        <span className="font-semibold text-[#D6AE3E]">Odds:</span>{" "}
                        {prediction.odd.Odds}
                    </p>
                    <p>
                        <span className="font-semibold text-[#D6AE3E]">Prop%:</span>{" "}
                        {prediction.odd.Prop}
                    </p>
                </div>

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
