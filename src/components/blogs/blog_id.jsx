import Footer from "../shared/Footer";
// import { FiArrowRight } from "react-icons/fi";
import { useEffect, useRef } from "react";
import Navbar from "../shared/Navbar";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { Link, Route, Routes } from "react-router-dom";
import { FaFutbol, FaTelegramPlane } from "react-icons/fa";
import { useState } from "react";
import DOMPurify from "dompurify";
import blogBg from "../../assets/Hero-images/blog-bg.jpg";
import {
  FaFacebook,
  FaX,
  FaTelegram,
  FaWhatsapp,
  FaShare,
} from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
// import { FaSquareWhatsapp } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

export default function BlogPost_Id() {
  const endpoints = window.location.href;
  const splitted = endpoints.split("/");
  const blogId = splitted[splitted.length - 1];
  const [blog, setBlog] = useState({});

  const blogUrl = `${window.location.origin}/blogs/${blogId}`;

  const shareWhatsApp = () => {
    window.open(
      `https://wa.me/?text=${encodeURIComponent(blogUrl + " " + blog.title)}`
      // "_blank"
    );
  };
  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        blogUrl + " " + blog.title
      )}`
      // "_blank"
    );
  };
  const shareTelegram = () => {
    window.open(
      `https://t.me/share/url?url=${encodeURIComponent(
        blogUrl
      )}&text=${encodeURIComponent(blog.title)}`
      //  "_blank"
    );
  };

  const shareX = () => {
    window.open(
      `https://twitter.com/intent/tweet?text=${encodeURIComponent(
        blog.title
      )}&url=${encodeURIComponent(blogUrl)}`,
      "_blank"
    );
  };

  useEffect(() => {
    const getBlogId = async () => {
      try {
        const res = await fetch(
          `https://twokw-backend.onrender.com/api/v1/blogs/${blogId}`
        );

        if (!res.ok) throw new Error("Failed to get all blogs");
        const data = await res.json();
        setBlog(data.data);
      } catch (err) {
        console.error(err);
      }
    };
    getBlogId();
  }, []);

  if (!blog) return;

  return (
    <>
    <main>
      
      <Navbar />

      <section
        className="font-sans relative h-[344px] mt-[22px] lg:mt-16 bg-cover bg-center flex-wrap flex items-center justify-center text-center text-white"
        style={{ backgroundImage: `url(${blogBg})` }}
      >
        <div className="absolute inset-0 bg-[#1A365D]/40"></div> {/* overlay */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="leading-[1.1] "
        >
          <div className="relative z-10 max-w-6xl px-3">
            <TypeAnimation
              sequence={["BLOG", 2000]}
              wrapper="h1"
              speed={50}
              repeat={0}
              cursor={false}
              className=" sm:text-[48px] text-3xl lg:text-6xl font-bold mb-4 text-shadow-lg lg:pb-6"
            />
            <p className="text-lg lg:text-xl mb-6 text-shadow-lg">
              Your winning journey starts here
            </p>

            <div className="flex justify-center items-center gap-4 lg:gap-10 transition-all">
              <a
                href=""
                target="blank"
                rel="noopener noreferrer"
                className="flex justify-center lg:items-center gap-1 bg-[#1A365D] font-sans text-[#D6AE3E] px-1 py-3 lg:py-4 shadow-lg rounded-[0.4rem] lg:text-[1.2em] lg:px-0 lg:w-65 hover:scale-95 hover:shadow-lg transition-all"
              >
                Join Telegram <FaTelegramPlane />
              </a>
              <Link
                to="/live-score"
                className="flex lg:items-center justify-center gap-1 lg:w-65 text-[#1A365D] font-sans bg-[#D6AE3E] px-5 py-3 lg:py-3  shadow-lg rounded-[0.4rem] lg:text-[1.5rem] lg:px-0 hover:scale-95 hover:shadow-lg transition-all"
              >
                Live Scores <FaFutbol className="animate-bounce" />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      <Routes>
        <Route
          path={blogId}
          element={
            <section className="lg:p-10 md:p-8 sm:p-5 p-2">
              <article className="group flex mx-auto flex-col lg:gap-2 sm:flex-col gap-1 lg:h-[100%] h-auto  hover:-translate-y-1 transition-all lg:max-w-7xl sm:h-[100%lg:rounded-xl">
                <div className="overflow-hidden md:h-[100vh] h-[50vh] relative w-full">
                  <img
                    src={blog.image_url}
                    alt={blog.title}
                    className="group-hover:scale-110 group-active:scale-110 transition-transform duration-500 h-full w-full object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 to-transparent rounded-xl"></div>
                </div>
                <span className="font-semibold text-[#65758B]">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                <div className=" flex flex-col bg-white shadow-xl p-4 rounded-lg mt-7 space-y-1 sm:gap-0">
                  <h2 className="font-semibold lg:text-2xl text-xl leading-tight  ">
                    {blog.title}
                  </h2>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(blog.body),
                    }}
                    className="text-[#65758B] lg:text-[16px] text-[15px] mt-3 lg:leading-7 leading-5 "
                  ></p>
                  <div className="flex justify-between w-full lg:py-2 ">
                    <span className="font-semibold text-[#65758B]">
                      {new Date(blog.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <div className="flex items-center gap-4 mt-10">
                    <h2>Share to:</h2>
                    <div className="flex gap-2">
                      <FaFacebookSquare
                        onClick={shareFacebook}
                        size={33}
                        className="text-blue-800"
                      />
                      <FaTelegram
                        onClick={shareTelegram}
                        size={33}
                        className="text-blue-600"
                      />
                      <BsTwitterX
                        onClick={shareX}
                        size={30}
                        className="bg-black text-white p-1 rounded-lg"
                      />
                      <FaWhatsapp
                        onClick={shareWhatsApp}
                        className="bg-green-500 text-white p-[0.5px] rounded-lg"
                        size={33}
                      />
                      <FaShare size={30} className="text-blue-700" />
                    </div>
                  </div>
                </div>
              </article>
            </section>
          }
        />
      </Routes>
      <Footer />
    </main>
    </>
  );
}
