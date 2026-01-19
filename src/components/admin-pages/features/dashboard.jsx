import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FaArrowTrendUp, FaCheck, FaUser, FaTrash } from "react-icons/fa6";
import { FaSpinner } from "react-icons/fa";
import { userToken } from "../../hooks/useAuth";
import DeleteModal from "../../store/delete-modal";
import AnimationModal from "../../store/animation-modal";

export default function DashBoard() {
  const numbers = [12485, 82, 3247];

  const [isMobile, setMobile] = useState(false);
  const [activeSlide, setActiveSlide] = useState(null);

  const [modal, setModal] = useState(null);
  const [animation, setAnimation] = useState(null);

  const [predictions, setPredictions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = userToken();

  // Detect mobile screens
  useEffect(() => {
    const handleSize = () => setMobile(window.innerWidth < 1024);
    handleSize();
    window.addEventListener("resize", handleSize);
    return () => window.removeEventListener("resize", handleSize);
  }, []);

  // Fix scroll when modal opens
  useEffect(() => {
    if (modal) {
      const y = window.scrollY;
      document.body.style.cssText = `position:fixed; top:-${y}px; left:0; right:0;`;
    } else {
      const y = parseInt(document.body.style.top || "0") * -1;
      document.body.style.cssText = "";
      window.scrollTo(0, y);
    }
  }, [modal]);

  // Fetch predictions with caching for faster load
  useEffect(() => {
    if (!token) return;

    const controller = new AbortController();
    const signal = controller.signal;

    const fetchPredictions = async () => {
      setLoading(true);
      setError(null);

      try {
        // Load cached predictions first for instant display
        const cached = sessionStorage.getItem("predictionsCache");
        if (cached) {
          const parsed = JSON.parse(cached);
          setPredictions(parsed);
          setLoading(false);
        }

        // Fetch fresh predictions from API
        const res = await fetch(
          "https://api.2kw.net/api/v1/admin/predictions",
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "application/json",
            },
            signal,
          }
        );

        if (!res.ok) throw new Error("Failed to fetch predictions");

        const data = await res.json();
        const preds = data?.data || [];

        // Sort latest first
        const sorted_preds = [...preds].sort(
          (a, b) =>
            new Date(b.fixture.fixture.date) - new Date(a.fixture.fixture.date)
        );

        // Cache predictions
        sessionStorage.setItem(
          "predictionsCache",
          JSON.stringify(sorted_preds)
        );
        setPredictions(sorted_preds);
      } catch (err) {
        if (err.name !== "AbortError") setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPredictions();

    return () => controller.abort();
  }, [token]);

  // Delete prediction
  const handle_delete = async (id) => {
    try {
      const res = await fetch(
        `https://api.2kw.net/api/v1/admin/predictions/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.message || "Failed to delete prediction");

      setModal(null);
      setActiveSlide(null);
      setAnimation(id);

      // Remove deleted prediction after animation
      setTimeout(() => {
        setPredictions((prev) => prev.filter((item) => item._id !== id));
        // Update cache after deletion
        sessionStorage.setItem(
          "predictionsCache",
          JSON.stringify(predictions.filter((item) => item._id !== id))
        );
        setAnimation(null);
      }, 1500);
    } catch (err) {
      console.error("Error deleting prediction:", err);
      setError(err.message);
    }
  };

  // Motion counters
  const dragLength = -100;
  const count1 = useMotionValue(0);
  const count2 = useMotionValue(0);
  const count3 = useMotionValue(0);
  const statistics1 = useTransform(count1, (v) =>
    Math.floor(v).toLocaleString()
  );
  const statistics2 = useTransform(
    count2,
    (v) => Math.floor(v).toLocaleString() + "%"
  );
  const statistics3 = useTransform(count3, (v) =>
    Math.floor(v).toLocaleString()
  );

  useEffect(() => {
    animate(count1, predictions.length, { duration: 1, ease: "easeOut" });
    animate(count2, numbers[1], { duration: 2, ease: "easeOut" });
    animate(count3, numbers[2], { duration: 2, ease: "easeOut" });
  }, [predictions.length]);

  if (loading)
    return (
      <div className="text-center text-[#1A365D] py-20 flex justify-center items-center">
        <FaSpinner className="animate-spin mr-2" /> Loading predictions...
      </div>
    );

  if (error)
    return (
      <div className="text-center text-red-600 py-20">
        <p>Error loading predictions: {error}</p>
      </div>
    );

  if (predictions.length === 0)
    return (
      <div className="text-center text-gray-500 py-20">
        <p>No predictions available.</p>
      </div>
    );

  return (
    <div className="p-4 lg:p-0 overflow-y-auto max-h-screen flex flex-col w-full">
      {/* Statistics Boxes */}
      <div className="lg:flex lg:justify-center w-full my-5 space-y-4 lg:space-y-0 lg:my-10 grid grid-cols-1 grid-rows-2 lg:gap-24">
        <div className="col-span-2 w-full lg:p-4 p-6 bg-[#F3F8FF] text-[#1A365D] rounded-[0.4rem] lg:w-72">
          <h2 className="text-xl font-extralight font-sans mb-4 flex justify-between lg:items-center gap-2">
            Total Predictions <FaArrowTrendUp className="text-[#D6AE3E]" />
          </h2>
          <div className="text-4xl font-bold">
            <motion.span>{statistics1}</motion.span>
          </div>
        </div>
        <div className="flex gap-3 py-2 lg:py-0 lg:gap-24 justify-between lg:justify-center">
          <div className="lg:mr-1 lg:p-4 p-3 bg-[#F3F8FF] text-[#1A365D] rounded-[0.4rem] lg:w-72 w-full">
            <h2 className="text-xl font-extralight font-sans mb-4 flex justify-between items-center gap-2">
              Accuracy Rate
              <span className="w-6 h-6 border-2 border-[#D6AE3E]">
                <FaCheck className="text-[#D6AE3E]" />
              </span>
            </h2>
            <div className="text-4xl font-bold">
              <motion.span>{statistics2}</motion.span>
            </div>
          </div>
          <div className="lg:ml-1 lg:p-4 p-3 bg-[#F3F8FF] text-[#1A365D] rounded-[0.4rem] lg:w-72 w-full">
            <h2 className="text-xl font-extralight font-sans mb-4 flex justify-between items-center gap-2">
              Active Users <FaUser className="text-[#D6AE3E]" />
            </h2>
            <div className="text-4xl font-bold">
              <motion.span>{statistics3}</motion.span>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Predictions */}
      <div className="flex justify-start mt-4 font-semibold font-sans text-2xl w-full lg:px-10">
        <h2 className="lg:font-semibold font-bold font-[Inria Sans] text-left">
          Recent Predictions
        </h2>
      </div>

      <div className="flex lg:px-12 justify-center flex-col items-center w-full">
        <table className="w-full border-collapse ">
          <thead>
            <tr className="font-bold text-left text-lg hidden lg:flex justify-center lg:justify-between w-full">
              <th className="py-3">No.</th>
              <th className="py-3">League</th>
              <th className="py-3">Date/Time</th>
              <th className="py-3">Home</th>
              <th className="py-3">Away</th>
              <th className="py-3">Tips</th>
              <th className="py-3">Prob</th>
              <th className="py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {predictions.map((item, index) => {
              const isActive = activeSlide === item._id;
              return (
                <tr key={item._id} className="relative lg:table-row block">
                  <div className="lg:hidden absolute right-0 top-0 h-full flex items-center z-10">
                    <button
                      onClick={() => {
                        setModal(item._id);
                        setActiveSlide(null);
                      }}
                      className="w-20 text-red-600 h-full hover:text-red-800 flex flex-col justify-center items-center transition"
                    >
                      <FaTrash size={18} />
                      <span className="text-xs mt-1">Delete</span>
                    </button>
                  </div>

                  <motion.div
                    drag={isMobile ? "x" : false}
                    dragConstraints={{ left: -100, dragLength, right: 0 }}
                    animate={{ x: isActive ? -100 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onDragEnd={(e, info) => {
                      if (info.offset.x < -50) {
                        setActiveSlide(item._id);
                      } else {
                        setActiveSlide(null);
                      }
                    }}
                    className="z-40 relative bg-white lg:cursor-pointer lg:active:scale-none cursor-grab active:cursor-grabbing lg:grid lg:grid-cols-11 w-full flex flex-row lg:gap-0 lg:justify-between gap-5 lg:border-none border p-2 lg:p-0 rounded-xl my-4 active:border-[#1A365D] lg:active:shadow-none active:scale-105 active:shadow-xl lg:active:cursor-none lg:my-0 border-[#1A365D99]"
                  >
                    <div className="lg:col-span-4 flex-col hidden lg:flex items-start gap-6 lg:flex-row w-full lg:justify-between justify-center">
                      <td className="py-5 hidden lg:block">{index + 1}</td>
                      <td className="py-5 hidden lg:block">
                        {item.fixture.league.name}
                      </td>
                      <td className="py-5 hidden lg:flex">
                        {new Date(item.fixture.fixture.date).toLocaleDateString(
                          [],
                          { day: "2-digit", month: "2-digit" }
                        )}{" "}
                        -
                        {new Date(item.fixture.fixture.date).toLocaleTimeString(
                          [],
                          { hour: "2-digit", minute: "2-digit" }
                        )}
                      </td>
                    </div>

                    <div className="col-span-4 w-full lg:px-10 flex font-light font-sans lg:text-lg lg:font-normal text-xs text-[#737373] lg:flex-row flex-col lg:w-full lg:justify-between lg:gap-8">
                      <td className="py-1 lg:hidden text-lg font-[Sora] font-semibold text-[#1B1B1BCC]">
                        {item.fixture.league.name}
                      </td>

                      <td className="py-1 flex justify-start items-center font-sans text-lg text-black lg:w-48">
                        <img
                          className="w-5 h-5 mr-1"
                          src={item.fixture.teams.away.logo}
                          alt={item.fixture.teams.away.name}
                        />
                        {item.fixture.teams.away.name}
                      </td>

                      <td className="py-1 flex justify-start items-center font-sans text-lg text-black lg:w-48">
                        <img
                          className="w-5 h-5 mr-1"
                          src={item.fixture.teams.home.logo}
                          alt={item.fixture.teams.home.name}
                        />
                        {item.fixture.teams.home.name}
                      </td>
                    </div>

                    <div className="col-span-3 flex gap-2 font-light font-sans justify-end lg:text-lg lg:font-normal text-xs text-[#737373] lg:flex-row flex-col lg:w-full lg:pl-4 lg:justify-between">
                      <td className="py-1 text-right w-20 lg:hidden">
                        {new Date(item.fixture.fixture.date).toLocaleDateString(
                          [],
                          { day: "2-digit", month: "2-digit" }
                        )}
                        {new Date(item.fixture.fixture.date).toLocaleTimeString(
                          [],
                          { hour: "2-digit", minute: "2-digit" }
                        )}
                      </td>

                      <td className="py-1 text-right lg:text-center lg:w-16">
                        {item.bets[0].values[0].odd}
                      </td>

                      <td className="py-1 text-right lg:text-center lg:w-16">
                        {item.bets[0].values[0].percentage}
                      </td>

                      <td className="py-1 hidden lg:block">
                        <button
                          onClick={() => {
                            setModal(item._id);
                            setActiveSlide(null);
                          }}
                          className="text-[#FB3B3B] hover:text-red-800 transition"
                        >
                          <FaTrash size={14} />
                        </button>
                      </td>
                    </div>
                  </motion.div>
                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Delete Modal */}
        {modal && (
          <DeleteModal
            title="Delete Prediction"
            onClose={() => setModal(null)}
            onDelete={() => handle_delete(modal)}
          />
        )}

        {/* Success Animation */}
        {animation && <AnimationModal title="Deleted Successfully" />}
      </div>
    </div>
  );
}
