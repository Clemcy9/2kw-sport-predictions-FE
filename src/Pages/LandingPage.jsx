// import { useEffect, useRef } from "react";
import {FiArrowUp} from "react-icons/fi";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/shared/HeroSection";
import Footer from "../components/shared/Footer";
import FreeTips from "../components/shared/FreetipsCard";
import BestPredictionCard from "../components/BestPrediction";
import FootballLeaguesTable from "../components/Leagues/FootballLeagues";
import ContentNavBar from "../components/Prediction-days/Content-Nav";
import PremierLeagueCard from "../components/Premier-league";
import { motion } from "framer-motion";
import LeagueTables from "../components/Standings/Table";
import DummyBlog from "../components/dummy-blog";
import { Outlet } from "react-router-dom";

export default function LandingPage () {

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

    return(
      <>
        <Navbar />
       <motion.div initial={{opacity:0.5}} animate={{opacity:1}} transition={{duration:1, delay:0.1}}>
          <HeroSection />
        </motion.div>
          <FreeTips />
          <div className="flex justify-end items-end m-1">
            <div className="fixed border border-[#D6AE3E] hover:scale-95 transition-all bg-[#1A365D] rounded-full h-8 w-8 flex justify-center items-center text-[#D6AE3E] z-50" onClick={moveToTop}>
              <FiArrowUp className="font-extrabold text-xl" />
            </div>
          </div>
          <div className="px-1 lg:px-4 pb-4 lg:py-4 pt-2  min-h-screen w-full max-w-full lg:overflow-x-hidden">
              <div className="grid grid-cols-1  lg:grid-cols-[350px_3fr] gap-2 max-w-full w-full justify-center">

                   <div className="space-y-2 items-center flex flex-col bg-white">
                      <BestPredictionCard />
                      <div className="sticky top-24 w-full">
                        <FootballLeaguesTable />
                      </div>
                    </div>
                    <div className="flex flex-col">
                     <div className="flex items-start justify-center w-full">
                       <ContentNavBar />
                     </div>

                      <div className="flex justify-center items-center flex-col">
                        <PremierLeagueCard />
                        <LeagueTables className="sticky top-0 "/>
                        
                        <div className="flex justify-end items-end">
                          <DummyBlog />
                        </div>
                        <Outlet />
                     </div>
                   </div>
                </div>
              </div>
          <Footer />
       </>
       
    );
}