import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

export default function DummyBlog({ title }) {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const get_all_blogs = async () => {
      try {
        const res = await fetch("https://api.2kw.net/api/v1/blogs");

        if (!res.ok) throw new Error("Failed to get all blogs");
        const data = await res.json();
        // console.log("Api data", data);
        //sort by newest blog
        const sorted = (data.data || []).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt),
        );
        setBlogs(sorted.slice(0, 4));
      } catch (err) {
        // console.error(err);
      }
    };
    get_all_blogs();
  }, []);

  return (
    //   <div >
    <div className="gap-5 border-none lg:p-4 mx my-3 mt-7 w-full z-20 relative flex flex-col justify-center items-center bg-[#bfc0c46a]">
      {/* parakit AI */}
      <h1 className="font-[Inria Sans] text-center text-3xl font-semibold text-[#1F2128] lg:pb-6 mb-8 text-shadow-x z-40 mt-4">
        {title}
      </h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap- sm:grid sm:grid-cols-2 sm:gap-6 gap-4 w-full sm:items-center sm:w-full sm:justify-center flex flex-col">
        {blogs.map((blog) => (
          <article
            onClick={() => navigate(`/blog_id/${blog._id}`)}
            key={blog._id}
            className="group cursor-pointer overflow-hidden bg-white flex flex-col rounded-[0.5em] hover:-translate-y-1 transition-all shadow-sm w-[95%] mx-auto h-auto sm:h-[450px] lg:h-[450px]"
          >
            <div className="relative w-full h-[200px] sm:h-[230px] overflow-hidden flex-shrink-0">
              {blog.image_url && (
                <img
                  src={blog.image_url}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform duration-500
               group-hover:scale-110 group-active:scale-110
               rounded-l-[0.5rem]
               lg:rounded-bl-none lg:rounded-t-[0.4rem]
               sm:rounded-bl-none sm:rounded-t-[0.5rem]"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 to-transparent" />
            </div>

            <div className="lg:px-2 h-[200px] sm:h-[250px] lg:h-[350px] px-1 sm:px-2 flex flex-col justify-between space-y-1 sm:gap-0 w-full">
              <div className="mt-3">
                <h2 className="font-semibold leading-tight  ">{blog.title}</h2>
                <div
                  className="ql-editor text-[#65758B] lg:text-[14px] text-[13px] mt-2 line-clamp-4 pointer-events-none touch-none overflow-hidden"
                  style={{
                    display: "-webkit-box",
                    WebkitLineClamp: 4,
                    WebkitBoxOrient: "vertical",
                    maxHeight: "6em",
                    overflow: "hidden",
                  }}
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(blog.body),
                  }}
                />
              </div>
              <div className="flex justify-between w-full lg:py-2 ">
                <span className="font-semibold text-[#65758B]">
                  {new Date(blog.createdAt).toLocaleDateString().slice()}
                </span>
                <Link
                  className=" text-[#D6AE3E] flex justify-center items-center"
                  to={`/blog_id/${blog._id}`}
                >
                  Read more <FiArrowRight />
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

      <Link
        className="p-4 z-20 text-[#D6AE3E] flex justify-center text-center items-center underline"
        to={"/blog"}
      >
        View All Articles{" "}
      </Link>
    </div>
  );
}
