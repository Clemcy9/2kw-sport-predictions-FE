import { useEffect, useState } from "react";
import { userToken } from "../hooks/useAuth";

const market_type = "away win";

export default function AwayWin() {
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
		
		
			
			}catch(err) {
				console.error("failed to fetch metadata", err),
				setSeo({
					page_title: "Away Win | 2KwPredicts",
					page_description:
						"Football predictions, betting tips, match previews, and expert league analysis focused on away wins.",
					page_keywords:
						"away win predictions, football betting tips, match previews, league analysis, football predictions",
					canonical: "https://2kwpredicts.com/away_win",
					header_content: "Away Win | 2KwPredicts",
					header_sub_content:
						"Expert football predictions, betting tips, and analysis for away wins",
				});
			}
				
			
		}
		fetchSEO();
	}, [token]);
    console.log(seo);

  return (
    <>
      <title>{seo?.page_title}</title>
      <meta name="author" content="Chizzy Duru" />
      <meta name="robots" content="index, follow" />
      <meta property="og:site_name" content="2KwPredicts" />
      <link rel="canonical" href="https://2kwpredicts.com/away_win" />
      <meta name="keywords" content={seo?.page_keywords} />
      <meta name="description" content={seo?.page_description} />

      <meta property="og:title" content={seo?.page_title} />
      <meta property="og:description" content={seo?.page_description} />
      <meta property="og:url" content="https://2kwpredicts.com/away_win" />
      <meta property="og:type" content="website" />

      <main className="w-full border border-[#1A365D] p-4 m-2">
        <p>{seo?.header_content}</p>
        <p>{seo?.header_sub_content}</p>
        <p>{seo?.metadata_content}</p>
      </main>
    </>
  );
}
