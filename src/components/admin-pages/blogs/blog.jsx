import { useRef, useState } from "react";
import { Editor } from "primereact/editor";
import imgThumbnail from "../../../assets/thumbnail.png";
import { img, input, object } from "framer-motion/client";
import { IoIosArrowDown } from "react-icons/io";
import { FaPlus } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

// import { data } from "react-router-dom";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [dropDownVisible, setDropDownVisible] = useState(false);
  const [inputTags, setInputTags] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [displayValue, setDisplayValue] = useState("");
  const [status, setStatus] = useState("Publish");

  {
    /* const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("authToken");

    // try {
    //   const res = await fetch(
    //     "https://twokw-backend.onrender.com/api/v1/blogs/",
    //     {
    //       method: "POST",
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //       body: JSON.stringify({ title, body, image }),
    //     }
    //   );

    //   const data = await res.json();
    //   console.log(data);
    // } catch (ero) {
    //   console.log(ero);
    // }
  }; */
  }

  const myImageRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (e.target.files.length <= 0) {
      return;
    }
    setImage(file);

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

  const postBlog = async (formData, token) => {
    try {
      const res = await fetch(
        "https://twokw-backend.onrender.com/api/v1/blogs/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      const data = await res.json();
      console.log(data);
      setStatus("Published");
    } catch (err) {
      console.log(err);
      setStatus("Error");
    }
  };

  const handlePostAction = async (e) => {
    const status = statusTextRef.current.textContent;
    // const imageUrl = myImageRef.current.src;

    if (!title || !body) {
      // alert("Please fill in all fields and select an image.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("body", body);

    const token = localStorage.getItem("authToken");

    switch (status) {
      case "Publish":
        setStatus("Posting article...");
        formData.append("image", image);
        await postBlog(formData, token);
        break;

      case "Draft":
        setStatus("Saving Draft");
        formData.append("image", image);
        console.log("Saving the post as a draft...");
        break;

      case "SEO":
        setStatus("Saving Seo");
        console.log("Saving the post as SEO...");
        break;

      default:
        break;
    }
  };

  return (
    <div className="px-8 lg:pt-6 ">
      <form className="lg:grid lg:grid-cols-[2fr_0.8fr] w-full lg:gap-8 ">
        <h2 className="lg:hidden w-full text-center font-bold text-black/80 font-[Inria Sans] py-6 text-xl">
          New Article
        </h2>
        <div className="w-full flex flex-col justify-center items-center lg:space-y-5 space-y-5">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Article Title"
            className="w-full border border-[#1A365D] rounded-xl px-4 py-2 text-[#1A365D] font-semibold font-[Open Sans] focus:outline-none focus:ring-1 focus:ring-[#1A365D]"
          />
          <Editor
            value={body}
            onTextChange={(e) => setBody(e.textValue)}
            className="h-[400px]"
          />
          <button
            onClick={handlePostAction}
            type="button"
            className="lg:block md:hidden hidden bg-[#1A365D] hover:bg-[#132b4d] lg:mt-10 text-white w-64 text-xl rounded-xl py-2 cursor-pointer"
          >
            {status}
          </button>
        </div>
        <div className="flex flex-col items-center space-y-10 lg:mt-0 mt-24 md:mt-10 sm:mt-10">
          <div className="flex sm:flex-row flex-col lg:flex-col gap-5 sm:mt-10">
            <div className="flex flex-col lg:flex-col justify-center items-start py-4 px-4  rounded-xl bg-[#F5FAFF] ">
              <h3 className="w-full text-left font-bold text-black/80 font-[Inria Sans]">
                Feature Image
              </h3>
              <article className=" h-50 w-64 rounded-2xl my-4">
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
              <h2 className="font-bold mb-5 text-xl">Metas</h2>

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
                        ? "opacity-100 translate-y-0 pointer-events-auto absolute top-full left-0 w-full bg-white border border-[#1A365D] rounded-xl mt-1 flex flex-col overflow-hidden z-10 group-hover:flex transition"
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
              <div className="relative mt-5">
                <h2 className="font-bold text-xl mb-2">Tags</h2>

                <ul>
                  <li>{displayValue}</li>
                </ul>
                <div
                  onClick={() => setInputTags((prev) => !prev)}
                  className="w-32 border border-[#1A365D] rounded-xl mt-5 flex items-center cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <span className=" block py-2 px-4 text-[#1A365D] transition">
                      Add tag
                    </span>
                    <FaPlus size={15} />
                  </div>
                </div>
                <div
                  className={
                    inputTags
                      ? "flex items-center gap-2 opacity-100 translate-y-0 pointer-events-auto absolute top-full left-0 w-full bg-white  rounded-xl mt-1 overflow-hidden transition duration-300 "
                      : "opacity-0 translate-y-4 pointer-events-none absolute flex items-center gap-2 top-full left-0 w-full"
                  }
                >
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="border border-[#1A365D] rounded-xl mt-1 focus:outline-none px-2 py-1"
                  />
                  <span onClick={() => setInputTags((prev) => !prev)}>
                    {" "}
                    <IoMdSend
                      onClick={() => setDisplayValue(inputValue)}
                      size={25}
                      className="text-[#1A365D] cursor-pointer"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={handlePostAction}
            type="button"
            className="lg:hidden pb-2 block bg-[#1A365D] hover:bg-[#132b4d] text-white w-64 text-xl rounded-xl py-2 cursor-pointer"
          >
            {status}
          </button>
        </div>
      </form>
    </div>
  );
}
