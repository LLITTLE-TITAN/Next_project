import type { NextPage } from "next";
import FrameComponent1 from "./live_frame-component1";

const FrameComponent5: NextPage = () => {
  return (
    <div className="w-[314px] flex flex-col items-start justify-start gap-[31px] mq900:hidden mq450:gap-[15px_31px]">
      <div className="flex flex-row items-start justify-start py-0 px-2.5">
        <button className="cursor-pointer py-[14.5px] px-[15px] bg-gray-500 rounded-46xl flex flex-row items-start justify-start gap-[8px] whitespace-nowrap border-[1px] border-solid border-dimgray-300 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-900">
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
            alt=""
            src="/maximize02-1.svg"
          />
          <div className="relative text-sm tracking-[-0.01em] font-headline-2-regular text-neutral-00 text-left">
            Full Screen mode
          </div>
        </button>
      </div>
      <FrameComponent1 />
      <div className="rounded-lg flex flex-row items-start justify-start">
        <div className="rounded-lg bg-surface-color-surface-2 flex flex-row items-start justify-start py-2 px-[7px] gap-[8px] border-[1px] border-solid border-stroke-gradient-dark">
          <div className="w-[30px] rounded-xl bg-purple-color-base box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-plum">
            <img className="h-3.5 w-3.5 relative" alt="" src="/plus-2.svg" />
          </div>
          <div className="w-[30px] rounded-xl bg-green-2 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-mediumspringgreen">
            <img
              className="h-3.5 w-3.5 relative"
              loading="lazy"
              alt=""
              src="/play.svg"
            />
          </div>
          <div className="h-[22px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
            <div className="w-px h-3.5 relative box-border opacity-[0.2] border-r-[1px] border-solid border-neutral-00" />
          </div>
          <div className="w-[30px] rounded-xl bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
            <img
              className="h-3.5 w-3.5 relative"
              loading="lazy"
              alt=""
              src="/settings02-1.svg"
            />
          </div>
          <div className="w-[30px] rounded-xl bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/maximize02-21.svg"
            />
          </div>
          <div className="w-[30px] rounded-xl bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
            <img
              className="h-3.5 w-3.5 relative"
              loading="lazy"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
