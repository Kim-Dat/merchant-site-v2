"use client";
import React from "react";
import Lottie from "lottie-react";
import successAnimation from "@/animation/icons/success-animation.json";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import { useStepperStore } from "@/stores/stepper.store";
import { useRouter } from "next/navigation";

const Complete = () => {
  const { setStep } = useStepperStore();
  const router = useRouter();

  const onSuccess = () => {
    router.push("/account");
    setStep(1);
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
          Tài khoản của bạn đang được xét duyệt
        </h2>
        <p className="text-color-gray-sm mt-3">
          Bạn đang chuyển loại tài khỏa đến:{" "}
          <span className="font-semibold text-[#1B2837]">
            tài khoản Doanh nghiệp.
          </span>{" "}
          Chúng tôi đã <br /> nhận được yêu cầu và cần ít nhất 4 tiếng để hoàn
          tất thủ tục
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

export default Complete;
