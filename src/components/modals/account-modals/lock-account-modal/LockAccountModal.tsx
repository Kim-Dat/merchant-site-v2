import ButtonDelete from "@/components/ui/buttons/button-delete/ButtonDelete";
import ButtonDefault from "@/components/ui/buttons/buttonDefault/ButtonDefault";
import React, { useContext } from "react";
import { OnCancelModalContext } from "../AccountModals";

const LockAccountModal = () => {
  const context = useContext(OnCancelModalContext);
  if (!context) {
    throw new Error("useContext must be used within an OnCancelModalContext");
  }
  const { onCancel } = context;
  return (
    <div className="text-center ">
      <h2 className="text-color-black-2xl">Khóa tài khoản</h2>
      <p className="mt-5 text-base text-[#757D85]">
        Bạn có chắc chắn muốn khóa tài khoản{" "}
        <span className="font-semibold text-[#1B2837]">minhminh01</span> ?
      </p>
      <div className="mt-6 flex justify-center gap-4">
        <ButtonDefault onClick={onCancel} title="Đóng" />

        <ButtonDelete title="Đồng ý" onClick={() => {}} />
      </div>
    </div>
  );
};

export default LockAccountModal;
