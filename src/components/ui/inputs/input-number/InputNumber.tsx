"use client";
import React, { useState } from "react";
import CurrencyInput from "react-currency-input-field";

type propsInput = {
  max: number;
  min: number;
  label: string;
  messMax: string;
  messMin: string;
  isRequired?: boolean;
};

const InputNumber: React.FC<propsInput> = (props) => {
  const { max, min, label, messMax, messMin, isRequired = false } = props;
  const [errorMessage, setErrorMessage] = useState<string>("");

  const handleValueChange = (
    value: string | undefined,
    name: string | undefined,
    values: {
      floatValue: number | undefined;
      formattedValue: string;
      value: string;
    },
  ) => {
    if (value === undefined) {
      setErrorMessage("");
      return;
    }

    const numericValue = parseFloat(value);
    if (numericValue < min) {
      setErrorMessage(messMin);
    } else if (numericValue > max) {
      setErrorMessage(messMax);
    } else {
      setErrorMessage("");
    }
  };

  return (
    <div className="relative">
      <div className="relative z-0">
        <CurrencyInput
          id="input-example"
          name="input-name"
          className={`peer block w-full appearance-none rounded-xl border-[1.5px] ${errorMessage ? "border-red" : "border-gray-200"} bg-gray-50 px-3 pb-2.5 pt-6 text-sm font-medium text-gray-900 caret-[#4faac1] focus:${errorMessage ? "border-red" : "border-gray-300"} focus:outline-none focus:ring-0`}
          placeholder=""
          suffix=" đ"
          defaultValue={null}
          decimalsLimit={2}
          maxLength={19}
          groupSeparator="."
          decimalSeparator=","
          onValueChange={handleValueChange}
        />
        <label
          htmlFor={"input-example"}
          className={`absolute start-3.5 top-4 z-10 origin-[0] -translate-y-2 scale-75 transform text-sm ${errorMessage ? "text-red" : "text-gray-600"} duration-300 peer-placeholder-shown:translate-y-0.5 peer-placeholder-shown:scale-100 peer-focus:-translate-y-2 peer-focus:scale-75 dark:text-gray-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4`}
        >
          {errorMessage ? (
            errorMessage
          ) : (
            <>
              {label}
              {isRequired && <span className="text-[#FF3C3C]">*</span>}
            </>
          )}
        </label>
      </div>
    </div>
  );
};

export default InputNumber;
