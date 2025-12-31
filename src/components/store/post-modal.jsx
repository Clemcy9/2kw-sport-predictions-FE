import { motion, AnimatePresence } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";

export default function StatusModal({ open, type, message, onClose }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-2xl p-6 w-[90%] max-w-md text-center shadow-xl"
          >
            <div
              className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${
                type === "success"
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}
            >
              <span className="text-3xl">
                {type === "success" ? <FaCheck /> : <FaTimes />}
              </span>
            </div>

            <h2 className="text-xl font-semibold mb-2">
              {type === "success" ? "Success" : "Error"}
            </h2>

            <p className="text-gray-600 mb-6">{message}</p>

            <button
              onClick={onClose}
              className="bg-[#1A365D] text-white px-6 py-2 rounded-lg hover:opacity-90 transition"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
