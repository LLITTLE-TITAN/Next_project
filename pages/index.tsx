import type { NextPage } from "next";
import LogicTree from "../components/logic-tree";
import DataRouting from "../components/data-routing";
import DataAggregator from "../components/data-aggregator";

const ProfilePageChannelCalled: NextPage = () => {
  return (
    <div className="w-full relative bg-black overflow-hidden flex flex-col items-center justify-start pt-5 px-5 pb-[123px] box-border gap-[24px_0px] tracking-[normal] text-left text-xs font-caption-1-regular">
      <div className="w-32 rounded-sm1 bg-darkslategray-300 box-border hidden flex-row items-center justify-start py-1 px-2 whitespace-nowrap border-[1px] border-solid border-darkslategray-200">
        <div className="self-stretch relative text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] hidden opacity-[0.4]">
          Last edit 9 mins ago
        </div>
      </div>
      <LogicTree />
      <DataRouting />
      <DataAggregator />
    </div>
  );
};

export default ProfilePageChannelCalled;
