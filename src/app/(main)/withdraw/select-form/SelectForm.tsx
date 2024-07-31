import InputNumber from "@/components/ui/inputs/input-number/InputNumber";
import SelectCustom from "@/components/ui/select/SelectCustom";
import formatPrice from "@/utils/formatFrice";
import React from "react";
const wdr = [
  {
    value: "VPBank:184631202",
    label: "VPBank:184631202",
  },
  {
    value: "VPBank:184631202",
    label: "VPBank:184631202",
  },
  {
    value: "VPBank:184631202",
    label: "VPBank:184631202",
  },
];
function SelectForm() {
  return (
    <div className="mx-auto mt-10 max-w-screen-xsm">
      <div className="border-gradient-rounded ">
        <div>
          <span className="text-sm text-[#898B9A]">Số dư khả dụng</span>
          <h1 className="text-xl font-semibold text-[#4faac1]">
            {formatPrice(300000000)}
          </h1>
        </div>
        <div className="mt-3">
          <span className="text-sm text-[#898B9A]">Phí rút tiền:</span>
          <h1 className="text-xl font-semibold text-red">{formatPrice(0)}</h1>
        </div>
      </div>
      <form>
        <div>
          <SelectCustom
            isRequired={false}
            label="Rút về tài khoản ngân hàng"
            option={wdr}
          />
          <p className="text-sm text-[#373839]">Khai báo tài khoản khác</p>
        </div>
        <div>
          <InputNumber
            label="Số tiền yêu cầu rút"
            max={5000000000}
            min={2000}
            messMax="Vui lòng nhập số tiền nhỏ hơn 5.000.000.000"
            messMin="Vui lòng nhập số tiền lớn hơn 2.000"
          />
        </div>
        
      </form>
    </div>
  );
}

export default SelectForm;
