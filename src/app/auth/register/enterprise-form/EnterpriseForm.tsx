"use client";
import ButtonPrimary from "@/components/ui/buttons/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/ui/buttons/buttonDefault/ButtonDefault";
import Input from "@/components/ui/inputs/input/Input";
import SelectCustom from "@/components/ui/select/SelectCustom";
import { useStepperStore } from "@/stores/stepper.store";
import { Button } from "antd";

export const EnterpriseForm = () => {
  const { setStep } = useStepperStore();
  const enterpriseType = [
    { value: "1", label: "Số CCCD" },
    { value: "2", label: "Số CMND" },
    { value: "3", label: "Hộ chiếu" },
  ];
  return (
    <form>
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <div className="mt-5">
            <SelectCustom
              isRequired={true}
              label="Lĩnh vực kinh doanh"
              option={enterpriseType}
            />
          </div>
          <div className="mt-5">
            <Input
              id="shortName"
              isRequired={true}
              label="Tên viết tắt"
              status="default"
              type="text"
            />
          </div>
          <div className="mt-5">
            <Input
              id="ndd"
              isRequired={true}
              label="Người đại diện"
              status="default"
              type="text"
            />
          </div>
          <div className="mt-5">
            <Input
              id="type"
              isRequired={true}
              label="Loại giấy tờ tùy thân"
              status="default"
              type="text"
            />
          </div>
          <div className="mt-5">
            <Input
              id="email"
              isRequired={true}
              label="Email người đại diện"
              status="default"
              type="email"
            />
          </div>
          <div className="mt-5">
            <Input
              id="city"
              isRequired={true}
              label="Tỉnh/Thành phố"
              status="default"
              type="text"
            />
          </div>
          <div className="mt-5">
            <Input
              id="px"
              isRequired={true}
              label="Phường/ Xã"
              status="default"
              type="text"
            />
          </div>
        </div>
        <div>
          <div className="md:mt-5">
            <Input
              id="DVCNTT"
              isRequired={true}
              label="Tên DVCNTT"
              status="default"
              type="text"
            />
          </div>
          <div className="mt-5">
            <Input
              id="MST"
              isRequired={true}
              label="MST/Mã số doanh nghiệp "
              status="default"
              type="text"
            />
          </div>
          <div className="mt-5">
            <Input
              id="role"
              isRequired={true}
              label="Chức vụ"
              status="default"
              type="text"
            />
          </div>
          <div className="mt-5">
            <Input
              id="sgtt"
              isRequired={true}
              label="Số giấy tờ tùy thân"
              status="default"
              type="text"
            />
          </div>
          <div className="mt-5">
            <Input
              id="phone"
              isRequired={true}
              label="Số điện thoại liên hệ"
              status="default"
              type="text"
            />
          </div>
          <div className="mt-5">
            <Input
              id="qh"
              isRequired={true}
              label="Quận/ Huyện"
              status="default"
              type="text"
            />
          </div>
          <div className="mt-5">
            <Input
              id="qh"
              isRequired={true}
              label="Địa chỉ kinh doanh"
              status="default"
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="mt-10 flex justify-center">
        <div className="flex w-[300px] gap-4">
          <ButtonDefault title="Hủy" onClick={() => setStep(1)} />
          <ButtonPrimary title={"Tiếp tục"} onClick={() => setStep(3)} />
        </div>
      </div>
    </form>
  );
};
