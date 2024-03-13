import type { NextPage } from "next";
import SkipListNode from "./skip-list-node";
import DistributeTools from "./distribute-tools";
import Menu from "./menu";

const StackQueueNode: NextPage = () => {
  return (
    <div className="w-[1200px] flex flex-col items-start justify-start pt-0 px-0 pb-[166px] box-border gap-[82px_0px] max-w-full text-left text-xl text-neutral-00 font-caption-1-regular lg:gap-[41px_0px] mq450:pb-[108px] mq450:box-border mq750:gap-[20px_0px]">
      <div className="relative tracking-[-0.01em] font-medium mq450:text-base">
        Subscribed Portals
      </div>
      <div className="self-stretch flex flex-row items-start justify-end py-0 px-4 text-sm">
        <div className="w-[166px] flex flex-col items-start justify-start relative">
          <div className="w-[1200px] !m-[0] absolute top-[-58px] left-[-1018px] rounded-lg bg-surface-color-surface-2 box-border overflow-hidden flex flex-row items-start justify-start py-4 px-[15px] gap-[0px_99px] border-[1px] border-solid border-line-2">
            <SkipListNode />
            <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] text-center text-lg mq750:flex-wrap">
              <DistributeTools prototyping="3" />
              <div className="w-[30px] rounded-lg bg-gray-100 box-border flex flex-row items-start justify-center py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/dotshorizontal.svg"
                />
              </div>
            </div>
          </div>
          <div className="w-[1200px] !m-[0] absolute bottom-[-166px] left-[-1018px] rounded-lg bg-surface-color-surface-2 box-border overflow-hidden flex flex-row items-start justify-between py-4 pr-[17px] pl-[15px] gap-[20px] border-[1px] border-solid border-line-2">
            <div className="w-[793px] flex flex-row items-start justify-start gap-[0px_99px] max-w-full mq750:flex-wrap">
              <SkipListNode propMinWidth="252px" />
              <DistributeTools
                prototyping="1"
                propWidth="unset"
                propFlex="1"
                propMinWidth="287px"
              />
            </div>
            <div className="w-[30px] rounded-lg bg-gray-100 box-border flex flex-row items-start justify-center py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
              <img
                className="h-3.5 w-3.5 relative"
                alt=""
                src="/dotshorizontal.svg"
              />
            </div>
          </div>
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default StackQueueNode;
