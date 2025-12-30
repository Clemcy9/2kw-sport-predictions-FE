import { useEffect, useState } from "react";
import { userToken } from "../auth-system/auth";

export default function DoubleChance() {

    const [seo, setSeo] = useState(null);
      
       const token = userToken();

      
       useEffect(() => {
		async function fetchSEO() {
			try{
				const res = await fetch(
			               "https://twokw-backend.onrender.com/api/v1/metadata/market/double%20chance",

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
					page_title: "Double chance | 2KwPredicts",
					page_description:
						"Football predictions, betting tips, match previews, and expert league analysis focused on Double chance.",
					page_keywords:
						"Double chance predictions, football betting tips, match previews, league analysis, football predictions",
					canonical: "https://2kwpredicts.com/away_win",
					header_content: "Double chance | 2KwPredicts",
					header_sub_content:
						"Expert football predictions, betting tips, and analysis for Double chance",
				});
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
                   href='https://2kwpredicts.com/double chance'
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
                   content='https://2kwpredicts.com/double chance'
               />
               <meta
                   property='og:type'
                   content='website'
               />
      
               <main>
                   <p>{seo?.header_content}</p>
                   <p>{seo?.header_sub_content}</p>
               </main>
           </>
       );
      }
      