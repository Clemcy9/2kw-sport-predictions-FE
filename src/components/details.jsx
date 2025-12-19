import { motion } from "framer-motion";
import Navbar from "./shared/Navbar";
import {TypeAnimation} from "react-type-animation"
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaFutbol, FaSpinner, FaTelegramPlane } from "react-icons/fa";
import detailsBg from "../assets/Hero-images/details-bg.jpg"
import { useEffect, useState } from "react";
import { FaTriangleExclamation } from "react-icons/fa6";

export default function PredictionDetails() {
    const{state} = useLocation();
    const[h2h, setH2h] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    const days = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"];
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const today =new Date ( state.timing_date)
    const recentDay = { dayName: `${days[today.getDay()]} ${today.getDate()} , ${months[today.getMonth()]} , ${today.getFullYear()}  ` };

    const {
        teamA_Id,
        teamB_Id,
        homeTeam,
        awayTeam,
    } = state || {};

    useEffect(() => {
        if (!teamA_Id || !teamB_Id) return;

        const fetch_H2H = async () => {
            try{
                // setLoading(true);

                const res = await fetch (`https://twokw-backend.onrender.com/api/v1/head2head?teamA_id=${teamA_Id}&teamB_id=${teamB_Id}`);
                if(!res.ok) throw new Error("failed to fetch Head-To-Head");

                const data = await res.json();
                setH2h(data.data.response.slice(-5));
                console.log("response",data.data.response)
            }catch (err) {
                setError(err.message);
            }finally{
                // setLoading(false);
            }
        };
        fetch_H2H();
    }, [teamA_Id, teamB_Id]);

    return (
       <main>
            <>
                <Navbar />
                <section
                    className="font-sans relative h-[344px] mt-[22px] md:mt-16 bg-cover bg-center flex-wrap flex items-center justify-center text-center text-white"
                    style={{ backgroundImage: `url(${detailsBg})` }}
                >
                    <div className="absolute inset-0 bg-[#1A365D]/40"></div> {/* overlay */}

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="leading-[1.1] ">

                        <div className="relative z-10 max-w-6xl px-3">

                            <TypeAnimation
                                sequence={[
                                    `${state.homeTeam} VS ${state.awayTeam}`, 2000,
                                ]}
                                wrapper="h1"
                                speed={50}
                                repeat={0}
                                cursor={false}
                                className=" sm:text-[48px] text-3xl md:text-6xl font-bold mb-4 text-shadow-lg md:pb-6"
                            />
                            <p className="text-lg md:text-xl mb-6 text-shadow-lg">
                                Your winning journey starts here
                            </p>

                            <div className="flex justify-center items-center gap-4 md:gap-10 transition-all">
                                <a
                                    href=""
                                    target="blank"
                                    rel="noopener noreferrer"
                                    className="flex justify-center md:items-center gap-1 bg-[#1A365D] font-sans text-[#D6AE3E] px-1 py-3 md:py-4 shadow-lg rounded-[0.4rem] md:text-[1.2em] md:px-0 md:w-65 hover:scale-95 hover:shadow-lg transition-all">
                                    Join Telegram <FaTelegramPlane />
                                </a>
                                <Link
                                    to="/live-score"
                                    className="flex md:items-center justify-center gap-1 md:w-65 text-[#1A365D] font-sans bg-[#D6AE3E] px-5 py-3 md:py-3  shadow-lg rounded-[0.4rem] md:text-[1.5rem] md:px-0 hover:scale-95 hover:shadow-lg transition-all">
                                    Live Scores <FaFutbol className="animate-bounce" />
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </section>
               
                
                    <section className="lg:p-14">
                      
                      

                     <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="lg:p-4 p-2"
                    >

                        <div
                            className=" shadow-sm space-y-2 max-h-screen bg-[#F9FBFF] transition-all flex justify-between items-center w-full flex-col lg:p-14 p-2"
                        > 
                            <div className="flex  lg:px-2 lg:mx-3 w-full justify-between items-center">
                                <p className="font-sans font-semibold text-lg text-[#1A365D] flex justify-center gap-1.5 items-center"><img src={state.leagueLogo} alt="league name" className="w-12 h-12" /> {state.leagueTitile}</p>
                                <span className="font-sans font-normal text-sm text-[#D6AE3E]">
                                    {recentDay.dayName} {state.timing}
                                </span>

                            </div>
                            {/* <div className="w-full px-6">    */}
                                <section className="flex justify-between items-start min-w-[130px] space-x-10 px-2 lg:gap-4 lg:space-x-0 lg:p-6 w-full border rounded-lg bg-white shadow-lg py-4 border-[#1A365D]">
                                    <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3 ">
                                        <p className="px-3 font-bold font-sans text-[#1A365D]">Odds</p>
                                        <p className="font-normal  rounded-sm border border-[#1A365D]  text-[#1A365D] px-1 text-[15px] py-1 min-w-16 transition-colors duration-300 w-auto text-center ">
                                            {state.odd.Odds}
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                        <p className="px-3 font-bold font-sans text-[#1A365D]">Tips</p>
                                        <p className="font-normal  rounded-sm border  text-[#1A365D]   border-[#1A365D] px-1 text-[15px] py-1 min-w-16 w-auto transition-colors duration-300 text-center">
                                            {state.odd.Tips}
                                        </p>
                                    </div>
                                    <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                                        <p className="px-3 font-bold font-sans text-[#1A365D]">Prop%</p>
                                        <p className="font-normal  rounded-sm border  text-[#1A365D]   border-[#1A365D] px-1 text-[15px] py-1 min-w-16 transition-colors duration-300 w-auto text-center">
                                            {state.odd.Prop}
                                        </p>
                                    </div>
                                </section>
                            {/* </div> */}

                            <div className="text-[#1A365D] flex justify-between items-center flex-col lg:flex-row w-full py-8 space-y-2">
                               
                                <section className="flex justify-center items-center min-w-[130px] space-x-10 px-1 lg:gap-44 lg:space-x-0  space-y-2 lg:p-6 w-full">
                                    <div className="flex flex-col  justify-center items-center space-y-1">
                                        <img
                                            src={state.homeLogo}
                                            alt={state.homeTeam}
                                            className="w-12 h-12 m-2 rounded-full shadow-inner"
                                        />
                                        <span className="font-sans text-xs font-normal">
                                            {state.homeTeam}
                                        </span>
                                    </div>

                                    <div className="flex justify-center items-center flex-col">
                                        <span className="font-sans font-normal text-sm bg-[#1A365D] text-white p-1.5 rounded-xl">
                                            {state.timing}
                                        </span>
                                        
                                        <p className="text-2xl">VS</p>
                                    </div>

                                    <div className="flex flex-col  justify-center items-center space-y-1">
                                        <img
                                            src={state.awayLogo}
                                            alt={state.awayTeam}
                                            className="w-12 h-12 m-2 rounded-full shadow-inner"
                                        />
                                        <span className="font-sans text-xs font-normal">
                                            {state.awayTeam}
                                        </span>
                                    </div>
                                </section>
                            </div>

                            {/* Odds Section */}

                            <section className="flex justify-center w-full items-center flex-col">
                                <h3 className="text-[#1A365D] py-4">Match Odds</h3>
                                <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-6 w-full">
                                    <div className="flex justify-center items-center border-[#1a365d1f] bg-white border w-full p-2 shadow-xs rounded-sm flex-col space-y-1 lg:space-y-3 ">
                                        <p className="px-3 font-normal font-sans text-[#1A365D]">Home</p>
                                        <p className="font-normal border-t border-[#1A365D]  text-[#1A365D] px-1 text-[15px] py-1 min-w-auto w-full text-center ">
                                            {state.odd.Odds}
                                        </p>
                                    </div>
                                    <div className="flex w-full justify-center items-center border-[#1a365d1f] bg-white border p-2 shadow-xs rounded-sm flex-col space-y-1 lg:space-y-3">
                                        <p className="px-3 font-normal font-sans text-[#1A365D]">Draw</p>
                                        <p className="font-normal border-t  text-[#1A365D]   border-[#1A365D] px-1 text-[15px] py-1 min-w-auto w-full text-center">
                                            {state.odd.Tips}
                                        </p>
                                    </div>
                                    <div className="flex w-full justify-center items-center border-[#1a365d1f] bg-white border p-2 shadow-xs rounded-sm flex-col space-y-1 lg:space-y-3">
                                        <p className="px-3 font-normal font-sans text-[#1A365D]">Away</p>
                                        <p className="font-normal border-t  text-[#1A365D]   border-[#1A365D] px-1 text-[15px] py-1 min-w-auto w-full text-center">
                                            {state.odd.Prop}
                                        </p>
                                    </div>
                                </div>
                            </section>

                     
                        </div>

                         <section className="mt-10">
                          <div className="bg-[#1A365D] rounded-t-xl">
                                <h3 className="text-white p-4">
                                    HEAD TO HEAD HISTORY
                                </h3>
                            </div>
               
               {h2h.map((item, index) => (
                 <div key={index}>
                    <table className="w-full">
                        <tbody>
                            <tr className=" hover:bg-[#D6AE3E]/60 flex justify-between lg:text-lg text-sm items-center w-full lg:p-3 py-2">
                                <td className="flex justify-center items-center text-[#4B5563]">
                                    <img
                                            src={item.league.logo}
                                            alt={item.league.name}
                                            className="w-6 h-6  rounded-full shadow-inner"
                                        />
                               
                                    {new Date(item.fixture.date).toLocaleDateString()}
                                </td>
                                <td className="flex justify-center font-semibold items-center">
                                    <img
                                            src={item.teams.away.logo}
                                            alt={item.teams.away.name}
                                            className="w-6 h-6  rounded-full shadow-inner"
                                        />
                                    {item.teams.away.name.slice(0, 18)}
                                </td>
                                <td className="bg-[#D6AE3E] lg:max-w-36 max-w-18 w-full flex justify-between items-center text-white px-3 py-2 rounded-xl">
                                    <span>
                                        {item.score.fulltime.away}
                                    </span>
                                    :
                                    <span>
                                        {item.score.fulltime.home}
                                    </span>
                                </td>
                                <td className="flex justify-center text-[#4B5563] items-center">
                                    <img
                                            src={item.teams.home.logo}
                                            alt={item.teams.home.name}
                                            className="w-6 h-6  rounded-full shadow-inner"
                                        />
                                    {item.teams.home.name.slice(0, 18)}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                          
                </div>
                
               ))}

                          <div className="bg-[#1A365D] rounded-t-xl">
                                <h3 className="text-white p-4 uppercase">
                                    {state.homeTeam} LAST 5 MATCHES
                                </h3>
                            </div>


                {/* {h2h.map((items, index) => (
                 <div key={index}>
                    <table className="w-full">
                        <tbody>
                            <tr className=" hover:bg-[#D6AE3E]/60 flex justify-between lg:text-lg text-sm items-center w-full lg:p-3 py-2">
                                <td className="flex justify-center items-center text-[#4B5563]">
                                    <img
                                            src={items.league.logo}
                                            alt={items.league.name}
                                            className="w-6 h-6  rounded-full shadow-inner"
                                        />
                               
                                    {new Date(items.fixture.date).toLocaleDateString()}
                                </td>
                                <td className="flex justify-center font-semibold items-center">
                                    <img
                                            src={items.teams.away.logo}
                                            alt={items.teams.away.name}
                                            className="w-6 h-6  rounded-full shadow-inner"
                                        />
                                    {items.teams.away.name.slice(0, 18)}
                                </td>
                                <td className="bg-[#D6AE3E] lg:max-w-36 max-w-18 w-full flex justify-between items-center text-white px-3 py-2 rounded-xl">
                                    <span>
                                        {items.score.fulltime.away}
                                    </span>
                                    :
                                    <span>
                                        {items.score.fulltime.home}
                                    </span>
                                </td>
                                <td className="flex justify-center text-[#4B5563] items-center">
                                    <img
                                            src={items.teams.home.logo}
                                            alt={items.teams.home.name}
                                            className="w-6 h-6  rounded-full shadow-inner"
                                        />
                                    {items.teams.home.name.slice(0, 18)}
                                </td>
                            </tr>
                        </tbody>
                    </table>

                          
                </div>
                
               ))} */}

               <div className="bg-[#1A365D] rounded-t-xl mt-4">
                                <h3 className="text-white p-4 uppercase">
                                    {state.awayTeam} LAST 5 MATCHES
                                </h3>
                            </div>

                </section> 
                </motion.div>
                
            </section>
            </>
       </main>
    );
}






{/* {loading && 
                      <div className=" hover:shadow-lg text-[#1a365d] py-20 hover:bg-[#FFF7E0] group transition-all  border border-[#D6AE3E] flex justify-center items-center w-full rounded-[0.6rem] p-2"><span><FaSpinner className="animate-spin" /> </span> Loading Prediction...</div>
                      }
                      {error &&
                       <div className="text-center justify-center items-center flex flex-col text-red-500 py-20  w-full rounded-xl"> {error} <FaTriangleExclamation className="text-red-600 animate-pulse" /></div>
                      }
                      {!loading && h2h.length == 0 && 
                      <div className="text-center text-[#1a365d] py-20 flex justify-center items-center"> No Prediction Available <FaTriangleExclamation className="text-red-600 animate-pulse"/>...</div>
                      } */}