import React from "react";

type ButtonDeleteProps = {
  onClick?: () => void;
  title: string;
};

const ButtonDelete: React.FC<ButtonDeleteProps> = ({ onClick, title }) => {
  return (
    <button
      type="button"
      className="w-[100%] rounded-xl bg-[#e22831] p-2 hover:bg-[#fc6d74]"
      onClick={onClick}
    >
      <span className="text-base font-normal text-white">{title}</span>
    </button>
  );
};

export default ButtonDelete;
