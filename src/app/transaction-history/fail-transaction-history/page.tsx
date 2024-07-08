"use client";
/* library */
import { useState } from "react";
import { Metadata } from "next";
import type { MenuProps, TableProps } from "antd";
import { Dropdown, Table } from "antd";
import { Moment } from "moment";
/* component */
import DefaultLayout from "@/components/layout/DefaultLayout";
import InputSearch from "@/components/ui/inputs/input-search/InputSearch";
import ButtonExcel from "@/components/ui/buttons/button-excel/ButtonExcel";
import FormatPrice from "@/components/format-price/FormatPrice";
import Pagination from "@/components/ui/pagination/Pagination";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import DateRangePicker from "@/components/ui/DateRangePicker/DateRangePicker";
import Image from "next/image";

// export const metadata: Metadata = {
//   title: "Transaction History",
//   description: "Transaction History Page",
// };
const itemsp = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
/* config table data start */
interface DataType {
  key: string;
  codeVoucher: string;
  codeInvoice: string;
  price: number;
  timeSuccess: any;
  reason: string;
}

const data: DataType[] = [
  {
    key: "1",
    codeVoucher: "96113135",
    codeInvoice: "OM_231321313123",
    price: 100000,
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    reason: "Giao dịch không thành công, lỗi giao dịch",
  },
  {
    key: "2",
    codeVoucher: "96113135",
    codeInvoice: "OM_231321313123",
    price: -100000,
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    reason: "Giao dịch không thành công, lỗi giao dịch",
  },
  {
    key: "3",
    codeVoucher: "96113135",
    codeInvoice: "OM_231321313123",
    price: 100000,
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    reason: "Giao dịch không thành công, lỗi giao dịch",
  },
  {
    key: "4",
    codeVoucher: "96113135",
    codeInvoice: "OM_231321313123",
    price: -100000,
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    reason: "Giao dịch không thành công, lỗi giao dịch",
  },
  {
    key: "5",
    codeVoucher: "96113135",
    codeInvoice: "OM_231321313123",
    price: 100000,
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    reason: "Giao dịch không thành công, lỗi giao dịch",
  },
  {
    key: "6",
    codeVoucher: "96113135",
    codeInvoice: "OM_231321313123",
    price: -100000,
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    reason: "Giao dịch không thành công, lỗi giao dịch",
  },
  {
    key: "7",
    codeVoucher: "96113135",
    codeInvoice: "OM_231321313123",
    price: 100000,
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    reason: "Giao dịch không thành công, lỗi giao dịch",
  },
  {
    key: "8",
    codeVoucher: "96113135",
    codeInvoice: "OM_231321313123",
    price: 100000,
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    reason: "Giao dịch không thành công, lỗi giao dịch",
  },
  {
    key: "9",
    codeVoucher: "96113135",
    codeInvoice: "OM_231321313123",
    price: 100000,
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    reason: "Giao dịch không thành công, lỗi giao dịch",
  },
  {
    key: "10",
    codeVoucher: "96113135",
    codeInvoice: "OM_231321313123",
    price: 100000,
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    reason: "Giao dịch không thành công, lỗi giao dịch",
  },
];

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Mã phiếu thu",
    dataIndex: "codeVoucher",
    key: "codeVoucher",
  },
  {
    title: "Mã hóa đơn",
    dataIndex: "codeInvoice",
    key: "codeInvoice",
  },
  {
    title: "Số tiền",
    dataIndex: "price",
    key: "price",
  },
  {
    title: "Thời gian hoàn thành",
    key: "timeSuccess",
    dataIndex: "timeSuccess",
  },
  {
    title: "Lý do thất bại",
    key: "reason",
    dataIndex: "reason",
  },
];
/* config table data end */
const FailTransactionHistory = () => {
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
  const typePrice = (price: any) => {
    let value;
    if (price < 0) {
      value = (
        <span className="text-base font-normal text-[#FF1717]">
          {<FormatPrice price={price} />}
        </span>
      );
    } else {
      value = (
        <span className="text-base font-normal text-[#31B63B]">
          +<FormatPrice price={price} />
        </span>
      );
    }
    return value;
  };

  const handleDataTransHistory = data.map((item) => ({
    ...item,
    codeVoucher: (
      <span className="text-sm font-normal text-[#525C67]">
        {item.codeVoucher}
      </span>
    ),
    codeInvoice: (
      <span className="text-sm font-normal text-[#525C67]">
        {item.codeInvoice}
      </span>
    ),
    price: <div className="flex justify-end">{typePrice(item.price)}</div>,
    timeSuccess: (
      <div>
        <div className="text-sm font-normal text-[#525C67]">
          {item.timeSuccess.detail}
        </div>
        <div className="text-sm font-normal text-[#525C67]">
          {item.timeSuccess.date}
        </div>
      </div>
    ),
    reason: (
      <span className="text-sm font-normal text-[#525C67]">{item.reason}</span>
    ),
  }));
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="shadows-custom flex gap-3 rounded-lg bg-white p-4 ">
          <div className="flex items-center gap-1">
            <span className="text-color-gray-sm">Tổng giao dịch:</span>
            <h2 className="ms-1 text-xl font-semibold text-[#4FAAC1]">261</h2>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
          <div className="flex w-full items-end gap-3">
            <div className="flex items-center gap-3">
              <InputSearch title="Mã hóa đơn" placeholder="Nhập từ khoá ..." />
              <InputSearch
                title="Mã phiếu thu"
                placeholder="Nhập từ khoá ..."
              />
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
              <ButtonPrimary onClick={() => {}} title={"Tìm"} cl="rounded-md" />
            </div>
          </div>
        </div>
      </div>
      <div className="shadows-custom mt-3 overflow-hidden rounded-lg bg-white">
        <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3">
          <h3 className="text-lg font-medium text-[#101828]">
            Lịch sử giao dịch thất bại
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
  );
};

export default FailTransactionHistory;
