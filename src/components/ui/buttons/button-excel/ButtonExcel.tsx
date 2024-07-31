import Image from "next/image";
import React from "react";

const ButtonExcel = () => {
  return (
    <button className="flex min-w-[108px] shadow-md items-center justify-center rounded-lg border px-4 py-2 duration-200 hover:bg-gray-200">
      <Image
        src="/icons/download-cloud-02.svg"
        className="h-[18px] w-[18px]"
        alt="download-cloud"
        width={500}
        height={500}
      />
      <span className="ms-2 text-sm font-medium text-[#344054]">Export</span>
    </button>
  );
};

export default ButtonExcel;
