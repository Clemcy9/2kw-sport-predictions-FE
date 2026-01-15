import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { data, Link } from "react-router-dom";
import { FaFutbol, FaSpinner, FaTelegramPlane } from "react-icons/fa";
import { useEffect, useState } from "react";
import liveScores from "../../assets/Hero-images/live-scores.jpg";
import { FaTriangleExclamation } from "react-icons/fa6";
import Scroll_To_Top from "../animations/scroll-arrow";

export default function Live_Scores() {
  const [predictions, setPredictions] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const CACHE_KEY = "live_scores_session";
    const CACHE_TIME = 60 * 1000; // 1 minute

    const cached = sessionStorage.getItem(CACHE_KEY);

    if (cached) {
      const parsed = JSON.parse(cached);

      setPredictions(parsed.data);
      setLoading(false);

      if (Date.now() - parsed.timestamp < CACHE_TIME) {
        return;
      }
    }

    fetch("https://api.2kw.net:5000/api/v1/football/livescores")
      .then((res) => res.json())
      .then((data) => {
        const grouped = data?.data?.response?.reduce((acc, item) => {
          const leagueName = item.league.name;

          if (!acc[leagueName]) acc[leagueName] = [];
          acc[leagueName].push(item);
          return acc;
        }, {});

        setPredictions(grouped || {});
        setLoading(false);

        sessionStorage.setItem(
          CACHE_KEY,
          JSON.stringify({
            data: grouped || {},
            timestamp: Date.now(),
          })
        );
      })
      .catch((err) => {
        console.error("Live-scores error:", err);
        setError("Unable To Load Live-Scores, Check Your Network");
        setLoading(false);
      });
  }, []);

  return (
    <main>
      <Navbar />
      <section
        className="font-sans relative h-[344px] mt-[22px] lg:mt-16 bg-cover bg-center flex-wrap flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${liveScores})` }}
      >
        <div className="absolute inset-0 bg-[#1A365D]/40"></div> {/* overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="leading-[1.1] "
        >
          <div className="relative z-10 max-w-6xl px-3">
            <TypeAnimation
              sequence={["LIVE-SCORES", 2000]}
              wrapper="h1"
              speed={50}
              repeat={0}
              cursor={false}
              className=" sm:text-[48px] text-3xl lg:text-6xl font-bold mb-4 text-shadow-lg lg:pb-6"
            />
            <p className="text-lg lg:text-xl mb-6 text-shadow-lg">
              Your winning journey starts here
            </p>

            <div className="flex justify-center items-center gap-4 lg:gap-10 transition-all">
              <a
                href=""
                target="blank"
                rel="noopener noreferrer"
                className="flex justify-center lg:items-center gap-1 bg-[#1A365D] font-sans text-[#D6AE3E] px-1 py-3 lg:py-4 shadow-lg rounded-[0.4rem] lg:text-[1.2em] lg:px-0 lg:w-65 hover:scale-95 hover:shadow-lg transition-all"
              >
                Join Telegram <FaTelegramPlane />
              </a>
              <Link
                to="/live-score"
                className="flex lg:items-center justify-center gap-1 lg:w-65 text-[#1A365D] font-sans bg-[#D6AE3E] px-5 py-3 lg:py-3  shadow-lg rounded-[0.4rem] lg:text-[1.5rem] lg:px-0 hover:scale-95 hover:shadow-lg transition-all"
              >
                Live Scores <FaFutbol className="animate-bounce" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
      <Scroll_To_Top />
      <section className=" lg:p-15 py-15">
        {loading ? (
          <div className=" hover:shadow-lg text-[#1a365d] py-20 hover:bg-[#FFF7E0] group transition-all flex justify-center items-center w-full rounded-[0.6rem] p-2">
            <span>
              <FaSpinner className="animate-spin" />{" "}
            </span>{" "}
            Loading Live-Scores...
          </div>
        ) : error ? (
          <div className="text-center flex flex-col justify-center items-center text-red-500 py-20  w-full rounded-xl">
            {" "}
            {error}{" "}
            <FaTriangleExclamation className="text-red-600 animate-pulse" />
          </div>
        ) : //  {/* No predictions UI */}

        Object.keys(predictions).length === 0 ? (
          <div className="text-center text-[#1a365d] py-20 flex justify-center items-center">
            {" "}
            No Live-Scores Available{" "}
            <FaTriangleExclamation className="text-red-600 animate-pulse" />
            ...
          </div>
        ) : null}

        {!loading &&
          Object.keys(predictions).map((leagueName) => (
            <div key={leagueName}>
              <table className="w-full">
                <thead>
                  <tr className="w-full flex justify-between items-center text-white bg-[#1A365D] p-1.5 lg:p-3">
                    <th className="flex justify-center items-center">
                      <img
                        className="w-6 h-6"
                        src={predictions[leagueName][0].league.logo}
                        alt={leagueName}
                      />{" "}
                      {leagueName}
                    </th>
                    <th>
                      {new Date(
                        predictions[leagueName][0].fixture.date
                      ).toLocaleDateString()}
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {predictions[leagueName].map((items, index) => (
                    <tr
                      key={index}
                      className="grid grid-cols-8 justify-between odd:bg-white even:bg-[#bdc2cb69] px-1.5 items-center text-xs lg:text-xl lg:px-3 hover:bg-[#D6AE3E]/60"
                    >
                      <td className="lg:py-6 py-4 col-span-1 flex ">
                        <p>
                          {new Date(items.fixture.date).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </td>
                      <td className="lg:py-6 py-4 col-span-6 grid grid-cols-5">
                        <p className="flex justify-center items-center col-span-2">
                          <img
                            className="hidden lg:w-8 lg:h-8 w-5 h-5"
                            src={items.teams.away.logo}
                            alt={items.teams.away.name}
                          />{" "}
                          {items.teams.away.name.slice(0, 18)}{" "}
                        </p>
                        <span className=" lg:px-6 px-3 font-semibold flex justify-center items-center col-span-1">
                          {items.goals.away} : {items.goals.home}
                        </span>
                        <p className="flex justify-center items-center col-span-2 text-left">
                          <img
                            className="hidden lg:w-8 lg:h-8 w-5 h-5"
                            src={items.teams.home.logo}
                            alt={items.teams.home.name}
                          />{" "}
                          {items.teams.home.name.slice(0, 18)}
                        </p>
                      </td>
                      <td className="lg:py-6 py-4 flex col-span-1">
                        <p>{items.fixture.status.long}</p>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
      </section>
      <Footer />
    </main>
  );
}
