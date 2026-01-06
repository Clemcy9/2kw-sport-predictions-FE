import { useState } from "react";
import { FaTrash } from "react-icons/fa6";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { FaSpinner } from "react-icons/fa";
import { userToken } from "../../hooks/useAuth";
import DeleteModal from "../../store/delete-modal";
import AnimationModal from "../../store/animation-modal";

export default function Predictions() {
  const [prediction, setPrediction] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isMobile, setMobile] = useState(false);
  const [activeSlide, setActiveSlide] = useState(null);

  const [modal, setModal] = useState(null);
  const [animation, setAnimation] = useState(null);

  // const today = new Date().toISOString().split("T")[0];
  // const [date, setDate] = useState(today);
  const [byName, setByName] = useState("");
  const [byDate, setByDate] = useState("");
  const [byLeague, setByLeague] = useState("");

  const token = userToken();

  // Detect mobile screens and hleps slide action
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

  const handle_delete = async (id) => {
    try {
      const res = await fetch(
        `https://twokw-backend.onrender.com/api/v1/admin/predictions/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || "Failed to delete prediction");
      }

      setModal(null);
      setActiveSlide(null);
      setAnimation(id);

      setTimeout(() => {
        setPrediction((prev) => {
          const updated = prev.filter((item) => item._id !== id);
          sessionStorage.setItem(
            "predictions_manager_Cache",
            JSON.stringify(updated)
          );
          return updated;
        });

        setAnimation(null);
      }, 1500);
    } catch (err) {
      console.error("error while deleting a prediction", err);
      setError(err.message);
    }
  };

  useEffect(() => {
    if (!token) return;

    const CACHE_KEY = "predictions_manager_Cache";
    setError(null);

    fetch("https://twokw-backend.onrender.com/api/v1/admin/predictions", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch predictions");
        return res.json();
      })
      .then((data) => {
        const preds = data?.data || [];

        const sorted = [...preds].sort(
          (a, b) =>
            new Date(b.fixture.fixture.date) - new Date(a.fixture.fixture.date)
        );

        sessionStorage.setItem(CACHE_KEY, JSON.stringify(sorted));
        setPrediction(sorted);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
      })
      .finally(() => setLoading(false));
  }, [token]);

  // implementing search logic
  const all_predictions = prediction.filter((item) => {
    const name = byName.toLowerCase();
    const league = byLeague.toLowerCase();

    const use_name =
      item.fixture.teams.away.name.toLowerCase().includes(name) ||
      item.fixture.teams.home.name.toLowerCase().includes(name);

    const use_league = item.fixture.league.name.toLowerCase().includes(league);

    const use_date = byDate
      ? item.fixture.fixture.date.startsWith(byDate)
      : true;

    console.log(use_date);
    return use_name && use_league && use_date;
  });
  console.log(byDate);
  console.log(prediction);

  return (
    <div className="p-4 lg:px-10 lg:min-h-screen flex flex-col w-full">
      <div className="flex justify-start font-semibold font-sans text-2xl w-full lg:my-6">
        <h2 className="lg:font-semibold font-bold font-[Inria Sans] mb-4 text-left">
          Predictions Manager
        </h2>
      </div>

      <div className="flex justify-between flex-col lg:flex-row gap-3 lg:gap-10 w-full lg:my-4 ">
        <div className="relative lg:max-w-[33%] w-full flex justify-between items-center">
          <input
            value={byDate}
            onKeyDown={(e) =>
              e.key === "Enter key" && console.log("Enter pressed for date")
            }
            onChange={(e) => setByDate(e.target.value)}
            type="date"
            placeholder="11/04/2025"
            className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white"
          />
        </div>
        <h3 className="lg:hidden">Filter By:</h3>
        <div className="w-full lg:max-w-[66%] gap-6 flex justify-center">
          <div className="relative w-full  flex justify-between items-center">
            <input
              type="text"
              value={byName}
              onKeyDown={(e) =>
                e.key === "Enter" && console.log("Enter pressed for name")
              }
              onChange={(e) => setByName(e.target.value)}
              placeholder="Select Name"
              className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white"
            />
          </div>
          <div className="relative w-full  flex justify-between items-center">
            <input
              value={byLeague}
              onKeyDown={(e) =>
                e.key === "Enter" && console.log("Enter pressed for league")
              }
              onChange={(e) => setByLeague(e.target.value)}
              type="text"
              placeholder="Select League"
              className="w-full appearance-none border border-[#737373] rounded-[0.3em] py-1 pl-4 pr-10 text-[#737373] focus:ring focus:ring-[#1A365D] focus:border-[#1A365D] outline-none bg-white"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col items-center w-full">
        <table className="w-full border-collapse">
          {loading && (
            <tr>
              <td colSpan={8} className="py-10 text-center text-[#1A365D]">
                <FaSpinner className="inline mr-2 animate-spin" />
                Loading predictions...
              </td>
            </tr>
          )}

          {error && (
            <tr>
              <td colSpan={8} className="py-10 text-center text-red-600">
                {error}
              </td>
            </tr>
          )}

          {!loading && !error && all_predictions.length === 0 && (
            <tr>
              <td colSpan={8} className="py-10 text-center text-[#1A365D]">
                No predictions found for selected filters.
              </td>
            </tr>
          )}

          <thead className="hidden lg:table-header-group">
            <tr className="font-bold text-left text-lg">
              <th className="py-4 px-2">No.</th>
              <th className="py-4 px-2">League</th>
              <th className="py-4 px-2">Date / Time</th>
              <th className="py-4 px-2">Home</th>
              <th className="py-4 px-2">Away</th>
              <th className="py-4 px-2">Tips</th>
              <th className="py-4 px-2">Prop%</th>
              <th className="py-4 px-2 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {all_predictions.map((item, index) => {
              const isActive = activeSlide === item._id;

              return (
                <tr key={item._id} className="relative lg:table-row block">
                  {/* delete button for mobile */}
                  <div className="lg:hidden absolute right-0 top-0 h-full flex items-center z-10">
                    <button
                      onClick={() => {
                        setModal(item._id);
                        setActiveSlide(null);
                      }}
                      className="w-20 h-full text-red-600 flex flex-col items-center justify-center"
                    >
                      <FaTrash />
                      <span className="text-xs mt-1">Delete</span>
                    </button>
                  </div>

                  {/* SLIDABLE CONTENT */}
                  <motion.div
                    drag={isMobile ? "x" : false}
                    dragConstraints={{ left: -80, right: 0 }}
                    animate={{ x: isActive ? -80 : 0 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    onDragEnd={(e, info) => {
                      if (info.offset.x < -40) {
                        setActiveSlide(item._id);
                      } else {
                        setActiveSlide(null);
                      }
                    }}
                    className="bg-white relative z-20 lg:z-auto lg:contents block rounded-xl lg:rounded-none border lg:border-0 my-4 lg:my-0 p-2 lg:p-0 shadow-sm lg:shadow-none"
                  >
                    {/* No. */}
                    <td className="hidden lg:table-cell py-5 px-2">
                      {index + 1}
                    </td>

                    {/* League */}
                    <td className="hidden lg:flex-row lg:flex py-5 px-2 items-center gap-2">
                      <img
                        src={item.fixture.league.logo}
                        className="w-4 h-4"
                        alt=""
                      />
                      {item.fixture.league.name}
                    </td>

                    {/* Date */}
                    <td className="hidden lg:table-cell py-5 px-2">
                      {new Date(item.fixture.fixture.date).toLocaleDateString(
                        [],
                        {
                          day: "2-digit",
                          month: "2-digit",
                        }
                      )}{" "}
                      {new Date(item.fixture.fixture.date).toLocaleTimeString(
                        [],
                        {
                          hour: "2-digit",
                          minute: "2-digit",
                        }
                      )}
                    </td>

                    {/* Home */}
                    <td className="hidden  py-2 px-2 lg:table-cell items-center gap-2 ">
                      <img
                        src={item.fixture.teams.home.logo}
                        className="w-4 h-4"
                        alt=""
                      />
                      {item.fixture.teams.home.name}
                    </td>

                    {/* Away */}
                    <td className="hidden   py-2 px-2 lg:table-cell items-center gap-2">
                      <img
                        src={item.fixture.teams.away.logo}
                        className="w-4 h-4"
                        alt=""
                      />
                      {item.fixture.teams.away.name}
                    </td>

                    {/* Tips */}
                    <td className="hidden lg:table-cell py-2 px-2 text-right lg:text-left">
                      {item.bets[0]?.values[0]?.odd}
                    </td>

                    {/* Prop */}
                    <td className="hidden lg:table-cell py-2 px-2 text-right lg:text-left">
                      {item.bets[0]?.values[0]?.percentage}%
                    </td>

                    <section className="lg:hidden flex justify-between items-center">
                      <div className="lg:hidden flex flex-col space-y-6">
                        <td className="lg:hidden mb-2 text-sm font-semibold ">
                          {item.fixture.league.name}
                        </td>

                        {/* Home */}
                        <td className=" px-2 flex items-center gap-2 lg:table-cell">
                          <img
                            src={item.fixture.teams.home.logo}
                            className="w-4 h-4"
                            alt=""
                          />
                          {item.fixture.teams.home.name}
                        </td>

                        {/* Away */}
                        <td className=" px-2 flex items-center gap-2 lg:table-cell">
                          <img
                            src={item.fixture.teams.away.logo}
                            className="w-4 h-4"
                            alt=""
                          />
                          {item.fixture.teams.away.name}
                        </td>
                      </div>

                      <div className="lg:hidden flex flex-col">
                        <td className=" py-1 px-2 text-right">
                          {new Date(
                            item.fixture.fixture.date
                          ).toLocaleDateString()}
                        </td>
                        <td className=" py-1 px-2 text-right">
                          {new Date(
                            item.fixture.fixture.date
                          ).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </td>
                        {/* Tips */}
                        <td className=" py-1 px-2 text-right">
                          {item.bets[0]?.values[0]?.odd}
                        </td>

                        {/* Prop */}
                        <td className=" py-1 px-2 text-right">
                          {item.bets[0]?.values[0]?.percentage}%
                        </td>
                      </div>
                    </section>
                    {/* ACTION DESKTOP */}
                    <td className="hidden lg:table-cell py-5 px-2 text-center">
                      <button
                        onClick={() => setModal(item._id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <FaTrash size={14} />
                      </button>
                    </td>
                  </motion.div>
                </tr>
              );
            })}
          </tbody>
        </table>

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
