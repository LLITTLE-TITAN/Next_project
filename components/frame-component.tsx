import type { NextPage } from "next";

const FrameComponent: NextPage = () => {
  return (
    <section className="w-[1200px] flex flex-col items-center justify-center gap-[24px_0px] max-w-full text-left text-xl text-neutral-00 font-caption-1-regular">
      <div className="self-stretch flex flex-row items-center justify-start">
        <div className="relative leading-[140%] font-medium mq450:text-base mq450:leading-[22px]">
          Subscribed Portals
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-[24px_0px] max-w-full">
        <div className="w-[88px] h-[88px] rounded-28xl [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.2),_rgba(255,_255,_255,_0))] box-border flex flex-row items-center justify-center py-6 px-[19px] border-[1px] border-solid border-stroke-gradient-dark">
          <img
            className="h-10 w-10 relative"
            loading="lazy"
            alt=""
            src="/inbox01.svg"
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-[16px_0px]">
          <div className="relative tracking-[-0.01em] font-medium mq450:text-base">
            No Portal Subscribed
          </div>
          <div className="relative text-base tracking-[-0.01em] font-medium text-gray-700 whitespace-pre-wrap">
            Lorem ipsum dolor sit amet consectetur placeholder
          </div>
        </div>
        <button className="cursor-pointer [border:none] py-2 px-3.5 bg-surface-color-surface-3 rounded-xl overflow-hidden flex flex-row items-center justify-center gap-[0px_8px]">
          <img
            className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
            alt=""
            src="/component-1placeholder.svg"
          />
          <div className="relative text-sm leading-[20px] font-semibold font-caption-1-regular text-neutral-00 text-left">
            Explore Portal
          </div>
          <input
            className="m-0 h-5 w-5 relative min-h-[20px]"
            type="checkbox"
          />
        </button>
      </div>
    </section>
  );
};

export default FrameComponent;
