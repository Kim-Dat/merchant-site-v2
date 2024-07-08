"use client";
import { useState } from "react";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/ui/buttons/buttonDefault/ButtonDefault";
import Input from "@/components/ui/inputs/input/Input";

const ForgotPassword = () => {
  const [status, setStatus] = useState<boolean>(false);
  return (
    <div className="mt-5 flex items-center justify-center bg-[#F5F5F8]">
      <div className="w-[670px] min-w-96 max-w-3xl">
        <div className="shadows-custom rounded-[24px] bg-[#fff]">
          <div className="flex flex-col items-center px-12 pt-6">
            <img
              src="/images/logo/logo-hpay.png"
              className="w-[123px]"
              alt="logo"
            />
            <h2 className="text-color-black-2xl mt-5">
              Quên mật khẩu/xác thực tài khoản
            </h2>
            {status ? (
              <div className="mt-10 w-full">
                <div className="flex justify-center">
                  <img
                    src="/images/logo/mail-logo.png"
                    className="w-[153px]"
                    alt="email change password"
                  />
                </div>
                <p className="text-color-gray-base mt-7 text-center">
                  HPay đã gửi đường link kích hoạt yêu cầu lấy lại mật khẩu đăng
                  <br /> nhập tài khoản tới địa chỉ email{" "}
                  <a
                    href="mailto:demo@hpay.com.vn"
                    className="font-semibold text-[#111A2C]"
                  >
                    demo@hpay.com.vn
                  </a>
                  . Bạn vui lòng <br /> truy cập hòm thư và thực hiện kích hoạt
                  để tiếp tục.
                </p>
                <p className="mt-5 text-center text-base font-normal text-[#1B2837]">
                  Chưa nhận được mail.{" "}
                  <a
                    href="#"
                    className="text-base font-semibold text-[#FF1717]"
                  >
                    Bấm vào đây!
                  </a>
                </p>
              </div>
            ) : (
              <div className="my-5 w-full">
                <p className="text-color-gray-sm w-full text-center">
                  (Để lấy lại mật khẩu đăng nhập/link kích hoạt tài khoản HPay,
                  bạn nhập chính xác địa <br /> chỉ email đã khai báo trên tài
                  khoản HPay vào form dưới đây. Hệ thống sẽ gửi một <br /> đường
                  link kích hoạt tới email của bạn để xác thực yêu cầu.)
                </p>
                <form action="" className="mt-8 px-24">
                  <Input
                    id="frg"
                    isRequired={true}
                    label="Email"
                    message=""
                    status="default"
                    type="email"
                  />
                  <div className="mt-5">
                    <ButtonPrimary title={"Xác nhận"} type={"submit"} />
                  </div>
                </form>
              </div>
            )}

            <div className="mt-8 w-full px-24">
              <div className="mb-5 flex w-full items-center justify-center px-5">
                <div className="flex-auto border-[1px] border-[#7FC4D6]"></div>
                <span className="flex-1 text-nowrap px-2 text-[#7FC4D6]">
                  Bạn đã có tài khoản
                </span>
                <div className="flex-auto border-[1px] border-[#7FC4D6]"></div>
              </div>
              <ButtonDefault
                href="/auth/login"
                title={"Đăng nhập bằng tài khoản"}
              />
              <p className="mb-5 mt-20 text-center text-[15px] font-normal text-[#A6C5CD]">
                Hotline hỗ trợ 24/7: 1900 0128
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
