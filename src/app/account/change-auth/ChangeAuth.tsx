import ButtonPrimary from "@/components/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/buttonDefault/ButtonDefault";
import React, { useContext, useState } from "react";
import { isCloseModalChangeAuthContext } from "../page";
import { Stepper } from "@/components/stepper/Stepper";
import ChangeAuthForm from "./change-auth-form/ChangeAuthForm";
import { Radio } from "antd";

const ChangeAuth = () => {
  const [typeAuth, setTypeAuth] = useState(true);
  const context = useContext(isCloseModalChangeAuthContext);

  if (!context) {
    throw new Error(
      "useContext must be used within an isCloseModalChangeAuthContext",
    );
  }
  const { setOpenModalChangeAuth } = context;
  return (
    <>
      {typeAuth ? (
        <div>
          <h2 className="text-color-primary-xl-medium text-center">
            Hình thức xác thực giao dịch
          </h2>
          <div className="mt-6">
            <Radio.Group name="typeAuthTrans" defaultValue={"phone"}>
              <div className="rounded-lg bg-[#DBE8EB] px-5 py-3">
                <div className=" flex items-center gap-2">
                  <Radio value="phone">
                    <h2 className="text-base font-medium text-[#1B2837]">
                      Số điện thoại: 0909 090 909
                    </h2>
                  </Radio>
                </div>
                <div className="ms-6">
                  <p className="mt-1 text-sm font-normal text-[#FF1717]">
                    Yêu cầu chuyển đổi hình thức xác thực giao dịch của bạn bị
                    từ chối. Vui lòng liên hệ với bộ phận CSKH!{" "}
                    <span className="text-color-primary-sm ">Liên hệ ngay</span>
                  </p>
                  <ul className="ms-6 mt-2 list-disc text-gray-500">
                    <li className="mt-1">
                      <p className="text-color-gray-sm">
                        Ưu điểm: An toàn tuyệt đối.
                      </p>
                    </li>
                    <li className="mt-1">
                      <p className="text-color-gray-sm">
                        Hạn chế: Phụ thuộc vào tình trạng nhà mạng cung cấp dịch
                        vụ di động mà bạn đang sử dụng.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mt-5 rounded-lg bg-[#DBE8EB] px-5 py-3">
                <div className=" flex items-center gap-2">
                  <Radio value="MKGD">
                    <h2 className="text-base font-medium text-[#1B2837]">
                      Mật khẩu giao dịch
                    </h2>
                  </Radio>
                </div>
                <div className="ms-6">
                  <p className="text-color-gray-sm mt-1">
                    Bạn cần khai báo một mật khẩu khác với mật khẩu đăng nhập
                    tài khoản, khi thực hiện giao dịch hoặc thay đổi thông tin
                    tài khoản, nếu bạn nhập đúng mã này thì thao tác mới được
                    thực hiện.
                  </p>
                  <ul className="ms-6 mt-2 list-disc text-gray-500">
                    <li className="mt-1">
                      <p className="text-color-gray-sm">
                        Ưu điểm: Nhanh chóng, tiện lợi, sử dụng được ngay cả khi
                        bạn không ở Việt Nam.
                      </p>
                    </li>
                    <li className="mt-1">
                      <p className="text-color-gray-sm">
                        Hạn chế: Không an toàn bằng sử dụng điện thoại di động.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </Radio.Group>
          </div>
          <div className="mt-14 flex justify-center">
            <div className="flex w-[400px] gap-4">
              <ButtonDefault
                title="Hủy"
                onClick={() => setOpenModalChangeAuth(false)}
              />
              <ButtonPrimary
                title={"Tiếp tục"}
                onClick={() => setTypeAuth(false)}
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white">
          <h2 className="text-color-primary-xl-medium text-center">
            Thay đổi hình thức xác thực giao dịch
          </h2>

          <Stepper
            title1="Khai báo mật khẩu giao dịch"
            title2="Xác thực số điện thoại"
            title3="Hoàn tất"
          />

          <ChangeAuthForm />
        </div>
      )}
    </>
  );
};

export default ChangeAuth;
