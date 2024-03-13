import type { NextPage } from "next";

const FrameComponent2: NextPage = () => {
  return (
    <div className="w-[1200px] flex flex-row items-start justify-center pt-0 px-0 pb-[15px] box-border max-w-full text-left text-xs text-neutral-00 font-caption-1-regular">
      <div className="w-[700px] rounded-lg1 bg-gray-400 flex flex-col items-start justify-start p-1.5 box-border max-w-full">
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq550:flex-wrap">
          <div className="flex flex-row items-start justify-start">
            <div className="h-[38px] rounded-md1 flex flex-row items-center justify-start py-2 pr-3 pl-2 box-border gap-[0px_8px]">
              <div className="h-[22px] w-[22px] relative opacity-[0.6]">
                <div className="absolute h-[68.18%] w-[90.91%] top-[18.18%] right-[4.55%] bottom-[13.64%] left-[4.55%]">
                  <div className="absolute h-[73.33%] w-[85%] top-[0%] right-[0%] bottom-[26.67%] left-[15%] rounded-[2.19px] bg-gray-700" />
                  <div className="absolute h-[73.33%] w-[85%] top-[26.67%] right-[15%] bottom-[0%] left-[0%] z-[1]">
                    <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.19px] bg-neutral-00" />
                  </div>
                </div>
              </div>
              <div className="relative leading-[140%]">Event</div>
              <img
                className="h-3.5 w-3.5 relative overflow-hidden shrink-0 hidden"
                alt=""
                src="/chevronselectorvertical.svg"
              />
            </div>
            <div className="h-[38px] rounded-md1 [background:linear-gradient(180deg,_#363636,_#232323)] flex flex-row items-center justify-start py-2 pr-3 pl-2 box-border gap-[0px_8px]">
              <div className="h-[22px] w-[22px] relative flex items-center justify-center">
                <img
                  className="h-full w-full object-contain absolute left-[0px] top-[0px] [transform:scale(2.273)]"
                  loading="lazy"
                  alt=""
                  src="/frame-1171277109.svg"
                />
              </div>
              <div className="relative leading-[140%] font-semibold">
                Portal
              </div>
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
            <button className="cursor-pointer [border:none] py-2 px-4 bg-blueviolet flex-1 rounded-xl flex flex-row items-center justify-center gap-[0px_6px] whitespace-nowrap hover:bg-mediumslateblue">
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
    </div>
  );
};

export default FrameComponent2;
