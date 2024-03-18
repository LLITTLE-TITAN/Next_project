import type { NextPage } from "next";
import EraserNode from "./eraser-node";
import { useState } from "react";
interface NavigateProps {
  isListLayout: boolean;
}
const ConstantNodes: React.FC<NavigateProps> = ({ isListLayout }) => {
  const [isClicked, setIsClicked] = useState("0");
  const handleClick = () => {
    setIsClicked("1");
  };
  return (
    <div className="relative self-stretch flex flex-row items-start justify-center gap-[16.19999999999999px] text-left text-xs text-neutral-00 font-caption-1-medium mq1025:flex-wrap">
      {/* {isClicked == "0" ? (
        <div className="relative self-stretch flex flex-row items-start justify-center gap-[16.19999999999999px] text-left text-xs text-neutral-00 font-caption-1-medium mq1025:flex-wrap">
          <div
            onClick={handleClick}
            className="cursor-pointer flex-1 rounded-lg bg-neutral-00 overflow-hidden flex flex-col items-start justify-start pt-5 px-5 pb-8 box-border relative gap-[47px] min-w-[153px] z-[1]"
          >
            <img
              className="w-[420px] h-[588px] absolute !m-[0] top-[-324px] right-[-93px] object-cover"
              alt=""
              src="/image-137@2x.png"
            />
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.7),_rgba(0,_0,_0,_0)_56.65%,_rgba(0,_0,_0,_0.51))] z-[1]" />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[2]">
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <div className="w-[11px] h-[11px] relative rounded bg-[firebrick]" />
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <img
                  className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                  loading="lazy"
                  alt=""
                  src="/avatar@2x.png"
                />
                <img
                  className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                  loading="lazy"
                  alt=""
                  src="/avatar-1@2x.png"
                />
                <img
                  className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                  loading="lazy"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="relative z-[2]">
                <span>
                  <span className="font-medium">20</span>
                </span>
                <span className="text-gray-2800">
                  <span>{` `}</span>
                  <span>Total Video</span>
                </span>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
                <div className="self-stretch relative leading-[120%] font-medium z-[2]">
                  How we plan the beautiful trip in Bali, Ind...
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <img
                      className="w-5 h-5 rounded-md overflow-hidden shrink-0 object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/avatar-3@2x.png"
                    />
                  </div>
                  <div className="h-[19.5px] flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border">
                    <div className="w-px h-[11px] relative box-border opacity-[0.5] z-[2] border-r-[1px] border-solid border-neutral-00" />
                  </div>
                  <button className="cursor-pointer [border:none] py-1 pr-2 pl-1 bg-gray-2600 rounded-sm1 [backdrop-filter:blur(8px)] flex flex-row items-start justify-start gap-[6px] z-[2]">
                    <img
                      className="h-5 w-5 rounded-md overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-4@2x.png"
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
          <div className="rounded-lg bg-neutral-00 overflow-hidden flex flex-col items-end justify-start py-0 pr-[0.1999999999998181px] pl-0 relative gap-[10px] z-[1]">
            <img
              className="w-[241px] h-[292px] absolute !m-[0] top-[calc(50%_-_146px)] right-[-1.8px] object-cover"
              alt=""
              src="/image-140@2x.png"
            />
            <div className="w-[239px] flex flex-row items-start justify-start pt-5 pb-6 pr-[19.800000000000185px] pl-[26.199999999999815px] box-border relative">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.7),_rgba(0,_0,_0,_0)_56.65%,_rgba(0,_0,_0,_0.51))] z-[1]" />
              <EraserNode
                avatar="/avatar-5@2x.png"
                avatar1="/avatar-6@2x.png"
                avatar2="/avatar-5@2x.png"
                avatar3="/avatar-8@2x.png"
                avatar4="/avatar-9@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-neutral-00 overflow-hidden flex flex-col items-start justify-start pt-5 px-5 pb-8 box-border relative gap-[47px] min-w-[153px] z-[1]">
            <img
              className="w-[278px] h-[417px] absolute !m-[0] top-[-99px] right-[-21.6px] object-cover"
              alt=""
              src="/image-141@2x.png"
            />
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.7),_rgba(0,_0,_0,_0)_56.65%,_rgba(0,_0,_0,_0.51))] z-[1]" />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[2]">
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <div className="w-[11px] h-[11px] relative rounded  bg-[firebrick]" />
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <img
                  className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                  loading="lazy"
                  alt=""
                  src="/avatar-10@2x.png"
                />
                <img
                  className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                  alt=""
                  src="/avatar@2x.png"
                />
                <img
                  className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                  alt=""
                  src="/avatar-10@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="relative z-[2]">
                <span>
                  <span className="font-medium">20</span>
                </span>
                <span className="text-gray-2800">
                  <span>{` `}</span>
                  <span>Total Video</span>
                </span>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
                <div className="self-stretch relative leading-[120%] font-medium z-[2]">
                  How we plan the beautiful trip in Bali, Ind...
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <img
                      className="w-5 h-5 rounded-md overflow-hidden shrink-0 object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/avatar-13@2x.png"
                    />
                  </div>
                  <div className="h-[19.5px] flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border">
                    <div className="w-px h-[11px] relative box-border opacity-[0.5] z-[2] border-r-[1px] border-solid border-neutral-00" />
                  </div>
                  <button className="cursor-pointer [border:none] py-1 pr-2 pl-1 bg-gray-2600 rounded-sm1 [backdrop-filter:blur(8px)] flex flex-row items-start justify-start gap-[6px] z-[2]">
                    <img
                      className="h-5 w-5 rounded-md overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-14@2x.png"
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
          <div className="flex-1 rounded-lg bg-surface-color-surface-2 box-border overflow-hidden flex flex-row items-start justify-start pt-5 px-[19px] pb-6 min-w-[153px] z-[1] border-[1px] border-solid border-stroke-gradient-dark">
            <EraserNode
              avatar="/avatar@2x.png"
              avatar1="/avatar@2x.png"
              avatar2="/avatar@2x.png"
              avatar3="/avatar-18@2x.png"
              avatar4="/avatar-19@2x.png"
              propFlex="1"
              propWidth="unset"
              propMargin="unset"
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
            />
          </div>
          <div className="h-[220px] flex-1 rounded-lg bg-neutral-00 overflow-hidden flex flex-row items-start justify-start p-5 box-border relative gap-[10px] min-w-[153px] z-[1]">
            <img
              className="h-[432px] w-[296px] absolute !m-[0] top-[calc(50%_-_216px)] left-[calc(50%_-_148.3px)] object-cover"
              alt=""
              src="/image-143@2x.png"
            />
            <div className="h-full w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.7),_rgba(0,_0,_0,_0)_56.65%,_rgba(0,_0,_0,_0.51))] z-[1]" />
            <EraserNode
              avatar="/avatar@2x.png"
              avatar1="/avatar@2x.png"
              avatar2="/avatar@2x.png"
              avatar3="/avatar-23@2x.png"
              avatar4="/avatar-24@2x.png"
              propFlex="unset"
              propWidth="195px"
              propMargin="0 !important"
              propPosition="absolute"
              propTop="20px"
              propLeft="20px"
            />
          </div>
        </div>
      ) : (
        <div className="self-stretch flex flex-row flex-wrap items-end justify-start py-0 pr-0.5 pl-0 gap-[10px_54px] shrink-0 [debug_commit:612783b] text-lg text-gray-2900 mq725:gap-[10px_27px]">
          <div className="h-[101.8px] w-[184px] flex flex-col items-start justify-start">
            <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
              <div className="w-[97px] relative inline-block">Created on</div>
              <div className="w-[162px] relative font-medium text-neutral-00 inline-block">
                12 December 2023
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-surface-color-surface-2 box-border flex flex-row items-start justify-between py-4 pr-[17px] pl-[15px] min-w-[400px] max-w-full gap-[20px] text-sm text-neutral-00 border-[1px] border-solid border-stroke-gradient-dark mq1050:flex-wrap">
            <div className="w-[699px] flex flex-row items-end justify-start gap-[24px] max-w-full mq725:flex-wrap">
              <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start">
                <div className="h-[116.5px] w-32 relative hidden">
                  <div className="absolute w-[calc(100%_-_9.9px)] top-[-2.78px] right-[4.6px] left-[5.3px] rounded-[8.71px] bg-surface-color-surface-3 box-border h-[71.3px] [transform:_rotate(-2deg)] [transform-origin:0_0] border-[0.5px] border-solid border-stroke-gradient-dark" />
                </div>
                <div className="h-[119.7px] w-[127.9px] rounded-lg bg-neutral-00 overflow-hidden shrink-0 flex flex-row items-end justify-start z-[1]">
                  <div className="ml-[-50.09999999999991px] mb-[-24px] h-80 w-[228.6px] relative shrink-0 [debug_commit:612783b]">
                    <img
                      className="absolute top-[0px] left-[0px] w-[228.6px] h-80 object-cover"
                      alt=""
                      src="/image-137@2x.png"
                    />
                    <div className="absolute top-[187.2px] left-[61px] w-[11px] h-[11px] rounded bg-[firebrick] box-border z-[1]  " />
                  </div>
                </div>
              </button>
              <div className="flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-[8.800000000000182px] box-border min-w-[356px] max-w-full mq725:min-w-full">
                <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                  <div className="relative">
                    <span>
                      <span className="font-medium">20</span>
                    </span>
                    <span className="text-gray-2900">
                      <span>{` `}</span>
                      <span>Total Video</span>
                    </span>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-xl">
                    <h3 className="m-0 self-stretch relative text-inherit leading-[120%] font-medium font-inherit mq450:text-base mq450:leading-[19px]">
                      How we plan the beautiful trip in Bali, Indonesia
                    </h3>
                    <div className="h-9 flex flex-row items-start justify-start gap-[8px] text-xs">
                      <div className="h-8 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                        <img
                          className="w-7 h-7 rounded-sm1 overflow-hidden shrink-0 object-cover"
                          loading="lazy"
                          alt=""
                          src="/avatar@2x.png"
                        />
                      </div>
                      <div className="h-[23.5px] flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 box-border">
                        <div className="w-px h-[11px] relative box-border opacity-[0.2] border-r-[1px] border-solid border-neutral-00" />
                      </div>
                      <div className="self-stretch rounded-sm bg-gray-2800 [backdrop-filter:blur(8px)] flex flex-row items-start justify-start py-1 pr-2 pl-1 gap-[6px]">
                        <img
                          className="h-7 w-7 rounded-sm1 overflow-hidden shrink-0 object-cover"
                          loading="lazy"
                          alt=""
                          src="/avatar-1@2x.png"
                        />
                        <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
                          <div className="relative font-medium">
                            +420 Subscriber
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-start justify-start gap-[10px] text-gray-2900">
              <div className="flex flex-row items-start justify-start py-0 pr-0 pl-5">
                <div className="relative inline-block min-w-[64px]">
                  Watching
                </div>
              </div>
              <div className="h-6 flex flex-row items-start justify-start gap-[6px]">
                <img
                  className="h-6 w-6 rounded-md overflow-hidden shrink-0 object-cover min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/avatar-2@2x.png"
                />
                <img
                  className="h-6 w-6 rounded-md overflow-hidden shrink-0 object-cover min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/avatar-3@2x.png"
                />
                <img
                  className="h-6 w-6 rounded-md overflow-hidden shrink-0 object-cover min-h-[24px]"
                  loading="lazy"
                  alt=""
                  src="/avatar-2@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      )} */}
      
      {isListLayout == false ? (
        <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5 h-[500px] overflow-y-scroll">
          <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
            <div
              onClick={handleClick}
              className="cursor-pointer flex-1 rounded-lg bg-neutral-00 overflow-hidden flex flex-col items-start justify-start pt-5 px-5 pb-8 box-border relative gap-[47px] min-w-[153px] z-[1]"
            >
              <img
                className="w-[420px] h-[588px] absolute !m-[0] top-[-324px] right-[-93px] object-cover"
                alt=""
                src="/image-137@2x.png"
              />
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.7),_rgba(0,_0,_0,_0)_56.65%,_rgba(0,_0,_0,_0.51))] z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[2]">
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                  <div className="w-[11px] h-[11px] relative rounded bg-[firebrick]" />
                </div>
                <div className="flex flex-row items-start justify-start gap-[6px]">
                  <img
                    className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                    loading="lazy"
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <img
                    className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                    loading="lazy"
                    alt=""
                    src="/avatar-1@2x.png"
                  />
                  <img
                    className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                    loading="lazy"
                    alt=""
                    src="/avatar@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="relative z-[2]">
                  <span>
                    <span className="font-medium">20</span>
                  </span>
                  <span className="text-gray-2800">
                    <span>{` `}</span>
                    <span>Total Video</span>
                  </span>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
                  <div className="self-stretch relative leading-[120%] font-medium z-[2]">
                    How we plan the beautiful trip in Bali, Ind...
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <img
                        className="w-5 h-5 rounded-md overflow-hidden shrink-0 object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/avatar-3@2x.png"
                      />
                    </div>
                    <div className="h-[19.5px] flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border">
                      <div className="w-px h-[11px] relative box-border opacity-[0.5] z-[2] border-r-[1px] border-solid border-neutral-00" />
                    </div>
                    <button className="cursor-pointer [border:none] py-1 pr-2 pl-1 bg-gray-2600 rounded-sm1 [backdrop-filter:blur(8px)] flex flex-row items-start justify-start gap-[6px] z-[2]">
                      <img
                        className="h-5 w-5 rounded-md overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/avatar-4@2x.png"
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
          </div>
          <div className="max-w-md/2 mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
            <div
              onClick={handleClick}
              className="cursor-pointer flex-1 rounded-lg bg-neutral-00 overflow-hidden flex flex-col items-start justify-start pt-5 px-5 pb-8 box-border relative gap-[47px] min-w-[153px] z-[1]"
            >
              <img
                className="w-[420px] h-[588px] absolute !m-[0] top-[-324px] right-[-93px] object-cover"
                alt=""
                src="/image-137@2x.png"
              />
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.7),_rgba(0,_0,_0,_0)_56.65%,_rgba(0,_0,_0,_0.51))] z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[2]">
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                  <div className="w-[11px] h-[11px] relative rounded bg-[firebrick]" />
                </div>
                <div className="flex flex-row items-start justify-start gap-[6px]">
                  <img
                    className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                    loading="lazy"
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <img
                    className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                    loading="lazy"
                    alt=""
                    src="/avatar-1@2x.png"
                  />
                  <img
                    className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                    loading="lazy"
                    alt=""
                    src="/avatar@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="relative z-[2]">
                  <span>
                    <span className="font-medium">20</span>
                  </span>
                  <span className="text-gray-2800">
                    <span>{` `}</span>
                    <span>Total Video</span>
                  </span>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
                  <div className="self-stretch relative leading-[120%] font-medium z-[2]">
                    How we plan the beautiful trip in Bali, Ind...
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <img
                        className="w-5 h-5 rounded-md overflow-hidden shrink-0 object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/avatar-3@2x.png"
                      />
                    </div>
                    <div className="h-[19.5px] flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border">
                      <div className="w-px h-[11px] relative box-border opacity-[0.5] z-[2] border-r-[1px] border-solid border-neutral-00" />
                    </div>
                    <button className="cursor-pointer [border:none] py-1 pr-2 pl-1 bg-gray-2600 rounded-sm1 [backdrop-filter:blur(8px)] flex flex-row items-start justify-start gap-[6px] z-[2]">
                      <img
                        className="h-5 w-5 rounded-md overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/avatar-4@2x.png"
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
          </div>
          <div className="max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5">
            <div
              onClick={handleClick}
              className="cursor-pointer flex-1 rounded-lg bg-neutral-00 overflow-hidden flex flex-col items-start justify-start pt-5 px-5 pb-8 box-border relative gap-[47px] min-w-[153px] z-[1]"
            >
              <img
                className="w-[420px] h-[588px] absolute !m-[0] top-[-324px] right-[-93px] object-cover"
                alt=""
                src="/image-137@2x.png"
              />
              <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.7),_rgba(0,_0,_0,_0)_56.65%,_rgba(0,_0,_0,_0.51))] z-[1]" />
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[2]">
                <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                  <div className="w-[11px] h-[11px] relative rounded bg-[firebrick]" />
                </div>
                <div className="flex flex-row items-start justify-start gap-[6px]">
                  <img
                    className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                    loading="lazy"
                    alt=""
                    src="/avatar@2x.png"
                  />
                  <img
                    className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                    loading="lazy"
                    alt=""
                    src="/avatar-1@2x.png"
                  />
                  <img
                    className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                    loading="lazy"
                    alt=""
                    src="/avatar@2x.png"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
                <div className="relative z-[2]">
                  <span>
                    <span className="font-medium">20</span>
                  </span>
                  <span className="text-gray-2800">
                    <span>{` `}</span>
                    <span>Total Video</span>
                  </span>
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
                  <div className="self-stretch relative leading-[120%] font-medium z-[2]">
                    How we plan the beautiful trip in Bali, Ind...
                  </div>
                  <div className="flex flex-row items-start justify-start gap-[8px]">
                    <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                      <img
                        className="w-5 h-5 rounded-md overflow-hidden shrink-0 object-cover z-[2]"
                        loading="lazy"
                        alt=""
                        src="/avatar-3@2x.png"
                      />
                    </div>
                    <div className="h-[19.5px] flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border">
                      <div className="w-px h-[11px] relative box-border opacity-[0.5] z-[2] border-r-[1px] border-solid border-neutral-00" />
                    </div>
                    <button className="cursor-pointer [border:none] py-1 pr-2 pl-1 bg-gray-2600 rounded-sm1 [backdrop-filter:blur(8px)] flex flex-row items-start justify-start gap-[6px] z-[2]">
                      <img
                        className="h-5 w-5 rounded-md overflow-hidden shrink-0 object-cover"
                        alt=""
                        src="/avatar-4@2x.png"
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
          </div>
        </div>
      ) : (
        
        <div className="h-[300px] relative self-stretch flex flex-row items-start justify-center gap-[16.19999999999999px] text-left text-xs text-neutral-00 font-caption-1-medium mq1025:flex-wrap">
          <div
            onClick={handleClick}
            className="cursor-pointer flex-1 rounded-lg bg-neutral-00 overflow-hidden flex flex-col items-start justify-start pt-5 px-5 pb-8 box-border relative gap-[47px] min-w-[153px] z-[1]"
          >
            <img
              className="w-[420px] h-[588px] absolute !m-[0] top-[-324px] right-[-93px] object-cover"
              alt=""
              src="/image-137@2x.png"
            />
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.7),_rgba(0,_0,_0,_0)_56.65%,_rgba(0,_0,_0,_0.51))] z-[1]" />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[2]">
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <div className="w-[11px] h-[11px] relative rounded bg-[firebrick]" />
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <img
                  className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                  loading="lazy"
                  alt=""
                  src="/avatar@2x.png"
                />
                <img
                  className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                  loading="lazy"
                  alt=""
                  src="/avatar-1@2x.png"
                />
                <img
                  className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                  loading="lazy"
                  alt=""
                  src="/avatar@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="relative z-[2]">
                <span>
                  <span className="font-medium">20</span>
                </span>
                <span className="text-gray-2800">
                  <span>{` `}</span>
                  <span>Total Video</span>
                </span>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
                <div className="self-stretch relative leading-[120%] font-medium z-[2]">
                  How we plan the beautiful trip in Bali, Ind...
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <img
                      className="w-5 h-5 rounded-md overflow-hidden shrink-0 object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/avatar-3@2x.png"
                    />
                  </div>
                  <div className="h-[19.5px] flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border">
                    <div className="w-px h-[11px] relative box-border opacity-[0.5] z-[2] border-r-[1px] border-solid border-neutral-00" />
                  </div>
                  <button className="cursor-pointer [border:none] py-1 pr-2 pl-1 bg-gray-2600 rounded-sm1 [backdrop-filter:blur(8px)] flex flex-row items-start justify-start gap-[6px] z-[2]">
                    <img
                      className="h-5 w-5 rounded-md overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-4@2x.png"
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
          <div className="rounded-lg bg-neutral-00 overflow-hidden flex flex-col items-end justify-start py-0 pr-[0.1999999999998181px] pl-0 relative gap-[10px] z-[1]">
            <img
              className="w-[241px] h-[292px] absolute !m-[0] top-[calc(50%_-_146px)] right-[-1.8px] object-cover"
              alt=""
              src="/image-140@2x.png"
            />
            <div className="w-[239px] flex flex-row items-start justify-start pt-5 pb-6 pr-[19.800000000000185px] pl-[26.199999999999815px] box-border relative">
              <div className="h-full w-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.7),_rgba(0,_0,_0,_0)_56.65%,_rgba(0,_0,_0,_0.51))] z-[1]" />
              <EraserNode
                avatar="/avatar-5@2x.png"
                avatar1="/avatar-6@2x.png"
                avatar2="/avatar-5@2x.png"
                avatar3="/avatar-8@2x.png"
                avatar4="/avatar-9@2x.png"
              />
            </div>
          </div>
          <div className="flex-1 rounded-lg bg-neutral-00 overflow-hidden flex flex-col items-start justify-start pt-5 px-5 pb-8 box-border relative gap-[47px] min-w-[153px] z-[1]">
            <img
              className="w-[278px] h-[417px] absolute !m-[0] top-[-99px] right-[-21.6px] object-cover"
              alt=""
              src="/image-141@2x.png"
            />
            <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.7),_rgba(0,_0,_0,_0)_56.65%,_rgba(0,_0,_0,_0.51))] z-[1]" />
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] z-[2]">
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <div className="w-[11px] h-[11px] relative rounded  bg-[firebrick]" />
              </div>
              <div className="flex flex-row items-start justify-start gap-[6px]">
                <img
                  className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                  loading="lazy"
                  alt=""
                  src="/avatar-10@2x.png"
                />
                <img
                  className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                  alt=""
                  src="/avatar@2x.png"
                />
                <img
                  className="h-4 w-4 rounded-md overflow-hidden shrink-0 object-cover min-h-[16px]"
                  alt=""
                  src="/avatar-10@2x.png"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="relative z-[2]">
                <span>
                  <span className="font-medium">20</span>
                </span>
                <span className="text-gray-2800">
                  <span>{` `}</span>
                  <span>Total Video</span>
                </span>
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[16px] text-base">
                <div className="self-stretch relative leading-[120%] font-medium z-[2]">
                  How we plan the beautiful trip in Bali, Ind...
                </div>
                <div className="flex flex-row items-start justify-start gap-[8px]">
                  <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                    <img
                      className="w-5 h-5 rounded-md overflow-hidden shrink-0 object-cover z-[2]"
                      loading="lazy"
                      alt=""
                      src="/avatar-13@2x.png"
                    />
                  </div>
                  <div className="h-[19.5px] flex flex-col items-start justify-start pt-[8.5px] px-0 pb-0 box-border">
                    <div className="w-px h-[11px] relative box-border opacity-[0.5] z-[2] border-r-[1px] border-solid border-neutral-00" />
                  </div>
                  <button className="cursor-pointer [border:none] py-1 pr-2 pl-1 bg-gray-2600 rounded-sm1 [backdrop-filter:blur(8px)] flex flex-row items-start justify-start gap-[6px] z-[2]">
                    <img
                      className="h-5 w-5 rounded-md overflow-hidden shrink-0 object-cover"
                      alt=""
                      src="/avatar-14@2x.png"
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
          <div className="flex-1 rounded-lg bg-surface-color-surface-2 box-border overflow-hidden flex flex-row items-start justify-start pt-5 px-[19px] pb-6 min-w-[153px] z-[1] border-[1px] border-solid border-stroke-gradient-dark">
            <EraserNode
              avatar="/avatar@2x.png"
              avatar1="/avatar@2x.png"
              avatar2="/avatar@2x.png"
              avatar3="/avatar-18@2x.png"
              avatar4="/avatar-19@2x.png"
              propFlex="1"
              propWidth="unset"
              propMargin="unset"
              propPosition="unset"
              propTop="unset"
              propLeft="unset"
            />
          </div>
          <div className="h-[220px] flex-1 rounded-lg bg-neutral-00 overflow-hidden flex flex-row items-start justify-start p-5 box-border relative gap-[10px] min-w-[153px] z-[1]">
            <img
              className="h-[432px] w-[296px] absolute !m-[0] top-[calc(50%_-_216px)] left-[calc(50%_-_148.3px)] object-cover"
              alt=""
              src="/image-143@2x.png"
            />
            <div className="h-full w-full absolute !m-[0] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(180deg,_rgba(0,_0,_0,_0.7),_rgba(0,_0,_0,_0)_56.65%,_rgba(0,_0,_0,_0.51))] z-[1]" />
            <EraserNode
              avatar="/avatar@2x.png"
              avatar1="/avatar@2x.png"
              avatar2="/avatar@2x.png"
              avatar3="/avatar-23@2x.png"
              avatar4="/avatar-24@2x.png"
              propFlex="unset"
              propWidth="195px"
              propMargin="0 !important"
              propPosition="absolute"
              propTop="20px"
              propLeft="20px"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ConstantNodes;
