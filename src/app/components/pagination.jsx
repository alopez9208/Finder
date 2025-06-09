import React from "react";

const Pagination = ({ currentPage, totalPages, handlePageChange }) => {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-4 flex justify-center items-center space-x-2 text-gray-400">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white"
        disabled={currentPage === 1}
      >
        Anterior
      </button>

      {currentPage > 3 && (
        <button
          onClick={() => handlePageChange(1)}
          className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white"
        >
          1
        </button>
      )}

      {currentPage > 4 && <span className="px-3 py-1">...</span>}

      {Array.from({ length: 5 }, (_, i) => {
        const pageNumber = currentPage - 2 + i;
        if (pageNumber > 0 && pageNumber <= totalPages) {
          return (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={`px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white ${currentPage === pageNumber ? "bg-blue-500 text-white" : ""
                }`}
            >
              {pageNumber}
            </button>
          );
        }
        return null;
      })}

      {currentPage < totalPages - 3 && <span className="px-3 py-1">...</span>}

      {currentPage < totalPages - 2 && (
        <button
          onClick={() => handlePageChange(totalPages)}
          className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white"
        >
          {totalPages}
        </button>
      )}

      <button
        onClick={() => handlePageChange(currentPage + 1)}
        className="px-3 py-1 border rounded hover:bg-[#005AFE] hover:opacity-40 transition cursor-pointer hover:text-white"
        disabled={currentPage === totalPages}
      >
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
