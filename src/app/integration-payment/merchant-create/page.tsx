import Input from "@/components/ui/inputs/input/Input";
import SelectCustom from "@/components/ui/select/SelectCustom";
import LogoUpload from "@/components/ui/uploads/logo-upload/LogoUpload";
import React from "react";

const MerchantCreate = () => {
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
    <div className="shadows-custom mx-auto max-w-screen-md rounded-xl bg-white p-8">
      <h2 className="text-color-primary-xl-medium text-center">
        Đăng ký tích hợp thanh toán
      </h2>
      <form action="">
        <div>
          <Input
            id="name"
            isRequired={false}
            label="Loại hình dịch vụ"
            status="default"
            type="text"
          />
        </div>
        <div>
          <SelectCustom
            isRequired={true}
            label="Loại hình dịch vụ"
            option={typeServices}
          />
        </div>
        <div>
          <LogoUpload />
          <span className="text-sm font-normal text-red">
            Logo sẽ hiển thị tại trang checkout của HPay
          </span>
        </div>
        <div>
          <Input
            isRequired={true}
            id="address"
            label="Địa chỉ Website"
            status="default"
            type="text"
          />
        </div>
        <div>
          <Input
            isRequired={true}
            id="addressService"
            label="Địa chỉ Website service"
            status="default"
            type="text"
          />
        </div>
        <div>
          <Input
            isRequired={true}
            id="addressCallback"
            label="Địa chỉ callback"
            status="default"
            type="text"
          />
        </div>
      </form>
    </div>
  );
};

export default MerchantCreate;
