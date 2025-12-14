import { useState } from "react";
import { Editor } from "primereact/editor";
// import { data } from "react-router-dom";

export default function MetaData() {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);
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
      setStatus("loading");
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
      setStatus("success");
    } catch (err) {
      console.log(err);
      setStatus("Error");
    }
  };

  return (
    <div className="px-8 lg:pt-6 p-4 ">
      <form onSubmit={handleSubmit} className=" w-full  ">
        <div className="w-full space-y-7">
          <div>
            <h1 className=" w-full font-bold text-black/80 font-[Inria Sans]  text-xl">
              Header Sub-Content
            </h1>
            <input
              type="text"
              value={title}
              placeholder="Provide page header sub-content here"
              onChange={(e) => setTitle(e.target.value)}
              className="p-3 focus:ring-[#1A365D] mt-3 outline-none focus:ring-1 border-2 rounded-[0.1em] border-[#00000066] placeholder:text-[#00000066] w-full font-[Inria Sans]"
            />
          </div>
          <div className="mt-5">
            <h1 className="text-xl">Page Footer SEO Content</h1>
            <Editor
              value={body}
              onTextChange={(e) => setBody(e.htmlValue)}
              className="h-[400px] w-full mt-2"
            />
          </div>
        </div>
      </form>
      <div className="flex flex-col lg:mt-16 sm:mt-10 mt-16 items-center ">
        <button
          type="button"
          className="bg-[#1A365D] text-white w-64 text-xl rounded-xl py-2"
        >
          {status === "loading" ? "Submitting Metadata..." : "Submit Metadata"}
        </button>
      </div>
    </div>
  );
}
