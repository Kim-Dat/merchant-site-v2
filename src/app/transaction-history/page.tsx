"use client";
/* library */
import { useState } from "react";
import { Metadata } from "next";
import type { MenuProps, TableProps } from "antd";
import { Dropdown, Table } from "antd";
import { Moment } from "moment";
/* component */
import InputSearch from "@/components/ui/inputs/input-search/InputSearch";
import ButtonExcel from "@/components/ui/buttons/button-excel/ButtonExcel";
import FormatPrice from "@/components/format-price/FormatPrice";
import Pagination from "@/components/ui/pagination/Pagination";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import DateRangePicker from "@/components/ui/DateRangePicker/DateRangePicker";
import Image from "next/image";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: "Transaction History",
//   description: "Transaction History Page",
// };
const itemsp = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);
const items: MenuProps["items"] = [
  {
    key: "1",
    label: <span className="mx-2 text-sm font-normal text-black">A-Z</span>,
  },
  {
    key: "2",
    label: <span className="mx-2 text-sm font-normal text-black">Z-A</span>,
  },
];
const menuAction: MenuProps["items"] = [
  {
    label: (
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-[#1B2837]">Khóa</span>
        <div>
          <Image
            src={"/icons/ArrowRight.svg"}
            alt="icon arrow right"
            width={13}
            height={13}
          />
        </div>
      </div>
    ),
    key: "0",
  },
  {
    label: (
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-[#1B2837]">Sửa</span>
        <div>
          <Image
            src={"/icons/ArrowRight.svg"}
            alt="icon arrow right"
            width={13}
            height={13}
          />
        </div>
      </div>
    ),
    key: "1",
  },
  {
    label: (
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-[#1B2837]">Xóa</span>
        <div>
          <Image
            src={"/icons/ArrowRight.svg"}
            alt="icon arrow right"
            width={13}
            height={13}
          />
        </div>
      </div>
    ),
    key: "3",
  },
  {
    label: (
      <div className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium text-[#1B2837]">Đổi mật khẩu</span>
        <div>
          <Image
            src={"/icons/ArrowRight.svg"}
            alt="icon arrow right"
            width={13}
            height={13}
          />
        </div>
      </div>
    ),
    key: "3",
  },
];
/* config table data start */
interface DataType {
  key: string;
  info: any;
  status: number;
  card: any;
  price: number;
  time: any;
  timeSuccess: any;
  InvoiceCodeAndProductName: any;
}

const data: DataType[] = [
  {
    key: "1",
    info: {
      title: "Rút tiền",
      code: "96113135",
      type: "Chi hộ",
    },
    status: 1,
    card: {
      number: "1234.xxxx.xxxx.1234",
      title: "NGUYEN VAN A",
    },
    price: -100000,
    time: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    InvoiceCodeAndProductName: {
      invoiceCode: "OM_1713255586",
      productName: "Thanh toán đơn hàng",
      productCode: "OM_1713255586",
    },
  },
  {
    key: "2",
    info: {
      title: "Nhận thanh toán",
      code: "96113135",
      type: "Chi hộ",
    },
    status: 4,
    card: {
      number: "1234.xxxx.xxxx.1234",
      title: "NGUYEN VAN A",
    },
    price: 100000,
    time: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    InvoiceCodeAndProductName: {
      invoiceCode: "OM_1713255586",
      productName: "Thanh toán đơn hàng",
      productCode: "OM_1713255586",
    },
  },
  {
    key: "3",
    info: {
      title: "Nhận thanh toán",
      code: "96113135",
      type: "Chi hộ",
    },
    status: 5,
    card: {
      number: "1234.xxxx.xxxx.1234",
      title: "NGUYEN VAN A",
    },
    price: 100000,
    time: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    InvoiceCodeAndProductName: {
      invoiceCode: "OM_1713255586",
      productName: "Thanh toán đơn hàng",
      productCode: "OM_1713255586",
    },
  },
  {
    key: "4",
    info: {
      title: "Rút tiền",
      code: "96113135",
      type: "Chi hộ",
    },
    status: 2,
    card: {
      number: "1234.xxxx.xxxx.1234",
      title: "NGUYEN VAN A",
    },
    price: -100000,
    time: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    InvoiceCodeAndProductName: {
      invoiceCode: "OM_1713255586",
      productName: "Thanh toán đơn hàng",
      productCode: "OM_1713255586",
    },
  },
  {
    key: "5",
    info: {
      title: "Nhận thanh toán",
      code: "96113135",
      type: "Chi hộ",
    },
    status: 3,
    card: {
      number: "1234.xxxx.xxxx.1234",
      title: "NGUYEN VAN A",
    },
    price: 100000,
    time: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    InvoiceCodeAndProductName: {
      invoiceCode: "OM_1713255586",
      productName: "Thanh toán đơn hàng",
      productCode: "OM_1713255586",
    },
  },
  {
    key: "6",
    info: {
      title: "Nhận thanh toán",
      code: "96113135",
      type: "Chi hộ",
    },
    status: -1,
    card: {
      number: "1234.xxxx.xxxx.1234",
      title: "NGUYEN VAN A",
    },
    price: 100000,
    time: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    InvoiceCodeAndProductName: {
      invoiceCode: "OM_1713255586",
      productName: "Thanh toán đơn hàng",
      productCode: "OM_1713255586",
    },
  },
  {
    key: "7",
    info: {
      title: "Nhận thanh toán",
      code: "96113135",
      type: "Chi hộ",
    },
    status: 0,
    card: {
      number: "1234.xxxx.xxxx.1234",
      title: "NGUYEN VAN A",
    },
    price: 100000,
    time: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    timeSuccess: {
      detail: "12:55:09",
      date: "15/08/2022",
    },
    InvoiceCodeAndProductName: {
      invoiceCode: "OM_1713255586",
      productName: "Thanh toán đơn hàng",
      productCode: "OM_1713255586",
    },
  },
];

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Thông tin giao dịch",
    dataIndex: "info",
    key: "info",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    align: "center",
  },
  {
    title: "Thẻ ATM/ Tài khoản",
    dataIndex: "card",
    key: "card",
  },
  {
    title: (
      <div className="flex items-center gap-3">
        <span>Số tiền</span>
        <div>
          <Image
            src={"/icons/arrow-down.svg"}
            alt="arrow down"
            width={18}
            height={18}
          />
        </div>
      </div>
    ),
    key: "price",
    dataIndex: "price",
  },
  {
    title: (
      <div className="flex items-center gap-3">
        <span>Thời gian</span>
        <div>
          <Image
            src={"/icons/arrow-down.svg"}
            alt="arrow down"
            width={18}
            height={18}
          />
        </div>
      </div>
    ),
    key: "time",
    dataIndex: "time",
  },
  {
    title: (
      <div className="flex items-center gap-3">
        <span>Thời gian hoàn thành</span>
        <div>
          <Image
            src={"/icons/arrow-down.svg"}
            alt="arrow down"
            width={18}
            height={18}
          />
        </div>
      </div>
    ),
    key: "timeSuccess",
    dataIndex: "timeSuccess",
  },
  {
    title: (
      <span>
        Mã hóa đơn /
        <br />
        Tên sản phẩm
      </span>
    ),
    key: "InvoiceCodeAndProductName",
    dataIndex: "InvoiceCodeAndProductName",
  },
  {
    title: "Thao tác",
    key: "action",
    dataIndex: "action",
    fixed: "right",
    align: "center",
  },
];
/* config table data end */
const TransactionHistory = () => {
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

  const typeTrans = [
    {
      title: "Rút tiền",
      value: (
        <span className="text-base font-medium text-[#31B63B]">Rút tiền</span>
      ),
    },
    {
      title: "Nhận thanh toán",
      value: (
        <span className="text-base font-medium text-[#4FAAC1]">
          Nhận thanh toán
        </span>
      ),
    },
  ];
  const typeStatus = [
    {
      status: -1,
      value: (
        <span className="text-nowrap rounded-full bg-[#FDECEC] px-3 py-1 text-center text-sm font-medium text-[#FF1717]">
          Đã hủy
        </span>
      ),
    },
    {
      status: 0,
      value: (
        <span className="text-nowrap rounded-full bg-[#FDECEC] px-3 py-1 text-center text-sm font-medium text-[#FF1717]">
          Đóng băng
        </span>
      ),
    },
    {
      status: 1,
      value: (
        <span className="text-nowrap rounded-full bg-[#ECFDF3] px-3 py-1 text-center text-sm font-medium text-[#037847]">
          Thành công
        </span>
      ),
    },
    {
      status: 2,
      value: (
        <span className="text-nowrap rounded-full bg-[#ECF0FD] px-3 py-1 text-center text-sm font-medium text-[#4379EE]">
          Đang chờ xử lý
        </span>
      ),
    },
    {
      status: 3,
      value: (
        <span className="text-nowrap rounded-full bg-[#ECFDF3] px-3 py-1 text-center text-sm font-medium text-[#037847]">
          Đã hoàn tiền
        </span>
      ),
    },
    {
      status: 4,
      value: (
        <span className="rounded-full bg-[#FFF2C3] px-3 py-1 text-center text-sm font-medium text-[#DEA410]">
          Tạm giữ
        </span>
      ),
    },
    {
      status: 5,
      value: (
        <span className="text-nowrap rounded-full bg-[#EAEAEA] px-3 py-1 text-center text-sm font-medium text-[#292D32]">
          Chưa xác nhận
        </span>
      ),
    },
  ];

  const handleDataTransHistory = data.map((item) => ({
    ...item,
    info: (
      <div>
        {typeTrans.filter((_) => _.title === item.info.title)[0]?.value}
        <p className="text-nowrap text-base font-normal text-[#525C67]">
          <span>Mã giao dịch:</span> {item.info.code}
        </p>
        <p className="text-nowrap text-base font-normal text-[#525C67]">
          <span>Loại giao dịch:</span> {item.info.type}
        </p>
      </div>
    ),
    status: (
      <div className="text-center">
        {typeStatus.filter((_) => _.status === item.status)[0]?.value}
      </div>
    ),
    card: (
      <div>
        <span className="text-base font-normal text-[#525C67]">
          {item.card.number}
        </span>
        <h2 className="text-base font-normal text-[#525C67]">
          {item.card.title}
        </h2>
      </div>
    ),
    price: <div className="flex justify-end">{typePrice(item.price)}</div>,
    time: (
      <div>
        <div className="text-base font-normal text-[#1B2837]">
          {item.time.detail}
        </div>
        <div className="text-base font-normal text-[#1B2837]">
          {item.time.date}
        </div>
      </div>
    ),
    timeSuccess: (
      <div>
        <div className="text-base font-normal text-[#1B2837]">
          {item.timeSuccess.detail}
        </div>
        <div className="text-base font-normal text-[#1B2837]">
          {item.timeSuccess.date}
        </div>
      </div>
    ),
    InvoiceCodeAndProductName: (
      <div>
        <div className="text-base font-normal text-[#4FAAC1]">
          {item.InvoiceCodeAndProductName.invoiceCode}
        </div>
        <div className="text-base font-normal text-[#667085]">
          {item.InvoiceCodeAndProductName.productName}
        </div>
        <div className="text-base font-normal text-[#667085]">
          {item.InvoiceCodeAndProductName.productCode}
        </div>
      </div>
    ),
    action: (
      <div className="flex justify-center">
        <Dropdown
          menu={{ items: menuAction }}
          trigger={["click"]}
          arrow
          placement="bottomLeft"
        >
          <Image
            alt="option"
            src={"/icons/dots-3.svg"}
            className="cursor-pointer"
            width={18}
            height={18}
          />
        </Dropdown>
      </div>
    ),
  }));
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="shadows-custom flex flex-wrap gap-3 rounded-lg bg-white p-4 ">
          <div className="flex items-center gap-1">
            <span className="text-color-gray-sm">Tổng giao dịch:</span>
            <h2 className="ms-1 text-xl font-semibold text-[#4FAAC1]">261</h2>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-color-gray-sm">Tổng tiền giao dịch:</span>
            <h2 className="ms-1 text-xl font-semibold text-[#31B63B]">
              261.000.000đ
            </h2>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 sm:flex-nowrap">
          <div className="flex w-full items-end gap-3">
            <InputSearch
              title="Tìm kiếm theo mã"
              placeholder="Nhập từ khoá ..."
            />
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
            Lịch sử giao dịch
          </h3>
          <div className="ml-auto flex items-center gap-3">
            <div className="me-3">
              <Dropdown
                menu={{ items }}
                placement="bottom"
                trigger={["click"]}
                arrow
              >
                <div className="flex cursor-pointer items-center">
                  <Image
                    src="/icons/filter-lines.svg"
                    className="h-[18px] w-[18px]"
                    alt="filter-lines"
                    width={500}
                    height={500}
                  />
                  <span className="ms-2 hidden text-sm font-medium text-[#344054] sm:block">
                    Lọc nâng cao
                  </span>
                </div>
              </Dropdown>
            </div>
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

export default TransactionHistory;
