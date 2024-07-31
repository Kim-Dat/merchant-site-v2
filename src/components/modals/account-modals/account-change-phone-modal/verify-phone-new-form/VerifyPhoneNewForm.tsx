import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/ui/buttons/buttonDefault/ButtonDefault";
import Input from "@/components/ui/inputs/input/Input";
import { useStepperStore } from "@/stores/stepper.store";
import React from "react";

const VerifyPhoneNewForm = () => {
  const { setStep } = useStepperStore();
  return (
    <form className="relative h-full w-full">
      <h2 className="text-color-gray-sm mt-8 text-center">
        Một mã OTP vừa được gửi đến{" "}
        <span className="font-semibold text-[#1B2837]">số điện thoại mới</span>{" "}
        của bạn:{" "}
        <span className="font-semibold text-[#1B2837]">0343 402 978</span>
      </h2>
      <div className="mt-5 px-3 md:px-25">
        <Input
          isRequired={true}
          label="Mã OTP"
          status="default"
          type="text"
          id="otp"
        />
      </div>
      <h2 className="text-color-gray-sm mt-5 text-center">
        Bạn không nhận được OTP?. Vui lòng{" "}
        <a href="#" className="text-color-primary-sm-medium">
          nhấn vào đây!
        </a>
      </h2>
      <div className="absolute bottom-0 flex w-full justify-center">
        <div className="flex w-[400px] gap-4">
          <ButtonDefault title="Hủy" onClick={() => setStep(1)} />
          <ButtonPrimary title={"Tiếp tục"} onClick={() => setStep(4)} />
        </div>
      </div>
    </form>
  );
};

export default VerifyPhoneNewForm;
