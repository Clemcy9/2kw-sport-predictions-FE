import { useEffect, useState } from "react";
import { userToken } from "./useAuth";
// import { userToken } from "./auth";

export function useAffiliate() {
  const [affiliateLinks, setAffiliateLinks] = useState([]);

  const token = userToken();

<<<<<<< HEAD

    useEffect(() => {
		fetch("https://twokw-backend.onrender.com/api/v1/affiliatelinks", {
			headers: {
				Authorization: `Bearer ${token}`,
				"Content-Type": "application/json",
			},
		})
			.then((res) => res.json())
			.then((data) => {
				// console.log("aff",data.data);
				setAffiliateLinks(data.data);
			});
	}, [token]);
=======
  useEffect(() => {
    fetch("https://api.2kw.net/api/v1/affiliatelinks", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("aff", data.data);
        setAffiliateLinks(data.data);
      });
  }, [token]);
>>>>>>> 9ce113c519aec8ecec7686fd50c3436151feccb2

  const publishedLinks = affiliateLinks.filter(
    (link) => link.status === "published"
  );

  const navbarLink = publishedLinks.find((link) => link.link_type === "navbar");

  const footerLink = publishedLinks.find((link) => link.link_type === "footer");

  return {
    navbarLink,
    footerLink,
  };
}
