// import { useEffect, useRef } from "react";
import { FiArrowUp } from "react-icons/fi";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/shared/HeroSection";
import Footer from "../components/shared/Footer";
import FreeTips from "../components/shared/FreetipsCard";
import BestPredictionCard from "../components/BestPrediction";
import FootballLeaguesTable from "../components/Leagues/FootballLeagues";
import ContentNavBar from "../components/Prediction-days/Content-Nav";
// import PremierLeagueCard from "../components/Premier-league";
import { motion } from "framer-motion";
import LeagueTables from "../components/Standings/Table";
// import DummyBlog from "../components/dummy-blog";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { PredictionCard, BlogPage } from "../components/multi-component";
import PremierLeagueCard from "../components/Premier-league";
// import  from "../components/blogPage";

export default function LandingPage() {
  const [visible, setVisible] = useState(false);
  const [bet, setBet] = useState(1);
  const [prediction, setPrediction] = useState([]);

  useEffect(() => {
    window.onscroll = () => {
      setVisible(window.scrollY > window.innerHeight / 2);
    };
  }, []);

  useEffect(() => {
    // fetch bet
    const url = "http://localhost:5000/api/v1/admin/predictions/odds?bet=1";
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setPrediction(data);
      });
    console.log("bet:", bet);
  }, [bet]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <div className="flex justify-end items-end m-1">
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.25 }}
            className=" fixed border border-[#D6AE3E] hover:scale-95 transition-all bg-[#1A365D] rounded-full h-8 w-8 flex justify-center items-center text-[#D6AE3E] z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <FiArrowUp className="font-extrabold text-xl" />
          </motion.div>
        )}
      </div>
      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.1 }}
      >
        <div className="min-h-screen">
          <FreeTips bet={bet} setBet={setBet} />
          <div className="lg:grid lg:grid-cols-[0.8fr_3fr] px-1 lg:px-4 pb-4 lg:py-4 pt-2 w-full ">
            <div className="lg:w-[350px] flex-shrink-0 space-y-0">
              <BestPredictionCard />

              <div className="sticky top-0 bottom-0">
                <FootballLeaguesTable />
              </div>
            </div>

            <main className="lg:overflow-y-scroll lg:max-h-screen top-0 flex-1 flex flex-col gap-4">
              <div className="flex items-start justify-center w-full py-2">
                <ContentNavBar />
              </div>

              <div className="flex justify-center items-center flex-col">
                {/* <PredictionCard /> */}
                {prediction?.map((x, index) => {
                  <PremierLeagueCard
                    teams={x.fixture.teams}
                    league={x.fixture.league}
                  />;
                })}
                <LeagueTables />
                <BlogPage />
                <Outlet />
              </div>
            </main>
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
