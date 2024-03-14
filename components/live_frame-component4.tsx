import type { NextPage } from "next";

const FrameComponent4: NextPage = () => {
  return (
    <header className="self-stretch flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-xs text-neutral-00 font-headline-2-regular">
      <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
        <button className="cursor-pointer py-[14.5px] px-[15px] bg-gray-500 rounded-46xl flex flex-row items-start justify-start gap-[8px] whitespace-nowrap border-[1px] border-solid border-dimgray-300 hover:bg-gainsboro-200 hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-900">
          <img
            className="h-[18px] w-[18px] relative overflow-hidden shrink-0 min-h-[18px]"
            alt=""
            src="/maximize02-1.svg"
          />
          <div className="relative text-sm tracking-[-0.01em] font-headline-2-regular text-neutral-00 text-left whitespace-nowrap">
            Full Screen mode
          </div>
        </button>
      </div>
      <div className="self-stretch rounded-2xl bg-gray-3300 shadow-[0px_24px_94px_-20px_rgba(0,_0,_0,_0.55)] overflow-hidden flex flex-col items-start justify-between py-[8.5px] px-4 box-border min-h-[55px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
            <div className="rounded-md [background:linear-gradient(180deg,_#363636,_#232323)] flex flex-row items-center justify-start py-1 pr-[7px] pl-[3px] gap-[8px] border-[1px] border-solid border-stroke-gradient-dark">
            <div className="w-[30px] rounded-sm1 bg-brand-color-tertiary-60 shadow-[0px_0px_14px_rgba(111,_191,_132,_0.4)] box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-lightgreen">
              <img
                className="h-3.5 w-3.5 relative"
                loading="lazy"
                alt=""
                src="/messagechatcircle.svg"
              />
            </div>
            <div className="relative font-medium">{`Q&A`}</div>
            <div className="rounded-sm1 [background:linear-gradient(146.31deg,_#4d4d4f,_#3d3d3d)] flex flex-row items-center justify-center py-0.5 px-1.5 text-3xs text-gray-3200">
              <div className="relative leading-[140%] font-semibold">21</div>
            </div>
          </div>
          <div className="h-[38px] w-[161px] rounded-md [background:linear-gradient(180deg,_#363636,_#232323)] box-border flex flex-row items-center justify-between py-1 px-4 border-[1px] border-solid border-stroke-gradient-dark">
            <div className="relative font-medium">Popular</div>
            <img
              className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
              alt=""
              src="/chevronup.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent4;
