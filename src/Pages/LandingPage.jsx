import { FiArrowUp } from "react-icons/fi";
import { FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/shared/HeroSection";
import Footer from "../components/shared/Footer";
import FreeTips from "../components/shared/FreetipsCard";
import BestPredictionCard from "../components/store/BestPrediction";
import FootballLeaguesTable from "../components/Leagues/FootballLeagues";
import ContentNavBar from "../components/Prediction-days/Content-Nav";
import { motion } from "framer-motion";
import LeagueTables from "../components/Standings/Table";
import DummyBlog from "../components/dummy-blog";
import PremierLeagueCard from "../components/store/Premier-league";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function LandingPage() {
  // const [activeLeague, setActiveLeague] = useState("EPL");
  const [visible, setVisible] = useState(false);
  const [bet, setBet] = useState({});
  const [prediction, setPrediction] = useState({});
  const [open, setOpen] = useState({});

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

  /* --------------------------------------------
     FETCH PREDICTION DATA BASED ON BET TYPE
  --------------------------------------------- */
  useEffect(() => {
    // const url = `https://twokw-backend.onrender.com/api/v1/admin/predictions/odds?bet=${bet["id"]}`;
    // const url = `http://localhost:5000/api/v1/admin/predictions/odds?bet=${bet["id"]}`;
    // const url = `http://localhost:5000/api/v1/admin/predictions/odds?bet=${bet.id}&market_name=${encodeURIComponent(bet.name)}`;
    // const url = `https://twokw-backend.onrender.com/api/v1/admin/predictions/odds?bet=${bet["id"]}&market_name=${bet["name"]}`;
    const url = `https://twokw-backend.onrender.com/api/v1/admin/predictions/odds?bet=${
      bet.id
    }&market_name=${encodeURIComponent(bet.name)}`;
    // console.log("tips name", bet["name"]);

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // Group predictions by league name
        const grouped = data?.data?.reduce((acc, pred) => {
          const leagueName = pred.fixture.league.name;
          if (!acc[leagueName]) acc[leagueName] = [];
          acc[leagueName].push(pred);
          return acc;
        }, {});
        // const groupedLogo = data?.data?.reduce((acc, pred) => {
        //   const leagueLogo = pred.fixture.league.logo;
        //   if (!acc[leagueLogo]) acc[leagueLogo] = [];
        //   acc[leagueLogo].push(pred);
        //   return acc;
        // }, {});

        // const leagueLogo = pred.fixture.league.logo;

        // console.log("grouped data logo",groupedLogo)

        // Open all groups by default
        const defaultOpenState = Object.fromEntries(
          Object.keys(grouped || {}).map((k) => [k, true])
        );
        console.log("", grouped);
        setOpen(defaultOpenState);
        setPrediction(grouped || {});
      })
      .catch((err) => console.error("Prediction fetch error:", err));
  }, [bet]);

  return (
    <>
      <Navbar />
      <HeroSection />

      {/* SCROLL TO TOP BUTTON */}
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

      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="min-h-screen">
          {/* Top Betting Selector */}
          <FreeTips bet={bet} setBet={setBet} />

          <div className="mt-5 px-4">
            <Outlet /> {/* Nested routes */}
          </div>

          <div className="lg:grid lg:grid-cols-[0.8fr_3fr] px-1 lg:px-4 pb-4 lg:py-4 pt-2 w-full">
            {/* LEFT SIDE BAR */}
            <div className="lg:w-[350px] flex-shrink-0 space-y-0">
              <BestPredictionCard />

              <div className="sticky top-24">
                <FootballLeaguesTable />
              </div>
            </div>

            {/* MAIN CONTENT */}
            <main className="lg:overflow-y-scroll lg:max-h-screen flex-1 flex flex-col gap-4">
              <div className="flex items-start justify-center w-full py-2">
                <ContentNavBar />
              </div>

              <div className="flex justify-center items-center flex-col lg:px-3">
                {/* ------------------------------------------
                    DISPLAY LEAGUES + THEIR FIXTURE CARDS + logos
                ------------------------------------------- */}
                {Object.keys(prediction).map((leagueName) => (
                  <div key={leagueName} className="w-full">
                    {/* League Header */}
                    <div className="bg-[#1A365D] w-full text-white flex justify-between items-center p-2 mt-6 mb-3 rounded-[0.6rem] shadow">
                      <h2 className="font-sans font-semibold flex justify-center items-center gap-1.5">
                          <img
                            src={prediction[leagueName][0].fixture.league.logo} // each fixture's league logo
                            alt={leagueName}
                            className="w-10 h-10 object-contain bg-white"
                          />
                       {leagueName}</h2>

                      {/* Toggle Section */}
                      <div
                        role="button"
                        className="cursor-pointer"
                        onClick={() =>
                          setOpen((prev) => ({
                            ...prev,
                            [leagueName]: !prev[leagueName],
                          }))
                        }
                      >
                        {open[leagueName] ? <FaMinus /> : <FaPlus />}
                      </div>
                    </div>

                    {/* League Cards */}
                    {open[leagueName] && (
                      <motion.div
                        className="w-full flex flex-col gap-2 items-center"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                      >
                        {prediction[leagueName]?.map((x, index) => (
                          <PremierLeagueCard
                            key={index}
                            fixture={x.fixture.fixture}
                            teams={x.fixture.teams}
                            leagueNames={leagueName}
                            logo={prediction[leagueName][0].fixture.league.logo}
                            league={x.fixture.league}
                            values={x.bets?.[0]?.values}
                            bet={bet}
                          />
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}

                {/* Tables + Blog */}
                <LeagueTables />
                <DummyBlog />
              </div>
            </main>
          </div>
        </div>
      </motion.div>

      <Footer />
    </>
  );
}
