import { useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import { userToken } from "../../hooks/useAuth";
import { FaSpinner } from "react-icons/fa6";
// import { data } from "react-router-dom";

export default function MetaData() {
  // const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  // const [loading, setLoading] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");
  const [pageKeywords, setPageKeywords] = useState("");
  const [headerContent, setHeaderContent] = useState("");
  const [headerSubContent, setHeaderSubContent] = useState("");
  const [existingId, setExistingId] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [body, setBody] = useState("");

  const token = userToken();

  //fetch data when dropdown status change
  useEffect(() => {
    if (!status) {
      clearFields();
      return;
    }

    const fetchExistingData = async () => {
      setIsFetching(true);

      try {
        const res = await fetch(
          `https://twokw-backend.onrender.com/api/v1/metadata?market_type=${status}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (res.ok) {
          const result = await res.json();
          // find the market-type
          const allData = Array.isArray(result) ? result : result.data || [];
          const match = allData.find((item) => item.market_type === status);
          setExistingId(match._id);
          setPageTitle(match.page_title || "");
          setPageDescription(match.page_description || "");
          setPageKeywords(match.page_keywords || "");
          setHeaderContent(match.header_content || "");
          setHeaderSubContent(match.header_sub_content || "");
          setBody(match.metadata_content || "");
        } else {
          clearFields();
          // setExistingId(null);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setIsFetching(false);
      }
    };
    fetchExistingData();
  }, [status, token]);

  const clearFields = () => {
    setPageTitle("");
    setPageDescription("");
    setPageKeywords("");
    setHeaderContent("");
    setHeaderSubContent("");
    setBody("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payLoad = {
      market_type: status,
      page_title: pageTitle,
      page_description: pageDescription,
      page_keywords: pageKeywords,
      header_content: headerContent,
      header_sub_content: headerSubContent,
      metadata_content: body,
    };

    const url = existingId
      ? `https://twokw-backend.onrender.com/api/v1/metadata/${existingId}`
      : "https://twokw-backend.onrender.com/api/v1/metadata/";

    const method = existingId ? "PUT" : "POST";
    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payLoad),
      });

      const result = await res.json();

      if (res.ok) {
        setExistingId(result._id || result.data?._id);
        // setLoading("success");
        alert("Data saved successfully!");
      }
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-8 lg:pt-6 p-4 ">
      <form onSubmit={handleSubmit} className=" w-full  ">
        <div className="w-full space-y-7">
          <div className="flex justify-between">
            <div>
              <h1 className=" w-full font-bold text-black/80 font-[Inria Sans]  text-xl">
                SEO Metadata
              </h1>
              <small className="mt-1">
                Add and manage seo meta data for your website pages!
              </small>
            </div>
            <select
              name=""
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="border px-3 py-2 rounded-lg"
            >
              <option value="">--select page--</option>
              <option value="homePage">Home page</option>
              <option value="contactUs">Contact us</option>
              <option value="services">Services page</option>
              <option value="home">freeTip</option>
              <option value="surePredict">surePredict</option>
              <option value="super_single">SuperSingleTip</option>
              <option value="freeOdds">freeOdds</option>
              <option value="home win">home win</option>
              <option value="away win">away win</option>
              <option value="over and Under">over and Under</option>
              <option value="btts">Both Teams Score Page</option>
              <option value="double chance">double chance</option>
              <option value="allPrediction">All Predictions</option>
            </select>
          </div>
          <div className="w-full h-auto mt-2 bg-[#F5FAFF] rounded-lg">
            {status ? (
              <div className="px-5 py-3">
                {isFetching ? (
                  <p className="text-center">Loading existing data...</p>
                ) : (
                  <div className="space-y-2">
                    <label htmlFor="">Page Title</label>
                    <input
                      type="text"
                      value={pageTitle}
                      onChange={(e) => setPageTitle(e.target.value)}
                      className="w-full border border-[#1A365D] px-4 py-2 focus:outline-none"
                    />
                    <label htmlFor="">Page Description</label>
                    <input
                      type="text"
                      value={pageDescription}
                      onChange={(e) => setPageDescription(e.target.value)}
                      className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                    />
                    <label htmlFor="">Page Keywords</label>
                    <input
                      type="text"
                      value={pageKeywords}
                      onChange={(e) => setPageKeywords(e.target.value)}
                      className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                    />
                    <label htmlFor="">Header Content</label>
                    <input
                      type="text"
                      value={headerContent}
                      onChange={(e) => setHeaderContent(e.target.value)}
                      className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                    />
                    <label htmlFor="">Header Sub-Content</label>
                    <input
                      type="text"
                      value={headerSubContent}
                      onChange={(e) => setHeaderSubContent(e.target.value)}
                      className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                    />
                    <div className="mt-3">
                      <label className="block mb-1">
                        Page Footer SEO Content
                      </label>
                      <Editor
                        value={body}
                        onTextChange={(e) => setBody(e.htmlValue)}
                        className="h-[400px] w-full mt-2 "
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex justify-center items-center h-[500px]">
                <h1 className="text-center text-3xl font-semibold">
                  Please Select a Page
                </h1>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:mt-16 sm:mt-10 mt-16 items-center ">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#1A365D] text-white w-64 text-xl rounded-xl py-2 cursor-pointer"
          >
            <div className="flex items-center justify-center gap-2">
              {isSubmitting && (
                <FaSpinner className="animate-spin mr-2 inline" />
              )}

              <span>
                {isSubmitting
                  ? "Processing..."
                  : existingId
                  ? "Update Metadata"
                  : "Submit Metadata"}
              </span>
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}
