import { Routes, Route, } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import { useState, useEffect } from "react";
import NigeriaNPFL from "./components/LeaguesTable/components/Nigeria-npfl";
import EnglandPremierLeague from "./components/LeaguesTable/components/England-Premier-League";
import SpainLaLiga from "./components/LeaguesTable/components/Spain-La-Liga";
import LoadingAnimation from "./components/Loading";
import EuropeUEFAChampionsLeague from "./components/LeaguesTable/components/Europe-UEFA-Champions-League";
import EuropeUEFAEuropaLeague from "./components/LeaguesTable/components/Europe-UEFA-Europa-League";
import ItalySerieA from "./components/LeaguesTable/components/Italy-Serie-A";
import GermanyBundesliga from "./components/LeaguesTable/components/Germany-Bundesliga";
import FranceLeague from "./components/LeaguesTable/components/France-Ligue-1";
import PortugalLiga from "./components/LeaguesTable/components/Portugal-Liga-Portugal";
import NetherlandsEredivise from "./components/LeaguesTable/components/Netherlands-Eredivisie";
import BelguimProLeague from "./components/LeaguesTable/components/Belgium-Pro-League";
import SouthAfricaLeague from "./components/LeaguesTable/components/South-Africa-Premier-Soccer-League";
import BlogPost from "./components/Blog";
import HomeWin from "./components/home-win";


export default function App(){
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    //  preveunt the loading screen from showing every time a user go back
    const loadOnlyOnce = sessionStorage.getItem("loadOnlyOnce");
    if (loadOnlyOnce) {
      setLoading(false);
      return;
    }
    sessionStorage.setItem("loadOnlyOnce", "true");
    
    const setTimer = setTimeout(() => setLoading(false), 9000);
    return () => clearTimeout(setTimer);
    
  }, []);

  return(
    <>
    {loading ?(
      <LoadingAnimation />
    ) : (
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/blog" element={ <BlogPost />} />
            <Route path="/home-win" element={ <HomeWin />} />
            <Route path="/leagues/nigeria-npfl" element={<NigeriaNPFL/>} />
            <Route path="/leagues/england-premier-league" element={<EnglandPremierLeague />}/>
            <Route path="/leagues/spain-la-liga" element={<SpainLaLiga />} />
            <Route path="/leagues/europe-uefa-champions-league" element ={<EuropeUEFAChampionsLeague />} />
            <Route path="/leagues/europe-uefa-europa-league" element={<EuropeUEFAEuropaLeague />} />
            <Route path="/leagues/italy-serie-a" element={ <ItalySerieA/>} />
            <Route path="/leagues/germany-bundesliga" element={<GermanyBundesliga/>} />
            <Route path="/leagues/france-ligue-1" element={<FranceLeague />} />
            <Route path="/leagues/portugal-liga-portugal" element={<PortugalLiga />} />
            <Route path="/leagues/netherlands-eredivisie" element={<NetherlandsEredivise />} />
            <Route path="/leagues/belgium-pro-league" element={<BelguimProLeague/> } />
            <Route path="/leagues/south-africa-premier-soccer-league" element={<SouthAfricaLeague/> } />
          </Routes>
    )}

    </>
  );
}

