import Navbar from "../components/navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import FreeTips from "../components/FreetipsCard";
import BestPredictionCard from "../components/BestPrediction";
import FootballLeaguesTable from "../components/LeaguesTable/FootballLeagues";
import ContentNavBar from "../components/Prediction-days/Content-Nav";
import PremierLeagueCard from "../components/Premier-league";
import LaLigaCard from "../components/La-liga";
import DenmarkCard from "../components/Denmark-Division";
import ArgentainaCard from "../components/Argentina-premier";
import BrasilCard from "../components/Brasil-serie-A";
import { motion } from "framer-motion";

export default function LandingPage () {

    return(
       <motion.div initial={{opacity:0.5}} animate={{opacity:1}} transition={{duration:1, delay:0.1}}>
        <>
          <Navbar />
          <HeroSection />
                   <FreeTips />
              <div className="px-1 md:px-4 pb-4 md:py-4 pt-2  min-h-screen w-full max-w-full md:overflow-x-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-2 max-w-full  w-full justify-center">
                      <div className="space-y-2 space-x-4 w-full items-center justify-center">
                       <BestPredictionCard />
                       <FootballLeaguesTable />
                      </div>
                    <div className="flex flex-col">
                     <div className="flex items-start justify-center w-full">
                       <ContentNavBar />
                     </div>

                      <div>
                            <PremierLeagueCard />
                            <LaLigaCard />
                            <BrasilCard />
                            <ArgentainaCard />
                            <DenmarkCard />
                      </div>
                   </div>
                </div>
              </div>
          <Footer />
       </>
       </motion.div>
    );
}