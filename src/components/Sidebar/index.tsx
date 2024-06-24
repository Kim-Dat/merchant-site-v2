"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { useTranslation } from "react-i18next";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);
  const { t: trans } = useTranslation();
  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`shadows-custom absolute left-0 top-0 z-1 flex h-screen w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="mb-2 flex items-center justify-between gap-2 bg-white px-6 py-[0.48rem] shadow-2 drop-shadow-1">
        <Link href="/">
          <Image
            width={110}
            height={32}
            src={"/images/logo/logo-hpay.png"}
            alt="Logo"
            priority
          />
        </Link>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill=""
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      {/* <!-- SIDEBAR MAIN --> */}
      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mb-13">
          {/* <!-- Menu Group --> */}
          <div>
            <ul className="mb-6 flex flex-col gap-2">
              {/* <!-- Menu Item home --> */}
              <li className="flex pe-2">
                <div
                  className={`me-1 w-[4px] ${pathname === "/" && "rounded-r-lg border-[1px] border-l-4 border-[#FF89E7]"} `}
                ></div>
                <Link
                  href={"/"}
                  className={`group relative flex w-full items-center gap-2.5 rounded-md from-[#76DCFF] to-[#FF89E7] px-4 py-3 font-medium text-black duration-300 hover:bg-gradient-to-r hover:text-white ${
                    pathname === "/" && "bg-gradient-to-r text-white"
                  }`}
                >
                  <svg
                    className="fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 576 512"
                  >
                    <path d="M304 240V16.6c0-9 7-16.6 16-16.6C443.7 0 544 100.3 544 224c0 9-7.6 16-16.6 16H304zM32 272C32 150.7 122.1 50.3 239 34.3c9.2-1.3 17 6.1 17 15.4V288L412.5 444.5c6.7 6.7 6.2 17.7-1.5 23.1C371.8 495.6 323.8 512 272 512C139.5 512 32 404.6 32 272zm526.4 16c9.3 0 16.6 7.8 15.4 17c-7.7 55.9-34.6 105.6-73.9 142.3c-6 5.6-15.4 5.2-21.2-.7L320 288H558.4z" />
                  </svg>
                  {trans("navigation.home")}
                </Link>
              </li>
              {/* <!-- Menu Item home --> */}

              {/* <!-- Menu Item account --> */}
              <li className="flex pe-2">
                <div
                  className={`me-1 w-[4px] ${pathname?.includes("/account") && "rounded-r-lg border-[1px] border-l-4 border-[#FF89E7]"} `}
                ></div>
                <Link
                  href={"/account"}
                  className={`group relative flex w-full items-center gap-2.5 rounded-md from-[#76DCFF] to-[#FF89E7] px-4 py-3 font-medium text-black duration-300 hover:bg-gradient-to-r hover:text-white ${
                    pathname?.includes("/account") &&
                    "bg-gradient-to-r text-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 640 512"
                  >
                    <path d="M224 0a128 128 0 1 1 0 256A128 128 0 1 1 224 0zM178.3 304h91.4c11.8 0 23.4 1.2 34.5 3.3c-2.1 18.5 7.4 35.6 21.8 44.8c-16.6 10.6-26.7 31.6-20 53.3c4 12.9 9.4 25.5 16.4 37.6s15.2 23.1 24.4 33c15.7 16.9 39.6 18.4 57.2 8.7v.9c0 9.2 2.7 18.5 7.9 26.3H29.7C13.3 512 0 498.7 0 482.3C0 383.8 79.8 304 178.3 304zM436 218.2c0-7 4.5-13.3 11.3-14.8c10.5-2.4 21.5-3.7 32.7-3.7s22.2 1.3 32.7 3.7c6.8 1.5 11.3 7.8 11.3 14.8v17.7c0 7.8 4.8 14.8 11.6 18.7c6.8 3.9 15.1 4.5 21.8 .6l13.8-7.9c6.1-3.5 13.7-2.7 18.5 2.4c7.6 8.1 14.3 17.2 20.1 27.2s10.3 20.4 13.5 31c2.1 6.7-1.1 13.7-7.2 17.2l-14.4 8.3c-6.5 3.7-10 10.9-10 18.4s3.5 14.7 10 18.4l14.4 8.3c6.1 3.5 9.2 10.5 7.2 17.2c-3.3 10.6-7.8 21-13.5 31s-12.5 19.1-20.1 27.2c-4.8 5.1-12.5 5.9-18.5 2.4l-13.8-7.9c-6.7-3.9-15.1-3.3-21.8 .6c-6.8 3.9-11.6 10.9-11.6 18.7v17.7c0 7-4.5 13.3-11.3 14.8c-10.5 2.4-21.5 3.7-32.7 3.7s-22.2-1.3-32.7-3.7c-6.8-1.5-11.3-7.8-11.3-14.8V467.8c0-7.9-4.9-14.9-11.7-18.9c-6.8-3.9-15.2-4.5-22-.6l-13.5 7.8c-6.1 3.5-13.7 2.7-18.5-2.4c-7.6-8.1-14.3-17.2-20.1-27.2s-10.3-20.4-13.5-31c-2.1-6.7 1.1-13.7 7.2-17.2l14-8.1c6.5-3.8 10.1-11.1 10.1-18.6s-3.5-14.8-10.1-18.6l-14-8.1c-6.1-3.5-9.2-10.5-7.2-17.2c3.3-10.6 7.7-21 13.5-31s12.5-19.1 20.1-27.2c4.8-5.1 12.4-5.9 18.5-2.4l13.6 7.8c6.8 3.9 15.2 3.3 22-.6c6.9-3.9 11.7-11 11.7-18.9V218.2zm92.1 133.5a48.1 48.1 0 1 0 -96.1 0 48.1 48.1 0 1 0 96.1 0z" />
                  </svg>
                  {trans("navigation.account")}
                </Link>
              </li>
              {/* <!-- Menu Item account --> */}

              {/* Menu Item transaction-history start */}

              <li className="flex pe-2">
                <div
                  className={`me-1 w-[4px] ${pathname?.includes("transaction-history") && "rounded-r-lg border-[1px] border-l-4 border-[#FF89E7]"} `}
                ></div>
                <div className="w-full">
                  <SidebarLinkGroup
                    activeCondition={pathname?.includes("/transaction-history")}
                  >
                    {(handleClick, open) => {
                      return (
                        <React.Fragment>
                          <div
                            className={`group relative flex w-full cursor-pointer items-center gap-2.5 rounded-md from-[#76DCFF] to-[#FF89E7] px-4 py-3 font-medium text-black duration-300 ease-in-out hover:bg-gradient-to-r hover:text-white ${
                              pathname.includes("/transaction-history") &&
                              "bg-gradient-to-r text-white"
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              sidebarExpanded
                                ? handleClick()
                                : setSidebarExpanded(true);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current"
                              width="20"
                              height="20"
                              fill="none"
                              viewBox="0 0 512 512"
                            >
                              <path d="M512 80c0 18-14.3 34.6-38.4 48c-29.1 16.1-72.5 27.5-122.3 30.9c-3.7-1.8-7.4-3.5-11.3-5C300.6 137.4 248.2 128 192 128c-8.3 0-16.4 .2-24.5 .6l-1.1-.6C142.3 114.6 128 98 128 80c0-44.2 86-80 192-80S512 35.8 512 80zM160.7 161.1c10.2-.7 20.7-1.1 31.3-1.1c62.2 0 117.4 12.3 152.5 31.4C369.3 204.9 384 221.7 384 240c0 4-.7 7.9-2.1 11.7c-4.6 13.2-17 25.3-35 35.5c0 0 0 0 0 0c-.1 .1-.3 .1-.4 .2l0 0 0 0c-.3 .2-.6 .3-.9 .5c-35 19.4-90.8 32-153.6 32c-59.6 0-112.9-11.3-148.2-29.1c-1.9-.9-3.7-1.9-5.5-2.9C14.3 274.6 0 258 0 240c0-34.8 53.4-64.5 128-75.4c10.5-1.5 21.4-2.7 32.7-3.5zM416 240c0-21.9-10.6-39.9-24.1-53.4c28.3-4.4 54.2-11.4 76.2-20.5c16.3-6.8 31.5-15.2 43.9-25.5V176c0 19.3-16.5 37.1-43.8 50.9c-14.6 7.4-32.4 13.7-52.4 18.5c.1-1.8 .2-3.5 .2-5.3zm-32 96c0 18-14.3 34.6-38.4 48c-1.8 1-3.6 1.9-5.5 2.9C304.9 404.7 251.6 416 192 416c-62.8 0-118.6-12.6-153.6-32C14.3 370.6 0 354 0 336V300.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 342.6 135.8 352 192 352s108.6-9.4 148.1-25.9c7.8-3.2 15.3-6.9 22.4-10.9c6.1-3.4 11.8-7.2 17.2-11.2c1.5-1.1 2.9-2.3 4.3-3.4V304v5.7V336zm32 0V304 278.1c19-4.2 36.5-9.5 52.1-16c16.3-6.8 31.5-15.2 43.9-25.5V272c0 10.5-5 21-14.9 30.9c-16.3 16.3-45 29.7-81.3 38.4c.1-1.7 .2-3.5 .2-5.3zM192 448c56.2 0 108.6-9.4 148.1-25.9c16.3-6.8 31.5-15.2 43.9-25.5V432c0 44.2-86 80-192 80S0 476.2 0 432V396.6c12.5 10.3 27.6 18.7 43.9 25.5C83.4 438.6 135.8 448 192 448z" />
                            </svg>
                            {trans("navigation.transaction-history")}
                            <svg
                              className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current transition-all duration-500 ${
                                open && "rotate-180"
                              }`}
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                fill=""
                              />
                            </svg>
                          </div>
                          {/* <!-- Dropdown Menu Start --> */}
                          <div
                            className={`ease max-h-0 transform overflow-hidden transition-all duration-500 ${
                              open && "max-h-39"
                            }`}
                          >
                            <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-11.5 ">
                              <li>
                                <Link
                                  href="/transaction-history"
                                  className={`text-ellipsis font-normal transition-all duration-500 ease-in-out hover:ml-2 hover:text-[#4FAAC1] ${pathname === "/transaction-history" && "text-[#4FAAC1]"}`}
                                >
                                  {trans("navigation.transaction-history")}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/transaction-history/fail-transaction-history"
                                  className={`text-ellipsis font-normal transition-all duration-500 ease-in-out hover:ml-2 hover:text-[#4FAAC1] ${pathname === "/transaction-history/fail-transaction-history" && "text-[#4FAAC1]"}`}
                                >
                                  {trans(
                                    "navigation.failed-transaction-history",
                                  )}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/transaction-history/ibft-history"
                                  className={`text-ellipsis font-normal transition-all duration-500 ease-in-out hover:ml-2 hover:text-[#4FAAC1] ${pathname === "/transaction-history/ibft-history" && "text-[#4FAAC1]"}`}
                                >
                                  {trans(
                                    "navigation.bank-account-lookup-history",
                                  )}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/transaction-history/request-payment"
                                  className={`text-ellipsis font-normal transition-all duration-500 ease-in-out hover:ml-2 hover:text-[#4FAAC1] ${pathname.includes("/request-payment") && "text-[#4FAAC1]"}`}
                                >
                                  {trans("navigation.payment-link")}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- Dropdown Menu End --> */}
                        </React.Fragment>
                      );
                    }}
                  </SidebarLinkGroup>
                </div>
              </li>

              {/* Menu Item transaction-history end */}

              {/* <!-- Menu Item bank-account --> */}
              <li className="flex pe-2">
                <div
                  className={`me-1 w-[4px] ${pathname?.includes("/bank-account") && "rounded-r-lg border-[1px] border-l-4 border-[#FF89E7]"} `}
                ></div>
                <div className="w-full">
                  <SidebarLinkGroup
                    activeCondition={pathname?.includes("/bank-account")}
                  >
                    {(handleClick, open) => {
                      return (
                        <React.Fragment>
                          <div
                            className={`group relative flex w-full cursor-pointer items-center gap-2.5 rounded-md from-[#76DCFF] to-[#FF89E7] px-4 py-3 font-medium text-black duration-300 ease-in-out hover:bg-gradient-to-r hover:text-white ${
                              pathname.includes("/bank-account") &&
                              "bg-gradient-to-r text-white"
                            }`}
                            onClick={(e) => {
                              e.preventDefault();
                              sidebarExpanded
                                ? handleClick()
                                : setSidebarExpanded(true);
                            }}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="fill-current"
                              width="20"
                              height="20"
                              fill="none"
                              viewBox="0 0 512 512"
                            >
                              <path d="M243.4 2.6l-224 96c-14 6-21.8 21-18.7 35.8S16.8 160 32 160v8c0 13.3 10.7 24 24 24H456c13.3 0 24-10.7 24-24v-8c15.2 0 28.3-10.7 31.3-25.6s-4.8-29.9-18.7-35.8l-224-96c-8-3.4-17.2-3.4-25.2 0zM128 224H64V420.3c-.6 .3-1.2 .7-1.8 1.1l-48 32c-11.7 7.8-17 22.4-12.9 35.9S17.9 512 32 512H480c14.1 0 26.5-9.2 30.6-22.7s-1.1-28.1-12.9-35.9l-48-32c-.6-.4-1.2-.7-1.8-1.1V224H384V416H344V224H280V416H232V224H168V416H128V224zM256 64a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                            </svg>
                            {trans("navigation.bank-account")}
                            <svg
                              className={`absolute right-4 top-1/2 -translate-y-1/2 fill-current transition-all duration-500 ${
                                open && "rotate-180"
                              }`}
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M4.41107 6.9107C4.73651 6.58527 5.26414 6.58527 5.58958 6.9107L10.0003 11.3214L14.4111 6.91071C14.7365 6.58527 15.2641 6.58527 15.5896 6.91071C15.915 7.23614 15.915 7.76378 15.5896 8.08922L10.5896 13.0892C10.2641 13.4147 9.73651 13.4147 9.41107 13.0892L4.41107 8.08922C4.08563 7.76378 4.08563 7.23614 4.41107 6.9107Z"
                                fill=""
                              />
                            </svg>
                          </div>
                          {/* <!-- Dropdown Menu Start --> */}
                          <div
                            className={`ease max-h-0 transform overflow-hidden transition-all duration-700 ${
                              open && "max-h-39"
                            }`}
                          >
                            <ul className="mb-5.5 mt-4 flex flex-col gap-2.5 pl-11.5 ">
                              <li>
                                <Link
                                  href="/bank-account"
                                  className={`text-ellipsis font-normal transition-all duration-500 ease-in-out hover:ml-2 hover:text-[#4FAAC1] ${pathname === "/bank-account" && "text-[#4FAAC1]"}`}
                                >
                                  {trans("navigation.bank-account-list")}
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/bank-account/check-user-bank"
                                  className={`text-ellipsis font-normal transition-all duration-500 ease-in-out hover:ml-2 hover:text-[#4FAAC1] ${pathname === "/bank-account/check-user-bank" && "text-[#4FAAC1]"}`}
                                >
                                 {trans("navigation.bank-account-lookup")}
                                </Link>
                              </li>
                            </ul>
                          </div>
                          {/* <!-- Dropdown Menu End --> */}
                        </React.Fragment>
                      );
                    }}
                  </SidebarLinkGroup>
                </div>
              </li>
              {/* <!-- Menu Item bank-account --> */}

              {/* <!-- Menu Item integration-payment --> */}
              <li className="flex pe-2">
                <div
                  className={`me-1 w-[4px] ${pathname?.includes("integration-payment") && "rounded-r-lg border-[1px] border-l-4 border-[#FF89E7]"} `}
                ></div>
                <Link
                  href={"/integration-payment"}
                  className={`group relative flex w-full items-center gap-2.5 rounded-md from-[#76DCFF] to-[#FF89E7] px-4 py-3 font-medium text-black duration-300 hover:bg-gradient-to-r hover:text-white ${
                    pathname?.includes("integration-payment") &&
                    "bg-gradient-to-r text-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 640 512"
                  >
                    <path d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z" />
                  </svg>
                  {trans("navigation.payment-integrations")}
                </Link>
              </li>
              {/* <!-- Menu Item integration-payment --> */}
              <li className="flex-grow border-t border-[#E0E0E0]"></li>

              {/* <!-- Menu Item withdraw --> */}
              <li className="flex pe-2">
                <div
                  className={`me-1 w-[4px] ${pathname?.includes("withdraw") && "rounded-r-lg border-[1px] border-l-4 border-[#FF89E7]"} `}
                ></div>
                <Link
                  href={"/withdraw"}
                  className={`group relative flex w-full items-center gap-2.5 rounded-md from-[#76DCFF] to-[#FF89E7] px-4 py-3 font-medium text-black duration-300 hover:bg-gradient-to-r hover:text-white ${
                    pathname?.includes("withdraw") &&
                    "bg-gradient-to-r text-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 512 512"
                  >
                    <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                  </svg>
                  {trans("navigation.withdraw")}
                </Link>
              </li>
              {/* <!-- Menu Item withdraw --> */}

              {/* <!-- Menu Item va-account --> */}
              <li className="flex pe-2">
                <div
                  className={`me-1 w-[4px] ${pathname?.includes("va-account") && "rounded-r-lg border-[1px] border-l-4 border-[#FF89E7]"} `}
                ></div>
                <Link
                  href={"/va-account"}
                  className={`group relative flex w-full items-center gap-2.5 rounded-md from-[#76DCFF] to-[#FF89E7] px-4 py-3 font-medium text-black duration-300 hover:bg-gradient-to-r hover:text-white ${
                    pathname?.includes("va-account") &&
                    "bg-gradient-to-r text-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 576 512"
                  >
                    <path d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z" />
                  </svg>
                  {trans("navigation.va-account")}
                </Link>
              </li>
              {/* <!-- Menu Item va-account --> */}

              {/* <!-- Menu Item ibft --> */}
              <li className="flex pe-2">
                <div
                  className={`me-1 w-[4px] ${pathname?.includes("ibft") && "rounded-r-lg border-[1px] border-l-4 border-[#FF89E7]"} `}
                ></div>
                <Link
                  href={"/ibft"}
                  className={`group relative flex w-full items-center gap-2.5 rounded-md from-[#76DCFF] to-[#FF89E7] px-4 py-3 font-medium text-black duration-300 hover:bg-gradient-to-r hover:text-white ${
                    pathname?.includes("ibft") && "bg-gradient-to-r text-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 640 512"
                  >
                    <path d="M58.9 42.1c3-6.1 9.6-9.6 16.3-8.7L320 64 564.8 33.4c6.7-.8 13.3 2.7 16.3 8.7l41.7 83.4c9 17.9-.6 39.6-19.8 45.1L439.6 217.3c-13.9 4-28.8-1.9-36.2-14.3L320 64 236.6 203c-7.4 12.4-22.3 18.3-36.2 14.3L37.1 170.6c-19.3-5.5-28.8-27.2-19.8-45.1L58.9 42.1zM321.1 128l54.9 91.4c14.9 24.8 44.6 36.6 72.5 28.6L576 211.6v167c0 22-15 41.2-36.4 46.6l-204.1 51c-10.2 2.6-20.9 2.6-31 0l-204.1-51C79 419.7 64 400.5 64 378.5v-167L191.6 248c27.8 8 57.6-3.8 72.5-28.6L318.9 128h2.2z" />
                  </svg>
                  {trans("navigation.ibft-disbursement")}
                </Link>
              </li>
              {/* <!-- Menu Item ibft --> */}

              {/* <!-- Menu Item instruct-info --> */}
              <li className="flex pe-2">
                <div
                  className={`me-1 w-[4px] ${pathname?.includes("instruct-info") && "rounded-r-lg border-[1px] border-l-4 border-[#FF89E7]"} `}
                ></div>
                <Link
                  href={"/instruct-info"}
                  className={`group relative flex w-full items-center gap-2.5 rounded-md from-[#76DCFF] to-[#FF89E7] px-4 py-3 font-medium text-black duration-300 hover:bg-gradient-to-r hover:text-white ${
                    pathname?.includes("instruct-info") &&
                    "bg-gradient-to-r text-white"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="fill-current"
                    width="20"
                    height="20"
                    fill="none"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-208a32 32 0 1 1 0 64 32 32 0 1 1 0-64z" />
                  </svg>
                  {trans("navigation.user-guide")}
                </Link>
              </li>
              {/* <!-- Menu Item instruct-info --> */}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
      {/* <!-- SIDEBAR MAIN --> */}

      {/* <!-- SIDEBAR FOOTER --> */}
      <div className="absolute bottom-0 mt-30 min-w-full bg-white">
        <ul className="flex flex-col gap-2">
          <li className="flex-grow border-t border-[#E0E0E0]"></li>
          <li className="px-2">
            <Link
              href={"/auth/login"}
              className={
                "flex items-center gap-2.5 rounded-md px-4 py-3 font-medium text-black duration-300 hover:text-red"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="fill-current"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path d="M288 32c0-17.7-14.3-32-32-32s-32 14.3-32 32V256c0 17.7 14.3 32 32 32s32-14.3 32-32V32zM143.5 120.6c13.6-11.3 15.4-31.5 4.1-45.1s-31.5-15.4-45.1-4.1C49.7 115.4 16 181.8 16 256c0 132.5 107.5 240 240 240s240-107.5 240-240c0-74.2-33.8-140.6-86.6-184.6c-13.6-11.3-33.8-9.4-45.1 4.1s-9.4 33.8 4.1 45.1c38.9 32.3 63.5 81 63.5 135.4c0 97.2-78.8 176-176 176s-176-78.8-176-176c0-54.4 24.7-103.1 63.5-135.4z" />
              </svg>
              {trans("logout")}
            </Link>
          </li>
        </ul>
      </div>
      {/* <!-- SIDEBAR FOOTER --> */}
    </aside>
  );
};

export default Sidebar;
