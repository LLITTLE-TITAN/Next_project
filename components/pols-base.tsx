import type { NextPage } from "next";

export type PolsBaseType = {
  b?: string;
};

const PolsBase: NextPage<PolsBaseType> = ({ b }) => {
  return (
    <div className="w-[1020px] rounded-35xl bg-gray-2100 flex flex-row items-start justify-between py-0 pr-6 pl-0 box-border gap-[20px] text-center text-base text-neutral-00 font-headline-2-regular">
      <div className="w-[198px] rounded-51xl  bg-[#5b4ce2] box-border flex flex-row items-start justify-start p-4 relative border-[1px] border-solid border-black">
        <div className="h-[66px] w-[198px] relative rounded-51xl bg-[#5b4ce2] box-border hidden z-[0] border-[1px] border-solid border-black" />
        <div className="w-8 rounded-44xl bg-[#8d8686] flex flex-row items-start justify-start py-1 px-[10.5px] box-border z-[1]">
          <div className="flex-1 relative leading-[150%]">{b}</div>
        </div>
        <div className="w-[885px] absolute !m-[0] top-[calc(50%_-_13px)] right-[-747px] text-xl leading-[140%] text-left inline-block z-[1] mq450:text-base mq450:leading-[22px]">
          Lorem ipsum dolor sit
        </div>
      </div>
      <div className="flex flex-col items-start justify-start pt-[18px] px-0 pb-0 text-left text-xl text-[#e7e3e3]">
        <div className="relative leading-[140%] mq450:text-base mq450:leading-[22px]">
          40%
        </div>
      </div>
    </div>
  );
};

export default PolsBase;
