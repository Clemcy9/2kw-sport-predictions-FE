import { useState } from "react";
import { Editor } from "primereact/editor";
import { userToken } from "../../hooks/useAuth";
// import { data } from "react-router-dom";

export default function Seo() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [body, setBody] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !body) return;

    const token = userToken();
    const payload = {
      market_type: title,
      metadata_content: body,
    };

    try {
      setLoading("loading");
      const res = await fetch("https://api.2kw.net/api/v1/metadata/", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

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
              <h1 className=" w-full font-bold text-black/80 font-[Inria Sans]  text-2xl">
                SEO Pages
              </h1>
              <small className="mt-1 text-lg">
                Add and manage SEO data for your website!
              </small>
            </div>
            <div>
              <button className="bg-red-600 text-white text-center px-10 py-2 rounded-xl">
                Cancel
              </button>
            </div>
          </div>
          <div className="w-full h-auto mt-2 rounded-lg">
            <div className="px-5 py-3">
              <div className="grid grid-cols-1 space-y-6">
                <div className="grid grid-cols-2 gap-14">
                  <div>
                    <label htmlFor="">Page Title</label>
                    <input
                      type="text"
                      placeholder="Provide page title here"
                      className="w-full border border-[#1A365D] px-2 py-2 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label htmlFor="">Page Url</label>
                    <input
                      type="text"
                      placeholder="Provide page slug here"
                      className="w-full border border-[#1A365D] px-4 py-2 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="">Page Description</label>
                  <input
                    type="text"
                    placeholder="Provide page description here"
                    className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="">Page Keywords</label>
                  <input
                    type="text"
                    placeholder="Provide page keywords here"
                    className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="">Header Content</label>
                  <input
                    type="text"
                    placeholder="Provide header content here"
                    className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="">Header Sub-Content</label>
                  <input
                    type="text"
                    placeholder="Provide header sub-content here"
                    className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="">Page Footer SEO Content</label>
                  <input
                    type="text"
                    placeholder="Provide page footer seo content here"
                    className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:mt-10 mt-16 items-center ">
          <button
            type="button"
            className="bg-[#1A365D] text-white w-64 text-xl rounded-xl py-2"
          >
            {loading === "loading" ? "Save Content..." : "Save Content"}
          </button>
        </div>
      </form>
    </div>
  );
}

// export default seo;
