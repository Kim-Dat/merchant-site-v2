"use client";
import { Select } from "antd";
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
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="flex w-full justify-center">
      <div className="relative w-full rounded-xl border border-gray-200 px-3 pb-1.5 pt-4">
        <span className="absolute left-3.5 top-1.5 z-1 mt-1 text-[0.6562rem] font-normal leading-3">
          {label}
          {isRequired && <span className="text-[#FF3C3C]">*</span>}
        </span>
        <div className="w-full">
          <Select
            defaultValue="Chọn..."
            style={{ minWidth: 200}}
            onChange={handleChange}
            className="custom-select w-full bg-transparent"
            options={option?.map((ot) => ({
              value: ot.value,
              label: (
                <span className="text-sm font-sans font-medium text-[#1B2837]">
                  {ot.label}
                </span>
              ),
            }))}
          />
        </div>
      </div>
    </div>
  );
};

export default SelectCustom;
