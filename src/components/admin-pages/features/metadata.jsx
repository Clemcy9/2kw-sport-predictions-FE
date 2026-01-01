import { useEffect, useState } from "react";
import { Editor } from "primereact/editor";
import { userToken } from "../../hooks/useAuth";
import { FaSpinner } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { FiChevronDown, FiCheck } from "react-icons/fi";
import PostModel from "../../store/post-modal";
import AnimationModal from "../../store/animation-modal";

export default function MetaData() {
  // const [title, setTitle] = useState("");
  const [status, setStatus] = useState("");
  // const [loading, setLoading] = useState(false);
  const [pageTitle, setPageTitle] = useState("");
  const [pageDescription, setPageDescription] = useState("");
  const [pageKeywords, setPageKeywords] = useState("");
  const [headerContent, setHeaderContent] = useState("");
  const [headerSubContent, setHeaderSubContent] = useState("");
  const [existingId, setExistingId] = useState(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [model, setModel] = useState("");
  const [open, setOpen] = useState(false);

  const [body, setBody] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("success");
  const [modalMessage, setModalMessage] = useState("");

  const token = userToken();

  //fetch data when dropdown status change
  useEffect(() => {
    if (!status) {
      clearFields();
      return;
    }

    const fetchExistingData = async () => {
      setIsFetching(true);

      try {
        const res = await fetch(
          `https://twokw-backend.onrender.com/api/v1/metadata?market_type=${status}`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );

        if (res.ok) {
          const result = await res.json();
          // find the market-type
          const allData = Array.isArray(result) ? result : result.data || [];
          const match = allData.find((item) => item.market_type === status);
          setExistingId(match._id);
          setPageTitle(match.page_title || "");
          setPageDescription(match.page_description || "");
          setPageKeywords(match.page_keywords || "");
          setHeaderContent(match.header_content || "");
          setHeaderSubContent(match.header_sub_content || "");
          setBody(match.metadata_content || "");
        } else {
          clearFields();
          // setExistingId(null);
        }
      } catch (error) {
        console.log("Error fetching data:", error);
      } finally {
        setIsFetching(false);
      }
    };
    fetchExistingData();
  }, [status, token]);

  const clearFields = () => {
    setPageTitle("");
    setPageDescription("");
    setPageKeywords("");
    setHeaderContent("");
    setHeaderSubContent("");
    setBody("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payLoad = {
      market_type: status,
      page_title: pageTitle,
      page_description: pageDescription,
      page_keywords: pageKeywords,
      header_content: headerContent,
      header_sub_content: headerSubContent,
      metadata_content: body,
    };

    const url = existingId
      ? `https://twokw-backend.onrender.com/api/v1/metadata/${existingId}`
      : "https://twokw-backend.onrender.com/api/v1/metadata/";

    const method = existingId ? "PUT" : "POST";
    try {
      const res = await fetch(url, {
        method: method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payLoad),
      });

      const result = await res.json();

      if (res.ok) {
        setExistingId(result._id || result.data?._id);
        setModalType("success");
        setModalMessage("Metadata saved successfully");
        setShowModal(true);
      } else {
        setModalType("error");
        setModalMessage(result.message || "Failed to save metadata");
        setShowModal(true);
      }
    } catch (err) {
      console.log(err);

      setModalType("error");
      setModalMessage("Something went wrong. Please try again.");
      setShowModal(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const options = [
    { value: "", label: "Select a page" },
    { value: "homePage", label: "Home page" },
    { value: "contactUs", label: "Contact us" },
    { value: "services", label: "Services page" },
    { value: "home", label: "Free Tip" },
    { value: "surePredict", label: "Sure Predict" },
    { value: "super_single", label: "Super Single Tip" },
    { value: "freeOdds", label: "Free Odds" },
    { value: "home win", label: "Home Win" },
    { value: "away win", label: "Away Win" },
    { value: "over and Under", label: "Over & Under" },
    { value: "btts", label: "Both Teams Score" },
    { value: "double chance", label: "Double Chance" },
    { value: "allPrediction", label: "All Predictions" },
  ];

  const selected = options.find((o) => o.value === status);

  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 2500);
      return () => clearTimeout(timer);
    }
  }, [showModal]);
  return (
    <div className="px-8 lg:pt-6 p-4 ">
      <form onSubmit={handleSubmit} className=" w-full  ">
        <div className="w-full space-y-7">
          <div className="flex justify-between">
            <div>
              <h1 className=" w-full font-bold text-black/80 font-[Inria Sans] text-2xl">
                SEO Metadata
              </h1>
              <small className="mt-1 text-lg">
                Add and manage seo meta data for your website pages!
              </small>
            </div>
            <div className="relative w-full max-w-xs">
              <button
                type="button"
                onClick={() => setOpen((p) => !p)}
                className="w-full flex items-center justify-between px-4 py-2 border rounded-lg bg-white hover:border-gray-400 transition"
              >
                <span className={status ? "text-gray-900" : "text-gray-400"}>
                  {selected?.label || "Select a page"}
                </span>

                <motion.span
                  animate={{ rotate: open ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <FiChevronDown />
                </motion.span>
              </button>

              <AnimatePresence>
                {open && (
                  <motion.ul
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="absolute z-50 mt-2 w-full bg-white border rounded-lg shadow-lg "
                  >
                    {options.map((option) => (
                      <li
                        key={option.value}
                        onClick={() => {
                          setStatus(option.value);
                          setOpen(false);
                        }}
                        className="flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100 transition"
                      >
                        <span>{option.label}</span>
                        {status === option.value && (
                          <FiCheck className="text-green-500" />
                        )}
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          </div>
          <div className="w-full h-auto mt-2 bg-[#F5FAFF] rounded-lg">
            {status ? (
              <div className="px-5 py-3">
                {isFetching ? (
                  <p className="text-center">Loading existing data...</p>
                ) : (
                  <div className="space-y-2">
                    <label htmlFor="">Page Title</label>
                    <input
                      type="text"
                      value={pageTitle}
                      onChange={(e) => setPageTitle(e.target.value)}
                      className="w-full border border-[#1A365D] px-4 py-2 focus:outline-none"
                    />
                    <label htmlFor="">Page Description</label>
                    <input
                      type="text"
                      value={pageDescription}
                      onChange={(e) => setPageDescription(e.target.value)}
                      className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                    />
                    <label htmlFor="">Page Keywords</label>
                    <input
                      type="text"
                      value={pageKeywords}
                      onChange={(e) => setPageKeywords(e.target.value)}
                      className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                    />
                    <label htmlFor="">Header Content</label>
                    <input
                      type="text"
                      value={headerContent}
                      onChange={(e) => setHeaderContent(e.target.value)}
                      className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                    />
                    <label htmlFor="">Header Sub-Content</label>
                    <input
                      type="text"
                      value={headerSubContent}
                      onChange={(e) => setHeaderSubContent(e.target.value)}
                      className="w-full border border-[#1A365D] px-4 py-2  focus:outline-none"
                    />
                    <div className="mt-3">
                      <label className="block mb-1">
                        Page Footer SEO Content
                      </label>
                      <Editor
                        value={body}
                        onTextChange={(e) => setBody(e.htmlValue)}
                        className="h-[400px] w-full mt-2 "
                      />
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex justify-center items-center h-[500px]">
                <h1 className="text-center text-3xl font-semibold">
                  Please Select a Page
                </h1>
              </div>
            )}
          </div>
        </div>
        <div className="flex flex-col lg:mt-16 sm:mt-10 mt-16 items-center ">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[#1A365D] text-white w-64 text-xl rounded-xl py-2 cursor-pointer"
          >
            <div className="flex items-center justify-center gap-2">
              {isSubmitting && (
                <FaSpinner className="animate-spin mr-2 inline" />
              )}

              <span>
                {isSubmitting
                  ? "Processing..."
                  : existingId
                  ? "Update Metadata"
                  : "Submit Metadata"}
              </span>
            </div>
          </button>
        </div>
      </form>
      {/* <PostModel
        open={showModal}
        type={modalType}
        message={modalMessage}
        onClose={() => setShowModal(false)}
      /> */}
      <AnimationModal message="metadata saved successfully" open={showModal} />
    </div>
  );
}
