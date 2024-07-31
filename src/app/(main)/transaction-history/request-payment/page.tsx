"use client";
/* import SelectCustom from "@/app/test/page";
import ButtonPrimary from "@/components/button-primary/ButtonPrimary";
import InputNumber from "@/components/input-number/InputNumber";
import Input from "@/components/input/Input"; */
import DefaultLayout from "@/components/layout/DefaultLayout";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import InputNumber from "@/components/ui/inputs/input-number/InputNumber";
import Input from "@/components/ui/inputs/input/Input";
import SelectCustom from "@/components/ui/select/SelectCustom";
import { Checkbox } from "antd";
import TextArea from "antd/es/input/TextArea";
import React, { useState } from "react";

const RequestPayment = () => {
  const [value, setValue] = useState("");
  const optionMerchant = [
    { value: "LoanNT", label: "LoanNT" },
    { value: "Lmynh", label: "Lmynh" },
    { value: "ToanTV", label: "ToanTV" },
  ];
  const optionLanguage = [
    { value: "vn", label: "Việt Nam" },
    { value: "el", label: "Tiếng Anh" },
  ];
  return (
    <div>
      <div>
        <h2 className="my-5 text-center text-2xl font-semibold text-[#202224]">
          Tạo yêu cầu thanh toán
        </h2>
        <div className="mx-auto max-w-screen-md">
          <form action="">
            <div className="shadows-custom rounded-xl bg-white p-8">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <div>
                    <Input
                      id="email"
                      isRequired={false}
                      label="Địa chỉ email"
                      status="default"
                      type="text"
                    />
                  </div>
                  <div className="mt-5">
                    <SelectCustom
                      label="Chọn merchant"
                      isRequired={true}
                      option={optionMerchant}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <InputNumber />
                  </div>
                  <div className="mt-5">
                    <SelectCustom
                      label="Ngôn ngữ trang thanh toán"
                      isRequired={true}
                      option={optionLanguage}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-5 rounded-xl border px-2 pb-3 outline-none">
                <span className="ms-1 text-[0.6562rem] font-normal leading-3">
                  Mô tả sản phẩm<span className="text-[#FF3C3C]">*</span>
                </span>
                <div>
                  <TextArea
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    className="border-none p-1 text-base font-medium placeholder-gray-400 focus:border-transparent focus:ring-0"
                    placeholder="Nhập..."
                    autoSize={{ minRows: 5, maxRows: 5 }}
                  />
                </div>
              </div>
              <Checkbox
                onChange={() => {}}
                className="mt-3 text-sm font-normal text-[#111A2C]"
              >
                Trả góp
              </Checkbox>
            </div>
          </form>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="mt-5 flex w-full justify-center bg-white p-2">
          <div className="w-44 gap-4 ">
            <ButtonPrimary
              title={"Tiếp tục"}
              href="/transaction-history/request-payment/validate-request-payment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestPayment;
