"use client";
/* library */
import { useState } from "react";
import { Metadata } from "next";
import type { MenuProps, TableProps } from "antd";
import { Dropdown, Select, Table } from "antd";
import { Moment } from "moment";
/* component */
import DefaultLayout from "@/components/layout/DefaultLayout";
import InputSearch from "@/components/input-search/InputSearch";
import ButtonExcel from "@/components/button-excel/ButtonExcel";
import FormatPrice from "@/components/format-price/FormatPrice";
import Pagination from "@/components/pagination/Pagination";
import ButtonPrimary from "@/components/button-primary/ButtonPrimary";
import DateRangePicker from "@/components/DateRangePicker/DateRangePicker";
import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Transaction History",
//   description: "Transaction History Page",
// };
const itemsp = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
/* config table data start */
interface DataType {
  key: string;
  id: number;
  bank: string;
  desFail: string;
  created_at: any;
}

const data: DataType[] = [
  {
    key: "1",
    id: 96113135,
    bank: "BIDV",
    desFail: "Giao dịch không thực hiện được.Vui lòng thực hiện lại sau.",
    created_at: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
  },
  {
    key: "2",
    id: 96113135,
    bank: "BIDV",
    desFail: "Giao dịch không thực hiện được.Vui lòng thực hiện lại sau.",
    created_at: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
  },
  {
    key: "3",
    id: 96113135,
    bank: "BIDV",
    desFail: "Giao dịch không thực hiện được.Vui lòng thực hiện lại sau.",
    created_at: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
  },
  {
    key: "4",
    id: 96113135,
    bank: "BIDV",
    desFail: "Giao dịch không thực hiện được.Vui lòng thực hiện lại sau.",
    created_at: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
  },
  {
    key: "5",
    id: 96113135,
    bank: "BIDV",
    desFail: "Giao dịch không thực hiện được.Vui lòng thực hiện lại sau.",
    created_at: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
  },
  {
    key: "6",
    id: 96113135,
    bank: "BIDV",
    desFail: "Giao dịch không thực hiện được.Vui lòng thực hiện lại sau.",
    created_at: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
  },
  {
    key: "7",
    id: 96113135,
    bank: "BIDV",
    desFail: "Giao dịch không thực hiện được.Vui lòng thực hiện lại sau.",
    created_at: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
  },
  {
    key: "8",
    id: 96113135,
    bank: "BIDV",
    desFail: "Giao dịch không thực hiện được.Vui lòng thực hiện lại sau.",
    created_at: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
  },
];

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
  },
  {
    title: "Ngân hàng",
    dataIndex: "bank",
    key: "bank",
  },
  {
    title: "Mô tả lỗi",
    dataIndex: "desFail",
    key: "desFail",
  },
  {
    title: "Ngày tạo",
    key: "created_at",
    dataIndex: "created_at",
  },
];
/* config table data end */
const IbftHistory = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (itemsp: number) => {
    setItemsPerPage(itemsp);
    setCurrentPage(1);
  };

  const handleDateChange = (
    startDate: Moment | null,
    endDate: Moment | null,
  ) => {
    console.log("Start Date: ", startDate);
    console.log("End Date: ", endDate);
  };

  const handleDataTransHistory = data.map((item) => ({
    ...item,
    id: <span className="text-sm font-normal text-[#525C67]">{item.id}</span>,
    bank: (
      <span className="text-sm font-normal text-[#525C67]">{item.bank}</span>
    ),
    desFail: (
      <span className="text-sm font-normal text-[#525C67]">{item.desFail}</span>
    ),
    created_at: (
      <div>
        <div className="text-sm font-normal text-[#525C67]">
          {item.created_at.detail}
        </div>
        <div className="text-sm font-normal text-[#525C67]">
          {item.created_at.date}
        </div>
      </div>
    ),
  }));
  return (
    <DefaultLayout>
      <div>
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="shadows-custom flex gap-3 rounded-lg bg-white p-4 ">
            <div className="flex items-center gap-1">
              <span className="text-color-gray-sm">Tổng giao dịch:</span>
              <h2 className="ms-1 text-xl font-semibold text-[#4FAAC1]">261</h2>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex flex-wrap items-end gap-3 sm:flex-nowrap">
              <div className="w-full">
                <span className="text-xs font-normal text-[#9EA1A5]">
                  Ngân hàng
                </span>
                <div className="w-full">
                  <Select
                    defaultValue="all"
                    style={{ minWidth: 200 }}
                    className="w-full md:w-[200px]"
                    size="large"
                    /* onChange={handleChange} */
                    options={[
                      { value: "all", label: "Tất cả" },
                      { value: "ABBank", label: "ABBank" },
                      { value: "ACB", label: "ACB" },
                      {
                        value: "Agribank",
                        label: "ACB - Ngân hàng thương mại cổ phần Á Châu",
                      },
                      { value: "BIDV", label: "BIDV" },
                    ]}
                  />
                </div>
              </div>
              <div className="w-full">
                <span className="text-xs font-normal text-[#9EA1A5]">
                  Loại dịch vụ
                </span>
                <div className="w-full">
                  <Select
                    defaultValue="all"
                    style={{ minWidth: 200 }}
                    className="w-full md:w-[200px]"
                    size="large"
                    /* onChange={handleChange} */
                    options={[
                      { value: "all", label: "Tất cả" },
                      { value: "ABBank", label: "ABBank" },
                      { value: "ACB", label: "ACB" },
                      { value: "Agribank", label: "Agribank" },
                      { value: "BIDV", label: "BIDV" },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full max-w-125 items-end gap-3 md:max-w-[351px]">
              <div className="w-full">
                <DateRangePicker
                  onDateChange={handleDateChange}
                  title="Bộ lọc tìm kiếm"
                />
              </div>
              <div className="w-20">
                <ButtonPrimary
                  onClick={() => {}}
                  title={"Tìm"}
                  cl="rounded-md"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="shadows-custom mt-3 overflow-hidden rounded-lg bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3">
            <h3 className="text-lg font-medium text-[#101828]">
              Lịch sử tra cứu tài khoản ngân hàng
            </h3>
            <div className="ml-auto flex items-center gap-3">
              <div>
                <ButtonExcel />
              </div>
            </div>
          </div>
          <hr />
          <div className="overflow-x-auto">
            <Table
              columns={columns}
              dataSource={handleDataTransHistory}
              pagination={false}
              scroll={{ x: "max-content" }}
            />
          </div>
        </div>
        <div className="my-3">
          <Pagination
            totalItems={itemsp.length}
            itemsPerPage={itemsPerPage}
            currentPage={currentPage}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        </div>
      </div>
    </DefaultLayout>
  );
};

export default IbftHistory;
