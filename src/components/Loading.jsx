import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function LoadingAnimation() {
    return (
        <motion.section className="fixed inset-0 flex flex-col justify-center items-center bg-[#1A365D] text-cente z-50"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 1, delay: 8 ,ease:"linear"}}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 3, ease: "easeOut" }}
                className="flex items-center justify-center flex-col"
            >

                <h1 className="text-4xl font-bold mb-4 text-blue-100 drop-shadow-lg flex items-center justify-center gap-2 p-4 text-shadow-lg">
                    Welcome
                    <motion.span
                        animate={{ y: [0, -50, 0] }}
                        transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        ⚽
                    </motion.span>
                    2KwPreddict
                </h1>

                <TypeAnimation
                    sequence={[
                        'Accurate Predictions...', 800,
                        'Live Scores & Insights...', 800,
                        'Smart Sports Analytics', 800,
                        "",
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={0} 
                    className="text-2xl font-semibold text-gray-100 text-shadow-lg"
                />
            </motion.div>
        </motion.section>
    );
}
