// import { FiArrowUp } from "react-icons/fi";
import { FaPlus, FaMinus, FaSpinner } from "react-icons/fa";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/shared/HeroSection";
import Footer from "../components/shared/Footer";
import FreeTips from "../components/shared/FreetipsCard";
// import BestPredictionCard from "../components/store/BestPrediction";
import FootballLeaguesTable from "../components/Leagues/FootballLeagues";
import ContentNavBar from "../components/predictions/Content-Nav";
import { motion } from "framer-motion";
import LeagueTables from "../components/Standings/Table";
import DummyBlog from "../components/blogs/dummy-blog";
// import PremierLeagueCard from "../components/store/Premier-league";
import PremierLeagueCard from "../components/predictions/prediction-cards";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaTriangleExclamation } from "react-icons/fa6";
import Scroll_To_Top from "../components/animations/scroll-arrow";
import BestPredictionCard from "../components/predictions/BestPrediction";
import { useLocation } from "react-router-dom";


// const getISODate = (offset = 0) => {
//   const d = new Date();
//   d.setDate(d.getDate() + offset);
//   return d.toISOString().split("T")[0];
// };

export default function LandingPage() {
  // const [visible, setVisible] = useState(false);
  const [bet, setBet] = useState({});
  const [prediction, setPrediction] = useState({});
  const [open, setOpen] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectDays, setSelectDays] = useState(
    new Date().toISOString().split("T")[0]
  );

  const getDate = (day) => {
    const date = new Date(selectDays);
    if (day === "yesterday") date.setDate(date.getDate() - 1);
    if (day === "tommorow") date.setDate(date.getDate() + 1);
    return date.toISOString().split("T")[0];
  };

  const location = useLocation();


  const date = getDate(selectDays);

// ✅ RESTORE ACTIVE BET ON PAGE LOAD / BACK NAVIGATION
useEffect(() => {
  const savedMarket = sessionStorage.getItem("activeMarket");

  if (savedMarket) {
    const parsed = JSON.parse(savedMarket);
    setBet({ id: parsed.id, name: parsed.name });
  }
}, []);


  useEffect(() => {
    if (!bet?.id || !selectDays) return;

    //  setting catched data
    const CACHE_KEY = `predictions_${bet.id}_${encodeURIComponent(
      bet.name
    )}_${selectDays}`;
    const CACHE_TIME = 2 * 60 * 1000; // 2 minutes cache

    const cached = sessionStorage.getItem(CACHE_KEY);

    // load cached data onload
    if (cached) {
      const parsed = JSON.parse(cached);
      setPrediction(parsed.data);
      setOpen(parsed.openState);
      setLoading(false);

      // If cache is still fresh, skip network request
      if (Date.now() - parsed.timestamp < CACHE_TIME) return;
    } else {
      setLoading(true);
      setError(null);
    }

    // const url = `https://api.2kw.net/api/v1/admin/predictions/odds?bet=${bet["id"]}`;
    // const url = `http://localhost:5000/api/v1/admin/predictions/odds?bet=${bet["id"]}`;
    // const url = `http://localhost:5000/api/v1/admin/predictions/odds?bet=${bet.id}&market_name=${encodeURIComponent(bet.name)}`;
    // const url = `https://api.2kw.net/api/v1/admin/predictions/odds?bet=${bet["id"]}&market_name=${bet["name"]}`;
    const url = `https://api.2kw.net/api/v1/admin/predictions/odds?bet=${
      bet.id
    }&market_name=${encodeURIComponent(bet.name)}&odd_date=${selectDays}`;
    // console.log("tips name", bet["name"]);

    setLoading(true);
    setError(null);

    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed To Fetch Predictions");
        }
        return res.json();
      })

      .then((data) => {
        // Group predictions by league name
        const grouped =
          data?.data?.reduce((acc, pred) => {
            const leagueName = pred?.fixture?.league?.name;
            if (!acc[leagueName]) acc[leagueName] = [];
            acc[leagueName].push(pred);
            return acc;
          }, {}) || {};

        // console.log("data or raw",data?.data);
        // console.log("grouped data:", grouped)
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
        // console.log("", bet);
        setOpen(defaultOpenState);
        setPrediction(grouped || {});
        setLoading(false);

        // saving to session storage
        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            data: grouped,
            openState: defaultOpenState,
            timestamp: Date.now(),
          })
        );
      })
      .catch((err) => {
        // console.error("error While fetching predictions:", err);

        // added error handling state
        setError(
          "Unable To Load Predictions. Connect To A Network And Try Again."
        );
        setLoading(false);
        // setPrediction({});
      });
    //  prefetchPredictions(getISODate(-1));
    //  prefetchPredictions(getISODate(1));
  }, [bet, selectDays]);

  // ✅ PERSIST ACTIVE BET
