import { useStepperStore } from "@/stores/stepper.store";
import React from "react";
import DeclareAuthForm from "../declare-auth-form/DeclareAuthForm";
import VerifyAuthForm from "../verify-auth-form/VerifyAuthForm";
import CompleteAuthForm from "../complete-auth-form/CompleteAuthForm";

const AccountChangeAuthForm = () => {
  const { step } = useStepperStore();
  return (
    <div className="mt-5 flex h-80 justify-center">
      {/*form*/}
      {step === 1 ? (
        <DeclareAuthForm />
      ) : step === 2 ? (
        <VerifyAuthForm />
      ) : step === 3 ? (
        <CompleteAuthForm />
      ) : (
        <></>
      )}
      {/*form*/}
    </div>
  );
};

export default AccountChangeAuthForm;
