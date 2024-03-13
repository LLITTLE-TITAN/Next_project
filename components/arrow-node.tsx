import type { NextPage } from "next";
import MultiplyingNode from "./multiplying-node";
import MedianNode from "./median-node";
import AverageNode from "./average-node";

const ArrowNode: NextPage = () => {
  return (
    <div className="w-[1200px] flex flex-col items-start justify-start gap-[24px_0px] max-w-full text-left text-xl text-neutral-00 font-caption-1-regular">
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap mq450:justify-center">
        <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
          <div className="relative leading-[140%] font-medium mq450:text-base mq450:leading-[22px]">
            My Portals
          </div>
        </div>
        <div className="rounded-xl bg-gray-500 overflow-hidden flex flex-row items-start justify-start py-2 px-3.5 gap-[0px_8px] text-sm">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
            alt=""
            src="/component-1placeholder.svg"
          />
          <div className="relative leading-[20px] font-semibold">
            Portal Page
          </div>
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
            alt=""
            src="/arrowupright.svg"
          />
        </div>
      </div>
      <div className="w-[709px] rounded-3xs bg-gray-600 shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] flex flex-col items-start justify-start p-1 box-border max-w-full text-sm text-text-for-dark-70">
        <div className="self-stretch rounded-42xl flex flex-row flex-wrap items-start justify-start [row-gap:20px]">
          <div className="flex-1 rounded-3xs flex flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px] min-w-[76px] min-h-[38px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-0 px-5 gap-[0px_4px]">
              <div className="relative leading-[140%] font-medium">Event</div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <button className="cursor-pointer py-1 pr-2 pl-1 bg-surface-color-surface-3 flex-1 rounded-3xs box-border flex flex-row items-center justify-center gap-[0px_8px] min-w-[76px] min-h-[38px] border-[1px] border-solid border-dimgray-500">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-additional-color-green-4 shadow-[0px_0px_14px_rgba(111,_191,_132,_0.4)] box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-paleturquoise">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-0 px-5 gap-[0px_4px]">
              <div className="relative text-sm leading-[140%] font-medium font-caption-1-regular text-text-for-dark-100 text-left">
                Spaces
              </div>
              <div className="w-4 relative text-xs font-medium font-caption-1-regular text-neutral-00 text-left hidden opacity-[0.5]">
                20
              </div>
            </div>
          </button>
          <div className="flex-1 rounded-3xs flex flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px] min-w-[76px] min-h-[38px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-0 px-5 gap-[0px_4px]">
              <div className="relative leading-[140%] font-medium">People</div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <div className="h-[38px] rounded-3xs flex flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-3 pl-[11px] gap-[0px_4px]">
              <div className="relative leading-[140%] font-medium">
                Newsletters
              </div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <div className="flex-1 rounded-3xs flex flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px] min-w-[76px] min-h-[38px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-0 px-5 gap-[0px_4px]">
              <div className="relative leading-[140%] font-medium">
                Insights
              </div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <div className="h-[38px] rounded-3xs flex flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="flex flex-row items-center justify-start py-0 pr-[25px] pl-[23px] gap-[0px_4px]">
              <div className="relative leading-[140%] font-medium">
                Settings
              </div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <div className="self-stretch w-[67.7px] rounded-3xs hidden flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="h-5 flex-1 flex flex-row items-center justify-start py-0 pr-[11px] pl-[9px] box-border gap-[0px_4px]">
              <div className="self-stretch flex-1 relative leading-[140%] font-medium">
                Email
              </div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <div className="self-stretch w-[67.7px] rounded-3xs hidden flex-row items-center justify-center py-1 pr-[5px] pl-px box-border gap-[0px_8px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="h-5 flex-1 flex flex-row items-center justify-start gap-[0px_4px]">
              <div className="self-stretch flex-1 relative leading-[140%] font-medium">
                Analytics
              </div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <div className="self-stretch w-[67.7px] rounded-3xs hidden flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="h-5 flex-1 flex flex-row items-center justify-start py-0 pr-[11px] pl-2.5 box-border gap-[0px_4px]">
              <div className="self-stretch flex-1 relative leading-[140%] font-medium">
                More
              </div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <div className="self-stretch w-[67.7px] rounded-3xs hidden flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="h-5 flex-1 flex flex-row items-center justify-start py-0 pr-[15px] pl-3.5 box-border gap-[0px_4px]">
              <div className="self-stretch flex-1 relative leading-[140%] font-medium">
                Live
              </div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <div className="self-stretch w-[67.7px] rounded-3xs hidden flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="h-5 flex-1 flex flex-row items-center justify-start py-0 pr-[15px] pl-3.5 box-border gap-[0px_4px]">
              <div className="self-stretch flex-1 relative leading-[140%] font-medium">
                Live
              </div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <div className="self-stretch w-[67.7px] rounded-3xs hidden flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="h-5 flex-1 flex flex-row items-center justify-start py-0 pr-[15px] pl-3.5 box-border gap-[0px_4px]">
              <div className="self-stretch flex-1 relative leading-[140%] font-medium">
                Live
              </div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <div className="self-stretch w-[67.7px] rounded-3xs hidden flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="h-5 flex-1 flex flex-row items-center justify-start py-0 pr-[15px] pl-3.5 box-border gap-[0px_4px]">
              <div className="self-stretch flex-1 relative leading-[140%] font-medium">
                Live
              </div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <div className="self-stretch w-[67.7px] rounded-3xs hidden flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="h-5 flex-1 flex flex-row items-center justify-start py-0 pr-[15px] pl-3.5 box-border gap-[0px_4px]">
              <div className="self-stretch flex-1 relative leading-[140%] font-medium">
                Live
              </div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <div className="self-stretch w-[67.7px] rounded-3xs hidden flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="h-5 flex-1 flex flex-row items-center justify-start py-0 pr-[15px] pl-3.5 box-border gap-[0px_4px]">
              <div className="self-stretch flex-1 relative leading-[140%] font-medium">
                Live
              </div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <div className="self-stretch w-[67.7px] rounded-3xs hidden flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="h-5 flex-1 flex flex-row items-center justify-start py-0 pr-[15px] pl-3.5 box-border gap-[0px_4px]">
              <div className="self-stretch flex-1 relative leading-[140%] font-medium">
                Live
              </div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
          <div className="self-stretch w-[67.7px] rounded-3xs hidden flex-row items-center justify-center py-1 pr-2 pl-1 box-border gap-[0px_8px]">
            <div className="h-[30px] w-[30px] relative overflow-hidden shrink-0 hidden">
              <div className="absolute top-[0px] left-[0px] rounded-sm bg-gray-200 box-border w-full flex flex-row items-center justify-center py-2 px-[7px] h-full border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/circle.svg"
                />
              </div>
            </div>
            <div className="h-5 flex-1 flex flex-row items-center justify-start py-0 pr-[15px] pl-3.5 box-border gap-[0px_4px]">
              <div className="self-stretch flex-1 relative leading-[140%] font-medium">
                Live
              </div>
              <div className="w-4 relative text-xs font-medium text-neutral-00 hidden opacity-[0.5]">
                20
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[1200px] overflow-x-auto flex flex-row items-start justify-start gap-[0px_19.95px] max-w-full text-center text-lg">
        <MultiplyingNode
          propFlex="unset"
          propMinWidth="unset"
          propWidth="386.7px"
          propFlexWrap="wrap"
        />
        <div className="w-[386.7px] rounded-2xl bg-surface-color-surface-2 box-border overflow-hidden shrink-0 flex flex-col items-start justify-start py-4 pr-3.5 pl-4 gap-[18px_0px] max-w-full border-[1px] border-solid border-line-2">
          <MedianNode />
          <div className="self-stretch flex flex-col items-start justify-start max-w-full">
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-[8.5px] px-0 gap-[0px_10px]">
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
                <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[0px_10px]">
                  <div className="flex flex-col items-start justify-start pt-[1.5px] px-0 pb-0">
                    <img
                      className="w-5 h-5 relative overflow-hidden shrink-0"
                      alt=""
                      src="/ticket01.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start min-w-[155px]">
                    <div className="w-[49px] relative font-medium inline-block">
                      Event
                    </div>
                  </div>
                  <div className="w-[76px] relative font-medium inline-block">
                    20 Event
                  </div>
                </div>
              </div>
              <div className="h-px flex-1 relative box-border max-w-full ml-[-354.7px] border-t-[1px] border-solid border-line-2" />
            </div>
            <div className="self-stretch flex flex-row items-center justify-between py-2 pr-[0.10000000000013642px] pl-0 gap-[20px] mq450:flex-wrap">
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
                    src="/avatar-3@2x.png"
                  />
                  <img
                    className="h-6 w-6 rounded-md overflow-hidden shrink-0 object-cover min-h-[24px] z-[1] ml-[-6px]"
                    alt=""
                    src="/avatar-4@2x.png"
                  />
                  <input
                    className="m-0 h-6 w-6 rounded-md box-border overflow-hidden shrink-0 min-h-[24px] z-[2] ml-[-6px] border-[1px] border-solid border-gray-800"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <AverageNode
          propFlex="unset"
          propMinWidth="unset"
          propWidth="386.7px"
          propFlexWrap="wrap"
        />
      </div>
    </div>
  );
};

export default ArrowNode;
