// import { b, filter } from "framer-motion/client";
// import { useState } from "react";
// import { useEffect } from "react";
// import { FaSpinner } from "react-icons/fa";
// import DOMPurify from "dompurify";

// const AllPosts = () => {
//   const [title, setTitle] = useState("");
//   const [body, setBody] = useState("");
//   const [image, setImage] = useState(null);
//   const [blogs, setBlogs] = useState([]);
//   const [model, setModel] = useState(null);
//   const [openEditModal, setOpenEditModal] = useState(false);
//   const [blogToEdit, setBlogToEdit] = useState({});
//   // const [edited, setEdited] = useState(false);
//   const [loading, setLoading] = useState(false);

//   // makes the main page not-scrollable when modal is open
//   useEffect(() => {
//     if (blogToEdit) {
//       const y = window.scrollY;
//       document.body.style.cssText = `position:fixed; top:-${y}px; left:0; right:0;`;
//     } else {
//       const y = parseInt(document.body.style.top || "0") * -1;
//       document.body.style.cssText = "";
//       window.scrollTo(0, y);
//     }
//   }, [blogToEdit]);

//   useEffect(() => {
//     const get_all_blogs = async () => {
//       try {
//         setLoading(true);
//         const res = await fetch(
//           "https://twokw-backend.onrender.com/api/v1/blogs"
//         );

//         if (!res.ok) throw new Error("failed to get all blogs");
//         const data = await res.json();
//         console.log("Api data", data);

//         const sorted = (data.data || []).sort(
//           (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
//         );
//         setBlogs(sorted);
//       } catch (err) {
//         console.error(err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     get_all_blogs();
//   }, []);

//   const handleDeleteSubmit = async (id) => {
//     const token = localStorage.getItem("authToken");
//     try {
//       const res = await fetch(
//         `https://twokw-backend.onrender.com/api/v1/blogs/${id}`,
//         {
//           method: "DELETE",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       if (!res.ok) {
//         throw new Error("falled to delete the blog post");
//       }
//       alert("Post deleted successfully");
//       setModel(null);
//       setBlogs((prev) => prev.filter((b) => b._id !== id));
//     } catch (error) {
//       console.log(error, "error accured while deleting a post");
//     }
//   };

//   const openForEdit = (blogId) => {
//     setOpenEditModal(true);
//     if (blogs) {
//       const blogToBeEdited = blogs.find((blog) => blog._id === blogId);
//       setBlogToEdit(blogToBeEdited);
//       console.log(blogToEdit);
//     }
//   };

//   const handleEdit = (e) => {
//     setBlogToEdit({ ...blogToEdit, [e.target.name]: e.target.value });
//     console.log(blogToEdit);
//   };

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//   };

//   const handleEditSubmit = async (blogId) => {
//     const formData = new FormData();
//     formData.append("title", blogToEdit.title);
//     formData.append("body", blogToEdit.body);

//     const token = localStorage.getItem("authToken");
//     try {
//       const res = await fetch(
//         `https://twokw-backend.onrender.com/api/v1/blogs/${blogToEdit._id}`,
//         {
//           method: "PUT",
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//           body: formData,
//         }
//       );
//       if (!res.ok) {
//         throw new Error("falled to update the blog post");
//       }
//       alert("Post updated successfully");
//       setBlogs((prevBlogs) => [...prevBlogs, blogToEdit]);
//       console.log(await res.json());
//       // setEdited(false);
//       setOpenEditModal(false);
//     } catch (error) {
//       console.log(error, "error occured while updating the post");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="text-center text-[#1A365D] py-20 flex justify-center items-center">
//         <span>
//           <FaSpinner className="animate-spin" />{" "}
//         </span>{" "}
//         Loading data...
//       </div>
//     );
//   }

//   return (
//     <div className="md:p-10 p-4">
//       <div className="lg:p-5 mx-auto max-w-4xl rounded-xl bg-[#e0e2e685]">
//         <div className="flex flex-col gap-10">
//           {/* HEADINGS */}
//           <div className="lg:flex sm:hidden md:hidden hidden text-lg gap-[120px] mb-5">
//             <div className="">
//               <h1 className="font-bold">Images</h1>
//             </div>
//             <h1 className="font-bold mr-96">Title/desc</h1>
//             <h1 className="font-bold">Date</h1>
//           </div>
//           <div className="lg:hidden block mt-10">
//             <h1 className="text-center font-bold text-2xl">All Post</h1>
//           </div>

