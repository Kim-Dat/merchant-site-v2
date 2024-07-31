import { Stepper } from "@/components/ui/stepper/Stepper";
import React from "react";
import { ChangeAccountForm } from "./change-account-form/ChangeAccountForm";

const AccountChangePage = () => {
  return (
    <div className="shadows-custom rounded-lg bg-white p-6">
      <h2 className="text-color-primary-xl-medium text-center">
        Chuyển sang tài khoản Doanh nghiệp
      </h2>

      <Stepper
        title1="Khai báo thông tin doanh nghiệp"
        title2="Xác minh thông tin"
        title3="Hoàn tất"
      />
      <ChangeAccountForm />
    </div>
  );
};

export default AccountChangePage;
