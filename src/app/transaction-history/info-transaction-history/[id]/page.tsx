"use client";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/ui/buttons/buttonDefault/ButtonDefault";
import DefaultLayout from "@/components/layout/DefaultLayout";
import React from "react";

const ValidateRequestPayment = () => {
  return (
    <DefaultLayout>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        <div className="shadows-custom relative inline h-64 rounded-xl bg-white p-6">
          <div className="border-b-2 border-dashed border-gray-300">
            <div className="">
              <span className="text-color-gray-sm">Số tiền rút:</span>
              <h2 className="text-2xl font-semibold text-[#1B2837]">
                300.000 đ
              </h2>
            </div>
            <div className="my-3">
              <span className="text-color-gray-sm">Phí giao dịch:</span>
              <h2 className="text-2xl font-semibold text-[#FF1717]">0 đ</h2>
            </div>
          </div>
          <div className="mt-3">
            <span className="text-color-gray-sm">Tổng tiền rút:</span>
            <h2 className="text-2xl font-semibold text-[#4FAAC1]">300.000 đ</h2>
          </div>
          <span className="absolute right-3 top-3 rounded-xl bg-[#FFF7DC] px-2 py-0.5 text-xs font-medium text-[#EDB627]">
            Tạm giữ
          </span>
        </div>
        <div className="shadows-custom col-span-3 mt-5 rounded-xl bg-white px-8 py-5 md:ms-5 md:mt-0">
          <h2 className="text-center text-xl font-medium text-[#111A2C] md:text-start">
            Thông tin giao dịch rút tiền
          </h2>
          <div>
            <div className="py-4">
              <div className="grid grid-cols-1  sm:grid-cols-3">
                <div className="text-center sm:text-start">
                  <span className="text-color-gray-sm">Rút về:</span>
                </div>
                <div className="sm:col-span-2">
                  <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
                    VPB
                  </h2>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3">
                <div className="text-center sm:text-start">
                  <span className="text-color-gray-sm">
                    Số tài khoản/ số thẻ
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
                    123723298233
                  </h2>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3">
                <div className="text-center sm:text-start">
                  <span className="text-color-gray-sm">Chủ tài khoản:</span>
                </div>
                <div className="sm:col-span-2">
                  <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
                    CHUTHIMINH
                  </h2>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3">
                <div className="text-center sm:text-start">
                  <span className="text-color-gray-sm">Mã giao dịch:</span>
                </div>
                <div className="sm:col-span-2">
                  <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
                    96112717
                  </h2>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3">
                <div className="text-center sm:text-start">
                  <span className="text-color-gray-sm">
                    Thời gian giao dịch:
                  </span>
                </div>
                <div className="sm:col-span-2">
                  <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
                    15:31, 23/04/2024
                  </h2>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3">
                <div className="text-center sm:text-start">
                  <span className="text-color-gray-sm">Nội dung chuyển:</span>
                </div>
                <div className="sm:col-span-2">
                  <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
                    Loan chuyen tien cho Chu Minh
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="w-35 mt-3 mb-2">
            <ButtonPrimary title={"Hủy giao dịch"} onClick={() => {}} />
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default ValidateRequestPayment;
