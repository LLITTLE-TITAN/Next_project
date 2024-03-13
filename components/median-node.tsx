import type { NextPage } from "next";

const MedianNode: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-center justify-between py-0 pr-[0.10000000000002274px] pl-0 box-border [row-gap:20px] max-w-full gap-[0px] text-left text-lg text-neutral-00 font-caption-1-regular mq450:flex-wrap">
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
      <div className="w-[30px] rounded-lg bg-gray-100 box-border flex flex-row items-start justify-center py-2 px-[7px] z-[1] border-[1px] border-solid border-stroke-gradient-dark">
        <img
          className="h-3.5 w-3.5 relative"
          alt=""
          src="/dotshorizontal.svg"
        />
      </div>
    </div>
  );
};

export default MedianNode;
