"use client";
import DefaultLayout from "@/components/layout/DefaultLayout";
import ButtonAdd from "@/components/button-add/ButtonAdd";
import ButtonExcel from "@/components/button-excel/ButtonExcel";
import ButtonPrimary from "@/components/button-primary/ButtonPrimary";
import { createContext, useState, Dispatch, SetStateAction } from "react";
import ChangePhone from "./change-phone/ChangePhone";
import ChangeAuth from "./change-auth/ChangeAuth";
import Image from "next/image";
import ButtonDelete from "@/components/button-delete/ButtonDelete";
import ButtonDefault from "@/components/buttonDefault/ButtonDefault";
import Input from "@/components/input/Input";
import Pagination from "@/components/pagination/Pagination";
import { Table, Dropdown, MenuProps, TableProps, Tooltip, Modal } from "antd";

interface IsCloseModalPhoneContextProps {
  setOpenModalChangePhone: Dispatch<SetStateAction<boolean>>;
}
interface IsCloseModalChangeAuthContextProps {
  setOpenModalChangeAuth: Dispatch<SetStateAction<boolean>>;
}

export const isCloseModalPhoneContext = createContext<
  IsCloseModalPhoneContextProps | undefined
>(undefined);

export const isCloseModalChangeAuthContext = createContext<
  IsCloseModalChangeAuthContextProps | undefined
>(undefined);
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
  action: any;
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
    status: 1,
    action: "111",
  },
  {
    key: "2",
    name: "Minhminh01",
    info: "Phó giám đốc",
    status: 0,
    action: "111",
  },
  {
    key: "3",
    name: "Minhminh01",
    info: "Phó giám đốc",
    status: 2,
    action: "111",
  },
];

