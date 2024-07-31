"use client";
import ButtonAdd from "@/components/ui/buttons/button-add/ButtonAdd";
import ButtonExcel from "@/components/ui/buttons/button-excel/ButtonExcel";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import { useState } from "react";
import Image from "next/image";
import Pagination from "@/components/ui/pagination/Pagination";
import { Table, Dropdown, MenuProps, TableProps } from "antd";
import AccountModals from "@/components/modals/account-modals/AccountModals";
import { viewMode } from "@/types/account";

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
interface DataType {
  key: string;
  name: string;
  info: string;
  status: number;
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Tên truy cập",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Thông tin",
    dataIndex: "info",
    key: "info",
  },
  {
    title: "Trạng thái",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Thao tác",
    key: "action",
    dataIndex: "action",
  },
];

const data: DataType[] = [
  {
    key: "1",
    name: "Minhminh01",
    info: "Phó giám đốc",
    status: 1
  },
  {
    key: "2",
    name: "Minhminh01",
    info: "Phó giám đốc",
    status: 0,

  },
  {
    key: "3",
    name: "Minhminh01",
    info: "Phó giám đốc",
    status: 2,
  },
];

const AccountPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [mode, setMode] = useState("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  const typeStatus = [
    {
      status: 0,
      value: (
        <span className="tags-status  bg-[#FFD1D1] text-[#E01C26]">
          Tạm khóa
        </span>
      ),
    },
    {
      status: 1,
      value: (
        <span className="tags-status bg-[#ECFDF3]  text-[#037847]">
          Hoạt động
        </span>
      ),
    },
    {
      status: 2,
      value: (
        <span className="tags-status bg-[#FFF0CB]  text-[#DFA100]">
          Mới tạo
        </span>
      ),
    },
  ];

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (itemsp: number) => {
    setItemsPerPage(itemsp);
    setCurrentPage(1);
  };

  const handleModal = (action: viewMode, record?: any) => {
    setOpenModal(true);
    /*  if (record) setSelectedRecord(record);
    else setSelectedRecord(undefined); */
    setMode(action);
  };

  const menuAction: MenuProps["items"] = [
    {
      label: (
        <div
          className="flex items-center justify-between gap-3"
          onClick={() => handleModal(viewMode.lock)}
        >
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
        <div
          className="flex items-center justify-between gap-3"
          onClick={() => handleModal(viewMode.update)}
        >
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
        <div
          className="flex items-center justify-between gap-3"
          onClick={() => handleModal(viewMode.delete)}
        >
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
        <div
          className="flex items-center justify-between gap-3"
          onClick={() => handleModal(viewMode.changePassword)}
        >
          <span className="text-sm font-medium text-[#1B2837]">
            Đổi mật khẩu
          </span>
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

  const handleDataAccount = data.map((item) => ({
    ...item,
    name: (
      <span className="text-sm font-medium text-[#101828]">{item.name}</span>
    ),

    info: (
      <span className="text-sm font-normal text-[#667085]">{item.info}</span>
    ),
    status: typeStatus.filter((tst) => tst.status === item.status)[0]?.value,
    action: (
      <div>
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
      <div>
        <div className="shadows-custom rounded-lg bg-white px-6 py-4">
          <h2 className="text-2xl font-semibold text-[#202224]">
            Thông tin cá nhân
          </h2>
          <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
            <div className="flex rounded-2xl bg-gradient-to-r from-[#79bbc62d] to-[#ADDCE325] p-3">
              <div className="h-[56px] w-[56px] ">
                <ButtonPrimary
                  title={
                    <div className="flex flex-col items-center">
                      <img src="icons/edit.png" alt="edit" />
                      <span className="mt-1 text-sm font-medium">Sửa</span>
                    </div>
                  }
                  onClick={() => handleModal(viewMode.changePhone)}
                />
              </div>
              <div className="ms-3 h-full">
                <h3 className="text-color-primary-sm-medium my-1">
                  Số điện thoại
                </h3>
                <span className="text-color-black-base-normal">
                  0374 234 530
                </span>
              </div>
            </div>
            <div className="flex rounded-2xl bg-gradient-to-r from-[#96C9D12D] to-[#ADDCE325] p-3">
              <div className="ms-2 h-full">
                <h3 className="text-color-primary-sm-medium my-1">Email</h3>
                <span className="text-color-black-base-normal">
                  longkudo2209@gmail.com
                </span>
              </div>
            </div>
            <div className="relative flex rounded-2xl bg-gradient-to-r from-[#96C9D12D] to-[#ADDCE325] p-3">
              <div className="ms-2 h-full">
                <h3 className="text-color-primary-sm-medium my-1">
                  Loại tài khoản
                </h3>
                <span className="text-color-black-base-normal">
                  Tài khoản ví cá nhân
                </span>
              </div>
              <div className="absolute right-2 top-2 select-none rounded-full bg-gradient-to-r from-[#76DCFF] to-[#FF89E766] px-4 py-1">
                <p className="text-xs font-medium text-[#FFFFFF]">
                  Đã xác thực
                </p>
              </div>
            </div>
            <div className="flex rounded-2xl bg-gradient-to-r from-[#96C9D12D] to-[#ADDCE325] p-3">
              <div className="h-[56px] w-[56px] ">
                <ButtonPrimary
                  title={
                    <div className="flex flex-col items-center">
                      <img src="icons/edit.png" alt="edit" />
                      <span className="mt-1 text-sm font-medium">Sửa</span>
                    </div>
                  }
                  onClick={() => handleModal(viewMode.changeAuth)}
                />
              </div>
              <div className="ms-3 h-full">
                <h3 className="text-color-primary-sm-medium my-1">
                  Hình thức xác thực
                </h3>
                <span className="text-color-black-base-normal">
                  Tin nhắn điện thoại
                </span>
              </div>
            </div>
            <div className="flex rounded-2xl bg-gradient-to-r from-[#96C9D12D] to-[#ADDCE325] p-3">
              <div className="ms-2 h-full">
                <h3 className="text-color-primary-sm-medium my-1">Địa chỉ</h3>
                <span className="text-color-black-base-normal">
                  Hà Nội - Cầu Giấy
                </span>
              </div>
            </div>
            <div className="flex rounded-2xl bg-gradient-to-r from-[#96C9D12D] to-[#ADDCE325] p-3">
              <div className="h-[56px] w-[56px] ">
                <ButtonPrimary
                  href="/account/change"
                  title={
                    <div className="flex flex-col items-center">
                      <img src="icons/TelegramLogo.png" alt="edit" />
                      <span className="mt-1 text-sm font-medium">Gửi</span>
                    </div>
                  }
                />
              </div>
              <div className="ms-3 h-full">
                <span className="text-color-black-base-normal mt-1 block">
                  Đổi sang tài khoản doanh <br /> nghiệp
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="shadows-custom mt-3 overflow-hidden rounded-lg bg-white">
          <div className="flex flex-wrap items-center justify-between gap-4 px-5 py-3">
            <h3 className="text-lg font-medium text-[#101828]">
              Danh sách tài khoản Subuser
            </h3>
            <div className="flex items-center gap-3">
              <div className="me-3">
                <Dropdown
                  menu={{ items }}
                  trigger={["click"]}
                  placement="bottom"
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
                    <span className="ms-2 text-sm font-medium text-[#344054]">
                      Lọc nâng cao
                    </span>
                  </div>
                </Dropdown>
              </div>
              <div>
                <ButtonExcel />
              </div>
              <div>
                <ButtonAdd href="/account/create" />
              </div>
            </div>
          </div>
          <hr />
          <div className="overflow-x-auto">
            <Table
              columns={columns}
              dataSource={handleDataAccount}
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
      {
        <AccountModals
          mode={mode}
          onCancel={() => setOpenModal(false)}
          refetch={() => {}}
          open={openModal}
        />
      }
    </div>
  );
};

export default AccountPage;
