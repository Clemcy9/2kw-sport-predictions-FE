import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import DeleteModal from "../../store/delete-modal";
import { userToken } from "../../hooks/useAuth";
import AnimationModal from "../../store/animation-modal";

export default function AllPosts() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal States
  const [deleteId, setDeleteId] = useState(null); // which blog to delete
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [blogToEdit, setBlogToEdit] = useState(null);
  const [animation, setAnimation] = useState(null);


  const token = userToken();
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

      // alert("Blog deleted successfully");
			setAnimation(deleteId);
      setDeleteId(null);

      
      
      setTimeout(() => {
        setBlogs((prev) => prev.filter((b) => b._id !== deleteId));
				

				setAnimation(null);
			}, 1500);
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
          <DeleteModal onClose={() => setDeleteId(null)} onDelete={() => handleDeleteSubmit()} />
          // <div onClick={() => setDeleteId(null)} className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          //   <div onClick={(e) => e.stopPropagation()} className="bg-white p-6 rounded-xl shadow-xl w-[90%] max-w-md">
          //     <h3 className="text-lg font-semibold mb-4">
          //       Are you sure you want to delete this blog?
          //     </h3>

          //     <div className="flex gap-4">
          //       <button
          //         onClick={handleDeleteSubmit}
          //         className="bg-red-500 text-white px-6 py-2 rounded-lg cursor-pointer"
          //       >
          //         Yes, Delete
          //       </button>
          //       <button
          //         onClick={() => setDeleteId(null)}
          //         className="border border-gray-600 text-gray-700 px-6 py-2 rounded-lg cursor-pointer"
          //       >
          //         Cancel
          //       </button>
          //     </div>

          //   </div>
          // </div>
        )}
        {animation && (
          <AnimationModal />
        )}
      </div>
    </div>
  );
}
