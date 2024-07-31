"use client";
import React from "react";
import DeclarePhoneForm from "../declare-phone-form/DeclarePhoneForm";
import { useStepperStore } from "@/stores/stepper.store";
import ValidatePhoneOTPOldForm from "../validate-phoneOTP-old-form/ValidatePhoneOTPOldForm";
import Complete from "../complete/Complete";
import ValidatePhoneOTPNewForm from "../validate-phoneOTP-new-form/ValidatePhoneOTPNewForm";

const ChangePhoneForm = () => {
  const { step } = useStepperStore();
  return (
    <div className="flex justify-center">
      {/*form*/}
      {step === 1 ? (
        <DeclarePhoneForm />
      ) : step === 2 ? (
        <ValidatePhoneOTPNewForm />
      ) : step === 3 ? (
        <Complete />
      ) : (
        <ValidatePhoneOTPOldForm />
      )}
      {/*form*/}
    </div>
  );
};

export default ChangePhoneForm;
