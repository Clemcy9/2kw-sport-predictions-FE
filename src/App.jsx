import { Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import { useState, useEffect } from "react";
import LoadingAnimation from "./components/animations/Loading";
import BlogPost from "./Pages/Blog";
import HomeWin from "./components/layout/home-win";
import DashBoard from "./components/admin-pages/features/dashboard";
import LoginCompleted from "./components/admin-pages/features/login-complete";
import Predictions from "./components/admin-pages/features/predictions";
import MakePredictions from "./components/admin-pages/features/fixtures";
import WelcomeText from "./components/animations/welcome";
import AdvertTags from "./components/admin-pages/features/tags";
import AwayWin from "./components/layout/away-win";
import SuperSingles from "./components/layout/super-singles";
import DoubleChance from "./components/layout/double-chance";
import AllPredictions from "./components/layout/all-predictions";
import FreeOdds from "./components/layout/free-2odds";
import BTTS_GG from "./components/layout/btts_gg";
import Goals1_5 from "./components/layout/goals-1.5";
import Goals2_5 from "./components/layout/goals-2.5";
import NewPost from "./components/admin-pages/blogs/blog";
import MetaData from "./components/admin-pages/features/metadata";
import Seo from "./components/admin-pages/features/seo";
import BlogPost_Id from "./components/blog_id";
import All_Legues from "./components/admin-pages/features/leagues";
import Free_Tips from "./components/layout/free-tips";
import LIve_Scores from "./components/store/live-score";
import Affiliate_Partner_Links from "./components/admin-pages/features/affiliate-Partner-links";
import Edit_Affiliate from "./components/admin-pages/features/edit-affiliate";
import Help_And_Support from "./components/admin-pages/features/help";
import PredictionDetails from "./components/details";
import AllPosts from "./components/admin-pages/blogs/all-posts";
import SignIn from "./components/auth-system/sign-in";
import SignUp from "./components/auth-system/sign-Up";
import AdminLayout from "./Pages/admin";
import AccessRoutes from "./components/auth-system/access-route";
import ProtectedRoute from "./components/auth-system/protected-routes";
import Scroll_To_Top from "./components/animations/scroll-arrow";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //  preveunt the loading animation from showing every time a user refreshes the page

    const loadOnlyOnce = sessionStorage.getItem("loadOnlyOnce");
    if (loadOnlyOnce) {
      setLoading(false);
      return;
    }
    sessionStorage.setItem("loadOnlyOnce", "true");

    const setTimer = setTimeout(() => setLoading(false), 9000);
    return () => clearTimeout(setTimer);
  }, []);

  return (
    <>
      {loading ? (
        <LoadingAnimation />
      ) : (
        <Routes>
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<WelcomeText />} />
            <Route path="dashboard" element={<DashBoard />} />
            <Route path="predictions" element={<Predictions />} />
            <Route path="fixtures" element={<MakePredictions />} />
            <Route path="leagues" element={<All_Legues />} />
            <Route path="tags" element={<AdvertTags />} />
            <Route path="help" element={<Help_And_Support />} />
            <Route
              path="affiliate-partner-links"
              element={<Affiliate_Partner_Links />}
            />
            <Route path="edit-affiliate" element={<Edit_Affiliate />} />
            <Route path="metadata" element={<MetaData />} />
            <Route path="seo" element={<Seo />} />
            <Route path="blogs/blog" element={<NewPost />} />
            <Route path="blogs/all-posts" element={<AllPosts />} />
          </Route>

          <Route path="live-score" element={<LIve_Scores />} />
          <Route path="details" element={<PredictionDetails />} />

          <Route path="/" element={<LandingPage />}>
            <Route path="free-tips" index element={<Free_Tips />} />
            <Route path="home-win" element={<HomeWin />} />
            <Route path="goals-1.5" element={<Goals1_5 />} />
            <Route path="goals-2.5" element={<Goals2_5 />} />
            <Route path="btts_gg" element={<BTTS_GG />} />
            <Route path="free-2odds" element={<FreeOdds />} />
            <Route path="away-win" element={<AwayWin />} />
            <Route path="super-singles" element={<SuperSingles />} />
            <Route path="double-chance" element={<DoubleChance />} />
            <Route path="all-predictions" element={<AllPredictions />} />
          </Route>
          <Route
            path="/sign-up"
            element={
              <AccessRoutes>
                <SignUp />
              </AccessRoutes>
            }
          />
          <Route path="/login-complete" element={<LoginCompleted />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/blog_id/*" element={<BlogPost_Id />} />
          <Route path="/blog" element={<BlogPost />} />
          <Route path="/scroll-arrow" element={<Scroll_To_Top />} />
        </Routes>
      )}
    </>
  );
}
