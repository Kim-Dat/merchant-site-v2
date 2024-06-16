"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";
import ButtonPrimary from "../button-primary/ButtonPrimary";

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

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
      series: [34, 34, 94],
    }));
  };
  handleReset;

  return (
    <div className="shadows-custom col-span-12  rounded-lg bg-white px-5 pb-7 pt-2.5 dark:bg-boxdark sm:px-7.5 xl:col-span-5">
      <div className="mb-2">
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
              <p className="text-sm font-normal text-[#4FAAC1]">Tổng số dư</p>
              <h2 className="mt-2 text-xl font-bold text-[#1B2837]">
                20.010.111.000 <br /> VNĐ
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div className="-mx-8 gap-y-3">
        <div className="w-full px-16 sm:px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-4 w-full max-w-4 rounded-full bg-[#71E77A]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span className="text-sm font-normal text-[#626E7B]">
                {" "}
                Số dư khả dụng{" "}
              </span>
              <span className="text-sm font-semibold text-[#1B2837]">
                {" "}
                1.490.000.109 đ{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="mt-3 w-full px-16 sm:px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-4 w-full max-w-4 rounded-full bg-[#FF8C24]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span className="text-sm font-normal text-[#626E7B]">
                {" "}
                Số dư chờ nhận{" "}
              </span>
              <span className="text-sm font-semibold text-[#1B2837]">
                190.000.109 đ{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="mt-3 w-full px-16 sm:px-8">
          <div className="flex w-full items-center">
            <span className="mr-2 block h-4 w-full max-w-4 rounded-full bg-[#FA5472]"></span>
            <p className="flex w-full justify-between text-sm font-medium text-black dark:text-white">
              <span className="text-sm font-normal text-[#626E7B]">
                {" "}
                Số dư đóng băng{" "}
              </span>
              <span className="text-sm font-semibold text-[#1B2837]">
                {" "}
                80.000.109 đ{" "}
              </span>
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-5">
          <div className="w-[121px]">
            <ButtonPrimary title="Rút tiền" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChartThree;
