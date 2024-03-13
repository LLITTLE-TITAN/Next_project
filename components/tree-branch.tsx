import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type TreeBranchType = {
  timers?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propBottom?: CSSProperties["bottom"];
};

const TreeBranch: NextPage<TreeBranchType> = ({
  timers,
  propTop,
  propBottom,
}) => {
  const treeBranchStyle: CSSProperties = useMemo(() => {
    return {
      top: propTop,
      bottom: propBottom,
    };
  }, [propTop, propBottom]);

  return (
    <div
      className="w-[1200px] !m-[0] absolute top-[-58px] left-[-1018px] rounded-lg bg-surface-color-surface-2 box-border overflow-hidden flex flex-row items-start justify-between py-4 pr-[17px] pl-[15px] gap-[20px] text-center text-sm text-gray-700 font-caption-1-regular border-[1px] border-solid border-line-2"
      style={treeBranchStyle}
    >
      <div className="w-[793px] flex flex-row items-start justify-start gap-[0px_99px] max-w-full mq750:flex-wrap">
        <div className="w-[252px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border min-w-[252px] mq750:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px_0px]">
            <div className="w-[103px] flex flex-row items-start justify-start gap-[0px_4px]">
              <div className="flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
                <div className="w-2 h-2 relative rounded-[50%] bg-green-2" />
              </div>
              <div className="flex-1 relative leading-[140%]">4 New Videos</div>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[0px_16px] text-left text-xl text-neutral-00">
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
                  <div className="flex-1 relative leading-[150%]">
                    4231 members
                  </div>
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
              <button className="cursor-pointer [border:none] py-2 px-3.5 bg-surface-color-surface-3 rounded-md overflow-hidden flex flex-row items-start justify-start gap-[0px_8px]">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                  alt=""
                  src="/component-1placeholder.svg"
                />
                <div className="relative text-sm leading-[20px] font-semibold font-caption-1-regular text-neutral-00 text-left">
                  View Portal
                </div>
                <input
                  className="m-0 h-5 w-5 relative min-h-[20px]"
                  type="checkbox"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[16px_0px] min-w-[287px] max-w-full text-lg text-neutral-00">
          <div className="w-[167px] flex flex-row items-start justify-start gap-[0px_8px] text-base text-gray-700">
            <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
              <div className="self-stretch relative">Upcoming events</div>
            </div>
            <div className="w-[25px] rounded-3xs bg-darkslategray-700 box-border flex flex-row items-start justify-start py-1.5 px-[7px] opacity-[0.8] text-left text-sm text-neutral-00 border-[1px] border-solid border-dimgray-300">
              <div className="relative leading-[140%]">{timers}</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
            <div className="self-stretch relative font-medium">
              Fitness Lorem ipsum title dolor sit amet placeholder
            </div>
            <div className="w-[283px] flex flex-row items-start justify-start gap-[0px_9.33px] text-base text-gray-700">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[18px] h-[18px] relative"
                  alt=""
                  src="/users02-3.svg"
                />
              </div>
              <div className="w-[75px] relative inline-block">In-Person</div>
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                <div className="w-1.5 h-1.5 relative rounded-[50%] bg-gray-1800" />
              </div>
              <div className="flex-1 relative">Thu, Jan 11, 06.00 AM</div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px_0px]">
            <div className="self-stretch relative font-medium">
              Fitness Lorem ipsum title dolor sit amet placeholder
            </div>
            <div className="w-[283px] flex flex-row items-start justify-start gap-[0px_9.33px] text-base text-gray-700">
              <div className="flex flex-col items-start justify-start pt-px px-0 pb-0">
                <img
                  className="w-[18px] h-[18px] relative"
                  alt=""
                  src="/users02-3.svg"
                />
              </div>
              <div className="w-[75px] relative inline-block">In-Person</div>
              <div className="flex flex-col items-start justify-start pt-[7px] px-0 pb-0">
                <div className="w-1.5 h-1.5 relative rounded-[50%] bg-gray-1800" />
              </div>
              <div className="flex-1 relative">Thu, Jan 11, 06.00 AM</div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[30px] rounded-lg bg-gray-100 box-border flex flex-row items-start justify-center py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
        <img
          className="h-3.5 w-3.5 relative"
          alt=""
          src="/dotshorizontal.svg"
        />
      </div>
    </div>
  );
};

export default TreeBranch;
