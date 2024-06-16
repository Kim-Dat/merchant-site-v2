"use client";
import React, { useState } from "react";

const InputNumber: React.FC = () => {
  const [formattedNumber, setFormattedNumber] = useState<string>("");

  const formatNumber = (value: string) => {
    // Remove non-numeric characters
    const numericValue = value.replace(/\D/g, "");
    // Format with dots as thousand separators
    const formattedValue = numericValue.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

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
        min={2000}
        max={}
      />
    </div>
  );
};

export default InputNumber;
