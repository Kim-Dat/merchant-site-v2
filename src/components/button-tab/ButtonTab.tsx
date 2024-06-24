import React from "react";

interface IProps {
  onClick?: () => void;
  title: string;
}

const ButtonTab = (props: IProps) => {
  const { onClick, title } = props;
  return (
    <button
      className={`h-full w-full rounded-xl bg-gradient-to-br from-[#76DCFF] to-[#FF89E796] p-3`}
      onClick={onClick}
    >
      <span className={`text-sm font-semibold text-[#FFFFFF]`}>{title}</span>
    </button>
  );
};

export default ButtonTab;
