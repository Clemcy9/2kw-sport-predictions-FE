import { useEffect, useState } from "react";
import { userToken } from "../auth-system/auth";

export default function SuperSingles() {

    const [seo, setSeo] = useState(null);
       
        const token = userToken();
       
        useEffect(() => {
            fetch(
                "https://twokw-backend.onrender.com/api/v1/metadata/market/superSingleTip",
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            )
                .then((res) => res.json())
                .then((data) => setSeo(data.seo))
                .catch(() =>
                    setSeo({
                        title: "Super singles | 2KwPredicts",
                        description:
                            "Football predictions, betting tips, match previews, and expert league analysis focused on super singles.",
                        keywords:
                            "super singles predictions, football betting tips, match previews, league analysis, football predictions",
                        canonical: "https://2kwpredicts.com/super singles",
                        ogTitle: "super singles | 2KwPredicts",
                        ogDescription:
                            "Expert football predictions, betting tips, and analysis for super singles",
                    })
                );
        }, []);
       
        return (
            <>
                <title>{seo.page_title}</title>
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
                    href='https://2kwpredicts.com/super singles'
                />
                <meta
                    name='keywords'
                    content={seo.page_keywords}
                />
                <meta
                    name='description'
                    content={seo.page_description}
                />
       
                <meta
                    property='og:title'
                    content={seo.page_title}
                />
                <meta
                    property='og:description'
                    content={seo.page_description}
                />
                <meta
                    property='og:url'
                    content='https://2kwpredicts.com/super singles'
                />
                <meta
                    property='og:type'
                    content='website'
                />
       
                <main>
                    <p>{seo.header_content}</p>
                    <p>{seo.header_sub_content}</p>
                </main>
            </>
        );
       }
       