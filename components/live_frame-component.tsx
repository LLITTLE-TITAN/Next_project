import type { NextPage } from "next";
import FrameComponent1 from "./live_frame-component1";
import React, { useState } from "react";

interface NavigateProps {
  IncreaseScreenSize: () => void;
  DecreaseScreenSize: () => void;
  zoomFactor: number
}
const FrameComponent: React.FC<NavigateProps> = ({
  IncreaseScreenSize,
  DecreaseScreenSize,
  zoomFactor
}) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleToggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[31px] text-center text-13xl text-gray-700 font-headline-2-regular mq450:gap-[15px_31px]">
      <div className="flex flex-row items-start justify-start py-0 px-2.5">
        <button className="bg-[#808080] cursor-pointer py-[14.5px] px-[15px] rounded-46xl flex flex-row items-start justify-start gap-[8px] whitespace-nowrap border-[1px] border-solid border-dimgray-300 hover:bg-[#808080] hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-900">
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
      <div className="rounded-lg flex flex-col items-start justify-start py-0 px-0 relative gap-[10px] text-left text-sm text-gray-3000">
        <div className="rounded-lg bg-surface-color-surface-2 flex flex-row items-start justify-start py-2 px-[7px] gap-[8px] border-[1px] border-solid border-stroke-gradient-dark">
          <div
            onClick={handleToggleContent}
            className="cursor-pointer w-[34px] rounded-xl bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark"
          >
            <img
              className="h-[18px] w-[18px] relative"
              alt=""
              src="/settings02.svg"
            />
          </div>
          <div className="cursor-pointer w-[34px] rounded-xl bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
            <img
              className="h-[18px] w-[18px] relative"
              loading="lazy"
              alt=""
              src="/maximize02-2.svg"
            />
          </div>
          <div className="cursor-pointer w-[34px] rounded-xl bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
            <img
              className="h-[18px] w-[18px] relative"
              loading="lazy"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
        {isContentVisible && (
          <div className="w-[233px] !m-[0] absolute bottom-[50px] left-[0px] rounded-3xs bg-gray-3100 shadow-[0px_4px_10px_rgba(109,_109,_109,_0.17)_inset,_0px_126px_35px_rgba(0,_0,_0,_0.01),_0px_81px_32px_rgba(0,_0,_0,_0.06),_0px_45px_27px_rgba(0,_0,_0,_0.2),_0px_20px_20px_rgba(0,_0,_0,_0.34),_0px_5px_11px_rgba(0,_0,_0,_0.4)] [backdrop-filter:blur(40px)] box-border overflow-hidden flex flex-row items-start justify-start border-[1px] border-solid border-dimgray-400">
            <div className="flex-1 flex flex-col items-start justify-start py-1 px-0">
              <div className="self-stretch rounded-md flex flex-col items-start justify-start py-1 px-2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[6px]">
                  <div className="cursor-pointer w-[30px] rounded-lg bg-neutral-90 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-3.5 w-3.5 relative object-contain"
                      loading="lazy"
                      alt=""
                      src="/user02.svg"
                    />
                  </div>
                  <div className="flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Copy Event Link
                  </div>
                  <div className="w-[101px] relative text-base font-medium font-body-body-3-medium hidden">
                    For 5000 SMS
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-col items-start justify-start py-1 px-2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[6px]">
                  <div className="cursor-pointer w-[30px] rounded-lg bg-neutral-90 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-3.5 w-3.5 relative"
                      loading="lazy"
                      alt=""
                      src="/messagetextcircle02.svg"
                    />
                  </div>
                  <div className="flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Switch to admin panel
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-1 px-2">
                <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                  <div className="cursor-pointer h-[34px] w-[34px] rounded-lg bg-neutral-90 box-border flex flex-row items-center justify-center py-2 px-[5px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-[18.1px] w-[18.1px] relative overflow-hidden shrink-0 object-contain"
                      loading="lazy"
                      alt=""
                      src="/hand@2x.png"
                    />
                  </div>
                  <div className="flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Screen Size
                  </div>
                  <div className="h-[19px] w-0 relative text-base font-medium font-body-body-3-medium inline-block" />
                  <div className="flex flex-row items-center justify-center gap-[6px] text-xs">
                    <img
                      onClick={DecreaseScreenSize}
                      className="h-3.5 w-3.5 relative overflow-hidden shrink-0 cursor-pointer"
                      loading="lazy"
                      alt=""
                      src="/minus.svg"
                    />
                    <div className="relative leading-[140%] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      {zoomFactor}%
                    </div>
                    <img
                      onClick={IncreaseScreenSize}
                      className="cursor-pointer h-3.5 w-3.5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/plus-7.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FrameComponent;
