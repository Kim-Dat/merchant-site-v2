import { Select } from "antd";
import Image from "next/image";
import React from "react";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  onItemsPerPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

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

  const handleFirst = () => {
    onPageChange(1);
  };

  const handleLast = () => {
    onPageChange(totalPages);
  };

  const renderPageNumbers = () => {
    const pages = [];
    const maxPages = 3;
    const half = Math.floor(maxPages / 2);
    let start = Math.max(1, currentPage - half);
    let end = Math.min(totalPages, currentPage + half);

    if (currentPage <= half) {
      end = Math.min(totalPages, maxPages);
    } else if (currentPage + half >= totalPages) {
      start = Math.max(1, totalPages - maxPages + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`relative h-[34px] w-[34px] rounded-full px-3 py-1 ${i === currentPage ? "bg-[#4FAAC1] text-white" : "border border-gray-300 bg-white text-[#4FAAC1] hover:bg-gray-300"}`}
        >
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
            {i}
          </span>
        </button>,
      );
    }
    return pages;
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 md:justify-end">
      <div className="flex items-center">
        <Select
          defaultValue={itemsPerPage}
          onChange={(value) => onItemsPerPageChange(Number(value))}
          options={[5, 10, 20, 50].map((number) => ({
            value: number,
            label: (
              <span className="text-base font-normal text-gray-500">
                {number} bản ghi trên 1 trang
              </span>
            ),
          }))}
        />
      </div>
      <div className="flex items-center">
        <button
          onClick={handleFirst}
          className="mr-2 cursor-pointer rounded-full border border-gray-300 bg-white p-1 hover:bg-gray-300"
          disabled={currentPage === 1}
        >
          <Image
            src="/icons/first.svg"
            className="h-[24px] w-[24px]"
            width={500}
            height={500}
            alt="first"
          />
        </button>
        <button
          onClick={handlePrevious}
          className="cursor-pointer rounded-full border border-gray-300 bg-white p-2 hover:bg-gray-300"
          disabled={currentPage === 1}
        >
          <Image
            src="/icons/pre.svg"
            className="h-[16px] w-[16px]"
            width={500}
            height={500}
            alt="first"
          />
        </button>
        <div className="mx-3 flex space-x-1 ">{renderPageNumbers()}</div>
        <button
          onClick={handleNext}
          className="cursor-pointer rounded-full border border-gray-300 bg-white p-2 hover:bg-gray-300"
          disabled={currentPage === totalPages}
        >
          <Image
            src="/icons/next.svg"
            className="h-[16px] w-[16px]"
            width={500}
            height={500}
            alt="first"
          />
        </button>
        <button
          onClick={handleLast}
          className="ml-2 cursor-pointer rounded-full border border-gray-300 bg-white p-1 hover:bg-gray-300"
          disabled={currentPage === totalPages}
        >
          <Image
            src="/icons/last.svg"
            className="h-[24px] w-[24px]"
            width={500}
            height={500}
            alt="first"
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
