"use client";
import { useStepperStore } from "@/stores/stepper.store";

interface Props {
  title1: string;
  title2: string;
  title3: string;
}

export const Stepper = (props: Props) => {
  const { title1, title2, title3 } = props;
  const { step } = useStepperStore();
  const step1 = [1, 2, 3, 4, 5];
  const step2 = [21, 22, 23, 24, 25];
  const step3 = [31, 32, 33, 34, 35];
  return (
    <div>
      <div className="w-full">
        <div className="relative flex w-full justify-around gap-5">
          <div className="absolute left-0 top-11.5  h-0.5 w-2/3 translate-x-1/4 border-b-2 border-dotted border-gray-300"></div>
          {(!step2.includes(step) || !step3.includes(step)) && (
            <div className="z-0 mt-8 flex  min-w-20 max-w-22.5 flex-col items-center">
              <div className="z-10 flex size-7 flex-shrink-0 place-items-center items-center justify-center rounded-full bg-[#4FAAC1] font-medium text-white">
                1
              </div>
              <div className="mt-2">
                <span className="block text-center text-sm font-medium text-[#4FAAC1]">
                  {title1}
                </span>
              </div>
            </div>
          )}

          {!step1.includes(step) || !step3.includes(step) ? (
            <div className="z-0 mt-8 flex  min-w-20 max-w-22.5 flex-col items-center">
              <div className="z-1 rounded-2xl bg-gradient-to-r from-[#76DCFF] to-[#FF89E7] p-px">
                <div className="rounded-full bg-white">
                  <span className="border-3 flex size-7 flex-shrink-0 items-center justify-center font-medium text-[#4FAAC1]">
                    2
                  </span>
                </div>
              </div>
              <div className="my-auto mt-2">
                <span className="block text-center text-sm font-medium text-[#4FAAC1]">
                  {title2}
                </span>
              </div>
            </div>
          ) : (
            <div className="z-0 mt-8 flex  min-w-20 max-w-22.5 flex-col items-center">
              <div className="z-10 flex size-7 flex-shrink-0 place-items-center items-center justify-center rounded-full bg-[#4FAAC1] font-medium text-white">
                2
              </div>
              <div className="mt-2">
                <span className="block text-center text-sm font-medium text-[#4FAAC1]">
                  {title2}
                </span>
              </div>
            </div>
          )}

          {!step1.includes(step) || !step2.includes(step) ? (
            <div className="z-0 mt-8 flex  min-w-20 max-w-22.5 flex-col items-center">
              <div className="z-1 rounded-2xl bg-gradient-to-r from-[#76DCFF] to-[#FF89E7] p-px">
                <div className="rounded-full bg-white">
                  <span className="border-3 flex size-7 flex-shrink-0 items-center justify-center font-medium text-[#4FAAC1]">
                    3
                  </span>
                </div>
              </div>
              <div className="mt-2">
                <span className="block min-w-25 text-center text-sm font-medium text-[#4FAAC1] ">
                  {title3}
                </span>
              </div>
            </div>
          ) : (
            <div className="z-0 mt-8 flex  min-w-20 max-w-22.5 flex-col items-center">
              <div className="z-10 flex size-7 flex-shrink-0 place-items-center items-center justify-center rounded-full bg-[#4FAAC1] font-medium text-white">
                3
              </div>
              <div className="mt-2">
                <span className="block text-center text-xs font-medium text-[#4FAAC1]">
                  {title3}
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
