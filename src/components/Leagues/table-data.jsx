import { useState } from "react";
import FootballLeagues from "./FootballLeagues";
import LeagueTables from "../Standings/Table";

export default function Table_Controller () {
    const [league, setLeague] = useState("EPL");

    return(
        <>
            <FootballLeagues onSelectLeague={ setLeague}/>
            <LeagueTables league={league} />
             {tipsLink.map((tips, index) => {
              const isActive = activePath === tips.path;

              return (
                <motion.button
                  key={index}
                  onClick={() => {
                    navigate(tips.path);
                    props.setBet({ id: tips.id, name: tips.name });
                  }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    backgroundColor: isActive ? "#D6AE3E" : "#fff",
                    color: isActive ? "#1A365D" : "#1A365D",
                    transition: { duration: 0.01 },
                  }}
                  className="flex-shrink-0 min-w-[60px] rounded-[0.4rem] py-2 px-1 shadow-sm font-semibold transition-all duration-300 border border-[#D6AE3E]"
                >
                  {tips.title}
                </motion.button>
              );
            })}
        </>
    );
}