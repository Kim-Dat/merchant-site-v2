import Image from "next/image";
import {Card} from "flowbite-react";
import {Stepper} from "@/components/stepper/Stepper";
import {RegisterForm} from "@/app/auth/register/register-form/RegisterForm";
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "Register",
    description:
        "Register Page",
};
const Register = () => {
    return (
        <div className="mt-10 flex justify-center">
            <Card className="flex min-w-fit w-1/3 justify-center rounded-2xl px-8 py-4">
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
                <h5 className="text-gray-900 flex items-center justify-center text-xl font-semibold">
                    Đăng ký tài khoản HPay Merchant
                </h5>
                {/*steps*/}
                <Stepper
                    title1="Thông tin đăng nhập"
                    title2="Thông tin doanh nghiệp"
                    title3="Xác thực tài khoản"
                />
                {/*steps*/}

                {/*form*/}
                <RegisterForm/>
                {/*form*/}
            </Card>
        </div>
    );
};

export default Register;
