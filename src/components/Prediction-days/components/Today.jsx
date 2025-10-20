



                                    //  NOTE1!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 
                                    // DO NOT DELETE COMMENTED CODES.



// import { TypeAnimation } from "react-type-animation"
// import { motion } from "framer-motion"

// import Navbar from "../../navbar";
// import Footer from "../../Footer";
// import FreeTips from "../../FreetipsCard";
// import FootballLeaguesTable from "../../LeaguesTable/FootballLeagues";
// import BestPredictionCard from "../../BestPrediction";
// import ContentNavBar from "../Content-Nav";


// export default function TodayPrediction() {

//     const selectedLeague = localStorage.getItem("selectedLeague");

//     return (

//         <div>
//             <Navbar />
//             <section
//                 className="font-sans relative h-[314px] mt-[62px] bg-cover bg-center flex items-center justify-center text-center text-white"
//                 style={{ backgroundImage: "url('/hero-bg.jpg')" }}
//             >
//                 <div className="absolute inset-0 bg-[#1A365D]/40"></div> {/* overlay */}

//                 <motion.div
//                     initial={{ opacity: 0, y: 30 }}
//                     animate={{ opacity: 1, y: 0 }}
//                     transition={{ duration: 1.2, ease: "easeOut" }}
//                     className="leading-[1.1]">

//                     <div className="relative z-10 max-w-6xl px-3">

//                         <TypeAnimation
//                             sequence={[
//                                 selectedLeague, 3000,
//                             ]}
//                             wrapper="h1"
//                             speed={50}
//                             repeat={0}
//                             cursor={false}
//                             className=" text-[48px] md:text-6xl font-bold mb-4"
//                         />
//                         <p className="text-lg md:text-xl mb-6">
//                             Your winning journey starts here
//                         </p>
//                     </div>
//                 </motion.div>
//             </section>
//             <div className="md:px-10 pt-2 flex items-center justify-center flex-col md:block">
//                 <FreeTips />
//                 <ContentNavBar />
//                 <BestPredictionCard />
//                 <FootballLeaguesTable />
//             </div>
//             <Footer />
//         </div>
//     );
// }
