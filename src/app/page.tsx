"use client";
import ChartThree from "@/components/ui/charts/ChartThree";
import ChartOne from "@/components/ui/charts/CharOne";
import { Select, Space, Table, TableProps } from "antd";
import FormatPrice from "@/components/format-price/FormatPrice";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const HomePage = () => {
  const { t: trans } = useTranslation();
  interface DataType {
    key?: string;
    time: any;
    info: any;
    price: number;
    timeSuccess: any;
    code: number;
    action?: any;
  }

  const columns: TableProps<DataType>["columns"] = [
    {
      title: trans("home.deal-creation-time"),
      dataIndex: "time",
      key: "time",
    },
    {
      title: trans("home.information"),
      dataIndex: "info",
      key: "info",
    },
    {
      title: trans("home.amount"),
      dataIndex: "price",
      key: "price",
    },
    {
      title: trans("home.the-transaction-is-completed"),
      dataIndex: "timeSuccess",
      key: "timeSuccess",
    },
    {
      title: trans("home.transaction-id"),
      dataIndex: "code",
      key: "code",
    },
    {
      title: trans("home.action"),
      key: "action",
      dataIndex: "action",
    },
  ];

  const data: DataType[] = [
    {
      key: "1",
      time: {
        date: "15/08/2022",
        detail: "12:39",
      },
      info: {
        title: "Fruit_INV-000552",
        desc: "Thanh toán đơn hàng Fruit_INV- 000550",
      },
      price: -100000,
      timeSuccess: {
        date: "15/08/2022",
        detail: "12:39",
      },
      code: 956565656,
    },
    {
      key: "2",
      time: {
        date: "15/08/2022",
        detail: "12:39",
      },
      info: {
        title: "Fruit_INV-000552",
        desc: "Thanh toán đơn hàng Fruit_INV- 000550",
      },
      price: 100000,
      timeSuccess: {
        date: "15/08/2022",
        detail: "12:39",
      },
      code: 956565656,
    },
    {
      key: "3",
      time: {
        date: "15/08/2022",
        detail: "12:39",
      },
      info: {
        title: "Fruit_INV-000552",
        desc: "Thanh toán đơn hàng Fruit_INV- 000550",
      },
      price: 100000,
      timeSuccess: {
        date: "15/08/2022",
        detail: "12:39",
      },
      code: 956565656,
    },
    {
      key: "4",
      time: {
        date: "15/08/2022",
        detail: "12:39",
      },
      info: {
        title: "Fruit_INV-000552",
        desc: "Thanh toán đơn hàng Fruit_INV- 000550",
      },
      price: -10000,
      timeSuccess: {
        date: "15/08/2022",
        detail: "12:39",
      },
      code: 956565656,
    },
  ];
  const typePrice = (price: any) => {
    let value;
    if (price < 0) {
      value = (
        <span className="text-base font-normal text-[#FF1717]">
          {<FormatPrice price={price} />}
        </span>
      );
    } else {
      value = (
        <span className="text-base font-normal text-[#31B63B]">
          +<FormatPrice price={price} />
        </span>
      );
    }
    return value;
  };

  const handleDataAccount = data.map((item) => ({
    ...item,
    time: (
      <div>
        <div className="text-sm font-normal text-[#1B2837]">
          {item.time.detail}
        </div>
        <div className="text-sm font-normal text-[#1B2837]">
          {item.time.date}
        </div>
      </div>
    ),
    info: (
      <div>
        <span className="text-sm font-normal text-[#FF1717]">
          {item.info.title}
        </span>
        <p className="text-sm font-normal text-[#525C67]">{item.info.desc}</p>
      </div>
    ),
    price: <div className="flex justify-end">{typePrice(item.price)}</div>,
    timeSuccess: (
      <div>
        <div className="text-sm font-normal text-[#1B2837]">
          {item.timeSuccess.detail}
        </div>
        <div className="text-sm font-normal text-[#1B2837]">
          {item.timeSuccess.date}
        </div>
      </div>
    ),
    code: <span>{item.code}</span>,
    action: (
      <a href="#" className="font-medium text-red hover:underline">
        Xem chi tiết
      </a>
    ),
  }));

  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="text-color-black-3xl">Dashboard</h2>
        <div>
          <Space className="text-color-primary-sm me-1 text-nowrap">
            {trans("home.filter-by")}:
            <Select
              defaultValue="day"
              style={{ width: "90px" }}
              id="date"
              options={[
                {
                  value: "day",
                  label: (
                    <span className="text-select">{trans("date.day")}</span>
                  ),
                },
                {
                  value: "week",
                  label: (
                    <span className="text-select">{trans("date.week")}</span>
                  ),
                },
                {
                  value: "month",
                  label: (
                    <span className="text-select">{trans("date.month")}</span>
                  ),
                },
                {
                  value: "year",
                  label: (
                    <span className="text-select">{trans("date.year")}</span>
                  ),
                },
              ]}
            />
          </Space>
        </div>
      </div>
      <div className="mt-2 grid grid-cols-1 gap-3 md:grid-cols-3">
        <div className="shadows-custom rounded-lg bg-white pb-3 pe-3 ps-4 pt-3">
          <div className="grid grid-cols-2">
            <div>
              <h3 className="mt-1 text-base font-semibold text-[#525C67]">
                {trans("home.total-transactions")}
              </h3>
              <h2 className="mt-4 text-2xl font-semibold tracking-wider text-[#202224]">
                10293
              </h2>
            </div>
            <div className="flex justify-end">
              <Image
                src="/icons/icon-total-transaction.png"
                className="h-[60px] w-[60px]"
                alt="icon-total-transaction"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <Image
              src="/icons/ic-trending-up-24px.png"
              className="h-[24px] w-[24px]"
              alt="ic-trending-up"
              width={500}
              height={500}
            />
            <span className="ms-1 text-base font-medium text-[#00B69B]">
              {" "}
              1.3%
            </span>
            <p className="ms-1 text-base font-medium text-[#606060]">
              So với hôm qua
            </p>
          </div>
        </div>
        <div className="shadows-custom rounded-lg bg-white pb-3 pe-3 ps-4 pt-3">
          <div className="grid grid-cols-2">
            <div>
              <h3 className="mt-1 text-base font-semibold text-[#525C67]">
                {trans("home.total-revenue")}
              </h3>
              <h2 className="mt-4 text-2xl font-semibold tracking-wider text-[#202224]">
                90.000.000đ
              </h2>
            </div>
            <div className="flex justify-end">
              <Image
                src="/icons/icon-total-revenue.png"
                className="h-[60px] w-[60px]"
                alt="icon-total-transaction"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <Image
              src="/icons/ic-trending-down-24px.png"
              className="h-[24px] w-[24px]"
              alt="ic-trending-down"
              width={500}
              height={500}
            />
            <span className="ms-1 text-base font-medium text-[#F93C65]">
              {" "}
              4.3%
            </span>
            <p className="ms-1 text-base font-medium text-[#606060]">
              So với hôm qua
            </p>
          </div>
        </div>
        <div className="shadows-custom rounded-lg bg-white pb-3 pe-3 ps-4 pt-3">
          <div className="grid grid-cols-2">
            <div>
              <h3 className="mt-1 text-base font-semibold text-[#525C67]">
                {trans("home.pending-trading")}
              </h3>
              <h2 className="mt-4 text-2xl font-semibold tracking-wider text-[#202224]">
                2040
              </h2>
            </div>
            <div className="flex justify-end">
              <Image
                src="/icons/icon-pending-transaction.png"
                className="h-[60px] w-[60px]"
                alt="icon-total-transaction"
                width={500}
                height={500}
              />
            </div>
          </div>
          <div className="mt-6 flex items-center">
            <Image
              src="/icons/ic-trending-up-24px.png"
              className="h-[24px] w-[24px]"
              alt="ic-trending-up"
              width={500}
              height={500}
            />
            <span className="ms-1 text-base font-medium text-[#00B69B]">
              {" "}
              1.8%
            </span>
            <p className="ms-1 text-base font-medium text-[#606060]">
              So với hôm qua
            </p>
          </div>
        </div>
      </div>
      <div className="mt-3 grid grid-cols-12 gap-3">
        <div className="col-span-12 xl:col-span-4">
          <ChartThree />
        </div>
        <div className="col-span-12 xl:col-span-8">
          <ChartOne />
        </div>
      </div>

      <div className="shadows-custom mt-3 overflow-hidden rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-3">
          <h3 className="text-lg font-medium text-[#101828]">
            {trans("home.recent-transactions")}
          </h3>
          <button className="flex items-center rounded-lg border bg-white px-4 py-2 text-[#344054] duration-200 hover:bg-gray-100">
            {trans("home.view-all")}
            <div className="ms-1">
              <Image
                src="/icons/ArrowRight.svg"
                alt="ArrowRight"
                className="h-[15px] w-[15px]"
                width={500}
                height={500}
              />
            </div>
          </button>
        </div>
        <hr />
        <div className="overflow-x-auto">
          <Table
            columns={columns}
            dataSource={handleDataAccount}
            pagination={false}
            scroll={{ x: "max-content" }}
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