useEffect(() => {
  if (bet?.id) {
    sessionStorage.setItem(
      "activeMarket",
      JSON.stringify({ id: bet.id, name: bet.name })
    );
  }
}, [bet]);


  return (
    <>
      <Navbar />
      <HeroSection />

      {/* SCROLL TO TOP BUTTON */}
      {/* {visible && (
        <motion.div
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed bottom-6 right-6 border border-[#D6AE3E] hover:scale-95 transition-all bg-[#1A365D] rounded-full h-10 w-10 flex justify-center items-center text-[#D6AE3E] z-50 cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} */}
      {/* > */}
      <Scroll_To_Top />
      {/* </motion.div>
      )} */}

      <motion.div
        initial={{ opacity: 0.5 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="min-h-screen">
          {/* Top Betting Selector */}
          <FreeTips bet={bet} setBet={setBet} />

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
                <ContentNavBar
                  selectDays={selectDays}
                  setSelectDays={setSelectDays}
                />
              </div>

              <div className="flex justify-center items-center flex-col lg:px-3">
                {/* {loading && (
                  <div className=" hover:shadow-lg text-[#1a365d] py-20 hover:bg-[#FFF7E0] group transition-all  border border-[#D6AE3E] flex justify-center items-center w-full rounded-[0.6rem] p-2">
                    <span>
                      <FaSpinner className="animate-spin" />{" "}
                    </span>{" "}
                    Loading Prediction...
                  </div>
                )} */}

                {/* ------------------------------------------
                    DISPLAY LEAGUES + THEIR FIXTURE CARDS + logos
                    ------------------------------------------- */}

                {/* Loading UI */}
                {loading ? (
                  <div className=" hover:shadow-lg text-[#1a365d] py-20 hover:bg-[#FFF7E0] group transition-all  border border-[#D6AE3E] flex justify-center items-center w-full rounded-[0.6rem] p-2">
                    <span>
                      <FaSpinner className="animate-spin" />{" "}
                    </span>{" "}
                    Loading Prediction...
                  </div>
                ) : error ? (
                  <div className="text-center justify-center items-center flex flex-col text-red-500 py-20  w-full rounded-xl">
                    {" "}
                    {error}{" "}
                    <FaTriangleExclamation className="text-red-600 animate-pulse" />
                  </div>
                ) : //  {/* No predictions UI */}

                !loading && Object.keys(prediction).length === 0 ? (
                  <div className="text-center text-[#1a365d] py-20 flex justify-center items-center">
                    {" "}
                    No Prediction Available{" "}
                    <FaTriangleExclamation className="text-red-600 animate-pulse" />
                    ...
                  </div>
                ) : null}

                {/* Error Handling UI */}

                {/* {!loading && error && ( */}

                {Object.keys(prediction).map((leagueName) => (
                  <div key={leagueName} className="w-full mt-0">
                    {/* League Header */}
                    <div className="bg-[#1A365D] w-full text-white flex justify-between items-center p-2 mt-1 mb-3 rounded-[0.6rem] shadow">
                      <h2 className="font-sans font-semibold flex justify-center items-center gap-1.5">
                        <img
                          src={
                            prediction[leagueName]?.[0]?.fixture?.league?.logo
                          }
                          alt={leagueName}
                          className="lg:w-10 lg:h-10 w-6 h-6 object-contain bg-white"
                        />
                        {leagueName}
                      </h2>

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
                            fixture={x.fixture?.fixture}
                            teams={x.fixture?.teams}
                            leagueNames={leagueName}
                            logo={prediction[leagueName]?.[0]?.fixture?.league?.logo}
                            league={x.fixture?.league}
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
                <DummyBlog title="2kwPredict Blog" />
              </div>
            </main>
          </div>
        </div>
      </motion.div>
      <div className="mt-5 px-4">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
