import { useState } from "react";
import FootballLeagues from "./FootballLeagues";
import LeagueTables from "../Standings/Table";

export default function Table_Controller () {
    const [league, setLeague] = useState("EPL");

    return(
        <>
            <FootballLeagues onSelectLeague={ setLeague}/>
            <LeagueTables league={league} />
        </>
    );
}