import ButtonPrimary from "@/components/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/buttonDefault/ButtonDefault";
import Input from "@/components/input/Input";
import { useStepperStore } from "@/stores/stepper.store";
import React, { useContext } from "react";
import { isCloseModalPhoneContext } from "../../page";
import { Radio } from "antd";
const DeclarePhoneForm = () => {
  const { setStep } = useStepperStore();
  const context = useContext(isCloseModalPhoneContext);

  if (!context) {
    throw new Error(
      "useContext must be used within an IsCloseModalPhoneProvider",
    );
  }

  const { setOpenModalChangePhone } = context;
  return (
    <form action="" className="w-full px-0 md:px-15">
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
      <div className="mt-5 rounded-lg bg-[#DBE8EB] p-3">
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
      <div className="mt-10 flex justify-center">
        <div className="flex w-[400px] gap-4">
          <ButtonDefault
            title="Hủy"
            onClick={() => setOpenModalChangePhone(false)}
          />
          <ButtonPrimary title={"Tiếp tục"} onClick={() => setStep(2)} />
        </div>
      </div>
    </form>
  );
};

export default DeclarePhoneForm;
