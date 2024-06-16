import ButtonPrimary from "@/components/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/buttonDefault/ButtonDefault";
import Input from "@/components/input/Input";
import { useStepperStore } from "@/stores/stepper.store";
import React from "react";

const ValidateOTPForm = () => {
    const { setStep } = useStepperStore();
  return (
    <div className="mt-10">
      <h3 className="text-center text-sm font-normal text-[#525C67] ">
        Một mã OTP vừa được gửi đến{" "}
        <span className="font-semibold text-[#1B2837]"> số điện thoại</span> của
        bạn: <br />
        <span className="font-semibold text-[#1B2837]">0343 402 978</span>
      </h3>

      <form className="mt-5 px-3 xl:px-80">
        <Input
          status="default"
          isRequired={true}
          label="Mã OTP"
          type="text"
          id="otp"
        />
        <div className="mt-10 flex justify-center">
          <div className="flex w-[400px] gap-4">
            <ButtonDefault title="Hủy" onClick={() => setStep(2)} />
            <ButtonPrimary title={"Tiếp tục"} onClick={() => setStep(3)} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ValidateOTPForm;
