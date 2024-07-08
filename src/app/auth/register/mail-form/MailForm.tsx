"use client";
import Link from "next/link";
import { useStepperStore } from "@/stores/stepper.store";
import { Button } from "antd";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import Input from "@/components/ui/inputs/input/Input";

export const MailForm = () => {
  const { setStep } = useStepperStore();
  return (
    <form className="mt-8 flex flex-col items-center justify-center gap-4">
      <p className="text-xl font-semibold text-black">
        Gửi lại Email kích hoạt
      </p>
      <p className="text-sm text-[#626E7B] text-center">
        Bạn vui lòng truy cập hòm thư linhcute9x@gmail.com và bấm vào
        <span className="flex justify-center space-x-1">
          <Link className="font-bold text-red" href="#">
            Link kích hoạt
          </Link>
          <span> sau khi thực hiện gửi lại.</span>
        </span>
      </p>

     {/*  <div className="relative mt-3 w-3/5 rounded-xl border-2 border-[#F1F3F6]">
        <input
          type="email"
          id="hs-floating-input-passowrd-value"
          required
          className="peer block w-full rounded-lg border-gray-200 p-4 text-sm placeholder:text-transparent autofill:pb-2 autofill:pt-6 focus:border-blue-500 focus:pb-2 focus:pt-6 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 [&:not(:placeholder-shown)]:pb-2 [&:not(:placeholder-shown)]:pt-6"
        />
        <label
          htmlFor="hs-floating-input-passowrd-value"
          className="pointer-events-none absolute start-0 top-0 h-full origin-[0_0] truncate border border-transparent p-4 text-sm transition duration-100  ease-in-out peer-focus:-translate-y-1.5 peer-focus:translate-x-0.5 peer-focus:scale-90 peer-focus:text-gray-500 peer-disabled:pointer-events-none peer-disabled:opacity-50 peer-[:not(:placeholder-shown)]:-translate-y-1.5 peer-[:not(:placeholder-shown)]:translate-x-0.5 peer-[:not(:placeholder-shown)]:scale-90 peer-[:not(:placeholder-shown)]:text-gray-500"
        >
          Email
          <span className="ml-1 text-red">*</span>
        </label>
      </div> */}
      <div className="w-full">
        <Input id="email" isRequired={true} label="Email" status="default" type="email" />
      </div>
      
      <div className="w-50">
        <ButtonPrimary title={"Gửi lại"} onClick={() => {}} />
      </div>

      <p className="mt-24 text-xs text-[#A6C5CD]">
        Hotline hỗ trợ 24/7: 1900 0128
      </p>
    </form>
  );
};
