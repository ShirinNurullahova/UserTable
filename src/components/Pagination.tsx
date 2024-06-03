import React from "react";
import ArrowIcon from "../assets/svg/ArrowIcon";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="flex justify-between items-center py-8">
      <button
        className={`flex items-center ${
          currentPage === 1
            ? "text-gray-400"
            : "text-gray-600 hover:text-gray-800"
        }`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        <ArrowIcon isLeft disabled={currentPage === 1} />
        Previous
      </button>
      <div className="flex space-x-8">
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            className={`text-[16px] ${
              currentPage === index + 1 ? "text-custom-dots " : "black"
            }`}
            onClick={() => onPageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <button
        className={`flex items-center ${
          currentPage === totalPages
            ? "text-gray-400"
            : "text-gray-600 hover:text-gray-800"
        }`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
        <ArrowIcon disabled={currentPage === totalPages} />
      </button>
    </div>
  );
};

export default Pagination;
