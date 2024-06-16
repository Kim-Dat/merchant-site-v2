import ButtonPrimary from "@/components/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/buttonDefault/ButtonDefault";
import Input from "@/components/input/Input";
import { useStepperStore } from "@/stores/stepper.store";
import React, { useContext } from "react";
import { isCloseModalChangeAuthContext } from "../../page";

const DeclarePasswordTransForm = () => {
  const { setStep } = useStepperStore();
  const context = useContext(isCloseModalChangeAuthContext);

  if (!context) {
    throw new Error(
      "useContext must be used within an isCloseModalChangeAuthContext",
    );
  }
  const { setOpenModalChangeAuth } = context;
  return (
    <form className="mt-6 w-full px-0 md:px-15">
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
      <div className="mt-37.5 flex justify-center">
        <div className="flex w-[400px] gap-4">
          <ButtonDefault
            title="Hủy"
            onClick={() => setOpenModalChangeAuth(false)}
          />
          <ButtonPrimary title={"Tiếp tục"} onClick={() => setStep(2)} />
        </div>
      </div>
    </form>
  );
};

export default DeclarePasswordTransForm;
