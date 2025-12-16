import { motion } from "framer-motion";
import { useState } from "react";

export default function CinematicBouncyText({ text }) {
    const letters = text.split("_");
    const [glow, setGlow] = useState(false);

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.09,
            },
        },
    };

    const child = {
        hidden: { opacity: 0, y: 30, scale: 0.8 },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 700,
                damping: 8,
            },
        },
    };

    return (
        <motion.h1
            variants={container}
            initial="hidden"
            animate="show"
            className={`text-shadow-xl md:text-4xl text-3xl justify-center items-center font-bold text-[#1A365D] flex flex-wrap ${glow ? "animate-glow-flash" : ""}`}
        >
            {letters.map((char, i) => (
                <motion.span key={i} variants={child} className="inline-block">
                    {char}
                </motion.span>
            ))}
        </motion.h1>
    );
}
