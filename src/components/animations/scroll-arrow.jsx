import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Scroll_To_Top () {

     const [visible, setVisible] = useState(false);
    /* --------------------------------------------
        SHOW SCROLL-TO-TOP BUTTON
      --------------------------------------------- */
      useEffect(() => {
        const handleScroll = () => {
          setVisible(window.scrollY > window.innerHeight / 2);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

      return(
        <>
        {visible && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 border border-[#D6AE3E] hover:scale-95 transition-all bg-[#1A365D] rounded-full h-10 w-10 flex justify-center items-center text-[#D6AE3E] z-50 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <FiArrowUp className="text-xl font-bold" />
        </motion.div>
      )}
        </>
      );
}