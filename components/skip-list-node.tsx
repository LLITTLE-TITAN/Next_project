import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type SkipListNodeType = {
  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
};

const SkipListNode: NextPage<SkipListNodeType> = ({ propMinWidth }) => {
  const skipListNodeStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className="w-[252px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border text-left text-sm text-neutral-00 font-caption-1-regular"
      style={skipListNodeStyle}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px]">
        <div className="w-[103px] flex flex-row items-start justify-start gap-[0px_4px] text-center text-gray-700">
          <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
            <div className="w-2 h-2 relative rounded-[50%] bg-green-2" />
          </div>
          <div className="flex-1 relative leading-[140%]">4 New Videos</div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px] text-xl">
          <img
            className="h-14 w-14 relative rounded-lg overflow-hidden shrink-0 min-h-[56px]"
            loading="lazy"
            alt=""
            src="/frame-1171276847.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-center gap-[4px_0px]">
            <div className="relative leading-[140%] font-medium mq450:text-base mq450:leading-[22px]">
              Oriez Fitness
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[0px_8px] text-center text-base text-gray-700">
              <div className="flex-1 relative leading-[150%]">4231 members</div>
              <div className="flex flex-row items-center justify-start">
                <img
                  className="h-6 w-6 rounded-md overflow-hidden shrink-0 object-cover min-h-[24px]"
                  alt=""
                  src="/avatar-6@2x.png"
                />
                <img
                  className="h-6 w-6 rounded-md overflow-hidden shrink-0 object-cover min-h-[24px] z-[1] ml-[-6px]"
                  alt=""
                  src="/avatar-7@2x.png"
                />
                <img
                  className="h-6 w-6 rounded-md overflow-hidden shrink-0 object-cover min-h-[24px] z-[2] ml-[-6px]"
                  alt=""
                  src="/avatar-8@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-start gap-[0px_10px]">
          <button className="cursor-pointer py-2 px-[13px] bg-[transparent] rounded-md shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] overflow-hidden flex flex-row items-start justify-start gap-[0px_8px] border-[1px] border-solid border-lightgray">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
              alt=""
              src="/component-1placeholder.svg"
            />
            <div className="relative text-sm leading-[20px] font-semibold font-caption-1-regular text-neutral-00 text-left">
              Subscribed
            </div>
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
              alt=""
              src="/plus.svg"
            />
          </button>
          <div className="rounded-md bg-surface-color-surface-3 overflow-hidden flex flex-row items-start justify-start py-2 px-3.5 gap-[0px_8px]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
              alt=""
              src="/component-1placeholder.svg"
            />
            <div className="relative leading-[20px] font-semibold">
              View Portal
            </div>
            <img
              className="h-5 w-5 relative min-h-[20px]"
              alt=""
              src="/arrowupright-1.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkipListNode;
