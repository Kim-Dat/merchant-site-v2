import { Input } from "antd";
import Image from "next/image";
import React from "react";

type InputSearchProps = {
  title: string;
  placeholder: string;
};

const InputSearch: React.FC<InputSearchProps> = ({ title, placeholder }) => {
  return (
    <div className="z-0 w-full">
      <span className="text-xs font-normal text-[#9EA1A5]">{title}</span>
      <div>
        <Input
          className="w-full caret-[#4faac1]"
          placeholder="Nhập từ khoá ..."
          id="title"
          size="large"
          aria-describedby="emailHelp"
          /* onChange={(e) => setTitleSearch(e.target.value)} */
          /*    value={titleSearch} */
          allowClear
        />
      </div>
    </div>
  );
};

export default InputSearch;
