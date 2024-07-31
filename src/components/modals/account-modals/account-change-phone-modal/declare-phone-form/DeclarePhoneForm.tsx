import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/ui/buttons/buttonDefault/ButtonDefault";
import Input from "@/components/ui/inputs/input/Input";
import { useStepperStore } from "@/stores/stepper.store";
import React, { useContext } from "react";
import { OnCancelModalContext } from "../../AccountModals";
import { Radio } from "antd";
const DeclarePhoneForm = () => {
  const { setStep } = useStepperStore();
  const context = useContext(OnCancelModalContext);
  if (!context) {
    throw new Error("useContext must be used within an OnCancelModalContext");
  }
  const { onCancel } = context;
  return (
    <form action="" className="relative h-full w-full">
      <div className="md:px-10">
        <div className="mt-8">
          <Input
            id="phoneOld"
            isRequired={true}
            label="Số điện thoại cũ"
            status="default"
            type="text"
          />
        </div>
        <div className="mt-5">
          <Input
            id="phoneNew"
            isRequired={true}
            label="Số điện thoại mới"
            status="default"
            type="text"
          />
        </div>
        <div className="mt-5 rounded-xl bg-[#DBE8EB] p-3">
          <h2 className="text-base font-medium text-[#1B2837]">
            Chọn phương thức
          </h2>
          <div className="ms-1">
            <Radio.Group name="radiogroup" defaultValue={"SMS"}>
              <div className="mt-3 flex items-center gap-2">
                <Radio value={"SMS"}>
                  <h2 className="text-color-gray-sm">
                    Xác thực thay đổi bằng tin nhắn SMS đến số cũ
                  </h2>
                </Radio>
              </div>
              <div className="mt-3 flex items-center gap-2">
                <Radio value={"CCCD"}>
                  <h2 className="text-color-gray-sm">
                    Số cũ bị mất, xác thực thay đổi bằng CMT/ CCCD/ Hộ chiếu
                  </h2>
                </Radio>
              </div>
            </Radio.Group>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 flex w-full justify-center ">
        <div className="flex w-[400px] gap-4">
          <ButtonDefault title="Hủy" onClick={onCancel} />
          <ButtonPrimary title={"Tiếp tục"} onClick={() => setStep(2)} />
        </div>
      </div>
    </form>
  );
};

export default DeclarePhoneForm;
