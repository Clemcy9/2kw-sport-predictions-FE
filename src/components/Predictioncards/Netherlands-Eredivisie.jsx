// import { TypeAnimation } from "react-type-animation"
// import { motion } from "framer-motion"
// import Navbar from "../../shared/Navbar";
// import Footer from "../../shared/Footer";
// import FreeTips from "../../shared/FreetipsCard";
// import FootballLeaguesTable from "../FootballLeagues";
// import BestPredictionCard from "../../BestPrediction";
// import ContentNavBar from "../../Prediction-days/Content-Nav";

import { TypeAnimation } from "react-type-animation"
import { motion } from "framer-motion"
// import Navbar from "../../shared/Navbar";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import FreeTips from "../shared/FreetipsCard";
// import FootballLeaguesTable from "../FootballLeagues";
import FootballLeagues from "../Leagues/FootballLeagues";
// import BestPredictionCard from "../../BestPrediction";
import BestPredictionCard from "../BestPrediction";
import ContentNavBar from "../Prediction-days/Content-Nav";



export default function NetherlandsEredivise() {

    const selectedLeague = localStorage.getItem("selectedLeague");

    return (
        
        <div>
            <Navbar />
            <section
                className="font-sans relative h-[314px] mt-[62px] bg-cover bg-center flex items-center justify-center text-center text-white"
                style={{ backgroundImage: "url('/hero-bg.jpg')" }}
            >
                <div className="absolute inset-0 bg-[#1A365D]/40"></div> {/* overlay */}

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="leading-[1.1]">

                    <div className="relative z-10 max-w-6xl px-3">

                        <TypeAnimation
                            sequence={[
                                selectedLeague, 3000,
                            ]}
                            wrapper="h1"
                            speed={50}
                            repeat={0}
                            cursor={false}
                            className=" text-[48px] md:text-6xl font-bold mb-4 text-shadow-lg"
                        />
                        <p className="text-lg md:text-xl mb-6 text-shadow-lg">
                            Your winning journey starts here
                        </p>
                    </div>
                </motion.div>
            </section>
           
            <FreeTips />
                  <div className="px-1 md:px-4 pb-4 md:py-4 pt-2  min-h-screen w-full max-w-full md:overflow-x-hidden">
                      <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-2 max-w-full  w-full justify-center">
                           <div className="space-y-2 space-x-4 w-full items-center justify-center">
                           <BestPredictionCard />
                           <FootballLeagues />
                           </div>
                         <div className="flex items-start justify-center w-full">
                           <ContentNavBar />
                         </div>
                      </div>
                  </div>
            <Footer />
        </div>
    );
}
