import type { NextPage } from "next";
import LogicTree from "../components/logic-tree";
import DataRouting from "../components/data-routing";
import DataAggregator from "../components/data-aggregator";

const ProfilePageChannelCalled: NextPage = () => {
    return (
      <div className="w-full relative overflow-hidden flex flex-col items-center justify-start pt-5 px-5 pb-[123px] box-border gap-[24px_0px] tracking-[normal] text-left text-xs font-caption-1-regular">
        {/* Your existing JSX code */}
        <LogicTree />
        <DataRouting />
        <DataAggregator />
      </div>
    );
};

export default ProfilePageChannelCalled;
