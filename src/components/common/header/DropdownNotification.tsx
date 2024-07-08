import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const DropdownNotification = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notifying, setNotifying] = useState(true);

  const trigger = useRef<any>(null);
  const dropdown = useRef<any>(null);

  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  return (
    <div className="relative">
      <button
        ref={trigger}
        onClick={() => {
          setNotifying(false);
          setDropdownOpen(!dropdownOpen);
        }}
        className="bg-gray relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke hover:text-[#3D42DF] dark:border-strokedark dark:bg-meta-4 dark:text-white"
      >
        <span
          className={`absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 ${
            notifying === false ? "hidden" : "inline"
          }`}
        >
          <span className="absolute right-0 -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75"></span>
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="fill-current duration-300 ease-in-out"
          width="18"
          height="18"
          fill="none"
          viewBox="0 0 448 512"
        >
          <path d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z" />
        </svg>
      </button>

      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute -right-27 mt-2.5 flex h-90 w-75 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:right-0 sm:w-80 ${
          dropdownOpen === true ? "block" : "hidden"
        }`}
      >
        <div className="px-4.5 py-3">
          <h5 className="text-sm font-medium text-bodydark2">
            Thông báo mới nhất
          </h5>
        </div>

        <ul className="flex h-auto flex-col overflow-y-auto ">
          <li>
            <Link
              className="hover:bg-gray-2 flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 dark:border-strokedark dark:hover:bg-meta-4"
              href="#"
            >
              <p className="text-sm">
                <span className="text-black dark:text-white">
                  Edit your information in a swipe
                </span>{" "}
                Sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim.
              </p>

              <p className="text-xs">12 May, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-gray-2 flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 dark:border-strokedark dark:hover:bg-meta-4"
              href="#"
            >
              <p className="text-sm">
                <span className="text-black dark:text-white">
                  It is a long established fact
                </span>{" "}
                that a reader will be distracted by the readable.
              </p>

              <p className="text-xs">24 Feb, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-gray-2 flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 dark:border-strokedark dark:hover:bg-meta-4"
              href="#"
            >
              <p className="text-sm">
                <span className="text-black dark:text-white">
                  There are many variations
                </span>{" "}
                of passages of Lorem Ipsum available, but the majority have
                suffered
              </p>

              <p className="text-xs">04 Jan, 2025</p>
            </Link>
          </li>
          <li>
            <Link
              className="hover:bg-gray-2 flex flex-col gap-2.5 border-t border-stroke px-4.5 py-3 dark:border-strokedark dark:hover:bg-meta-4"
              href="#"
            >
              <p className="text-sm">
                <span className="text-black dark:text-white">
                  There are many variations
                </span>{" "}
                of passages of Lorem Ipsum available, but the majority have
                suffered
              </p>

              <p className="text-xs">01 Dec, 2024</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DropdownNotification;
