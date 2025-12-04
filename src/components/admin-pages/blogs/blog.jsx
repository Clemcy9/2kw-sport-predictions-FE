import { useRef, useState } from "react";
import { Editor } from "primereact/editor";
import imgThumbnail from "../../../assets/thumbnail.png";
import { img, input, object } from "framer-motion/client";
import { IoIosArrowDown } from "react-icons/io";

// import { data } from "react-router-dom";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [image, setImage] = useState("");
  const [value, setValue] = useState("");
  const [blogData, setBlogData] = useState({});
  const [dropDownVisible, setDropDownVisible] = useState(false);

  // const isImage =  (image) => image && image.type?.startsWith("image/");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");

    try {
      const res = await fetch(
        "https://twokw-backend.onrender.com/api/v1/blogs/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ title, body, image }),
        }
      );

      const data = await res.json();
      console.log(data);
    } catch (ero) {
      console.log(ero);
    }
  };

  const myImageRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (e.target.files.length <= 0) {
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      myImageRef.current.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const statusTextRef = useRef(null);
  const updateStatusText = (e) => {
    statusTextRef.current.textContent = e.target.textContent;
    setDropDownVisible((prev) => !prev);
  };

  return (
    <div className="px-8 lg:pt-6 ">
      <form
        onSubmit={handleSubmit}
        className="lg:grid lg:grid-cols-[2fr_0.8fr] w-full lg:gap-8 "
      >
        <h2 className="lg:hidden w-full text-center font-bold text-black/80 font-[Inria Sans] py-6 text-xl">
          New Article
        </h2>
        <div className="w-full lg:space-y-5 space-y-5">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Article Title"
            className="w-full border border-[#1A365D] rounded-xl px-4 py-2 text-[#1A365D] font-semibold font-[Open Sans] focus:outline-none focus:ring-1 focus:ring-[#1A365D]"
          />
          <Editor
            value={value}
            onChange={(e) => setValue(e.htmlValue)}
            className="h-[400px]"
          />
        </div>
        <div className="flex flex-col items-center space-y-10">
          <button
            type="submit"
            className="bg-[#1A365D] text-white w-64 text-xl rounded-xl py-2"
          >
            Save Article
          </button>

          <div className="flex lg:flex-col gap-5">
            <div className="flex flex-col justify-center items-start py-4 px-4  rounded-xl bg-[#F5FAFF] ">
              <h3 className="w-full text-left font-bold text-black/80 font-[Inria Sans]">
                Feature Image
              </h3>
              <article className=" h-50 w-64 rounded-2xl my-4">
                {/* {image && isImage(image) && (
                                <img src={URL.createObjectURL(image)} alt="image" className="w-64 h-50 object-cover rounded-2xl" />
                             )} */}
                <img
                  ref={myImageRef}
                  src={imgThumbnail}
                  className="object-cover rounded-xl text-[#1A365D] font-semibold font-[Open Sans] h-50 w-64"
                />
              </article>

              <div className="relative w-[150px] h-[40px] py-2 px-6 border border-[#1A365D] rounded-xl cursor-pointer text-[#1A365D] font-semibold font-[Open Sans]">
                <input
                  type="file"
                  onChange={handleFileChange}
                  hidden
                  id="file"
                />
                <label
                  htmlFor="file"
                  className="cursor-pointer absolute left-0 top-0 w-full h-full flex items-center justify-center"
                >
                  Choose Image
                </label>
              </div>
            </div>

            <div className="py-4 px-4  rounded-xl bg-[#F5FAFF] w-full">
              <h2 className="font-bold mb-5">Metas</h2>

              <div className="flex items-center gap-7">
                <p>Status</p>

                <div className="relative w-40 border border-[#1A365D] rounded-xl flex items-center cursor-pointer">
                  <div className="flex items-center w-full rounded-xl overflow-hidden">
                    <span
                      ref={statusTextRef}
                      className="basis-[70%] block py-2 px-4 text-[#1A365D] hover:bg-[#f1f1f1] transition"
                    >
                      Publish
                    </span>
                    <span
                      onClick={() => setDropDownVisible((prev) => !prev)}
                      className="basis-[30%] py-2 px-4 hover:bg-[#f1f1f1] transition h-[40px] flex justify-center items-center"
                    >
                      <IoIosArrowDown />
                    </span>
                  </div>

                  <div
                    className={
                      dropDownVisible
                        ? "opacity-100 translate-y-0 pointer-events-auto absolute top-full left-0 w-full bg-[#F5FAFF] border border-[#1A365D] rounded-xl mt-1 flex flex-col overflow-hidden z-10 group-hover:flex transition"
                        : "opacity-0 translate-y-4 pointer-events-none absolute top-full left-0 w-full bg-[#F5FAFF] border border-[#1A365D] rounded-xl mt-1 flex flex-col overflow-hidden z-10 group-hover:flex transition"
                    }
                  >
                    <span
                      onClick={updateStatusText}
                      className="py-2 px-4 text-[#1a365d] hover:bg-[#f1f1f1] transition"
                    >
                      Publish
                    </span>
                    <span
                      onClick={updateStatusText}
                      className="py-2 px-4 text-[#1a365d] hover:bg-[#f1f1f1] transition"
                    >
                      Draft
                    </span>
                    <span
                      onClick={updateStatusText}
                      className="py-2 px-4 text-[#1a365d] hover:bg-[#f1f1f1] transition"
                    >
                      SEO
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
