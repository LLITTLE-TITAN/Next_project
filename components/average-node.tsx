import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type AverageNodeType = {
  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propWidth?: CSSProperties["width"];
  propFlexWrap?: CSSProperties["flexWrap"];
};

const AverageNode: NextPage<AverageNodeType> = ({
  propFlex,
  propMinWidth,
  propWidth,
  propFlexWrap,
}) => {
  const averageNodeStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      width: propWidth,
    };
  }, [propFlex, propMinWidth, propWidth]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      flexWrap: propFlexWrap,
    };
  }, [propFlexWrap]);

  return (
    <div
      className="flex-1 rounded-2xl bg-surface-color-surface-2 box-border overflow-hidden flex flex-col items-start justify-start py-4 px-[15px] gap-[18px_0px] min-w-[290px] max-w-full text-left text-lg text-neutral-00 font-caption-1-regular border-[1px] border-solid border-line-2"
      style={averageNodeStyle}
    >
      <div className="self-stretch flex flex-row items-center justify-between [row-gap:20px] max-w-full gap-[0px] mq450:flex-wrap">
        <div className="w-[324.7px] flex flex-row items-center justify-start gap-[0px_16px] max-w-full mq450:flex-wrap">
          <img
            className="h-[61px] w-[61px] relative rounded-md1 overflow-hidden shrink-0"
            alt=""
            src="/frame-1171277256.svg"
          />
          <div className="flex-1 flex flex-col items-start justify-start gap-[4px_0px] min-w-[161px]">
            <div className="relative font-medium">Oriez Fitness</div>
            <div className="w-[75px] relative font-medium text-gray-700 text-center inline-block">
              Personal
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
      <div className="self-stretch flex flex-col items-start justify-start max-w-full text-center">
        <div
          className="self-stretch flex flex-row items-start justify-start py-[8.5px] px-0 gap-[0px_10px] mq450:flex-wrap"
          style={frameDiv1Style}
        >
          <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
            <img
              className="w-5 h-5 relative overflow-hidden shrink-0"
              alt=""
              src="/rocket01.svg"
            />
          </div>
          <div className="flex-1 flex flex-col items-start justify-start min-w-[198px]">
            <div className="w-[123px] relative font-medium inline-block">
              Active Spaces
            </div>
          </div>
          <div className="w-[11px] relative font-medium inline-block mq450:w-full mq450:h-[11px]">
            6
          </div>
        </div>
        <div className="self-stretch flex flex-row items-end justify-start max-w-full">
          <div className="h-10 flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[8.5px] box-border gap-[8.5px_0px] max-w-full mq450:h-auto">
            <div className="self-stretch h-px relative box-border border-t-[1px] border-solid border-line-2" />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="w-[79px] flex flex-row items-start justify-start gap-[0px_10px]">
                <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                  <img
                    className="w-5 h-5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/ticket01.svg"
                  />
                </div>
                <div className="flex-1 relative font-medium">Event</div>
              </div>
              <div className="relative font-medium">20 Event</div>
            </div>
          </div>
          <div className="h-px flex-1 relative box-border max-w-full ml-[-354.7px] border-t-[1px] border-solid border-line-2" />
        </div>
        <div className="self-stretch flex flex-row items-center justify-between py-2 px-0 gap-[20px] mq450:flex-wrap">
          <div className="w-[125px] flex flex-row items-center justify-start gap-[0px_10px]">
            <img
              className="h-5 w-5 relative overflow-hidden shrink-0"
              alt=""
              src="/users02.svg"
            />
            <div className="flex-1 relative font-medium">Subscriber</div>
          </div>
          <div className="flex flex-row items-center justify-start gap-[0px_8px]">
            <div className="w-[29px] relative font-medium inline-block">
              312
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
    </div>
  );
};

export default AverageNode;
