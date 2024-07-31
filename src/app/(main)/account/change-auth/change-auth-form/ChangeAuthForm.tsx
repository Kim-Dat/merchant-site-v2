import { useStepperStore } from "@/stores/stepper.store";
import React from "react";
import DeclarePasswordTransForm from "../declare-passwod-trans-form/DeclarePasswordTransForm";
import ValidatePhoneForm from "../validate-phone-form/ValidatePhoneForm";
import CompleteChangeAuth from "../complete-change-auth/CompleteChangeAuth";

const ChangeAuthForm = () => {
  const { step } = useStepperStore();
  return (
    <div className="flex justify-center">
      {/*form*/}
      {step === 1 ? (
        <DeclarePasswordTransForm />
      ) : step === 2 ? (
        <ValidatePhoneForm />
      ) : step === 3 ? (
        <CompleteChangeAuth />
      ) : (
        <></>
      )}
      {/*form*/}
    </div>
  );
};

export default ChangeAuthForm;
