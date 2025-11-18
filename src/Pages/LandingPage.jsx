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
import { useEffect, useState } from "react";

export default function LandingPage () {

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    window.onscroll = () => {
      setVisible(window.scrollY > window.innerHeight/2);
    };
  }, []);

    return(
      <>
            <Navbar />
            <HeroSection />
          <div className="flex justify-end items-end m-1">
           {visible && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 5 }}
              transition={{ duration: 0.25 }} className=" fixed border border-[#D6AE3E] hover:scale-95 transition-all bg-[#1A365D] rounded-full h-8 w-8 flex justify-center items-center text-[#D6AE3E] z-50" onClick={() => window.scrollTo({ top: 0, behavior: "smooth", })}>
              <FiArrowUp className="font-extrabold text-xl" />
            </motion.div>
           )}
          </div>
       <motion.div initial={{opacity:0.5}} animate={{opacity:1}} transition={{duration:1, delay:0.1}}>
        <div className="min-h-screen">
            <FreeTips />
            {/* <div className="px-1 lg:px-4 pb-4 lg:py-4 pt-2 w-full "> */}
            <div className="lg:grid lg:grid-cols-[0.8fr_3fr] px-1 lg:px-4 pb-4 lg:py-4 pt-2 w-full ">
              <div className="lg:w-[350px] flex-shrink-0 space-y-0">
              {/* <div className="relative"> */}
              <BestPredictionCard />

              <div className="sticky top-0 bottom-0">
                <FootballLeaguesTable />
              </div>
              {/* </div> */}
              </div>

              <main className="overflow-y-auto lg:max-h-screen top-0 flex-1 flex flex-col gap-4">
                <div className="flex items-start justify-center w-full">
                  <ContentNavBar />
                </div>

                <div className="flex justify-center items-center flex-col">
                  <PremierLeagueCard />
                  <LeagueTables />
                  <Outlet />
                  <DummyBlog />
                </div>
              </main>
            </div>
            {/* </div> */}
        </div>
        </motion.div>
            <Footer />

       </>
       
    );
}