//           {blogs.map((blog, index) => (
//             <div className="flex gap-10 md:mt-10">
//               <div key={index} className="flex lg:flex-row flex-col gap-20">
//                 <div>
//                   <div className=" flex items-center gap-1 md:w-2xl sm:w-xl">
//                     <div className="md:w-44 md:h-52 sm:w-36 sm:h-36 w-20 h-28">
//                       <img
//                         src={blog.image}
//                         alt={blog.title}
//                         className="group-hover:scale-110 mt-10 group-active:scale-110 transition-transform duration-500 md:w-44 md:h-52 sm:w-36 sm:h-36 w-20 h-28"
//                       />
//                       {/* <div className="absolute inset-0 bg-gradient-to-t from-[#111]/40 to-transparent"></div> */}
//                     </div>
//                     <div className="flex flex-col gap-2">
//                       <h1 className="font-semibold md:text-lg text-[15px]">
//                         {blog.title}
//                       </h1>
//                       <p
//                         className="sm:text-[15px] md:text-[16px] text-[14px]"
//                         dangerouslySetInnerHTML={{
//                           __html: DOMPurify.sanitize(blog.body),
//                         }}
//                       ></p>
//                       <div className="">
//                         <span className="font-semibold text-[#65758B] sm:text-[15px] md:text-lg text-sm">
//                           {new Date(blog.createdAt).toLocaleDateString()}
//                         </span>
//                       </div>
//                       <div className="flex gap-2">
//                         <button
//                           onClick={() => openForEdit(blog._id)}
//                           // onClick={() => showDataInInputFields(blog._id)}
//                           className=" border cursor-pointer border-green-500 text-green-500 md:text-[15px] text-sm px-4 py-1 md:px-6"
//                         >
//                           Edit
//                         </button>

//                         <button
//                           onClick={() => setModel(blog._id)}
//                           className="bg-red-500 text-white md:text-[15px] cursor-pointer  text-sm px-4 py-1 md:px-6"
//                         >
//                           Delete
//                         </button>
//                       </div>
//                       {openEditModal && (
//                         <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
//                           <form
//                             onSubmit={handleFormSubmit}
//                             className="shadow-lg rounded-xl w-xl p-3 bg-[#e0e2e6]"
//                           >
//                             <input
//                               type="text"
//                               value={blogToEdit.title}
//                               name="title"
//                               onChange={handleEdit}
//                               placeholder="title"
//                               className="w-full bg-white p-[15px] rounded-lg focus:outline-none"
//                             />
//                             <textarea
//                               name="body"
//                               id=""
//                               value={blogToEdit.body}
//                               onChange={handleEdit}
//                               className="h-96 w-full bg-white p-[15px] focus:outline-none rounded-lg block mt-5"
//                             ></textarea>
//                             <div className="flex gap-6 mt-6">
//                               <button
//                                 onClick={() => handleEditSubmit(blogToEdit._id)}
//                                 className="bg-[#1A365D] cursor-pointer text-white md:text-[15px]  text-sm px-4 py-1 md:px-6"
//                               >
//                                 Update
//                               </button>
//                               <button
//                                 onClick={() => setOpenEditModal(false)}
//                                 className=" text-[#1A365D] cursor-pointer border border-[#1A365D] md:text-[15px]  text-sm px-4 py-1 md:px-6"
//                               >
//                                 cancel
//                               </button>
//                             </div>
//                           </form>
//                         </div>
//                       )}

//                       {model === blog._id && (
//                         <div className="w-96 shadow-lg bg-white rounded-lg p-2">
//                           <h3>Are you sure you want to Delete </h3>
//                           <div className="flex gap-6 mt-6">
//                             <button
//                               className="bg-red-500 text-white md:text-[15px]  text-sm px-4 py-1 md:px-6"
//                               onClick={() => handleDeleteSubmit(blog._id)}
//                             >
//                               Yes Delete
//                             </button>
//                             <button
//                               className=" text-[#1A365D] border border-[#1A365D] md:text-[15px]  text-sm px-4 py-1 md:px-6"
//                               onClick={() => setModel(null)}
//                             >
//                               cancel
//                             </button>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="lg:block md:block sm:hidden hidden">
//                   <span className="font-semibold text-[#65758B]">
//                     {new Date(blog.createdAt).toLocaleDateString()}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllPosts;

import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

