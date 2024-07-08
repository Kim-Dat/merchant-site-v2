"use client";
import Link from "next/link";
import Image from "next/image";
import DropdownNotification from "@/components/common/header/DropdownNotification";
import DropdownUser from "@/components/common/header/DropdownUser";
import { Dropdown, MenuProps } from "antd";
import React, { useEffect } from "react";
import i18n from "@/utils/languages/i18";
import { useTranslation } from "react-i18next";
const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  const { t: trans } = useTranslation();
  /* handle change language start*/
  const [languageFlag, setLanguageFlag] = React.useState(
    sessionStorage.getItem("flag") || "VNFlag",
  );
  const [language, setLanguage] = React.useState(
    sessionStorage.getItem("language") || "vi",
  );
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setLanguage(lng);
  };

  useEffect(() => {
    sessionStorage.setItem("flag", languageFlag);
    sessionStorage.setItem("language", language);
    i18n.changeLanguage(language);
  }, [languageFlag, language]);
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div
          className="flex items-start"
          onClick={() => {
            setLanguageFlag("VNFlag");
            changeLanguage("vi");
          }}
        >
          <Image
            src="/icons/lg-vn.png"
            alt="lg-vn"
            className="h-[23px] w-[33px]"
            width={500}
            height={500}
          />
          <span className="mx-2 text-sm font-medium text-[#1B2837]">
            Tiếng Việt
          </span>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          className="flex items-start"
          onClick={() => {
            setLanguageFlag("USAFlag");
            changeLanguage("en");
          }}
        >
          <Image
            src="/icons/lg-eng.png"
            alt="lg-eng"
            className="h-[23px] w-[33px]"
            width={500}
            height={500}
          />
          <span className="mx-2 text-sm font-medium text-[#1B2837]">
            Tiếng Anh
          </span>
        </div>
      ),
    },
  ];
  /* handle change language end*/
  return (
    <header className="sticky top-0 z-10 flex w-full bg-white drop-shadow-1">
      <div className="flex flex-grow items-center justify-between px-4 py-2 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          {/* <!-- Hamburger Toggle BTN --> */}
          <button
            type="button"
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link className="block flex-shrink-0 lg:hidden" href="/">
            <Image
              width={32}
              height={32}
              src={"/images/logo/logo-icon.svg"}
              alt="Logo"
            />
          </Link>
        </div>

        <div className="hidden sm:block"></div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          {/* <!-- Notification Menu Area --> */}
          <DropdownNotification />
          {/* <!-- Notification Menu Area --> */}

          {/* <!-- Change Language Area --> */}
          <Dropdown
            menu={{ items }}
            trigger={["click"]}
            placement="bottom"
            arrow
          >
            <div className="flex cursor-pointer items-center">
              <Image
                src={`/icons/${language === "vi" && languageFlag === "VNFlag" ? "lg-vn" : "lg-eng"}.png`}
                alt="language"
                className="h-[23px] w-[33px]"
                width={500}
                height={500}
              />
              <span className="mx-1 text-base font-medium text-[#1B2837]">
                {language === "vi" && languageFlag === "VNFlag"
                  ? "Tiếng Việt"
                  : "Tiếng Anh"}
              </span>
              <Image
                src="/icons/ArrowDown.svg"
                alt="lg-vn"
                className="h-[15px] w-[15px]"
                width={500}
                height={500}
              />
            </div>
          </Dropdown>
          {/* <!-- Change Language Area --> */}

          {/* <!-- User Area --> */}
          <DropdownUser />
          {/* <!-- User Area --> */}
        </div>
      </div>
    </header>
  );
};

export default Header;
