import type { NextPage } from "next";
import TreeBranch from "./tree-branch";
import Menu from "./menu";

const DataAggregator: NextPage = () => {
  return (
    <section className="w-[1200px] flex flex-col items-start justify-start pt-0 px-0 pb-[166px] box-border gap-[82px_0px] max-w-full text-left text-xl text-neutral-00 font-caption-1-regular lg:gap-[41px_0px] mq450:pb-[108px] mq450:box-border mq750:gap-[20px_0px]">
      <div className="relative tracking-[-0.01em] font-medium mq450:text-base">
        Subscribed Portals
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-4 text-center text-sm text-gray-700">
        <div className="w-[166px] flex flex-col items-start justify-start relative">
          <TreeBranch timers="3" />
          <TreeBranch timers="1" propTop="unset" propBottom="-166px" />
          <Menu />
        </div>
      </div>
    </section>
  );
};

export default DataAggregator;
