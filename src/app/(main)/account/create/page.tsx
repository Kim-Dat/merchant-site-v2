"use client";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/ui/buttons/buttonDefault/ButtonDefault";
import Input from "@/components/ui/inputs/input/Input";
import SelectCustom from "@/components/ui/select/SelectCustom";
import { Checkbox, Modal } from "antd";
import Image from "next/image";
import React, { useState } from "react";
import Select from "react-select";
import Lottie from "lottie-react";
import successAnimation from "@/animation/icons/success-animation.json";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
  { value: "chocolate1", label: "Chocolate1" },
  { value: "strawberry1", label: "Strawberry1" },
  { value: "vanilla1", label: "Vanilla1" },
];
const AccountCreatePage = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [openModalCreateAccount, setOpenModalChangePhoneCreateAccount] =
    useState<boolean>(false);

  const handleChange = (selected: any) => {
    setSelectedOptions(selected);
  };
  const option = [
    { value: "1", label: "lethiminh1@htpgroup.com" },
    { value: "2", label: "lethiminh2@htpgroup.com" },
    { value: "3", label: "lethiminh3@htpgroup.com" },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>
        <div className="shadows-custom rounded-lg bg-white px-6 py-8">
          <h2 className="text-color-primary-xl-medium text-center">
            Thêm mới tài khoản truy cập
          </h2>
          <div className="mt-6">
            <form className="mx-auto grid max-w-screen-lg grid-cols-1 gap-5 md:grid-cols-2">
              <div className="flex flex-col gap-5">
                <Input
                  label="Nhập chức vụ..."
                  id="role"
                  isRequired={false}
                  status="default"
                  type="text"
                />
                <SelectCustom
                  option={option}
                  label={"Tên truy cập"}
                  isRequired={true}
                />
                <Input
                  label="Mật khẩu đăng nhập"
                  id="pass"
                  isRequired={true}
                  status="default"
                  type="password"
                />
                <Input
                  label="Số điện thoại"
                  id="pass"
                  isRequired={false}
                  status="default"
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-5">
                <Input
                  label="Họ và tên"
                  id="name"
                  isRequired={true}
                  status="default"
                  type="text"
                />
                <Input
                  label="Địa chỉ email"
                  id="emailHelp"
                  isRequired={false}
                  status="default"
                  type="email"
                />
                <Input
                  label="Nhập lại mật khẩu"
                  id="confPass"
                  isRequired={false}
                  status="default"
                  type="password"
                />
                <Select
                  isMulti
                  name="colors"
                  placeholder={
                    <p className="text-base font-normal text-[#757D85]">
                      Quyền Merchant <span className="text-red">*</span>
                    </p>
                  }
                  options={options}
                  onChange={handleChange}
                  className="basic-multi-select caret-[#4faac1] "
                  classNamePrefix="select"
                />
              </div>
            </form>
          </div>
        </div>
        <h2 className="text-color-primary-xl-medium mb-6 mt-8 text-center">
          Chọn quyền truy cập <span className="text-red">*</span>
        </h2>
        <div className="shadows-custom rounded-lg bg-white px-6 py-8">
          <div className="flex justify-between">
            <h3 className="text-base font-medium text-[#000000]">
              Quản lý giao dịch
            </h3>
            <Image
              src="/icons/Arrow.png"
              alt="Picture of the author"
              className="h-[16px] w-[16px]"
              width={500}
              height={500}
            />
          </div>

          <div className="my-4 ms-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-2">
                <Checkbox id="transactionHistory" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="transactionHistory"
                >
                  Lịch sử giao dịch
                </label>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Checkbox id="lookupHistory" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="lookupHistory"
                >
                  Lịch sử tra cứu TKNH
                </label>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Checkbox id="transactionHistoryFail" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="transactionHistoryFail"
                >
                  Lịch sử giao dịch thất bại
                </label>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Checkbox id="requestPayment" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="requestPayment"
                >
                  Yêu cầu thanh toán
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="shadows-custom mt-5 rounded-lg bg-white px-6 py-8">
          <div className="flex justify-between">
            <h3 className="text-base font-medium text-[#000000]">
              Quản lý dịch vụ
            </h3>
            <Image
              src="/icons/Arrow.png"
              alt="Picture of the author"
              className="h-[16px] w-[16px]"
              width={500}
              height={500}
            />
          </div>
          <div className="my-4 ms-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-2">
                <Checkbox id="serviceVA" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="serviceVA"
                >
                  Dịch vụ VA
                </label>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Checkbox id="transfer247Batch" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="transfer247Batch"
                >
                  Chi hộ 247 theo lô
                </label>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Checkbox id="withdraw " />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="withdraw "
                >
                  Rút tiền
                </label>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Checkbox id="transfer247" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="transfer247"
                >
                  Chi hộ 247
                </label>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Checkbox id="accountLookupNH" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="accountLookupNH"
                >
                  Tra cứu tài khoản NH
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="shadows-custom mt-5 rounded-lg bg-white px-6 py-8">
          <div className="flex justify-between">
            <h3 className="text-base font-medium text-[#000000]">
              Tích hợp thanh toán
            </h3>
            <Image
              src="/icons/Arrow.png"
              alt="Picture of the author"
              className="h-[16px] w-[16px]"
              width={500}
              height={500}
            />
          </div>
          <div className="my-4 ms-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-2">
                <Checkbox id="listMerchant" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="listMerchant"
                >
                  Danh sách Merchant
                </label>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Checkbox id="singUpPayment" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="singUpPayment"
                >
                  Đăng ký tích hợp thanh toán
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="shadows-custom mt-5 rounded-lg bg-white px-6 py-8">
          <div className="flex justify-between">
            <h3 className="text-base font-medium text-[#000000]">
              Quản lý dịch vụ
            </h3>
            <Image
              src="/icons/Arrow.png"
              alt="Picture of the author"
              className="h-[16px] w-[16px]"
              width={500}
              height={500}
            />
          </div>
          <div className="my-4 ms-1 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <div className="flex items-center gap-2">
                <Checkbox id="createAccountVA" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="createAccountVA"
                >
                  Thêm mới tài khoản VA
                </label>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Checkbox id="cancelWithdrawal" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="cancelWithdrawal"
                >
                  Hủy giao dịch rút
                </label>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Checkbox id="transactionDetail" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="transactionDetail"
                >
                  Chi tiết giao dịch
                </label>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Checkbox id="updateInfoTransaction" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="updateInfoTransaction"
                >
                  Cập nhật thông tin tích hợp thanh toán
                </label>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Checkbox id="confirmWithdrawal" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="confirmWithdrawal"
                >
                  Xác nhận yêu cầu rút tiền
                </label>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <Checkbox id="updateInfoAccountVA" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="updateInfoAccountVA"
                >
                  Chỉnh sửa thông tin tài khoản VA
                </label>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Checkbox id="accountChangeHistoryVA" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="accountChangeHistoryVA"
                >
                  Lịch sử thay đổi tài khoản VA
                </label>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Checkbox id="infos" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="infos"
                >
                  Thông tin chung
                </label>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Checkbox id="requestRefund" />
                <label
                  className="text-sm font-normal text-[#111A2C]"
                  htmlFor="requestRefund"
                >
                  Yêu cầu hoàn
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className="shadows-custom mt-5 flex justify-center rounded-lg bg-white p-3">
          <div className="flex w-[400px] gap-4">
            <ButtonDefault title="Hủy" href="/account" />
            <ButtonPrimary
              title={"Thêm mới"}
              onClick={() => setIsModalOpen(true)}
            />
          </div>
        </div>
      </div>
      <Modal
        title={null}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        closable={false}
        footer={[
          <div className="mb-2 flex justify-center">
            <div className="w-[150px]">
              <ButtonPrimary
                onClick={() => setIsModalOpen(false)}
                title={"Hoàn tất"}
              />
            </div>
          </div>,
        ]}
      >
        <div className="flex flex-col items-center gap-2 pt-6">
          <div className="mt-2">
            <Lottie
              animationData={successAnimation}
              style={{ height: 80, width: 80 }}
              loop={false}
            />
          </div>
          <div className="mb-4 mt-1 text-center">
            <h2 className="text-xl font-medium text-[#1ec27d]">
              Thêm mới thành công!
            </h2>
            <p className="text-color-gray-sm mt-1">
              Bạn vừa thêm thành công tài khoản subuser
            </p>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default AccountCreatePage;
