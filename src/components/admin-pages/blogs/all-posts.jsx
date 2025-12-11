import { div } from "framer-motion/client";
import { useState } from "react";
import { useEffect } from "react";
import React from "react";

const AllPosts = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const get_all_blogs = async () => {
      try {
        const res = await fetch(
          "https://twokw-backend.onrender.com/api/v1/blogs"
        );

        if (!res.ok) throw new Error("failed to get all blogs");
        const data = await res.json();
        console.log("Api data", data);

        const sorted = (data.data || []).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setBlogs(sorted);
      } catch (err) {
        console.error(err);
      }
    };
    get_all_blogs();
  }, []);

  return (
    <div className="p-10">
      <div className="lg:p-5 mx-auto max-w-4xl rounded-xl bg-[#e0e2e685]">
        <div className="flex flex-col gap-10">
          {/* HEADINGS */}
          <div className="grid grid-cols-2 text-lg gap-[170px] mb-5">
            <div className="w-4xl">
              <h1 className="font-bold">Images</h1>
            </div>
            <h1 className="font-bold ">Date</h1>
          </div>

          {blogs.map((blog, index) => (
            <div className="grid grid-cols-2 gap-10">
              <div key={index} className="flex gap-20">
                <div>
                  <div className="col-span-2 flex items-center gap-1 w-2xl">
                    <div className="w-44 h-52">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="group-hover:scale-110 mt-10 group-active:scale-110 transition-transform duration-500 w-52 h-52 "
                      />
                      {/* <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 to-transparent"></div> */}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h1>{blog.title}</h1>
                      <p>{blog.body}</p>
                      <div className="flex gap-2">
                        <button className=" border border-green-500 text-green-500 py-1 px-6">
                          Edit
                        </button>
                        <button className="bg-red-500 text-white py-1 px-6">
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                  <span className="font-semibold text-[#65758B]">
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>

    // <div className="p-10">
    //   <div className="lg:p-5 mx-auto max-w-4xl rounded-xl bg-[#e0e2e685]">
    //     <div className="flex flex-col gap-10">
    //       {/* HEADINGS */}
    //       <div className="grid grid-cols-2 mb-5">
    //         <h1 className="font-bold">Images</h1>
    //         <h1 className="font-bold">Date</h1>
    //       </div>

    //       {/* BLOG LIST */}
    //       <div className="grid grid-cols-2 gap-10">
    //         {blogs.map((blog, index) => (
    //           <React.Fragment key={index}>
    //             {/* LEFT: IMAGE + TITLE + BODY */}
    //             <div className="flex gap-5">
    //               <div className="w-44 h-52">
    //                 <img
    //                   src={blog.image}
    //                   alt={blog.title}
    //                   className="mt-5 transition-transform duration-500 w-52 h-52"
    //                 />
    //               </div>

    //               <div className="flex flex-col gap-2">
    //                 <h1 className="font-semibold">{blog.title}</h1>
    //                 <p className="text-sm">{blog.body}</p>

    //                 <div className="flex gap-2">
    //                   <button className="border border-green-500 text-green-500 py-1 px-6">
    //                     Edit
    //                   </button>
    //                   <button className="bg-red-500 text-white py-1 px-6">
    //                     Delete
    //                   </button>
    //                 </div>
    //               </div>
    //             </div>

    //             {/* RIGHT: DATE */}
    //             <div className="flex items-start">
    //               <span className="font-semibold text-[#65758B]">
    //                 {new Date(blog.createdAt).toLocaleDateString()}
    //               </span>
    //             </div>
    //           </React.Fragment>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default AllPosts;
