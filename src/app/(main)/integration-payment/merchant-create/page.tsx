"use client";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/ui/buttons/buttonDefault/ButtonDefault";
import Input from "@/components/ui/inputs/input/Input";
import SelectCustom from "@/components/ui/select/SelectCustom";
import LogoUpload from "@/components/ui/uploads/logo-upload/LogoUpload";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const MerchantCreate = () => {
  const [updatePass, setUpdatePass] = useState<boolean>(false);
  const [rotate, setRotate] = useState<boolean>(false);
  const handleClick = () => {
    setRotate(true);
    setTimeout(() => {
      setRotate(false);
    }, 1000); // Duration of the rotation animation
  };
  const typeServices = [
    {
      value: "hhvc",
      label: "Hàng hóa vật chất",
    },
    {
      value: "vt",
      label: "Vật tư",
    },
    {
      value: "dcgd",
      label: "Dụng cụ gia đình",
    },
  ];
  return (
    <div className="shadows-custom mx-auto max-w-screen-sm rounded-xl bg-white p-8">
      <h2 className="text-color-primary-xl-medium text-center">
        Đăng ký tích hợp thanh toán
      </h2>
      <form className="mt-5">
        <div>
          <Input
            id="name"
            isRequired={false}
            label="Loại hình dịch vụ"
            status="default"
            type="text"
          />
        </div>
        <div className="mt-4">
          <SelectCustom
            isRequired={true}
            label="Loại hình dịch vụ"
            option={typeServices}
          />
        </div>
        <div className="mt-4">
          <LogoUpload />
          <p className="mt-1 text-sm font-normal text-red">
            Logo sẽ hiển thị tại trang checkout của HPay
          </p>
        </div>
        <div className="mt-4">
          <Input
            isRequired={true}
            id="address"
            label="Địa chỉ Website"
            status="default"
            type="text"
          />
        </div>
        <div className="mt-4">
          <Input
            isRequired={true}
            id="addressService"
            label="Địa chỉ Website service"
            status="default"
            type="text"
          />
        </div>
        <div className="mt-4">
          <Input
            isRequired={true}
            id="addressCallback"
            label="Địa chỉ callback"
            status="default"
            type="text"
          />
        </div>
        <div className="mt-4">
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex w-max flex-wrap items-center gap-1 rounded-xl bg-gray-100 px-4 py-3 text-sm">
              <span className="text-nowrap">Mật khẩu:</span>
              <p className="text-selection font-medium text-[#111A2C]">
                ba8e139da45551d05320363557728acd
              </p>
            </div>
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-100">
              <button type="button" onClick={handleClick}>
                <Image
                  src={"/icons/Update.svg"}
                  className={`${rotate ? "rotate-360" : ""}`}
                  alt={"update"}
                  width={25}
                  height={25}
                />
              </button>
            </div>
          </div>
          <p className="mt-2 text-sm font-normal text-red">
            Lưu ý: Bạn hãy <span className="font-semibold">LƯU </span>và{" "}
            <span className="font-semibold">GHI NHỚ </span> dãy ký tự trên để sử
            dụng làm mật khẩu kết nối khi tích hợp
          </p>
          <p className="mt-10 text-sm font-normal text-[#111A2C]">
            Bằng cách ấn vào nút{" "}
            <Link href={"#"} className="text-[#4FAAC1]">
              Đăng ký
            </Link>
            , tôi đã đọc kỹ và cam kết tuân thủ{" "}
            <Link href={"#"} className="text-[#4FAAC1]">
              Thỏa thuận người dùng
            </Link>{" "}
            của HPay!
          </p>
        </div>
        <div className="mt-15 flex justify-center">
          <div className="flex w-[400px] gap-4">
            <ButtonDefault title="Hủy" onClick={() => {}} />
            <ButtonPrimary title={"Đăng ký"} onClick={() => {}} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default MerchantCreate;
