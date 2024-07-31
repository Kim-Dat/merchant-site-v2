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
import ButtonAdd from "@/components/ui/buttons/button-add/ButtonAdd";

// export const metadata: Metadata = {
//   title: "Transaction History",
//   description: "Transaction History Page",
// };
const itemsp = Array.from({ length: 100 }, (_, i) => `Item ${i + 1}`);

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
  idConnect: string;
  name: string;
  address: string;
  status: any;
}

const data: DataType[] = [
  {
    key: "1",
    idConnect: "942342342",
    name: "Bán sách",
    address: "hpostailoc.com.vn",
    status: 0,
  },
  {
    key: "2",
    idConnect: "942342342",
    name: "Bán sách",
    address: "hpostailoc.com.vn",
    status: 1,
  },
  {
    key: "3",
    idConnect: "942342342",
    name: "Bán sách",
    address: "hpostailoc.com.vn",
    status: 2,
  },
];

const columns: TableProps<DataType>["columns"] = [
  {
    title: "ID kết nối",
    dataIndex: "idConnect",
    key: "idConnect",
  },
  {
    title: "Mật khẩu kết nối",
    dataIndex: "passConnect",
    key: "passConnect",
  },
  {
    title: "Tên website/Ứng dụng",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Địa chỉ website",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
    align: "center",
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
const MerChantList = () => {
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

  const typeStatus = [
    {
      status: 0,
      value: (
        <span className="text-nowrap rounded-full bg-[#FDECEC] px-3 py-1 text-center text-sm font-medium text-[#FF1717]">
          Không hoạt động
        </span>
      ),
    },
    {
      status: 1,
      value: (
        <span className="text-nowrap rounded-full bg-[#ECFDF3] px-3 py-1 text-center text-sm font-medium text-[#037847]">
          Đã xác thực
        </span>
      ),
    },
    {
      status: 2,
      value: (
        <span className="rounded-full bg-[#FFF2C3] px-3 py-1 text-center text-sm font-medium text-[#DEA410]">
          Chờ xác thực
        </span>
      ),
    },
  ];

  const handleDataMerchantList = data.map((item) => ({
    ...item,
    idConnect: (
      <span className="text-base font-normal text-[#525C67]">
        {item.idConnect}
      </span>
    ),
    passConnect: (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src={"/icons/Eye.svg"} alt="eye" width={18} height={18} />
          <span className="text-base font-normal text-[#4FAAC1]">Xem</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <Image src={"/icons/Reset.svg"} alt="eye" width={18} height={18} />
          <span className="text-base font-normal text-[#FF1717]">Reset</span>
        </div>
      </div>
    ),
    name: (
      <span className="text-base font-normal text-[#525C67]">{item.name}</span>
    ),
    address: (
      <span className="text-base font-normal text-[#525C67]">{item.address}</span>
    ),
    status: (
      <div className="text-center">
        {typeStatus.filter((_) => _.status === item.status)[0]?.value}
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
            <span className="text-color-gray-sm">Tổng Merchant:</span>
            <h2 className="ms-1 text-xl font-semibold text-[#4FAAC1]">261</h2>
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
            Danh sách Merchant
          </h3>
          <div className="ml-auto">
            <ButtonAdd title="Đăng ký tích hợp" />
          </div>
        </div>
        <hr />
        <div className="overflow-x-auto">
          <Table
            columns={columns}
            dataSource={handleDataMerchantList}
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

export default MerChantList;
