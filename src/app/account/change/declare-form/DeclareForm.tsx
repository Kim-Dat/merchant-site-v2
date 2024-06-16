import ButtonPrimary from "@/components/button-primary/ButtonPrimary";
import ButtonDefault from "@/components/buttonDefault/ButtonDefault";
import Input from "@/components/input/Input";
import SelectCustom from "@/components/select/SelectCustom";
import { useStepperStore } from "@/stores/stepper.store";
import React from "react";

const DeclareForm = () => {
  const { setStep } = useStepperStore();
  /* option */
  const optionCertificateNumber = [
    { value: "1", label: "Số giấy ĐKKD1" },
    { value: "2", label: "Số giấy ĐKKD2" },
    { value: "3", label: "Số giấy ĐKKD3" },
  ];
  const optionCity = [
    { value: "", label: "- - - - - -" },
    { value: "2", label: "Ha Noi" },
    { value: "3", label: "Nha Trang" },
  ];
  const optionDistrict = [
    { value: "", label: "- - - - - -" },
    { value: "2", label: "Cau giay" },
    { value: "3", label: "My dinh" },
  ];
  const optionCCCD = [
    { value: "1", label: "Số CCCD" },
    { value: "2", label: "Số CMND" },
    { value: "3", label: "Hộ chiếu" },
  ];
  return (
    <form className="px-4 py-8">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="grid-col grid gap-5">
          <div>
            <Input
              id="name"
              label="Họ tên chủ tài khoản"
              isRequired={false}
              status="default"
              type="text"
            />
          </div>
          <div>
            <Input
              id="phone"
              label="Số điện thoại"
              isRequired={false}
              status="default"
              type="text"
            />
          </div>
          <div>
            <SelectCustom
              label="Số giấy chứng thực"
              isRequired={true}
              option={optionCertificateNumber}
            />
          </div>
          <div>
            <SelectCustom
              label="Tỉnh/ Thành phố "
              isRequired={true}
              option={optionCity}
            />
          </div>
        </div>
        <div className="grid-col grid gap-5">
          <div>
            <Input
              id="email"
              label="Địa chỉ email"
              isRequired={false}
              status="default"
              type="text"
            />
          </div>
          <div>
            <Input
              id="typeAccount"
              label="Loại tài khoản"
              isRequired={false}
              status="default"
              type="text"
            />
          </div>
          <div>
            <Input
              id="input"
              label="Nhập Số giấy ĐKKD"
              isRequired={true}
              status="default"
              type="text"
            />
          </div>
          <div>
            <SelectCustom
              label="Quận/ Huyện "
              isRequired={true}
              option={optionDistrict}
            />
          </div>
        </div>
      </div>

      <div className="my-5">
        <Input
          label="Nhập địa chỉ chi tiết"
          isRequired={false}
          status="default"
          type="text"
          id="detailLocal"
        />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="grid-col grid gap-5">
          <div>
            <Input
              id="nameRepresent"
              label="Họ tên người đại diện"
              isRequired={true}
              status="default"
              type="text"
            />
          </div>
          <div>
            <SelectCustom
              label="Số CMND/CCCD/Hộ chiếu"
              isRequired={true}
              option={optionCCCD}
            />
          </div>
          <div>
            <Input
              id="local"
              label="Địa chỉ"
              isRequired={false}
              status="default"
              type="text"
            />
          </div>
        </div>
        <div className="grid-col grid gap-5">
          <div>
            <Input
              id="birth"
              label="Ngày sinh"
              isRequired={true}
              status="default"
              type="text"
            />
          </div>
          <div>
            <Input
              id="birth"
              label="Nhập Số CCCD"
              isRequired={true}
              status="default"
              type="text"
            />
          </div>
          <div>
            <Input
              id="phoneNumber"
              label="Số điện thoại"
              isRequired={true}
              status="default"
              type="text"
            />
          </div>
        </div>
      </div>

      <div className="mt-10 flex justify-center">
        <div className="flex w-[400px] gap-4">
          <ButtonDefault title="Hủy" href="/account" />
          <ButtonPrimary title={"Tiếp tục"} onClick={() => setStep(2)} />
        </div>
      </div>
    </form>
  );
};

export default DeclareForm;
