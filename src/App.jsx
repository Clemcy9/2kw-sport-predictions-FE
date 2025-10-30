import { Routes, Route, } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import { useState, useEffect } from "react";
import EnglandPremierLeague from "./components/Predictioncards/England-Premier-League";
import SpainLaLiga from "./components/Predictioncards/Spain-La-Liga";
import LoadingAnimation from "./components/animations/Loading";
import EuropeUEFAChampionsLeague from "./components/Predictioncards/Europe-UEFA-Champions-League";
import EuropeUEFAEuropaLeague from "./components/Predictioncards/Europe-UEFA-Europa-League";
import ItalySerieA from "./components/Predictioncards/Italy-Serie-A";
import GermanyBundesliga from "./components/Predictioncards/Germany-Bundesliga";
import FranceLeague from "./components/Predictioncards/France-Ligue-1";
import PortugalLiga from "./components/Predictioncards/Portugal-Liga-Portugal";
import BelguimProLeague from "./components/Predictioncards/Belgium-Pro-League";
import BlogPost from "./Pages/Blog";
import AdminDashboard from "./Pages/admin";
import HomeWin from "./components/home-win";
import PredictionDetails from "./components/details";
import SignIn from "./components/admin-pages/sign-in";
import SignUp from "./components/admin-pages/sign-Up";
import DashBoard from "./components/admin-pages/dashboard";
import ForgotPassword from "./components/admin-pages/forgot-password";
import SendOtp from "./components/admin-pages/send-otp";
import SuccessAnimation from "./components/admin-pages/success-otp";
import ResetPassword from "./components/admin-pages/new-password";
import LoginOtp from "./components/admin-pages/login-otp";
import LoginCompleted from "./components/admin-pages/login-complete";

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
            <Route path="sign-in" element={ <SignIn />} />
            <Route path="/forgot-password" element={ <ForgotPassword />} />
            <Route path="/new-password" element={ <ResetPassword />} />
            <Route path="/success-otp" element={ <SuccessAnimation />} />
            <Route path="/send-otp" element={ <SendOtp />} />
            <Route path="/login-otp" element={ <LoginOtp />} />
            <Route path="/login-complete" element={ <LoginCompleted />} />
            <Route path="sign-up" element={ <SignUp />} />
            <Route path="/dashboard" element={ <DashBoard/>} />
            <Route path="/details" element={<PredictionDetails />} />
            <Route path="/blog" element={ <BlogPost />} />
            <Route path="/admin" element={ <AdminDashboard />} />
            <Route path="/home-win" element={ <HomeWin />} />
            <Route path="/leagues/england-premier-league" element={<EnglandPremierLeague />}/>
            <Route path="/leagues/spain-la-liga" element={<SpainLaLiga />} />
            <Route path="/leagues/europe-uefa-champions-league" element ={<EuropeUEFAChampionsLeague />} />
            <Route path="/leagues/europe-uefa-europa-league" element={<EuropeUEFAEuropaLeague />} />
            <Route path="/leagues/italy-serie-a" element={ <ItalySerieA/>} />
            <Route path="/leagues/germany-bundesliga" element={<GermanyBundesliga/>} />
            <Route path="/leagues/france-ligue-1" element={<FranceLeague />} />
            <Route path="/leagues/portugal-liga-portugal" element={<PortugalLiga />} />
            <Route path="/leagues/belgium-pro-league" element={<BelguimProLeague/> } />
          </Routes>
    )}

    </>
  );
}