const AccountPage = () => {
  const [openModalChangePhone, setOpenModalChangePhone] = useState(false);
  const [openModalChangeAuth, setOpenModalChangeAuth] = useState(false);
  const [openModalDeleteAccount, setOpenModalDeleteAccount] = useState(false);
  const [openModalBlockAccount, setOpenModalBlockAccount] = useState(false);
  const [openModalChangePassSubUser, setOpenModalChangePassSubUser] =
    useState(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  const accountData = [
    {
      name: "Minhminh01",
      info: "Phó giám đốc",
      status: 1,
    },
    {
      name: "Minhminh01",
      info: "Phó giám đốc",
      status: 2,
    },
    {
      name: "Minhminh01",
      info: "Phó giám đốc",
      status: 0,
    },
  ];

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
        <div className="flex flex-wrap gap-3  ">
          <Tooltip title="Khóa tài khoản">
            <button
              className="rounded-lg bg-gray-300 p-1.5 hover:bg-gray-200"
              onClick={() => setOpenModalBlockAccount(true)}
            >
              <Image
                src="/icons/Password.svg"
                alt="Password"
                className="h-[20px] w-[20px]"
                width={500}
                height={500}
              />
            </button>
          </Tooltip>
          <Tooltip title="Chỉnh sửa tài khoản">
            <button className="rounded-lg bg-gray-300 p-1.5 hover:bg-gray-200">
              <Image
                src="/icons/PencilSimple.svg"
                alt="PencilSimple"
                className="h-5 w-5"
                width={500}
                height={500}
              />
            </button>
          </Tooltip>
          <Tooltip title="Xóa tài khoản">
            <button
              className="rounded-lg bg-gray-300 p-1.5 hover:bg-gray-200"
              onClick={() => setOpenModalDeleteAccount(true)}
            >
              <Image
                src="/icons/Delete.svg"
                alt="Delete"
                className="h-5 w-5"
                width={500}
                height={500}
              />
            </button>
          </Tooltip>
        </div>
        <button
          className="text-color-primary-sm ms-4 mt-2"
          onClick={() => setOpenModalChangePassSubUser(true)}
        >
          Đổi mật khẩu
        </button>
      </div>
    ),
  }));
  return (
    <DefaultLayout>
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
                  onClick={() => setOpenModalChangePhone(true)}
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
                  onClick={() => setOpenModalChangeAuth(true)}
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

      {/* modal change phone start  */}
      <Modal
        title={null}
        open={openModalChangePhone}
        onOk={() => setOpenModalChangePhone(false)}
        onCancel={() => setOpenModalChangePhone(false)}
        closable={false}
        footer={[null]}
      >
        <isCloseModalPhoneContext.Provider value={{ setOpenModalChangePhone }}>
          <ChangePhone />
        </isCloseModalPhoneContext.Provider>
      </Modal>
      {/* modal change phone end  */}

      {/* modal change auth start  */}
      <Modal
        title={null}
        open={openModalChangeAuth}
        onOk={() => setOpenModalChangeAuth(false)}
        onCancel={() => setOpenModalChangeAuth(false)}
        closable={false}
        footer={[null]}
      >
        <isCloseModalChangeAuthContext.Provider
          value={{ setOpenModalChangeAuth }}
        >
          <ChangeAuth />
        </isCloseModalChangeAuthContext.Provider>
      </Modal>
      {/* modal change auth end  */}

      {/* modal delete account start */}
      <Modal
        title={null}
        open={openModalDeleteAccount}
        onOk={() => setOpenModalDeleteAccount(false)}
        onCancel={() => setOpenModalDeleteAccount(false)}
        closable={false}
        footer={[null]}
      >
        <div className="px-0 text-center md:px-15">
          <h2 className="text-color-black-2xl">Xóa tài khoản</h2>
          <p className="text-color-gray-sm mt-5">
            Bạn có chắc chắn muốn xóa tài khoản{" "}
            <span className="font-semibold text-[#1B2837]">minhminh01</span> ?
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <ButtonDefault
              onClick={() => setOpenModalDeleteAccount(false)}
              title="Đóng"
            />

            <ButtonDelete
              title="Đồng ý"
              onClick={() => setOpenModalDeleteAccount(false)}
            />
          </div>
        </div>
      </Modal>
      {/* modal delete account end */}

      {/* modal change pass subUser start */}
      <Modal
        title={null}
        open={openModalChangePassSubUser}
        onOk={() => setOpenModalChangePassSubUser(false)}
        onCancel={() => setOpenModalChangePassSubUser(false)}
        footer={[null]}
      >
        <div className="mt-8 text-center">
          <h2 className="text-color-black-2xl ">Thay đổi mật khẩu subuser</h2>
          <p className="text-color-gray-sm mt-5">
            Bạn đang thay đổi mật khẩu cho subuser
            <span className="font-semibold text-[#1B2837]">minhminh01</span>,
            vui lòng nhập thông tin phía dưới
          </p>
          <form className="px-0 md:px-15">
            <div className="mt-5">
              <Input
                id="newPass"
                isRequired={true}
                label="Mật khẩu mới"
                status="default"
                type="password"
              />
            </div>
            <div className="mt-5">
              <Input
                id="confirmPass"
                isRequired={true}
                label="Nhập lai mật khẩu mới"
                status="default"
                type="password"
              />
            </div>
            <div className="mt-14 flex justify-center">
              <div className="flex w-[400px] gap-4">
                <ButtonDefault
                  title="Hủy"
                  onClick={() => setOpenModalChangePassSubUser(false)}
                />
                <ButtonPrimary
                  title={"Tiếp tục"}
                  onClick={() => setOpenModalChangePassSubUser(false)}
                />
              </div>
            </div>
          </form>
        </div>
      </Modal>
      {/* modal change pass subUser end */}

      {/* modal block account start */}
      <Modal
        title={null}
        open={openModalBlockAccount}
        onOk={() => setOpenModalBlockAccount(false)}
        onCancel={() => setOpenModalBlockAccount(false)}
        closable={false}
        footer={[null]}
      >
        <div className="px-0 text-center md:px-15">
          <h2 className="text-color-black-2xl">Khóa tài khoản</h2>
          <p className="text-color-gray-sm mt-5">
            Bạn có chắc chắn muốn khóa tài khoản{" "}
            <span className="font-semibold text-[#1B2837]">minhminh01</span> ?
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <ButtonDefault
              onClick={() => setOpenModalBlockAccount(false)}
              title="Đóng"
            />

            <ButtonDelete
              title="Đồng ý"
              onClick={() => setOpenModalBlockAccount(false)}
            />
          </div>
        </div>
      </Modal>
      {/* modal block account end */}
    </DefaultLayout>
  );
};

export default AccountPage;
