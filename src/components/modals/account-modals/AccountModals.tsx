import { viewMode } from "@/types/account";
import { Modal } from "antd";
import AccountChangePhoneModal from "./account-change-phone-modal/AccountChangePhoneModal";
import { createContext, Dispatch, SetStateAction } from "react";
import AccountChangeAuthModal from "./account-change-auth-modal/AccountChangeAuthModal";
import DeleteAccountModal from "./delete-account-modal/DeleteAccountModal";
import AccountChangePasswordModal from "./account-change-password-modal/AccountChangePasswordModal";
import LockAccountModal from "./lock-account-modal/LockAccountModal";

interface IProps {
  open: boolean;
  mode: string;
  record?: any;
  onCancel: () => void;
  refetch: () => void;
}

interface OnCancelModalContextProps {
  onCancel: Dispatch<SetStateAction<boolean>>;
}

export const OnCancelModalContext = createContext<
  OnCancelModalContextProps | undefined
>(undefined);

function AccountModals({ open, mode, onCancel, refetch }: IProps) {
  const render = () => {
    switch (mode) {
      case viewMode.changePhone:
        return <AccountChangePhoneModal />;
      case viewMode.changeAuth:
        return <AccountChangeAuthModal />;
      case viewMode.delete:
        return <DeleteAccountModal />;
      case viewMode.changePassword:
        return <AccountChangePasswordModal />;
      case viewMode.lock:
        return <LockAccountModal />;
      default:
        return;
    }
  };

  return (
    <Modal
      title={null}
      open={open}
      onOk={() => {}}
      onCancel={onCancel}
      closable={false}
      centered
      width={mode === viewMode.delete || mode === viewMode.lock ? 350 : 500}
      className="rounded-xl"
      footer={[null]}
    >
      <OnCancelModalContext.Provider value={{ onCancel }}>
        {render()}
      </OnCancelModalContext.Provider>
    </Modal>
  );
}
export default AccountModals;
