"use client";
import DeclareForm from "../declare-form/DeclareForm";
import ValidateForm from "../validate-form/ValidateForm";
import Complete from "../complete/Complete";
import { useStepperStore } from "@/stores/stepper.store";
import ValidateOTPForm from "../validateOTP-form/ValidateOTPForm";
export const ChangeAccountForm = () => {
  const { step } = useStepperStore();

  return (
    <div>
      {/*form*/}
      {step === 1 ? (
        <DeclareForm />
      ) : step === 2 ? (
        <ValidateForm />
      ) : step === 3 ? (
        <Complete />
      ) : (
        <ValidateOTPForm />
      )}
      {/*form*/}
    </div>
  );
};
