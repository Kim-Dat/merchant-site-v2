"use client";
import { useStepperStore } from "@/stores/stepper.store";
import React from "react";
import SelectForm from "../select-form/SelectForm";
import ValidateForm from "../validate-form/ValidateForm";
import Complete from "../complete/Complete";
import NoteSelect from "../note-select/NoteSelect";

function WithdrawStepsForm() {
  const { step } = useStepperStore();
  const renderSteps = () => {
    switch (step) {
      case 1:
        return <NoteSelect />;
      case 2:
        return <SelectForm />;
      case 21:
        return <ValidateForm />;
      case 31:
        return <Complete />;
      default:
        break;
    }
  };
  return <>{renderSteps()}</>;
}

export default WithdrawStepsForm;
