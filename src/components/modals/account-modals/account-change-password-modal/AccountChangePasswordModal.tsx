import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/ui/buttons/buttonDefault/ButtonDefault";
import Input from "@/components/ui/inputs/input/Input";
import React from "react";

const AccountChangePasswordModal = () => {
  return (
    <div className="mt-8 text-center">
      <h2 className="text-color-black-2xl ">Thay đổi mật khẩu subuser</h2>
      <p className="mt-5 text-base text-[#757D85]">
        Bạn đang thay đổi mật khẩu cho subuser
        <span className="font-semibold text-[#1B2837]">minhminh01</span>, vui
        lòng nhập thông tin phía dưới
      </p>
      <form className="px-0 md:px-10">
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
            <ButtonDefault title="Hủy" onClick={() => {}} />
            <ButtonPrimary title={"Tiếp tục"} onClick={() => {}} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AccountChangePasswordModal;
