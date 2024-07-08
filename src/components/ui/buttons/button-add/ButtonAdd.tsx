import Image from "next/image";
import Link from "next/link";
import React from "react";
type ButtonAddProps = {
  title?: string;
  onClick?: () => void;
  href?: string;
};
const ButtonAdd: React.FC<ButtonAddProps> = ({
  onClick,
  href,
  title = "Thêm mới",
}) => {
  if (href) {
    return (
      <Link href={href} legacyBehavior className="h-full w-full">
        <a className="flex min-w-[108px] items-center justify-center rounded-lg bg-[#4FAAC1] px-4 py-2 hover:bg-[#6db7c9]">
          <Image
            src="/icons/plus-small.svg"
            className="min-w-[20px]"
            alt="plus"
            width={15}
            height={15}
          />
          <span className="ms-2 hidden text-center text-base font-medium text-white md:block">
            {title}
          </span>
        </a>
      </Link>
    );
  }
  return (
    <button className="flex min-w-[108px] items-center justify-center rounded-lg bg-[#4FAAC1] px-4 py-2 hover:bg-[#6db7c9]">
      <Image
        src="/icons/plus-small.svg"
        className="min-w-[20px]"
        alt="plus"
        width={15}
        height={15}
      />
      <span className="ms-2 hidden text-nowrap text-white md:block">
        {title}
      </span>
    </button>
  );
};

export default ButtonAdd;
