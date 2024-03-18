import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ContainerWithButtonsType = {
  /** Style props */
  propGap?: CSSProperties["gap"];
  propFlexWrap?: CSSProperties["flexWrap"];
  propHeight?: CSSProperties["height"];
  propHeight1?: CSSProperties["height"];
};

const ContainerWithButtons: NextPage<ContainerWithButtonsType> = ({
  propGap,
  propFlexWrap,
  propHeight,
  propHeight1,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      flexWrap: propFlexWrap,
    };
  }, [propGap, propFlexWrap]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const frameButtonStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight1,
    };
  }, [propHeight1]);

  return (
    <div
      className="self-stretch bg-gray-2200 box-border flex flex-row items-center justify-start pt-6 px-6 pb-4 gap-[8px] max-w-full text-left text-base text-neutral-00 font-caption-2-semibold border-b-[1px] border-solid border-gray-2100 mq800:flex-wrap"
      style={frameDivStyle}
    >
      <div className="flex-1 flex flex-row items-center justify-start gap-[8px] min-w-[256px] max-w-full mq450:flex-wrap">
        <div
          className="h-[30px] w-[30px] rounded-xl bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark"
          style={frameDiv1Style}
        >
          <img className="h-3.5 w-3.5 relative" alt="" src="/searchmd.svg" />
        </div>
        <input
          type="text"
          style={{
            backgroundColor: 'rgba(32,32,32,0.9)',
            padding: "10px",
            
          }}
          className="flex bg-transparent pl-2 text-[#cccccc] outline-0"
        />
      </div>
      <button
        className="cursor-pointer py-2 px-[7px] bg-gray-100 h-8 rounded-sm box-border flex flex-row items-start justify-start gap-[4px] whitespace-nowrap border-[1px] border-solid border-stroke-gradient-dark hover:bg-dimgray-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-200"
        style={frameButtonStyle}
      >
        <img
          className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
          alt=""
          src="/joiner.svg"
        />
        <div className="relative text-xs font-caption-2-semibold text-gray-700 text-left">
          Enter to search
        </div>
      </button>
    </div>
  );
};

export default ContainerWithButtons;
