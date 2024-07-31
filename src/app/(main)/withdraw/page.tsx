import { Stepper } from "@/components/ui/stepper/Stepper";
import React from "react";
import WithdrawStepsForm from "./withdraw-steps-form/WithdrawStepsForm";
/* import { ChangeAccountForm } from "./change-account-form/ChangeAccountForm"; */

const Withdraw = () => {
  return (
    <div className="shadows-custom rounded-lg bg-white p-6">
      <h2 className="text-center text-2xl font-semibold text-[#111A2C]">
        Rút tiền
      </h2>
      <div className="mx-auto max-w-screen-md">
        <Stepper
          title1="Chọn hình thức rút tiền"
          title2="Xác minh thông tin"
          title3="Hoàn tất"
        />
      </div>
      <WithdrawStepsForm />
    </div>
  );
};

export default Withdraw;
