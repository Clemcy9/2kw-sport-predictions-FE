import { useEffect, useState } from "react";
import { userToken } from "../hooks/useAuth";

export default function Goals1_5() {

   const [seo, setSeo] = useState(null);
   
    const token = userToken();
   
    useEffect(() => {
        async function fetchSEO() {
			try{
				const res = await fetch(
            "https://twokw-backend.onrender.com/api/v1/metadata/market/over%20and%20Under",
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
    }catch(err){
        console.error("failed to fetch metadata", err),
                setSeo({
                    page_title: "Over 1.5 | 2KwPredicts",
                    page_description:
                        "Football predictions, betting tips, match previews, and expert league analysis focused on over 1.5.",
                    page_keywords:
                        "over 1.5 predictions, football betting tips, match previews, league analysis, football predictions",
                    canonical: "https://2kwpredicts.com/over 2.5",
                    header_content: "over 1.5 | 2KwPredicts",
                    header_sub_content:
                        "Expert football predictions, betting tips, and analysis for over 1.5",
                })
            }
        }
        fetchSEO();
    }, [token]);
   
    return (
        <>
            <title>{seo?.page_title}</title>
            <meta
                name='author'
                content='Chizzy Duru'
            />
            <meta
                name='robots'
                content='index, follow'
            />
            <meta
                property='og:site_name'
                content='2KwPredicts'
            />
            <link
                rel='canonical'
                href='https://2kwpredicts.com/over 2.5'
            />
            <meta
                name='keywords'
                content={seo?.page_keywords}
            />
            <meta
                name='description'
                content={seo?.page_description}
            />
   
            <meta
                property='og:title'
                content={seo?.page_title}
            />
            <meta
                property='og:description'
                content={seo?.page_description}
            />
            <meta
                property='og:url'
                content='https://2kwpredicts.com/over 2.5'
            />
            <meta
                property='og:type'
                content='website'
            />
   
            <main className="w-full m-2 border border-[#1A365D] p-4">
                <p>{seo?.header_content}</p>
                <p>{seo?.header_sub_content}</p>
            </main>
        </>
    );
   }
   