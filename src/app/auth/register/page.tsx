import Image from "next/image";
import { Stepper } from "@/components/ui/stepper/Stepper";
import { RegisterForm } from "@/app/auth/register/register-form/RegisterForm";
import { Metadata } from "next";
import Card from "antd/es/card/Card";

export const metadata: Metadata = {
  title: "Register",
  description: "Register Page",
};
const Register = () => {
  return (
    <div className="mx-5 mt-8 flex justify-center">
      <div className="shadows-custom rounded-3xl bg-white p-8 ">
        <div className="flex items-center justify-center">
          <Image
            src="/images/logo/logo-hpay.png"
            alt="HPay Logo"
            className="dark:invert"
            width={120}
            height={50}
            priority
          />
        </div>
        <h2 className="mt-3 text-center text-lg font-medium text-[#1B2837]">
          Đăng ký tài khoản HPay Merchant
        </h2>
        {/*steps*/}
        <Stepper
          title1="Thông tin đăng nhập"
          title2="Thông tin doanh nghiệp"
          title3="Xác thực tài khoản"
        />
        {/*steps*/}

        {/*form*/}
        <RegisterForm />
        {/*form*/}
      </div>
    </div>
  );
};

export default Register;
