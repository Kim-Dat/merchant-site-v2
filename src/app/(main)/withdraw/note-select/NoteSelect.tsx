import { useStepperStore } from "@/stores/stepper.store";
import Image from "next/image";
import React from "react";

const NoteSelect = () => {
  const { setStep } = useStepperStore();
  return (
    <div className="mt-10 flex flex-col items-center">
      <button
        className="flex w-60 items-center justify-center gap-3 rounded-3xl bg-[#4FAAC1] p-6 shadow-md hover:bg-[#6db7c9]"
        onClick={() => setStep(2)}
      >
        <Image
          src={"/icons/CurrencyCircleDollar.svg"}
          alt="currencyCircleDollar"
          width={40}
          height={40}
        />
        <span className="text-start text-base font-medium text-white">
          Rút về tài khoản Ngân hàng
        </span>
      </button>
      <div className="w-full rounded-xl bg-[#F5F5F8] px-8 py-6 mt-11">
        <div className="flex items-center gap-3">
          <h2 className="text-xl font-medium text-black">Lưu ý</h2>
          <Image
            src="/icons/warning.png"
            alt="warning"
            width={25}
            height={25}
          />
        </div>
        <div className="ms-6 mt-4">
          <ul className="list-disc">
            <li>
              <p className="">
                Tài khoản HPay Doanh nghiệp CHƯA CHỨNG THỰC và tài khoản Cá nhân
                (Chưa hoặc Đã chứng thực) thì bạn chỉ được phép rút tiền về tài
                khoản Ngân hàng mà tên chủ tài khoản trùng với tên chủ tài khoản
                HPay.
              </p>
            </li>
            <li className="mt-2">
              <p>
                Tài khoản HPay của DOANH NGHIỆP ĐÃ CHỨNG THỰC thì được rút tiền
                về tài khoản Ngân hàng có tên chủ tài khoản trùng với tên người
                đại diện trước pháp luật theo Giấy Đăng ký Kinh doanh đã chứng
                thực hoặc rút về tài khoản Ngân hàng của cá nhân được ủy quyền
                có xác nhận của doanh nghiệp.
              </p>
            </li>
            <li className="mt-2">
              <p>
                HPay sẽ thu 1% trên tổng số tiền rút nếu nguồn tiền nhận được từ
                giao dịch nạp.
              </p>
            </li>
            <li className="mt-2">
              <p>
                Giấy ủy quyền sau khi xác nhận, vui lòng gửi về email
                support@htpgroup.com.vn
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NoteSelect;
