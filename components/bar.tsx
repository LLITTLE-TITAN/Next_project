import type { NextPage } from "next";
interface NavigateProps {
  onSearchClick: () => void;
}
import { useRouter } from 'next/router';

const FrameComponent2: React.FC<NavigateProps> = ({ onSearchClick }) => {
  const router = useRouter();

  const handleSpace1 = () => {
    router.push('/profile-page-called');
  };
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-left text-xl text-neutral-00 font-caption-2-semibold">
      <header className="self-stretch h-12 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xs text-neutral-00 font-caption-2-semibold">
        <div className="self-stretch w-[700px] flex flex-row items-start justify-start max-w-full">
          <div className="self-stretch flex-1 rounded-lg1 bg-gray-400 overflow-hidden flex flex-row items-start justify-between p-1.5 box-border max-w-full gap-[20px]">
            <div className="hidden self-stretch rounded-md [background:linear-gradient(180deg,_#363636,_#232323)] flex-row items-start justify-start py-[7px] px-[11px] gap-[8px] border-[1px] border-solid border-stroke-gradient-dark">
              <div className="h-[22px] w-[22px] relative min-h-[22px] flex items-center justify-center">
                <img
                  className="h-full w-full min-h-[22px] object-contain absolute left-[0px] top-[0px] [transform:scale(2.286)]"
                  alt=""
                  src="/loop-node.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <div className="relative leading-[140%] font-semibold inline-block min-w-[44px]">
                  Spaces
                </div>
              </div>
              <div className="h-[18px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <img
                  className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/chevronselectorvertical.svg"
                />
              </div>
            </div>
            <div className="hidden w-[324px] flex-row items-start justify-start gap-[8px] max-w-full">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="rounded-sm flex flex-row items-start justify-start gap-[8px]">
                  <div
                    onClick={onSearchClick}
                    className="h-[30px] w-[30px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark"
                  >
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/searchlg.svg"
                    />
                  </div>
                  <div className="h-[30px] w-[30px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/settings02-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <div className="h-[30px] w-[30px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/upload03.svg"
                    />
                  </div>
                  <div className="h-[31px] flex-1 rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] gap-[10px] border-[1px] border-solid border-stroke-gradient-dark">
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/share06.svg"
                    />
                    <div className="relative font-medium inline-block min-w-[34px]">
                      Share
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-9 rounded-lg bg-purple-color-base overflow-hidden flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/plus1.svg"
                />
              </div>
              <div className="h-[29px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                <div className="w-px h-[22px] relative box-border opacity-[0.2] border-r-[1px] border-solid border-neutral-00" />
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px] text-sm-1">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="w-[30px] h-[30px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] relative gap-[10px] border-[1px] border-solid border-stroke-gradient-dark">
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/bell01.svg"
                    />
                    <div className="h-[7.5px] w-[7.5px] absolute !m-[0] top-[5px] left-[17px] rounded-[50%] bg-red box-border z-[1] border-[0px] border-solid border-gray-1500" />
                  </div>
                </div>
                <div className="h-9 w-9 flex flex-row items-start justify-start">
                  <div className="h-[37.87px] flex-1 rounded-md bg-dodgerblue box-border overflow-hidden flex flex-row items-start justify-start py-[9px] px-[13px] border-[0.9px] border-solid border-gray-1500">
                    <div className="relative leading-[140%] font-semibold inline-block min-w-[10px] whitespace-nowrap">
                      H
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex-1 rounded-lg1 bg-gray-400 overflow-hidden flex flex-row items-start justify-between p-1.5 box-border max-w-full gap-[20px] z-[4] ml-[-700px]">
            <div className="self-stretch rounded-md [background:linear-gradient(180deg,_#363636,_#232323)] flex flex-row items-start justify-start py-[7px] px-[11px] gap-[8px] border-[1px] border-solid border-stroke-gradient-dark">
              <div className="h-[22px] w-[22px] relative min-h-[22px] flex items-center justify-center">
                <img
                  className="h-full w-full min-h-[22px] object-contain absolute left-[0px] top-[0px] [transform:scale(2.286)]"
                  alt=""
                  src="/loop-node.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <div 
                 onClick={handleSpace1}
                 className="relative leading-[140%] font-semibold inline-block min-w-[44px]">
                  Spaces
                </div>
              </div>
              <div className="h-[18px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
                <img
                  className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                  alt=""
                  src="/chevronselectorvertical.svg"
                />
              </div>
            </div>
            <div className="w-[324px] flex flex-row items-start justify-start gap-[8px] max-w-full">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="rounded-sm flex flex-row items-start justify-start gap-[8px]">
                  <div
                    onClick={onSearchClick}
                    className="cursor-pointer h-[30px] w-[30px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark"
                  >
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/searchlg.svg"
                    />
                  </div>
                  <div className="h-[30px] w-[30px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/settings02-1.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <div className="self-stretch flex flex-row items-start justify-start gap-[8px]">
                  <div className="h-[30px] w-[30px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/upload03.svg"
                    />
                  </div>
                  <div className="h-[31px] flex-1 rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] gap-[10px] border-[1px] border-solid border-stroke-gradient-dark">
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/share06.svg"
                    />
                    <div className="relative font-medium inline-block min-w-[34px]">
                      Share
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-9 rounded-[8px] bg-purple-color-base overflow-hidden flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src="/Icon.png"
                />
              </div>
              <div className="h-[29px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
                <div className="w-px h-[22px] relative box-border opacity-[0.2] border-r-[1px] border-solid border-neutral-00" />
              </div>
              <div className="flex flex-row items-start justify-start gap-[10px] text-sm-1">
                <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                  <div className="w-[30px] h-[30px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] relative gap-[10px] border-[1px] border-solid border-stroke-gradient-dark">
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/bell01.svg"
                    />
                    <div className="h-[7.5px] w-[7.5px] absolute !m-[0] top-[5px] left-[17px] rounded-[50%] bg-red box-border z-[1] border-[0px] border-solid border-gray-1500" />
                  </div>
                </div>
                <div className="h-9 w-9 flex flex-row items-start justify-start">
                  <div className="h-[37.87px] flex-1 rounded-md bg-dodgerblue box-border overflow-hidden flex flex-row items-start justify-start py-[9px] px-[13px] border-[0.9px] border-solid border-gray-1500">
                    <div className="relative leading-[140%] font-semibold inline-block min-w-[10px] whitespace-nowrap">
                      H
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default FrameComponent2;
