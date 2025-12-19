import { useState } from "react";
import { Editor } from "primereact/editor";
// import { data } from "react-router-dom";

export default function MetaData() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) return;

    const token = localStorage.getItem("authToken");
    const payload = {
      market_type: title,
      metadata_content: body,
    };

    try {
      setLoading("loading");
      const res = await fetch(
        "https://twokw-backend.onrender.com/api/v1/metadata/",
        {
          method: "POST",
          headers: {
            "content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      console.log(data);
      setLoading("success");
    } catch (err) {
      console.log(err);
      setLoading("Error");
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
              <option value="home">Home Page</option>
              <option value="about">About Us</option>
              <option value="contact">Contact Us</option>
              <option value="services">Services</option>
              <option value="two_odds">2 Odds Page</option>
              <option value="super_single">Super Single Page</option>
              <option value="double_chance">Double Chance Page</option>
              <option value="home_win">Home Win Page</option>
              <option value="away_win">Away Win Page</option>
              <option value="one_point_five_goals">1.5 Goals Page</option>
              <option value="two_point_five_goals">2.5 Goals Page</option>
              <option value="both_teams_score">Both Teams Score Page</option>
              <option value="all_predictions">All Predictions Page</option>
            </select>
          </div>
          <div className="w-full h-auto mt-2 bg-[#F5FAFF] rounded-lg">
            {status ? (
              <div className="px-5 py-3">
                <div className="space-y-2">
                  <label htmlFor="">Page Title</label>
                  <input
                    type="text"
                    className="w-full border border-[#1A365D] px-4 py-2 focus:outline-none"
                  />
                  <label htmlFor="">Page Description</label>
                  <input
                    type="text"
                    className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                  />
                  <label htmlFor="">Page Keywords</label>
                  <input
                    type="text"
                    className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                  />
                  <label htmlFor="">Header Content</label>
                  <input
                    type="text"
                    className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                  />
                  <label htmlFor="">Header Sub-Content</label>
                  <input
                    type="text"
                    className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                  />
                </div>
                <div className="mt-3">
                  <h2>Page Footer SEO Content</h2>
                  <Editor
                    value={body}
                    onTextChange={(e) => setBody(e.htmlValue)}
                    className="h-[400px] w-full mt-2 "
                  />
                </div>
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
            type="button"
            className="bg-[#1A365D] text-white w-64 text-xl rounded-xl py-2"
          >
            {loading === "loading"
              ? "Submitting Metadata..."
              : "Submit Metadata"}
          </button>
        </div>
      </form>
    </div>
  );
}
