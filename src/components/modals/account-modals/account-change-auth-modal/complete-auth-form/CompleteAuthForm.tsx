import Lottie from "lottie-react";
import React, { useContext } from "react";
import successAnimation from "@/animation/icons/success-animation.json";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import { useStepperStore } from "@/stores/stepper.store";
import { OnCancelModalContext } from "../../AccountModals";
const CompleteAuthForm = () => {
  const { setStep } = useStepperStore();
  const context = useContext(OnCancelModalContext);
  if (!context) {
    throw new Error("useContext must be used within an OnCancelModalContext");
  }
  const { onCancel } = context;

  const onSuccess = () => {
    setStep(1);
    onCancel(false);
  };
  return (
    <div className="relative flex flex-col items-center">
      <div className="mt-3">
        <Lottie
          animationData={successAnimation}
          style={{ height: 80, width: 80 }}
          loop={false}
        />
      </div>
      <div className="mb-4 mt-1 text-center">
        <h2 className="text-xl font-medium text-[#1ec27d]">
          Thay đổi hình thức xác thực thành công
        </h2>
        <p className="text-color-gray-sm mt-3">
          Bạn chuyển thành công từ:{" "}
          <span className="font-semibold text-[#1B2837]">
            Xác thực bằng số điện thoại
          </span>{" "}
          <br />
          đến:{" "}
          <span className="font-semibold text-[#1B2837]">
            Xác thực bằng mật khẩu giao dịch
          </span>{" "}
        </p>
      </div>
      <div className="absolute bottom-0 flex w-full justify-center">
        <div className="w-[180px]">
          <ButtonPrimary title={"Hoàn tất"} onClick={onSuccess} />
        </div>
      </div>
    </div>
  );
};

export default CompleteAuthForm;
