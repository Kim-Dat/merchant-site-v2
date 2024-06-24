import Calendar from "../../components/calender";
import { Metadata } from "next";
import DefaultLayout from "@/components/layout/DefaultLayout";

export const metadata: Metadata = {
  title: "Bank Account",
  description: "Bank Account Page",
};

const CalendarPage = () => {
  return (
    <DefaultLayout>
      <div>
        <h2 className="my-5 text-center text-2xl font-semibold text-[#202224]">
          Tài khoản ngân hàng
        </h2>
        <div className="shadows-custom rounded-lg p-5">
          <h3 className="text-base font-medium text-[#000000]">
            Tài khoản/ thẻ liên kết
          </h3>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default CalendarPage;
