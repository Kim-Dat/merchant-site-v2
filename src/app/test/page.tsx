"use client";
import React, { useState } from "react";

const NumberInputFormatExample: React.FC = () => {
  const [formattedNumber, setFormattedNumber] = useState<string>("");

  const formatNumber = (value: string) => {
    // Remove non-numeric characters except dots
    const numericValue = value.replace(/[^\d.]/g, "");
    // Format with dots as thousand separators
    const parts = numericValue.split(".");
    const integerPart = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const formattedValue =
      parts.length === 1 ? integerPart : integerPart + "." + parts[1];

    setFormattedNumber(formattedValue);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    formatNumber(event.target.value);
  };

  return (
    <div>
      <label htmlFor="numberInput">Nhập số:</label>
      <input
        type="text"
        id="numberInput"
        value={formattedNumber}
        onChange={handleChange}
      />
    </div>
  );
};

export default NumberInputFormatExample;