export default function AllPosts() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal States
  const [deleteId, setDeleteId] = useState(null); // which blog to delete
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [blogToEdit, setBlogToEdit] = useState(null);

  const token = localStorage.getItem("authToken");

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        "https://twokw-backend.onrender.com/api/v1/blogs"
      );
      const data = await res.json();

      const sorted = (data.data || []).sort(
        (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      setBlogs(sorted);
    } catch (err) {
      console.log("Error fetching blogs:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const openEditModal = (blog) => {
    setBlogToEdit({ ...blog, body: htmlToText(blog.body) });
    setEditModalOpen(true);
  };

  // logic to handle edit change
  const handleEditChange = (e) => {
    setBlogToEdit({ ...blogToEdit, [e.target.name]: e.target.value });
  };

  const htmlToText = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  //  logic to submit edited blog
  const handleEditSubmit = async () => {
    const formData = new FormData();
    formData.append("title", blogToEdit.title);
    formData.append("body", blogToEdit.body);

    try {
      const res = await fetch(
        `https://twokw-backend.onrender.com/api/v1/blogs/${blogToEdit._id}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        }
      );

      if (!res.ok) throw new Error("Failed to update blog");
      alert("Blog updated successfully");

      setEditModalOpen(false);
      setBlogToEdit(null);
      fetchBlogs(); // refresh UI
    } catch (err) {
      console.log("Error updating blog:", err);
    }
  };

  // delete blog
  const handleDeleteSubmit = async () => {
    try {
      const res = await fetch(
        `https://twokw-backend.onrender.com/api/v1/blogs/${deleteId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) throw new Error("Failed to delete post");

      alert("Blog deleted successfully");
      setDeleteId(null);
      setBlogs((prev) => prev.filter((b) => b._id !== deleteId));
    } catch (err) {
      console.log("Error deleting blog:", err);
    }
  };

  if (loading) {
    return <p className="text-center p-10 font-medium">Loading blogs…</p>;
  }

  return (
    <div className="md:p-10 p-4">
      <div className="max-w-4xl mx-auto bg-[#e0e2e685] p-6 rounded-xl">
        <h1 className="text-2xl text-center font-bold mt-3 mb-6">All Posts</h1>

        {/* LIST OF BLOGS */}
        {blogs.map((blog) => (
          <div
            key={blog._id}
            className="flex flex-col md:flex-row gap-5 p-4 bg-white rounded-xl shadow mb-6"
          >
            {/* Image */}
            <img
              src={blog.image}
              alt={blog.title}
              className="w-32 h-32 object-cover rounded-md"
            />

            {/* Blog Content */}
            <div className="flex flex-col gap-2 flex-1">
              <h2 className="font-semibold text-lg">{blog.title}</h2>
              <p
                className="text-sm text-gray-700"
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(blog.body),
                }}
              ></p>
              <span className="text-gray-500 text-sm">
                {new Date(blog.createdAt).toLocaleDateString()}
              </span>

              {/* Actions */}
              <div className="flex gap-3 mt-2">
                <button
                  onClick={() => openEditModal(blog)}
                  className="px-4 py-1 border border-green-500 text-green-500 rounded cursor-pointer"
                >
                  Edit
                </button>

                <button
                  onClick={() => setDeleteId(blog._id)}
                  className="px-4 py-1 bg-red-500 text-white rounded cursor-pointer"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* 
            edit model*/}
        {editModalOpen && blogToEdit && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <form
              onSubmit={(e) => e.preventDefault()}
              className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-xl space-y-4"
            >
              <h2 className="text-xl font-bold">Edit Blog</h2>

              <input
                type="text"
                name="title"
                value={blogToEdit.title}
                onChange={handleEditChange}
                className="w-full p-3 border rounded-lg focus:outline-none"
              />

              <textarea
                name="body"
                value={blogToEdit.body}
                onChange={handleEditChange}
                className="w-full h-40 p-3 border rounded-lg focus:outline-none"
              ></textarea>

              <div className="flex gap-4">
                <button
                  onClick={handleEditSubmit}
                  className="bg-[#1A365D] text-white px-6 py-2 rounded-lg cursor-pointer"
                >
                  Update
                </button>
                <button
                  onClick={() => {
                    setEditModalOpen(false);
                    setBlogToEdit(null);
                  }}
                  className="border border-[#1A365D] text-[#1A365D] px-6 py-2 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}

        {/*
            delete comfirm model*/}
        {deleteId && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
              <h3 className="text-lg font-semibold mb-4">
                Are you sure you want to delete this blog?
              </h3>

              <div className="flex gap-4">
                <button
                  onClick={handleDeleteSubmit}
                  className="bg-red-500 text-white px-6 py-2 rounded-lg cursor-pointer"
                >
                  Yes, Delete
                </button>
                <button
                  onClick={() => setDeleteId(null)}
                  className="border border-gray-600 text-gray-700 px-6 py-2 rounded-lg cursor-pointer"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
