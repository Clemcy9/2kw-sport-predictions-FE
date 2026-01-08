import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import DOMPurify from "dompurify";

export default function DummyBlog() {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const get_all_blogs = async () => {
      try {
        const res = await fetch(
          "https://twokw-backend.onrender.com/api/v1/blogs"
        );

        if (!res.ok) throw new Error("Failed to get all blogs");
        const data = await res.json();
        console.log("Api data", data);
        //sort by newest blog
        const sorted = (data.data || []).sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setBlogs(sorted.slice(0, 4));
      } catch (err) {
        console.error(err);
      }
    };
    get_all_blogs();
  }, []);

  return (
    //   <div >
    <div className="gap-5 border-none lg:p-4 mx my-3 mt-7 w-full z-20 relative flex flex-col justify-center items-center bg-[#e0e2e685]">
      <h1 className="font-[Inria Sans] text-center text-3xl font-semibold text-[#1F2128] lg:pb-6 mb-8 text-shadow-x z-40">
        2kwPredict Blog
      </h1>
      <div className="lg:grid lg:grid-cols-3 lg:gap- sm:grid sm:grid-cols-2 sm:gap-6 gap-4 w-full sm:items-center sm:w-full sm:justify-center flex flex-col ">
        {blogs.map((blog) => (
          <article
            onClick={() => navigate(`/blog_id/${blog._id}`)}
            key={blog._id}
            className="group overflow-hidden bg-white cursor-pointer flex items-center justify-between flex-row lg:flex-col lg:gap-2 sm:flex-col lg:rounded-[0.5em] gap-1 rounded-[0.5em] hover:-translate-y-1 transition-all lg:w-auto w-full  shadow-sm h-[200px] sm:h-[380px] lg:h-[380px]"
          >
            <div className="relative min-w-[180px]  w-[150px] md:w-full sm:w-full h-[200px] md:h-[210px] sm:h-[200px] sm:min-h-[200px] overflow-hidden">
              <img
                src={blog.image_url}
                alt={blog.title}
                className="w-full h-full object-cover transition-transform duration-500
               group-hover:scale-110 group-active:scale-110
               rounded-l-[0.5rem]
               lg:rounded-bl-none lg:rounded-t-[0.4rem]
               sm:rounded-bl-none sm:rounded-t-[0.5rem]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 to-transparent" />
            </div>
            <div className="lg:px-2 px-1 sm:px-2 py-0 flex flex-col space-y-1 sm:gap-0">
              <h2 className="font-semibold leading-tight  ">
                {blog.title.slice(0, 50)}...{" "}
              </h2>

              <div
                className="ql-editor text-[#65758B] lg:text-[15px] text-[13px]"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blog.body.slice(0, 250) + "..."),
                }}
              />
              <div className="flex justify-between w-full lg:py-2 ">
                <span className="font-semibold text-[#65758B]">
                  {new Date(blog.createdAt).toLocaleDateString()}
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
