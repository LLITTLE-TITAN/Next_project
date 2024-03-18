import type { NextPage } from "next";
import LogicTree from "../components/logic-tree";
import ArrowNode from "../components/arrow-node";
import StackQueueNode from "../components/stack-queue-node";

const Portal1: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-5 px-5 pb-[123px] box-border gap-[24px_0px] tracking-[normal] text-left text-xs font-caption-1-regular">
      <div className="w-32 rounded-sm1 bg-darkslategray-300 box-border hidden flex-row items-center justify-start py-1 px-2 whitespace-nowrap z-[0] border-[1px] border-solid border-darkslategray-200">
        <div className="self-stretch relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden opacity-[0.4]">
          Last edit 9 mins ago
        </div>
      </div>
      <LogicTree />
      <ArrowNode />
      <StackQueueNode />
      <main className="w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-1400 [backdrop-filter:blur(24px)] overflow-hidden flex flex-col items-center justify-start pt-5 px-5 pb-[420px] box-border gap-[352px_0px] max-w-full z-[2] text-left text-xs text-neutral-00 font-caption-1-regular mq450:gap-[88px_0px] mq750:gap-[176px_0px]">
        <div className="w-[700px] rounded-lg1 bg-gray-400 flex flex-col items-start justify-start p-1.5 box-border max-w-full">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq750:flex-wrap">
            <div className="w-[280px] flex flex-row items-start justify-start">
              <button className="cursor-pointer py-2 px-[11px] bg-[transparent] h-[38px] flex-1 rounded-md1 [background:linear-gradient(180deg,_#363636,_#232323)] box-border flex flex-row items-center justify-start gap-[0px_8px] border-[1px] border-solid border-stroke-gradient-dark">
                <div className="h-[22px] w-[22px] relative [filter:drop-shadow(0px_0px_14px_rgba(111,_191,_132,_0.4))]">
                  <div className="absolute h-[68.18%] w-[90.91%] top-[18.18%] right-[4.55%] bottom-[13.64%] left-[4.55%]">
                    <div className="absolute h-[73.33%] w-[85%] top-[0%] right-[0%] bottom-[26.67%] left-[15%] rounded-[2.19px] [background:linear-gradient(242.71deg,_#4bf991_25%,_#b6facb)] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]" />
                    <div className="absolute h-[73.33%] w-[85%] top-[26.67%] right-[15%] bottom-[0%] left-[0%] z-[1]">
                      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.19px] [background:linear-gradient(269.07deg,_#6f45ff,_#b4a1f6)]" />
                    </div>
                  </div>
                </div>
                <div className="relative text-xs leading-[140%] font-semibold font-caption-1-regular text-neutral-00 text-left">
                  Events
                </div>
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/chevronselectorvertical.svg"
                />
              </button>
              <div className="h-[38px] rounded-md1 flex flex-row items-center justify-start py-2 px-3 box-border gap-[0px_8px]">
                <img
                  className="h-[22px] w-[22px] relative"
                  alt=""
                  src="/frame-1171277109-2.svg"
                />
                <div className="relative leading-[140%]">Portal</div>
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/chevronselectorvertical.svg"
                />
              </div>
              <div className="h-[38px] rounded-md1 flex flex-row items-center justify-start py-2 px-3 box-border gap-[0px_8px]">
                <img
                  className="h-[22px] w-[22px] relative"
                  alt=""
                  src="/frame-1171277109-1.svg"
                />
                <div className="relative leading-[140%]">Spaces</div>
                <img
                  className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
                  alt=""
                  src="/chevronselectorvertical.svg"
                />
              </div>
            </div>
            <div className="w-[199px] flex flex-row items-center justify-start gap-[0px_8px] text-sm">
              <div className="flex flex-row items-center justify-start gap-[0px_8px]">
                <div className="flex flex-row items-center justify-center">
                  <img
                    className="h-4 w-4 relative overflow-hidden shrink-0"
                    alt=""
                    src="/clock.svg"
                  />
                </div>
                <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
                  13:44
                </div>
              </div>
              <button className="cursor-pointer bg-[#724bf9]  [border:none] py-2 px-4 bg-blueviolet flex-1 rounded-xl flex flex-row items-center justify-center gap-[0px_6px] whitespace-nowrap hover:bg-mediumslateblue">
                <div className="flex-1 relative text-sm leading-[120%] font-semibold font-caption-1-regular text-neutral-00 text-center">
                  New Event
                </div>
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                  alt=""
                  src="/plus.svg"
                />
              </button>
            </div>
          </div>
        </div>
        <div className="w-[699px] flex flex-row items-start justify-start py-0 pr-[62px] pl-16 box-border max-w-full text-base mq750:pl-8 mq750:pr-[31px] mq750:box-border">
          <div className="flex-1 rounded-lg1 bg-gray-1300 box-border overflow-hidden flex flex-col items-start justify-start gap-[1px_0px] max-w-full shrink-0 border-[1px] border-solid border-stroke-gradient-dark">
            <div className="self-stretch bg-gray-1300 box-border flex flex-row flex-wrap items-center justify-start pt-6 px-6 pb-4 gap-[0px_8px] max-w-full border-b-[1px] border-solid border-gray-1200">
              <div className="flex-1 flex flex-row items-center justify-start gap-[0px_8px] min-w-[256px] max-w-full mq750:flex-wrap">
                <div className="w-[30px] rounded-xl bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/searchmd.svg"
                  />
                </div>
                <div className="flex-1 relative leading-[24px] inline-block min-w-[17px] max-w-full">
                  <span className="font-medium">Re</span>
                  <span className="text-gray-700">|</span>
                </div>
              </div>
              <button className="cursor-pointer py-2 px-[7px] bg-gray-100 rounded-sm1 flex flex-row items-start justify-start gap-[0px_4px] whitespace-nowrap border-[1px] border-solid border-stroke-gradient-dark hover:bg-dimgray-300 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-100">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0 min-h-[16px]"
                  alt=""
                  src="/joiner.svg"
                />
                <div className="relative text-xs font-caption-1-regular text-gray-700 text-left">
                  Enter to search
                </div>
              </button>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start py-3 pr-4 pl-[15px] text-center text-gray-700 border-r-[1px] border-solid border-stroke-gradient-dark">
              <div className="self-stretch rounded-md1 bg-gray-900 flex flex-row items-center justify-between p-2 gap-[20px] mq450:flex-wrap">
                <div className="w-[139px] flex flex-row items-center justify-start gap-[0px_3px]">
                  <div className="w-[30px] rounded-lg bg-gray-100 box-border flex flex-row items-start justify-center py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/plus-2.svg"
                    />
                  </div>
                  <div className="flex-1 relative">
                    <span>C</span>
                    <span className="font-medium text-neutral-00">re</span>
                    <span>create Portal</span>
                  </div>
                </div>
                <div className="w-[38px] rounded-sm1 bg-darkslategray-400 box-border flex flex-row items-start justify-start py-2 px-[7px] text-left text-xs border-[1px] border-solid border-stroke-gradient-dark">
                  <div className="relative">TAB</div>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start p-2 gap-[0px_8px] mq450:flex-wrap">
                <div className="w-[30px] rounded-lg bg-gray-100 box-border flex flex-row items-start justify-center py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/plus-2.svg"
                  />
                </div>
                <div className="w-36 relative inline-block">
                  Add Event to Portal
                </div>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start p-2 gap-[0px_8px] mq450:flex-wrap mq450:justify-center">
                <div className="w-[30px] rounded-lg bg-gray-100 box-border flex flex-row items-start justify-center py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/settings02-1.svg"
                  />
                </div>
                <div className="w-[108px] relative inline-block">
                  Go to settings
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Portal1;
