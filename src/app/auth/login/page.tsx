"use client";
import ButtonTab from "@/components/button-tab/ButtonTab";
import ButtonDefault from "@/components/buttonDefault/ButtonDefault";
import Input from "@/components/input/Input";
import React, { useState } from "react";
import Link from "next/link";
import ButtonPrimary from "@/components/button-primary/ButtonPrimary";

const LoginPage = () => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="mt-5 flex justify-center bg-[#F5F5F8]">
      <div className="min-w-96 max-w-5xl">
        <div className="shadows-custom my-3 grid grid-cols-1 rounded-[24px] bg-[#fff] md:grid-cols-2">
          <div className="relative hidden md:block">
            <img
              src="/images/image/login-left.png"
              className="absolute left-0 top-0 rounded-tr-[20px]"
              alt="login background left"
            />

            <div className="absolute left-0 top-0 p-7">
              <img
                src="/images/logo/logo-hpay.png"
                className="w-[123px]"
                alt="logo"
              />
              <h2 className="mt-7 text-3xl font-semibold text-[#111A2C]">
                KẾT NỐI CỔNG <br /> THANH TOÁN <br /> VỚI DOANH NGHIỆP
              </h2>
              <p className="mt-3 text-[#4FAAC1]">
                Trang thanh toán nạp chuyển rút được <br /> các doanh nghiệp tin
                dùng.
              </p>
            </div>
          </div>
          <div className="p-7">
            <div className="w-[100%] rounded-2xl bg-[#F5F5F8] pt-4 text-center">
              <h2 className="text-xl font-medium text-[#111A2C]">
                Đăng nhập bằng tài khoản?
              </h2>
              <div className="mt-2 flex gap-3 p-3">
                {activeTab === 0 ? (
                  <ButtonTab title={"Master Merchant"} />
                ) : (
                  <ButtonDefault
                    title={"Master Merchant"}
                    onClick={() => setActiveTab(0)}
                  />
                )}
                {activeTab === 1 ? (
                  <ButtonTab title={"Sub Merchant"} />
                ) : (
                  <ButtonDefault
                    title={"Sub Merchant"}
                    onClick={() => setActiveTab(1)}
                  />
                )}
              </div>
            </div>
            <form className="mt-9">
              {activeTab === 0 && (
                <div>
                  <div className="mb-5">
                    <Input
                      id={"MME"}
                      label="Email"
                      status="default"
                      message=""
                      type="email"
                      isRequired={true}
                    />
                  </div>
                  <div className="mb-3">
                    <Input
                      id={"MMP"}
                      label="Mật khẩu"
                      status="default"
                      message=""
                      type="password"
                      isRequired={true}
                    />
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div>
                  <div className="mb-5">
                    <Input
                      id={"SMN"}
                      label="Tên tài khoản"
                      status="default"
                      message=""
                      type="text"
                      isRequired={true}
                    />
                  </div>
                  <div className="mb-3">
                    <Input
                      id={"SMP"}
                      label="Mật khẩu"
                      status="default"
                      message=""
                      type="password"
                      isRequired={true}
                    />
                  </div>
                </div>
              )}
              <div className="text-end">
                <Link
                  href={"forgot-password"}
                  className="text-color-primary-sm"
                >
                  Quên mật khẩu?
                </Link>
              </div>
              <div className="mt-5">
                <ButtonPrimary type={"submit"} title={"Đăng nhập"} />
              </div>
            </form>
            <div className="mt-[140px] w-[350px] text-start">
              <p className="mb-3 text-sm font-normal text-[#000000]">
                Trở thành HPay Business
                <Link href={"/auth/register"} className="text-color-primary-sm">
                  {" "}
                  Đăng ký ngay!
                </Link>
              </p>
              <p className="text-sm font-normal text-[#898B9A] ">
                Bằng cách đăng nhập vào HPay Business, tôi xác nhận rằng tôi đã
                đọc và đồng ý với
                <Link
                  href="#"
                  className="text-[14px] font-normal text-[#000000]"
                >
                  {" "}
                  Điều khoản dịch vụ
                </Link>
                ,{" "}
                <Link
                  href="#"
                  className="text-[14px] font-normal text-[#000000]"
                >
                  Chính sách quyền riêng tư{" "}
                </Link>
                của HPay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
