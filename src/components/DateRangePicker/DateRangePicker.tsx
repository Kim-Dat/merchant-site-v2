"use client";
import React, { useState } from "react";
import { DatePicker, Space } from "antd";
import { Moment } from "moment";

interface DatePickerProps {
  onDateChange?: (startDate: Moment | null, endDate: Moment | null) => void;
  title: string;
}
const DateRangePicker: React.FC<DatePickerProps> = ({
  onDateChange,
  title,
}) => {
  const [startDate, setStartDate] = useState<Moment | null>(null);
  const [endDate, setEndDate] = useState<Moment | null>(null);

  const handleStartDateChange = (date: Moment | null, dateString: string) => {
    setStartDate(date);
    if (endDate && date && date.isAfter(endDate)) {
      setEndDate(null);
    }
    onDateChange?.(date, endDate);
  };

  const handleEndDateChange = (date: Moment | null, dateString: string) => {
    setEndDate(date);
    onDateChange?.(startDate, date);
  };

  const disabledStartDate = (current: Moment | null): boolean => {
    if (!current || !endDate) {
      return false;
    }
    return current.isAfter(endDate);
  };

  const disabledEndDate = (current: Moment | null): boolean => {
    if (!current || !startDate) {
      return false;
    }
    return current.isBefore(startDate);
  };

  return (
    <>
      <span className="text-xs font-normal text-[#9EA1A5]">{title}</span>
      <div className="flex items-center gap-3">
        <DatePicker
          format="DD/MM/YYYY"
          size="large"
          // style={{ width: "100%" }}
          className="w-full bg-[#EBF5FA] caret-[#4faac1] md:w-33"
          placeholder="Từ ngày..."
          onChange={handleStartDateChange}
          disabledDate={disabledStartDate}
        />
        <DatePicker
          format="DD/MM/YYYY"
          size="large"
          /* style={{ width: 130 }} */
          className="w-full bg-[#EBF5FA] caret-[#4faac1] md:w-33"
          placeholder="Đến ngày..."
          onChange={handleEndDateChange}
          disabledDate={disabledEndDate}
        />
      </div>
    </>
  );
};

export default DateRangePicker;
