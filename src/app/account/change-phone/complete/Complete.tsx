import React, { useContext } from "react";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import Lottie from "lottie-react";
import successAnimation from "@/animation/icons/success-animation.json";
import { isCloseModalPhoneContext } from "../../page";
import { useStepperStore } from "@/stores/stepper.store";

const Complete = () => {
  const context = useContext(isCloseModalPhoneContext);
  const { setStep } = useStepperStore();

  if (!context) {
    throw new Error(
      "useContext must be used within an IsCloseModalPhoneProvider",
    );
  }

  const { setOpenModalChangePhone } = context;

  const onSuccess = () => {
    setStep(1);
    setOpenModalChangePhone(false);
  };
  
  return (
    <div className="flex flex-col items-center">
      <div className="mt-5">
        <Lottie
          animationData={successAnimation}
          style={{ height: 80, width: 80 }}
          loop={false}
        />
      </div>
      <div className="mb-4 mt-1 text-center">
        <h2 className="text-xl font-medium text-[#1ec27d]">
          Thay đổi số điện thoại thành công
        </h2>
        <p className="text-color-gray-sm mt-3">
          Bạn chuyển thành công từ số:{" "}
          <span className="font-semibold text-[#1B2837]">0374 234 530</span> đến
          số <span className="font-semibold text-[#1B2837]">0343 402 978</span>
        </p>
      </div>
      <div className="mt-5 max-w-screen-xsm rounded-lg bg-[#DBE8EB] px-5 py-3">
        <h2 className="text-sm font-medium text-[#1B2837]">Bạn có thể:</h2>
        <ul className="ms-6 list-disc">
          <li className="mt-1">
            <p className="text-color-gray-sm">
              Thực hiện xác thực giao dịch (khi chuyển tiền, thanh toán hoặc rút
              tiền)
            </p>
          </li>
          <li className="mt-1">
            <p className="text-color-gray-sm">Thay đổi thông tin tài khoản</p>
          </li>
          <li className="mt-1">
            <p className="text-color-gray-sm">
              Nhận thông báo khi có giao dịch phát sinh.
            </p>
          </li>
        </ul>
      </div>
      <div className="mb-5 mt-10 flex justify-center">
        <div className="w-[150px]">
          <ButtonPrimary title={"Xong"} onClick={onSuccess} />
        </div>
      </div>
    </div>
  );
};

export default Complete;
