import { useRef, useState } from "react";
import { Editor } from "primereact/editor";
import imgThumbnail from "../../../assets/thumbnail.png";
import { img, input, object } from "framer-motion/client";

// import { data } from "react-router-dom";

export default function NewPost() {
  const [title, setTitle] = useState("");
  const [body, setbody] = useState("");
  const [image, setImage] = useState("");
  const [value, setValue] = useState("");

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

    // if (e.target.files.length <= 0) {
    //   return;
    // }

    const reader = new FileReader();
    reader.onload = (e) => {
      myImageRef.current.src = e.target.result;
    };
    reader.readAsDataURL(file);
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
              <input type="file" onChange={handleFileChange} hidden id="file" />
              <label
                htmlFor="file"
                className="cursor-pointer absolute left-0 top-0 w-full h-full flex items-center justify-center"
              >
                Choose Image
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
