import Input from "@/components/input/Input";
import DefaultLayout from "@/components/layout/DefaultLayout";
import React from "react";

const RequestPayment = () => {
  return (
    <DefaultLayout>
      <div>
        <h2 className="my-5 text-center text-2xl font-semibold text-[#202224]">
          Tạo yêu cầu thanh toán
        </h2>
        <div className="shadows-custom mx-auto max-w-screen-md rounded-xl bg-white p-8">
          <form action="">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
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
                <div className="mt-3">
                  <Input
                    id="email"
                    isRequired={false}
                    label="Địa chỉ email"
                    status="default"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <div>
                  <Input
                    id="requestPayment"
                    isRequired={true}
                    label="Số tiền yêu cầu thanh toán"
                    status="default"
                    type="text"
                  />
                </div>
                <div className="mt-3">
                  <Input
                    id="email"
                    isRequired={false}
                    label="Địa chỉ email"
                    status="default"
                    type="text"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default RequestPayment;
