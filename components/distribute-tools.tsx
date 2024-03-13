import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type DistributeToolsType = {
  prototyping?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
};

const DistributeTools: NextPage<DistributeToolsType> = ({
  prototyping,
  propWidth,
  propFlex,
  propMinWidth,
}) => {
  const distributeToolsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
    };
  }, [propWidth, propFlex, propMinWidth]);

  return (
    <div
      className="w-[442px] flex flex-col items-start justify-start gap-[16px_0px] max-w-full text-center text-lg text-neutral-00 font-caption-1-regular"
      style={distributeToolsStyle}
    >
      <div className="w-[167px] flex flex-row items-start justify-start gap-[0px_8px] text-base text-gray-700">
        <div className="flex-1 flex flex-col items-start justify-start pt-1.5 px-0 pb-0">
          <div className="self-stretch relative">Upcoming events</div>
        </div>
        <div className="w-[25px] rounded-3xs bg-darkslategray-700 box-border flex flex-row items-start justify-start py-1.5 px-[7px] opacity-[0.8] text-left text-sm text-neutral-00 border-[1px] border-solid border-dimgray-300">
          <div className="relative leading-[140%]">{prototyping}</div>
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
  );
};

export default DistributeTools;
