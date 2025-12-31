// import React from "react";

export default function DeleteModal({ onClose, onDelete, title }) {
  return (
    <section
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1A365D]/40"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[90%] max-w-sm flex justify-center items-center flex-col bg-white shadow-xl px-4 py-3"
      >
        <h3 className="text-[#1a365d] font-semibold">{title}</h3>
        <p className="text-[#1a365d] font-normal py-5">
          This Action Cannot Be Undone!
        </p>
        <div className="flex gap-3 justify-center items-center">
          <button
            onClick={onDelete}
            className="bg-red-600 px-4 py-2 text-white"
          >
            Delete
          </button>
          <button
            onClick={onClose}
            className="text-[#1A365D] px-4 py-2 bg-white border border-[#1A365D] rounded-xs"
          >
            Cancel
          </button>
        </div>
      </div>
    </section>
  );
}
