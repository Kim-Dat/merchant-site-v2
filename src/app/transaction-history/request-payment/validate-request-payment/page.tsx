"use client";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/ui/buttons/buttonDefault/ButtonDefault";
import React from "react";

const ValidateRequestPayment = () => {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-4">
        <div className="shadows-custom flex h-50 items-center justify-center rounded-xl bg-white">
          <div className="text-center">
            <span className="text-color-gray-sm">Số tiền giao dịch:</span>
            <h2 className="text-2xl font-semibold text-[#31B63B]">300.000 đ</h2>
          </div>
        </div>
        <div className="shadows-custom col-span-3 mt-5 rounded-xl bg-white px-8 py-5 md:ms-5 md:mt-0">
          <h2 className="text-center text-xl font-medium text-[#4FAAC1] md:text-start">
            Thông tin giao dịch yêu cầu thanh toán
          </h2>
          <div>
            <div className="py-4">
              <div className="grid grid-cols-1  sm:grid-cols-3">
                <div className="text-center sm:text-start">
                  <span className="text-color-gray-sm">Gửi yêu cầu tới:</span>
                </div>
                <div className="sm:col-span-2">
                  <h2 className="text-center text-sm font-medium uppercase text-[#111A2C] sm:text-start ">
                    minhltt@hpay.com.vn
                  </h2>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3">
                <div className="text-center sm:text-start">
                  <span className="text-color-gray-sm">Merchant:</span>
                </div>
                <div className="sm:col-span-2">
                  <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
                    VAHPAY9900000193
                  </h2>
                </div>
              </div>

              <div className="mt-3 grid grid-cols-1 sm:grid-cols-3">
                <div className="text-center sm:text-start">
                  <span className="text-color-gray-sm">Mô tả sản phẩm:</span>
                </div>
                <div className="sm:col-span-2">
                  <h2 className="text-center text-sm font-medium text-[#111A2C] sm:text-start ">
                    Sản phẩm mới
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
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <div className="mt-5 flex w-full justify-center bg-white p-2">
          <div className="flex w-[400px] gap-4">
            <ButtonDefault
              title="Hủy"
              href="/transaction-history/request-payment"
            />
            <ButtonPrimary
              title={"Thêm mới"}
              href="/transaction-history/request-payment/success-request-payment"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ValidateRequestPayment;
