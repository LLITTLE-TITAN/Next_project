import type { NextPage } from "next";

const Search: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start py-3 pr-4 pl-[15px] text-center text-base text-gray-700 font-caption-2-semibold border-r-[1px] border-solid border-stroke-gradient-dark">
      <div className="self-stretch rounded-md bg-gray-1200 flex flex-row items-center justify-between p-2 gap-[20px] text-neutral-00 mq450:flex-wrap">
        <div className="w-[140px] flex flex-row items-center justify-start gap-[5px]">
          <div className="w-[30px] rounded-lg bg-gray-100 box-border flex flex-row items-start justify-center py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
            <div className="h-3.5 w-3.5 relative">
              <div className="absolute h-[67.86%] w-[90.71%] top-[17.86%] right-[5%] bottom-[14.29%] left-[4.29%]">
                <div className="absolute h-[73.68%] w-[85.04%] top-[0%] right-[0%] bottom-[26.32%] left-[14.96%] rounded-[2.19px] bg-gray-700" />
                <div className="absolute h-[73.68%] w-[85.04%] top-[27.37%] right-[14.96%] bottom-[-1.05%] left-[0%] z-[1]">
                  <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-[2.19px] bg-neutral-00" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 relative">
            <span className="font-medium">Re</span>
            <span className="text-gray-700">cord video</span>
          </div>
        </div>
        <div className="w-[38px] rounded-sm bg-darkslategray-500 box-border flex flex-row items-start justify-start py-2 px-[7px] text-left text-xs text-gray-700 border-[1px] border-solid border-stroke-gradient-dark">
          <div className="relative inline-block min-w-[22px]">TAB</div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-start py-2 pr-[389px] pl-2 gap-[8px] mq450:pr-5 mq450:box-border mq800:flex-wrap mq800:pr-[194px] mq800:box-border">
        <div className="h-[30px] w-[30px] rounded-lg bg-gray-100 box-border flex flex-row items-start justify-center py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
          <img
            className="h-3.5 w-3.5 relative"
            loading="lazy"
            alt=""
            src="/uploadcloud02.svg"
          />
        </div>
        <div className="flex-1 relative inline-block min-w-[68px]">
          Upload Video
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center py-2 pr-[388px] pl-2 gap-[8px] mq450:pr-5 mq450:box-border mq800:flex-wrap mq800:pr-[194px] mq800:box-border">
        <div className="h-[30px] w-[30px] rounded-lg bg-gray-100 box-border flex flex-row items-start justify-center py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
          <img
            className="h-3.5 w-3.5 relative"
            loading="lazy"
            alt=""
            src="/plus-2.svg"
          />
        </div>
        <div className="flex-1 relative inline-block min-w-[68px]">
          Create Space
        </div>
      </div>
      <div className="self-stretch flex flex-row items-center justify-center py-2 pr-[385px] pl-2 gap-[8px] mq450:pr-5 mq450:box-border mq800:flex-wrap mq800:pr-48 mq800:box-border">
        <div className="h-[30px] w-[30px] rounded-lg bg-gray-100 box-border flex flex-row items-start justify-center py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
          <img
            className="h-3.5 w-3.5 relative"
            loading="lazy"
            alt=""
            src="/settings02-1.svg"
          />
        </div>
        <div className="flex-1 relative inline-block min-w-[70px]">
          Go to settings
        </div>
      </div>
    </div>
  );
};

export default Search;
