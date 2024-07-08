"use client";

import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/ui/buttons/buttonDefault/ButtonDefault";
import Input from "@/components/ui/inputs/input/Input";
import SelectCustom from "@/components/ui/select/SelectCustom";
import { useStepperStore } from "@/stores/stepper.store";
import { Button } from "antd";
import Link from "next/link";

export const AccountForm = () => {
  const { setStep } = useStepperStore();
  const enterpriseType = [
    { value: "1", label: "Số CCCD" },
    { value: "2", label: "Số CMND" },
    { value: "3", label: "Hộ chiếu" },
  ];
  return (
    <form className="w-130">
      <div className="w-full">
        <div className="mt-5">
          <SelectCustom
            label="Loại hình doanh nghiệp"
            isRequired
            option={enterpriseType}
          />
        </div>
        <div className="mt-5">
          <Input
            id="email"
            isRequired={true}
            label="Email đăng nhập"
            status="default"
            type="email"
          />
        </div>
        <div className="mt-5">
          <Input
            id="phone"
            isRequired={true}
            label="Số điện thoại"
            status="default"
            type="text"
          />
        </div>
        <div className="mt-5">
          <Input
            id="password"
            isRequired={true}
            label="Mật khẩu"
            status="default"
            type="password"
          />
        </div>
        <div className="mt-5">
          <Input
            id="confpass"
            isRequired={true}
            label="Xác nhận mật khẩu"
            status="default"
            type="password"
          />
        </div>
        <div className="mt-5 flex justify-center">
          <div className="flex w-[300px] gap-4">
            <ButtonDefault title="Hủy" href="/auth/login" />
            <ButtonPrimary title={"Tiếp tục"} onClick={() => setStep(2)} />
          </div>
        </div>
      </div>
    </form>
  );
};
