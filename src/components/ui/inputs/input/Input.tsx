"use client";
interface InputProps {
  id: string;
  label: string;
  status: "default" | "success" | "error";
  message?: string;
  type: string;
  isRequired: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  status,
  message,
  type,
  isRequired,
  id,
}) => {
  const statusType = [
    {
      name: "default",
      value: {
        inputClass:
          "block rounded-xl caret-[#4faac1] px-3.5 pb-2.5 pt-6 font-medium w-full text-sm text-gray-900 bg-gray-50 border-[1.5px] border-gray-200 appearance-none focus:outline-none focus:ring-0 focus:border-gray-300 peer",
        labelClass:
          "absolute text-sm text-gray-600 duration-300 transform -translate-y-2 scale-75 top-4 z-10 origin-[0] start-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0.5 peer-focus:scale-75 peer-focus:-translate-y-2 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
      },
    },

    {
      name: "success",
      value: {
        inputClass:
          "block rounded-xl px-2.5 pb-2.5 font-medium pt-5 w-full text-sm text-green-900 bg-gray-50 border-[1.5px] border-green-200 appearance-none dark:text-white focus:outline-none focus:ring-0 focus:border-green-300 peer",
        labelClass:
          "absolute text-sm text-green-600 dark:text-green-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
        messageColor:
          "mt-1 text-left text-xs font-normal text-green-600 dark:text-green-500",
      },
    },
    {
      name: "error",
      value: {
        inputClass:
          "block rounded-xl px-2.5 pb-2.5 pt-5 w-full text-sm text-red-900 bg-gray-50 dark:bg-red-700 border-[1.5px] border-red-200 dark:border-red-500 appearance-none dark:text-white dark:focus:border-red-300 focus:outline-none focus:ring-0 focus:border-red-300 peer",
        labelClass:
          "absolute text-sm text-red-600 dark:text-red-500 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto",
        messageColor:
          "mt-1 text-left text-xs font-normal text-[#FF1717] dark:text-[#FF1717]",
      },
    },
  ];

  const currentStatus = statusType.find((item) => item.name === status);

  return (
    <>
      {currentStatus?.value && (
        <>
          <div className="relative z-0">
            <input
              type={type}
              id={id}
              className={currentStatus.value.inputClass}
              placeholder=""
            />
            <label htmlFor={id} className={currentStatus.value.labelClass}>
              {label} {isRequired && <span className="text-[#FF3C3C]">*</span>}
            </label>
          </div>
          {currentStatus.name !== "default" && (
            <p className={currentStatus.value.messageColor}>{message}</p>
          )}
        </>
      )}
    </>
  );
};

export default Input;
