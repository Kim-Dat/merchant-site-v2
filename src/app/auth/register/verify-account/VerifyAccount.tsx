import Image from "next/image";
import Link from "next/link";
import { useStepperStore } from "@/stores/stepper.store";
import { Button } from "antd";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";

export const VerifyAccount = () => {
  const { setStep } = useStepperStore();
  return (
    <div className="mt-8 flex flex-col items-center justify-center gap-4">
      <p className="font-semibold">Xin chào! Vân Mai Thúy</p>
      <p className="text-sm text-[#626E7B]">Chào mừng đến với HPay Business</p>
      <div>
        <Image
          src="/images/logo/mail-logo.png"
          alt="mail Logo"
          className="dark:invert"
          width={120}
          height={50}
        />
      </div>
      <p className="max-w-125 text-center text-base font-normal text-[#525C67]">
        Bạn vui lòng truy cập hòm thư linhcute9x@gmail.com và bấm vào{" "}
        <Link href={"/"} className="font-semibold text-[#FF1717]">
          Link kích hoạt
        </Link>{" "}
        mà HPay đã gửi để hoàn tất đăng ký tài khoản.
      </p>
      <p className="text-base font-normal text-[#1B2837]">
        Chưa nhận được email.{" "}
        <Link className="font-semibold text-[#FF1717]" href="#">
          Bấm vào đây!
        </Link>
      </p>
      <div className="w-50">
        <ButtonPrimary title={"Đăng nhập"} onClick={() => setStep(4)} />
      </div>
      <p className="mt-5 text-xs text-[#A6C5CD]">
        Hotline hỗ trợ 24/7: 1900 0128
      </p>
    </div>
  );
};
