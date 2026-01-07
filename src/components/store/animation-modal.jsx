// import React from "react";
import { motion } from "framer-motion";
import { div } from "framer-motion/client";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function AnimationModal({ title, open }) {
  return (
    <div>
      {open && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#1A365D]/40"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{
              scale: [0, 1.2, 1],
              opacity: [0, 1, 1],
              transition: { duration: 0.6, ease: "easeOut" },
            }}
            className="flex items-center justify-center"
          >
            <AiOutlineCheckCircle className="w-20 h-20 rounded-full bg-[#059D3F] text-white drop-shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
          </motion.div>

          <motion.h3
            key="mode"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            className="text-[20px] font-[sora] font-normal text-white"
          >
            {title}
          </motion.h3>
        </motion.div>
      )}
    </div>
  );
}
