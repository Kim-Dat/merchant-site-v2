"use client";
import { Stepper } from "@/components/stepper/Stepper";
import React from "react";
import ChangePhoneForm from "./change-phone-form/ChangePhoneForm";

const ChangePhone = () => {
  return (
    <div className="bg-white">
      <h2 className="text-color-primary-xl-medium text-center">
        Thay đổi số điện thoại
      </h2>

      <Stepper
        title1="Khai báo SĐT mới"
        title2="Xác minh SĐT mới"
        title3="Xác thực thay đổi & hoàn tất"
      />

      <ChangePhoneForm />
    </div>
  );
};

export default ChangePhone;
