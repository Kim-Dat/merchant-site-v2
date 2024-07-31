import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/ui/buttons/buttonDefault/ButtonDefault";
import Input from "@/components/ui/inputs/input/Input";
import { useStepperStore } from "@/stores/stepper.store";
import React, { useContext } from "react";
import { OnCancelModalContext } from "../../AccountModals";

const DeclareAuthForm = () => {
  const { setStep } = useStepperStore();
  const context = useContext(OnCancelModalContext);
  if (!context) {
    throw new Error("useContext must be used within an OnCancelModalContext");
  }
  const { onCancel } = context;
  return (
    <form className="relative h-full w-full">
      <div className="px-0 md:px-10">
        <h2 className="text-center text-base font-medium text-[#1B2837]">
          Nhập mật khẩu giao dịch
        </h2>
        <div className="mt-5">
          <Input
            isRequired={true}
            label="Mật khẩu giao dịch"
            status="default"
            type="password"
            id="passTrans"
          />
        </div>
        <div className="mt-5">
          <Input
            isRequired={true}
            label="Nhập lại mật khẩu"
            status="default"
            type="password"
            id="confirmPassTrans"
          />
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full justify-center">
        <div className="flex w-[400px] gap-4">
          <ButtonDefault title="Hủy" onClick={onCancel} />
          <ButtonPrimary title={"Tiếp tục"} onClick={() => setStep(2)} />
        </div>
      </div>
    </form>
  );
};

export default DeclareAuthForm;
