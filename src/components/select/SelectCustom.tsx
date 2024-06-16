import React from "react";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  isRequired: boolean;
  label: string;
  option: Option[];
}

const SelectCustom: React.FC<SelectProps> = ({ label, option, isRequired }) => {
  return (
    <div className="relative overflow-hidden rounded-xl border-[1.5px] border-gray-200">
      <select
        id="hs-floating-input-email-value"
        required
        className="peer block w-full rounded-xl border-none ps-3 text-sm font-medium text-[#1B2837] placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-gray-300 focus:pb-2 focus:pt-6 focus:ring-gray-300 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
      >
        {option.map((ot, key) => {
          return (
            <option key={key} value={ot.value}>
              {ot.label}
            </option>
          );
        })}
      </select>
      <label
        htmlFor="hs-floating-input-email-value"
        className="pointer-events-none absolute start-0 top-0 h-full origin-[0_0] truncate border border-transparent py-3 ps-2.5 text-sm transition duration-100  ease-in-out peer-focus:-translate-y-1.5 peer-focus:translate-x-0.5 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
      >
        {label}
        {isRequired && <span className="ml-1 text-red">*</span>}
      </label>
    </div>
  );
};
export default SelectCustom;
