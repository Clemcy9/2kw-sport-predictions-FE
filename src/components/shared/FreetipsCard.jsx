import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function FreeTips(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [activePath, setActivePath] = useState("/");

  const [play, setPlay] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (window.innerWidth >= 768) {
        setPlay(false);
        setTimeout(() => setPlay(true), 600);
      }
    }, 5 * 10 * 1000);

    return () => clearInterval(interval);
  }, []);


  useEffect(() => {
  // Find the Home Win button
  const homeTip = tipsLink.find((tip) => tip.name === "Home");
  if (homeTip) {
    props.setBet({ id: homeTip.id, name: homeTip.name });
    setActivePath(homeTip.path); // mark as active
  }
}, []);


  const tipsLink = [
    { title: "Free Tips", path: "/free-tips", name:"freeTip", id: 100 },
    { title: "All Predictions", path: "/all-predictions", id: 500 },
    { title: "Home Win", path: "/", id: 1, name: "Home" },
    { title: "Away Win", path: "/away-win", id: 1, name: "Away" },
    {
      title: "Super Singles",
      path: "/super-singles",
      id: 200,
      name: "super single",
    },
    { title: "Double Chance", path: "/double-chance", id: 12 },
    { title: "1.5 Goals", path: "/goals-1.5", id: 5, name: "Over 1.5" },
    { title: "2.5 Goals", path: "/goals-2.5", id: 5, name: "Over 2.5" },
    { title: "Free 2 Odds", path: "/free-2odds", id: 300, name: "free 2 odds" },
    { title: "BTTS/GG", path: "/btts_gg", id: 8, name: "Both Teams Score" },
  ];

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  return (
    <div className="w-full  max-w-full px-0 md:relative absolute shadow-sm md:shadow-none md:z-0 max-[300px]:mt-5 top-80 md:top-0 bg-[#1A365D] md:bg-white rounded-[0] md:rounded-none">
      <motion.nav
        key={play}
        initial={{ x: play ? -200 : 0, opacity: 0 }}
        animate={{ x: play ? 0 : "100%", opacity: 1 }}
        exit={{ x: "100%", opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="text-[#1A365D] md:flex w-full md:items-center md:justify-center overflow-hidden"
      >
        <div className="flex justify-center items-center p-2 w-full">
          <div className="flex flex-wrap gap-1.5 md:gap-4 font-sans justify-center w-full relative">
           {tipsLink.map((tips) => (
    <NavLink key={tips.id} to={tips.path} end>
      {({ isActive }) => (
        <motion.div
          whileTap={{ scale: 0.95 }}
          animate={{
            backgroundColor: isActive ? "#D6AE3E" : "#fff",
            color: "#1A365D",
          }}
          transition={{ duration: 0.15 }}
          onClick={() =>
            props.setBet({ id: tips.id, name: tips.name })
          }
          className="flex-shrink-0 min-w-[60px] rounded-[0.4rem] py-2 px-1 shadow-sm font-semibold border border-[#D6AE3E] cursor-pointer"
        >
          {tips.title}
        </motion.div>
      )}
    </NavLink>
  ))}

          </div>
        </div>
      </motion.nav>
    </div>
  );
}
