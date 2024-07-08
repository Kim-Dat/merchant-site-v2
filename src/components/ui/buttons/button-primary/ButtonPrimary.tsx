import Link from "next/link";
import React from "react";
type ButtonPrimaryProps = {
  onClick?: () => void;
  title: any;
  href?: string;
  type?: any;
  cl?: string;
};
const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  onClick,
  title,
  href,
  type,
  cl,
}) => {
  if (href) {
    return (
      <Link href={href} legacyBehavior className="w-[100%]">
        <a
          className={`block w-[100%] ${cl ? cl : "rounded-xl"} bg-[#4FAAC1] p-2 text-center transition-all hover:bg-[#C0E3EC]`}
        >
          <span className="text-base font-medium text-[#FBFBFB]">{title}</span>
        </a>
      </Link>
    );
  }
  return (
    <button
      className={`h-auto w-[100%] ${cl ? cl : "rounded-xl"} bg-[#4FAAC1] p-2 transition-all duration-200 hover:bg-[#C0E3EC]`}
      onClick={onClick}
      type={type}
    >
      <span className={"text-base font-medium text-[#FBFBFB]"}>{title}</span>
    </button>
  );
};

export default ButtonPrimary;
