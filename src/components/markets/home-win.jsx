import { useEffect, useState } from "react";
import { userToken } from "../hooks/useAuth";
import DOMPurify from "dompurify";

const market_type = "home win";

export default function HomeWin() {
  const [seo, setSeo] = useState(null);

  const token = userToken();

  useEffect(() => {
    async function fetchSEO() {
      try {
        const res = await fetch(
          `https://twokw-backend.onrender.com/api/v1/metadata/market/${market_type}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
          }
        );
        if (!res.ok) throw new Error("Failed request");

        const data = await res.json();

        if (!data?.data) throw new Error("SEO missing");

        setSeo(data.data);
      } catch (err) {
        console.error("failed to fetch metadata", err),
          setSeo({
            page_title: "Home Win | 2KwPredicts",
            page_description:
              "Football predictions, betting tips, match previews, and expert league analysis focused on home wins.",
            page_keywords:
              "home win predictions, football betting tips, match previews, league analysis, football predictions",
            canonical: "https://2kwpredicts.com/home_win",
            header_content: "home Win | 2KwPredicts",
            header_sub_content:
              "Expert football predictions, betting tips, and analysis for home wins",
          });
      }
    }
    fetchSEO();
  }, [token]);

  return (
    <>
      <title>{seo?.page_title}</title>
      <meta name="author" content="Chizzy Duru" />
      <meta name="robots" content="index, follow" />
      <meta property="og:site_name" content="2KwPredicts" />
      <link rel="canonical" href="https://2kwpredicts.com/home_win" />
      <meta name="keywords" content={seo?.page_keywords} />
      <meta name="description" content={seo?.page_description} />

      <meta property="og:title" content={seo?.page_title} />
      <meta property="og:description" content={seo?.page_description} />
      <meta property="og:url" content="https://2kwpredicts.com/home_win" />
      <meta property="og:type" content="website" />

      <main className="w-full m-2 border border-[#1A365D] p-4">
        {/* <p>{seo?.header_content}</p>
        <p>{seo?.header_sub_content}</p>
        <p>{seo?.metadata_content}</p> */}
        <div className=" flex flex-col bg-white shadow-xl p-4 rounded-lg mt-7 space-y-1 sm:gap-0">
          <h2 className="font-semibold lg:text-2xl text-xl leading-tight  ">
            {seo?.page_title}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(seo?.metadata_content),
            }}
            className="text-[#65758B] lg:text-[16px] text-[15px] mt-3 lg:leading-7 leading-5 "
          ></p>
        </div>
      </main>
    </>
  );
}
