import { FiArrowUp } from "react-icons/fi";
import { FaPlus, FaMinus } from "react-icons/fa";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/shared/HeroSection";
import Footer from "../components/shared/Footer";
import FreeTips from "../components/shared/FreetipsCard";
import BestPredictionCard from "../components/BestPrediction";
import FootballLeaguesTable from "../components/Leagues/FootballLeagues";
import ContentNavBar from "../components/Prediction-days/Content-Nav";
import { motion } from "framer-motion";
import LeagueTables from "../components/Standings/Table";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
// import {  BlogPage } from "../components/multi-component";
import DummyBlog from "../components/dummy-blog"
import PremierLeagueCard from "../components/Premier-league";

export default function LandingPage() {

  const [activeLeague, setActiveLeague] = useState("EPL"); 
  const [visible, setVisible] = useState(false);
  const [bet, setBet] = useState(1);
  const [prediction, setPrediction] = useState([]);
  const [open, setOpen] = useState([]);


  useEffect(() => {
    window.onscroll = () => {
      setVisible(window.scrollY > window.innerHeight / 2);
    };
  }, []);

  useEffect(() => {
    const url = `https://twokw-backend.onrender.com/api/v1/admin/predictions/odds?bet=${bet}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => { 
        const groupData = Object.groupBy(data.data, (pred) => pred.fixture.league.name);

        // makes all cards open by default when the card loads
        setOpen(Object.fromEntries(Object.keys(groupData).map(name => [name, true])));

        setPrediction(groupData, data.data);
        console.log(groupData);

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

          <div className="mt-5 px-4">
            <Outlet />
          </div>

          <div className="lg:grid lg:grid-cols-[0.8fr_3fr] px-1 lg:px-4 pb-4 lg:py-4 pt-2 w-full ">
            <div className="lg:w-[350px] flex-shrink-0 space-y-0">
              <BestPredictionCard />

              <div className="sticky top-24 bottom-0">
                <FootballLeaguesTable setActiveLeague={setActiveLeague} />
              </div>
            </div>

            <main className="lg:overflow-y-scroll lg:max-h-screen top-0 bottom-0 flex-1 flex flex-col gap-4">
              <div className="flex items-start justify-center w-full py-2">
                <ContentNavBar />
              </div>

              <div className="flex justify-center items-center flex-col  lg:px-3">

                 
                {/* display the cards under their respective card*/}
               {Object.keys(prediction).map((leagueNames) => (
                <div key={leagueNames} className="w-full ">
                   <div className="bg-[#1A365D] w-full text-white flex justify-between items-center p-2 mt-6 mb-3 rounded-[0.6rem] hover:shadow-lg transition-all">

                     <h2 className="font-sans flex justify-center items-center font-semibold">{leagueNames}</h2>

                     {/*toggle btn that reveals the card (+ -) */}
                     <div onClick={() => setOpen((prev) =>({
                      ...prev,[leagueNames]: !prev[leagueNames],
                     }))}>
                       {open [leagueNames] ? <FaPlus /> : <FaMinus />}
                     </div>
                   </div>
                   {/* container that holds the card  */}
                   {open [leagueNames] && (
                     <motion.div
                       className="lg:flex min-w-full w-full text-white space-y-0 lg:space-y-0 flex flex-col justify-center gap-2 items-center"
                       initial={{ opacity: 0, y: 40 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ duration: 0.7, ease: "easeOut" }}
                     >
                       {/* <PredictionCard /> */}
                       {prediction[leagueNames].map((x, index) => {
                         return <PremierLeagueCard
                           key={index}
                           fixture={x.fixture.fixture}
                           teams={x.fixture.teams}
                           leagueNames={leagueNames}
                           league={x.fixture.league}
                           values={x.bets[0].values}
                         />;
                       })}
                     </motion.div>
                   )}
                   
                </div>
               ))}
                <LeagueTables activeLeague={activeLeague} />
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

// Do not delete commented code


// // import { useEffect, useRef } from "react";
// import { FiArrowUp } from "react-icons/fi";
// import Navbar from "../components/shared/Navbar";
// import HeroSection from "../components/shared/HeroSection";
// import Footer from "../components/shared/Footer";
// import FreeTips from "../components/shared/FreetipsCard";
// import BestPredictionCard from "../components/BestPrediction";
// // import FootballLeaguesTable from "../components/Leagues/FootballLeagues";
// import ContentNavBar from "../components/Prediction-days/Content-Nav";
// // import PremierLeagueCard from "../components/Premier-league";
// import { motion } from "framer-motion";
// import LeagueTables from "../components/Standings/Table";
// // import DummyBlog from "../components/dummy-blog";
// import { Outlet, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { PredictionCard, BlogPage } from "../components/multi-component";
// import PremierLeagueCard from "../components/Premier-league";
// import { FaChevronRight } from "react-icons/fa";
// // import  from "../components/blogPage";

// export default function LandingPage() {
//   const [visible, setVisible] = useState(false);
//   const [bet, setBet] = useState(1);
//   const [prediction, setPrediction] = useState([]);


//   const leagues = prediction.map((tournament) => ({

//     slug: tournament.fixture.league.name,
//     name: tournament.fixture.league.name,
//     country: tournament.fixture.league.country,
//     logo: tournament.fixture.league.logo,
//   })).slice(0, 6)
//   const navigate = useNavigate();

//   // const leagueNames = leagues.map((leagues) => leagues.name);
//   // localStorage.setItem("leagueNames", JSON.stringify(leagueNames));

//   const handleLeagueClick = (leagueName) => {

//     localStorage.setItem("selectedLeague", leagueName);


//     const path = `/leagues/${leagueName.toLowerCase().replace(/\s+/g, "-")}`;
//     navigate(path);
//   };

//   useEffect(() => {
//     window.onscroll = () => {
//       setVisible(window.scrollY > window.innerHeight / 2);
//     };
//   }, []);

//   useEffect(() => {
//     const url = `https://twokw-backend.onrender.com/api/v1/admin/predictions/odds?bet=${bet}`;
//     fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         setPrediction(data.data);
//         console.log(prediction);
//       });
//     console.log("bet:", bet);
//   }, [bet]);

//   return (
//     <>
//       <Navbar />
//       <HeroSection />
//       <div className="flex justify-end items-end m-1">
//         {visible && (
//           <motion.div
//             initial={{ opacity: 0, y: -5 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: 5 }}
//             transition={{ duration: 0.25 }}
//             className=" fixed border border-[#D6AE3E] hover:scale-95 transition-all bg-[#1A365D] rounded-full h-8 w-8 flex justify-center items-center text-[#D6AE3E] z-50"
//             onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
//           >
//             <FiArrowUp className="font-extrabold text-xl" />
//           </motion.div>
//         )}
//       </div>
//       <motion.div
//         initial={{ opacity: 0.5 }}
//         animate={{ opacity: 1 }}
//         transition={{ duration: 1, delay: 0.1 }}
//       >
//         <div className="min-h-screen">
//           <FreeTips bet={bet} setBet={setBet} />
//           <div className="lg:grid lg:grid-cols-[0.8fr_3fr] px-1 lg:px-4 pb-4 lg:py-4 pt-2 w-full ">
//             <div className="lg:w-[350px] flex-shrink-0 space-y-0">
//               <BestPredictionCard />

//               <div className="sticky top-0 bottom-0">


//                 <div className="hidden lg:sticky top-0 lg:block w-full lg:border lg:border-[#D6AE3E]/70 rounded-[0.6rem] lg:shadow-lg mt-5 ">
//                   {/* Header */}
//                   <h2 className="text-3xl font-semibold text-white font-sans bg-[#D6AE3E] text-center py-4 lg:rounded-t-[0.6rem]">
//                     Football Leagues
//                   </h2>

//                   {/* Leagues list */}
//                   {leagues.map((y, idx) => (
//                     <div key={idx} className="flex items-center  flex-col w-full">
//                       {/* {leagues.map((league, index) => ( */}
//                       <motion.div
//                         // key={index}
//                         onClick={() => handleLeagueClick(y.slug)}
//                         className="flex items-center justify-between bg-white text-[#1A365D] lg:p-3 py-2 cursor-pointer border border-[#d6ae3e]/70 min-w-[280px] lg:min-w-full hover:shadow-lg hover:bg-[#d6ae3e]/80 transition-all"
//                       >

//                         <div className="flex items-center justify-center">
//                           <img
//                             src={y.logo}
//                             alt={y.name}
//                             className="w-8 h-8 m-2"
//                           />
//                           <div>
//                             <h4 className="font-semibold text-sm lg:text-[1rem]">
//                               {y.name}
//                             </h4>
//                             <p className="text-xs text-gray-500">{y.country}</p>
//                           </div>
//                         </div>

//                         {/* up icon (only desktop) */}
//                         <FaChevronRight className="hidden lg:block" />
//                       </motion.div>
//                       {/* ))} */}
//                     </div>
//                   ))}
//                 </div>





//                 {/* // key={idx} 
//                     // league={y.fixture.league}/>; */}
//               </div>
//             </div>

//             <main className="lg:overflow-y-scroll lg:max-h-screen top-0 flex-1 flex flex-col gap-4">
//               <div className="flex items-start justify-center w-full py-2">
//                 <ContentNavBar />
//               </div>

//               <div className="flex justify-center items-center flex-col">



//                 {/* <PredictionCard /> */}
//                 {prediction?.map((x, index) => {
//                   return <PremierLeagueCard
//                     key={index}
//                     teams={x.fixture.teams}
//                     league={x.fixture.league}
//                     values={x.bets[0].values}
//                   />;
//                 })}
//                 <LeagueTables />
//                 <BlogPage />
//                 <Outlet />
//               </div>
//             </main>
//           </div>
//         </div>
//       </motion.div>
//       <Footer />
//     </>
//   );
// }



