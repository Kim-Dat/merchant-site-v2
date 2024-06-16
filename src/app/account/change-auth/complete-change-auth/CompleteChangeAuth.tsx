import Lottie from "lottie-react";
import React, { useContext } from "react";
import successAnimation from "@/animation/icons/success-animation.json";
import ButtonPrimary from "@/components/button-primary/ButtonPrimary";
import { useStepperStore } from "@/stores/stepper.store";
import { isCloseModalChangeAuthContext } from "../../page";
const CompleteChangeAuth = () => {
  const { setStep } = useStepperStore();
  const context = useContext(isCloseModalChangeAuthContext);

  if (!context) {
    throw new Error(
      "useContext must be used within an isCloseModalChangeAuthContext",
    );
  }
  const { setOpenModalChangeAuth } = context;
  const onSuccess = () => {
    setStep(1);
    setOpenModalChangeAuth(false);
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="mt-5">
        <Lottie
          animationData={successAnimation}
          style={{ height: 80, width: 80 }}
          loop={false}
        />
      </div>
      <div className="mb-4 mt-1 px-0 text-center md:px-25">
        <h2 className="text-xl font-medium text-[#1ec27d]">
          Thay đổi hình thức xác thực thành công
        </h2>
        <p className="text-color-gray-sm mt-3">
          Bạn chuyển thành công từ:{" "}
          <span className="font-semibold text-[#1B2837]">
            Xác thực bằng số điện thoại
          </span>{" "}
          đến:{" "}
          <span className="font-semibold text-[#1B2837]">
            Xác thực bằng mật khẩu giao dịch
          </span>{" "}
        </p>
      </div>
      <div className="mb-5 mt-10 flex justify-center">
        <div className="w-[150px]">
          <ButtonPrimary title={"Hoàn tất"} onClick={onSuccess} />
        </div>
      </div>
    </div>
  );
};

export default CompleteChangeAuth;
