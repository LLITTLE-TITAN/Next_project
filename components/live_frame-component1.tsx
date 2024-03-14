import type { NextPage } from "next";

const FrameComponent1: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start pt-0 pb-[237px] pr-0 pl-2.5 text-center text-13xl text-gray-700 font-headline-2-regular mq700:pb-[154px] mq700:box-border">
      <div className="flex-1 flex flex-col items-start justify-start gap-[24px]">
        <div className="self-stretch rounded-lg [background:linear-gradient(137.25deg,_rgba(219,_76,_255,_0.3),_rgba(114,_75,_249,_0.3))] overflow-hidden flex flex-row items-start justify-start p-5">
          <div className="h-[264px] flex-1 relative rounded-[11.48px] bg-neutral-00">
            <img
              className="absolute top-[15.3px] left-[15.3px] w-[233.4px] h-[233.4px]"
              alt=""
              src="/vector.svg"
            />
            <div className="absolute top-[105.2px] left-[105.2px] rounded-[10.52px] bg-purple-color-base box-border w-[66.79px] h-[66.79px] flex flex-col items-center justify-center z-[1] border-[6.1px] border-solid border-neutral-00">
              <img
                className="w-[47.7px] h-[41.8px] relative"
                loading="lazy"
                alt=""
                src="/group-1171276729.svg"
              />
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[2px]">
          <div className="self-stretch relative text-5xl leading-[140%] mq450:text-lgi mq450:leading-[27px]">
            Join at
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 px-[55px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <h2 className="m-0 flex-1 relative text-inherit leading-[130%] font-semibold font-inherit mq900:text-7xl mq900:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
              <span>{` `}</span>
              <span className="text-neutral-00">{`Ucasty.com `}</span>
            </h2>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start py-0 pr-[75px] pl-[75.5px] text-neutral-00 mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="flex-1 relative leading-[130%] font-semibold mq900:text-7xl mq900:leading-[33px] mq450:text-lgi mq450:leading-[25px]">
              #1334214
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
