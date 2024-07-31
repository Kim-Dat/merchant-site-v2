"use client";
import React from "react";
import { useStepperStore } from "@/stores/stepper.store";
import DeclarePhoneForm from "../declare-phone-form/DeclarePhoneForm";
import VerifyPhoneNewForm from "../verify-phone-new-form/VerifyPhoneNewForm";
import CompletePhoneForm from "../complete-phone-form/CompletePhoneForm";
import VerifyPhoneOldForm from "../verify-phone-old-form/VerifyPhoneOldForm";

const ChangePhoneForm = () => {
  const { step } = useStepperStore();
  return (
    <div className="flex h-100 justify-center">
      {step === 1 ? (
        <DeclarePhoneForm />
      ) : step === 2 ? (
        <VerifyPhoneNewForm />
      ) : step === 3 ? (
        <CompletePhoneForm />
      ) : (
        <VerifyPhoneOldForm />
      )}
    </div>
  );
};

export default ChangePhoneForm;
