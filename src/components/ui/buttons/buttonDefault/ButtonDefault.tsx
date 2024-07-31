import React from "react";
import Link from "next/link";

type ButtonDefaultProps = {
  onClick?: any;
  title: string;
  href?: string;
};

const ButtonDefault: React.FC<ButtonDefaultProps> = ({
  onClick,
  title,
  href,
}) => {
  if (href) {
    return (
      <Link href={href} legacyBehavior className="w-[100%]">
        <a className="block w-[100%] rounded-xl bg-[#E2E8ED99] p-2 text-center shadow-md hover:bg-gray-300">
          <span className="text-nowrap text-base font-normal text-[#111A2C]">
            {title}
          </span>
        </a>
      </Link>
    );
  }

  return (
    <button
      type="button"
      className="h-full w-full rounded-xl bg-[#E2E8ED99] p-2 shadow-md hover:bg-gray-300"
      onClick={onClick}
    >
      <span className="text-nowrap text-base font-normal text-[#111A2C]">
        {title}
      </span>
    </button>
  );
};

export default ButtonDefault;
