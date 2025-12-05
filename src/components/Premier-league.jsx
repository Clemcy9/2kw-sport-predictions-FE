import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function PremierLeagueCard({leagueNames, league, teams, values,fixture }) {

  const navigation = useNavigate();

  const click = () => {
    navigation("/details");
  };

  const times = fixture.date;
  console.log(leagueNames);

  const predictions = {
    homeLogo: teams.home.logo,
    homeTeam: teams.home.name,
    awayLogo: teams.away.logo,
    awayTeam: teams.away.name,
    leagueLogo: league.logo,
    timing:  new Date(times).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    odd: { Odds: values[1].odd, Tips: "over 15", Prop: "3.65%" },    
  };

  
  return (
      <div className="w-full border-none lg:p-0 my-1 flex justify-center items-center flex-col text-white space-y-4 lg:space-y-0">
      
        <motion.div
          className="lg:flex min-w-full w-full text-white flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div
            onClick={click}
          className=" hover:shadow-lg hover:bg-[#FFF7E0] group transition-all  border border-[#D6AE3E] flex justify-between items-center w-full flex-col lg:flex-row lg:p-0 rounded-[0.6rem] p-2"
          >
            <div className="text-[#1A365D] flex justify-between items-center flex-col lg:flex-row w-full space-y-2">
              <div className="flex  lg:px-2 lg:mx-3">
                <span className="font-sans font-normal text-sm text-[#1A365D]">
                  {predictions.timing}
                </span>
              </div>
              <div className="flex justify-between lg:justify-center lg:flex-col items-start min-w-[130px] space-x-10 px-1 lg:gap-0 lg:space-x-0  space-y-2 lg:p-0 w-full">
                <div className="flex justify-center items-center space-y-1">
                  <img
                    src={predictions.homeLogo}
                    alt={predictions.homeTeam}
                    className="lg:w-10 lg:h-10 w-6 h-6"
                  />
                  <span className="font-sans text-sm font-normal">
                    {predictions.homeTeam}
                  </span>
                </div>

                <div className="flex justify-center items-center">
                  <div className="lg:w-10 lg:h-10 w-6 h-6 ">
                    <img
                    src={predictions.awayLogo}
                    alt={predictions.awayTeam}
                    className="h-full w-full object-cover  rounded-full"
                  />
                  </div>
                  <p className="text-sm font-sans font-normal">
                    {predictions.awayTeam}
                  </p>
                </div>
              </div>
            </div>

            {/* Odds Section */}

            <div className="flex justify-between lg:justify-end lg:items-start items-start min-w-[130px]  space-x-10 px-1 lg:gap-4 lg:space-x-0 lg:p-4 w-full">
              <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3 ">
                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Odds</p>
              <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border border-[#D6AE3E] group-hover:bg-[#D6AE3E] hover:bg-white hover:text-[#D6AE3E] group-hover:text-white px-1 text-[15px] py-1 min-w-[50px] transition-colors duration-300 w-16 text-center ">
                  {predictions.odd.Odds}
                </p>
              </div>
              <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Tips</p>
              <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border group-hover:bg-[#D6AE3E] group-hover:text-white hover:bg-white hover:text-[#D6AE3E] border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px] transition-colors duration-300 w-16 text-center">
                  {predictions.odd.Tips}
                </p>
              </div>
              <div className="flex justify-center items-center flex-col space-y-1 lg:space-y-3">
                <p className="px-3 font-bold font-sans text-[#D6AE3E]">Prop%</p>
              <p className="font-normal text-[#D6AE3E] rounded-[0.6rem] border group-hover:bg-[#D6AE3E] group-hover:text-white hover:bg-white hover:text-[#D6AE3E] border-[#D6AE3E] px-1 text-[15px] py-1 min-w-[50px] transition-colors duration-300 w-16 text-center">
                  {predictions.odd.Prop}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
    </div>
  );
}