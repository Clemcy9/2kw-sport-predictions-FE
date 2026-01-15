import { useEffect, useState } from "react";
import { userToken } from "./useAuth";
// import { userToken } from "./auth";

export function useAffiliate() {
  const [affiliateLinks, setAffiliateLinks] = useState([]);

  const token = userToken();

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
