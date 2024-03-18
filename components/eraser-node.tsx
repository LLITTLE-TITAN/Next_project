import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type EraserNodeType = {
  avatar?: string;
  avatar1?: string;
  avatar2?: string;
  avatar3?: string;
  avatar4?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
  propMargin?: CSSProperties["margin"];
  propPosition?: CSSProperties["position"];
  propTop?: CSSProperties["top"];
  propLeft?: CSSProperties["left"];
};

const EraserNode: NextPage<EraserNodeType> = ({
  avatar,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  propFlex,
  propWidth,
  propMargin,
  propPosition,
  propTop,
  propLeft,
}) => {
  const eraserNodeStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
      margin: propMargin,
      position: propPosition,
      top: propTop,
      left: propLeft,
    };
  }, [propFlex, propWidth, propMargin, propPosition, propTop, propLeft]);

  return (
    <div
      className="flex-1 flex flex-col items-start justify-start gap-[55px] z-[2] text-left text-xs text-neutral-00 font-caption-1-medium"
      style={eraserNodeStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
          <div className="w-[11px] h-[11px] relative rounded bg-[firebrick]" />
        </div>
        <div className="flex flex-row items-start justify-start gap-[6px]">
          <img
            className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
            loading="lazy"
            alt=""
            src={avatar}
          />
          <img
            className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
            loading="lazy"
            alt=""
            src={avatar1}
          />
          <img
            className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
            loading="lazy"
            alt=""
            src={avatar2}
          />
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
        <div className="relative">
          <span>
            <span className="font-medium">20</span>
          </span>
          <span className="text-gray-2800">
            <span>{` `}</span>
            <span>Total Video</span>
          </span>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
          <div className="self-stretch relative leading-[120%] font-medium">
            How we plan the beautiful trip in Bali, Ind...
          </div>
          <div className="flex flex-row items-start justify-start gap-[8px]">
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-5 h-5 rounded-md overflow-hidden shrink-0 object-cover"
                loading="lazy"
                alt=""
                src={avatar3}
              />
            </div>
            <div className="h-[19.5px] flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border">
              <div className="w-px h-[11px] relative box-border opacity-[0.5] border-r-[1px] border-solid border-neutral-00" />
            </div>
            <button className="cursor-pointer [border:none] py-1 pr-2 pl-1 bg-gray-2600 rounded-sm1 [backdrop-filter:blur(8px)] flex flex-row items-start justify-start gap-[6px]">
              <img
                className="h-5 w-5 rounded-md overflow-hidden shrink-0 object-cover"
                alt=""
                src={avatar4}
              />
              <div className="flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0">
                <div className="relative text-3xs font-medium font-caption-1-medium text-neutral-00 text-left">
                  +420 Subscriber
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EraserNode;
