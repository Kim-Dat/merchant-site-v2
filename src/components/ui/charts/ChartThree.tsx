"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import ButtonPrimary from "../ui/buttons/button-primary/ButtonPrimary";
import { useTranslation } from "react-i18next";

interface ChartThreeState {
  series: number[];
}

const options: ApexOptions = {
  chart: {
    fontFamily: "Satoshi, sans-serif",
    type: "donut",
  },
  colors: ["#FA5472", "#FF8C24", "#71E77A"],
  labels: ["Số dư đóng băng", "Số dư chờ nhận", "Số dư khả dụng"],
  legend: {
    show: false,
    position: "bottom",
  },

  plotOptions: {
    pie: {
      donut: {
        size: "65%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 380,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};

const ChartThree: React.FC = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [34, 34, 94],
  });
  const { t: trans } = useTranslation();

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [34, 34, 94],
    }));
  };
  handleReset;

  return (
    <div className="shadows-custom col-span-12  rounded-lg bg-white px-5 pb-7 pt-2.5 dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-3">
        <div id="chartThree" className="relative mx-auto flex justify-center">
          <div className=" mt-22 sm:mt-0">
            <ReactApexChart
              options={options}
              series={state.series}
              type="donut"
            />
          </div>
          <div className="absolute left-1/2 top-[0] -translate-x-1/2 transform sm:top-1/2 sm:-translate-y-1/2">
            <div className="text-center">
              <p className="text-sm font-normal text-[#4FAAC1]">
                {trans("home.total-balance")}
              </p>
              <h2 className="mt-2 text-xl font-bold text-[#1B2837]">
                20.010.111.000 <br /> VNĐ
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xsm gap-y-3 mx-auto">
        <div className="w-full">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-4 w-full max-w-4 rounded-full bg-[#71E77A]"></span>
            <p className="flex w-full items-center justify-between gap-3 text-sm font-medium text-black dark:text-white">
              <span className="text-sm font-normal text-[#626E7B]">
                {trans("home.total-revenue")}:
              </span>
              <span className="text-nowrap text-sm font-semibold text-[#1B2837]">
                1.490.000.109 đ
              </span>
            </p>
          </div>
        </div>
        <div className="mt-3 w-full">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-4 w-full max-w-4 rounded-full bg-[#FF8C24]"></span>
            <p className="flex w-full items-center justify-between gap-3 text-sm font-medium text-black dark:text-white">
              <span className="text-wrap text-sm font-normal text-[#626E7B]">
                {trans("home.amount-waiting-to-be-received")}:
              </span>
              <span className="text-nowrap text-sm font-semibold text-[#1B2837]">
                190.000.109 đ
              </span>
            </p>
          </div>
        </div>
        <div className="mt-3 w-full">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-4 w-full max-w-4 rounded-full bg-[#FA5472]"></span>
            <p className="flex w-full items-center justify-between gap-3 text-sm font-medium text-black dark:text-white">
              <span className="text-wrap text-sm font-normal text-[#626E7B]">
                {trans("home.freezing-balance")}:
              </span>
              <span className="text-nowrap text-sm font-semibold text-[#1B2837]">
                80.000.109 đ
              </span>
            </p>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <div className="w-[121px]">
            <ButtonPrimary title={trans("home.withdrawals")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
