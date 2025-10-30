// import { useEffect, useRef } from "react";
import {FiArrowUp} from "react-icons/fi";
import Navbar from "../components/shared/Navbar";
import HeroSection from "../components/shared/HeroSection";
import Footer from "../components/shared/Footer";
import FreeTips from "../components/shared/FreetipsCard";
import BestPredictionCard from "../components/BestPrediction";
import FootballLeaguesTable from "../components/Leagues/FootballLeagues";
import ContentNavBar from "../components/Prediction-days/Content-Nav";
import PremierLeagueCard from "../components/Premier-league";
// import LaLigaCard from "../components/La-liga";
// import DenmarkCard from "../components/Denmark-Division";
// import ArgentainaCard from "../components/Argentina-premier";
// import BrasilCard from "../components/Brasil-serie-A";
import { motion } from "framer-motion";
import LeagueTables from "../components/Standings/Table";
import DummyBlog from "../components/dummy-blog";

export default function LandingPage () {

  // const focus = useRef(null);

  // useEffect(() => {
  //   focus.current?.scrollIntoView({
  //     behaviour: "smooth" 
  //   });
  // }, []);

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

    return(
       <motion.div initial={{opacity:0.5}} animate={{opacity:1}} transition={{duration:1, delay:0.1}}>
        <>
          <Navbar />
          <HeroSection />
          <FreeTips />
          <div className="flex justify-end items-end m-1">
            <div className="fixed border border-[#D6AE3E] bg-[#1A365D] rounded-full h-8 w-8 flex justify-center items-center animate-pulse text-[#D6AE3E] z-50" onClick={moveToTop}>
              <FiArrowUp className=" font-semibold text-xl" />
            </div>
          </div>
          <div className="px-1 md:px-4 pb-4 md:py-4 pt-2  min-h-screen w-full max-w-full md:overflow-x-hidden">
              <div className="grid grid-cols-1  md:grid-cols-[1fr_2fr] gap-2 max-w-full w-full justify-center">

                   <div className="space-y-2 items-center flex flex-col bg-white -z-20">
                      <BestPredictionCard />
                      <FootballLeaguesTable />
                    </div>
                    <div className="flex flex-col">
                     <div className="flex items-start justify-center w-full">
                       <ContentNavBar />
                     </div>

                      <div className="flex justify-center items-center flex-col">
                        <PremierLeagueCard />
                        <LeagueTables />
                        {/* <LaLigaCard />
                        <BrasilCard />
                        <ArgentainaCard />
                        <DenmarkCard />
                         */}
                        <div className="flex justify-end items-end">
                          <DummyBlog />
                        </div>
                     </div>
                   </div>
                </div>
              </div>
             {/* <div className="text-[#1A365D] border-[#1A365D] bg-white/60 md:p-10 md:m-5 border p-2 flex justify-center flex-col rounded-[0.3rem] shadow-sm">
                <h1>⚽2KwPredicts</h1>
                <h5>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id eligendi laudantium, temporibus, itaque eius ratione eos nemo sapiente quis sint explicabo, porro natus quibusdam labore ex. Ipsa expedita excepturi aperiam?
                  Repudiandae dolorum accusamus quaerat mollitia reiciendis distinctio, consequatur expedita sunt quod natus pariatur enim culpa suscipit impedit, temporibus consectetur tempora voluptatum, sint ea earum id. Laborum eos deleniti iure consequatur.
                  Deleniti, dolorum ab laborum quasi molestias tenetur itaque commodi ullam asperiores deserunt. Quaerat quas corporis ipsa unde aspernatur quod, tempore illum, fugit adipisci molestiae beatae sint? Ea eos voluptate porro.
                  Facere libero minus nisi dolore, facilis natus. Nihil ut molestiae distinctio, voluptatum veritatis delectus ab magni explicabo vel at quasi dignissimos animi optio dolorum accusamus ipsam eligendi ad iste blanditiis?
                </h5>
                <p>
                  <span>⚽2KwPredicts</span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor dignissimos obcaecati expedita, optio odio quae accusamus doloribus ad possimus. Velit nesciunt iste illum numquam recusandae, accusantium quae ut voluptas perferendis.
                </p>
                  <article>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ducimus velit amet enim incidunt ipsam sit molestias optio deleniti, tenetur voluptatem atque, praesentium harum nam, sint veniam perferendis corporis laudantium?
                    Sit explicabo eligendi ad dolore placeat ratione unde magnam ipsam. Dolor, minus. Enim voluptatibus blanditiis sed hic nam quisquam ipsa sint aliquam rem, quibusdam harum quidem incidunt ipsam tempora obcaecati!
                    Laborum assumenda voluptatum reprehenderit ut voluptate incidunt alias? Tempore error perferendis excepturi adipisci consectetur delectus? Minima adipisci ea maiores sint minus officiis hic illo at dolore molestiae, culpa, optio in?
                  </article>
             </div> */}
          <Footer />
       </>
       </motion.div>
    );
}