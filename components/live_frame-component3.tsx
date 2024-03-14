import type { NextPage } from "next";
import QnaItem from "./qna-item";

const FrameComponent3: NextPage = () => {
  return (
    <section className="self-stretch flex flex-col items-start justify-start py-0 pr-4 pl-0 box-border gap-[51px] max-w-full text-left text-lg text-neutral-00 font-headline-2-regular mq750:gap-[25px_51px]">
      <div className="self-stretch flex flex-row items-start justify-end max-w-full">
        <div className="w-[1088px] flex flex-col items-start justify-start py-0 pr-0 pl-5 box-border gap-[16px] max-w-full">
          <div className="self-stretch rounded-12xl flex flex-row flex-wrap items-start justify-start py-0.5 px-2.5 box-border gap-[10px] max-w-full">
            <div className="h-[11.5px] flex-1 flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border min-w-[291px] max-w-full">
              <img
                className="self-stretch h-px relative max-w-full overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/line-19.svg"
              />
            </div>
            <div className="relative tracking-[-0.5px] font-medium">
              Latest Question
            </div>
            <div className="flex-1 flex flex-col items-start justify-start pt-[11.5px] px-0 pb-0 box-border min-w-[291px] max-w-full">
              <img
                className="self-stretch h-0 relative max-w-full overflow-hidden shrink-0 object-contain"
                loading="lazy"
                alt=""
                src="/line-18.svg"
              />
            </div>
          </div>
          <QnaItem propBackgroundColor="#111" propBackgroundColor1="#363637" />
        </div>
      </div>
      <div className="w-[206px] h-[46px] rounded-lg flex flex-col items-start justify-start py-0 px-0 box-border gap-[8px] text-sm text-gray-3000">
        <div className="mt-[-168px] w-[233px] flex flex-row items-start justify-start py-0 pr-0 pl-[92px] box-border mq450:pl-5 mq450:box-border">
          <div className="w-[233px] rounded-3xs bg-gray-3100 shadow-[0px_4px_10px_rgba(109,_109,_109,_0.17)_inset,_0px_126px_35px_rgba(0,_0,_0,_0.01),_0px_81px_32px_rgba(0,_0,_0,_0.06),_0px_45px_27px_rgba(0,_0,_0,_0.2),_0px_20px_20px_rgba(0,_0,_0,_0.34),_0px_5px_11px_rgba(0,_0,_0,_0.4)] [backdrop-filter:blur(40px)] box-border overflow-hidden shrink-0 flex flex-row items-start justify-start border-[1px] border-solid border-dimgray-400">
            <div className="flex-1 flex flex-col items-start justify-start py-1 px-0">
              <div className="self-stretch rounded-md flex flex-col items-start justify-start py-1 px-2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[6px]">
                  <div className="w-[30px] rounded-lg bg-neutral-90 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-dimgray-600">
                    <input
                      className="m-0 h-3.5 w-3.5 relative"
                      type="checkbox"
                    />
                  </div>
                  <div className="flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Copy Event Link
                  </div>
                  <div className="w-[101px] relative text-base font-medium font-body-body-3-medium hidden">
                    For 5000 SMS
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-col items-start justify-start py-1 px-2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[6px]">
                  <div className="w-[30px] rounded-lg bg-neutral-90 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-3.5 w-3.5 relative"
                      loading="lazy"
                      alt=""
                      src="/toggle03left.svg"
                    />
                  </div>
                  <div className="flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Disable Participant Q&A`}</div>
                  <div className="w-[101px] relative text-base font-medium font-body-body-3-medium hidden">
                    For 5000 SMS
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-col items-start justify-start py-1 px-2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[6px]">
                  <div className="w-[30px] rounded-lg bg-neutral-90 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-3.5 w-3.5 relative"
                      loading="lazy"
                      alt=""
                      src="/linkexternal01alt.svg"
                    />
                  </div>
                  <div className="flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Switch to admin panel
                  </div>
                  <div className="w-[101px] relative text-base font-medium font-body-body-3-medium hidden">
                    For 5000 SMS
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-md flex flex-row items-center justify-start py-1 px-2">
                <div className="flex-1 flex flex-row items-center justify-start gap-[6px]">
                  <div className="w-[30px] rounded-lg bg-neutral-90 box-border flex flex-row items-center justify-center py-2 px-[7px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-3.5 w-3.5 relative object-cover"
                      loading="lazy"
                      alt=""
                      src="/zoomin@2x.png"
                    />
                  </div>
                  <div className="flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Screen Size
                  </div>
                  <div className="h-[19px] w-0 relative text-base font-medium font-body-body-3-medium inline-block" />
                  <div className="flex flex-row items-center justify-center gap-[6px] text-xs">
                    <img
                      className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/minus.svg"
                    />
                    <div className="relative leading-[140%] font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                      100%
                    </div>
                    <img
                      className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                      loading="lazy"
                      alt=""
                      src="/plus-7.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="w-[201px] hidden flex-row items-center justify-start">
                <div className="h-[31px] flex-1 rounded-md flex flex-col items-start justify-start py-1.5 pr-2.5 pl-2 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[6px]">
                    <div className="h-[18px] flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap">
                      $0,00
                    </div>
                    <div className="self-stretch relative text-base font-medium font-body-body-3-medium">
                      For 5000 SMS
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[201px] hidden flex-row items-center justify-start">
                <div className="h-[31px] flex-1 rounded-md flex flex-col items-start justify-start py-1.5 pr-2.5 pl-2 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[6px]">
                    <div className="h-[18px] flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap">
                      $0,00
                    </div>
                    <div className="self-stretch relative text-base font-medium font-body-body-3-medium">
                      For 5000 SMS
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[201px] hidden flex-row items-center justify-start">
                <div className="h-[31px] flex-1 rounded-md flex flex-col items-start justify-start py-1.5 pr-2.5 pl-2 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[6px]">
                    <div className="h-[18px] flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap">
                      $0,00
                    </div>
                    <div className="self-stretch relative text-base font-medium font-body-body-3-medium">
                      For 5000 SMS
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[201px] hidden flex-row items-center justify-start">
                <div className="h-[31px] flex-1 rounded-md flex flex-col items-start justify-start py-1.5 pr-2.5 pl-2 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[6px]">
                    <div className="h-[18px] flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap">
                      $0,00
                    </div>
                    <div className="self-stretch relative text-base font-medium font-body-body-3-medium">
                      For 5000 SMS
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[201px] hidden flex-row items-center justify-start">
                <div className="h-[31px] flex-1 rounded-md flex flex-col items-start justify-start py-1.5 pr-2.5 pl-2 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[6px]">
                    <div className="h-[18px] flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap">
                      $0,00
                    </div>
                    <div className="self-stretch relative text-base font-medium font-body-body-3-medium">
                      For 5000 SMS
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[201px] hidden flex-row items-center justify-start">
                <div className="h-[31px] flex-1 rounded-md flex flex-col items-start justify-start py-1.5 pr-2.5 pl-2 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[6px]">
                    <div className="h-[18px] flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap">
                      $0,00
                    </div>
                    <div className="self-stretch relative text-base font-medium font-body-body-3-medium">
                      For 5000 SMS
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[201px] hidden flex-row items-center justify-start">
                <div className="h-[31px] flex-1 rounded-md flex flex-col items-start justify-start py-1.5 pr-2.5 pl-2 box-border">
                  <div className="self-stretch flex-1 flex flex-row items-center justify-start gap-[6px]">
                    <div className="h-[18px] flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap">
                      $0,00
                    </div>
                    <div className="self-stretch relative text-base font-medium font-body-body-3-medium">
                      For 5000 SMS
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-lg bg-surface-color-surface-2 flex flex-row items-start justify-start py-2 px-[7px] gap-[8px] border-[1px] border-solid border-stroke-gradient-dark">
          <div className="w-[30px] rounded-xl bg-purple-color-base box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-plum">
            <img className="h-3.5 w-3.5 relative" alt="" src="/plus-2.svg" />
          </div>
          <div className="w-[30px] rounded-xl bg-green-2 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-mediumspringgreen">
            <img className="h-3.5 w-3.5 relative" alt="" src="/play.svg" />
          </div>
          <div className="h-[22px] flex flex-col items-start justify-start pt-2 px-0 pb-0 box-border">
            <div className="w-px h-3.5 relative box-border opacity-[0.2] border-r-[1px] border-solid border-neutral-00" />
          </div>
          <div className="w-[30px] rounded-xl bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/settings02-1.svg"
            />
          </div>
          <div className="w-[30px] rounded-xl bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/maximize02-21.svg"
            />
          </div>
          <div className="w-[30px] rounded-xl bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
            <img
              className="h-3.5 w-3.5 relative"
              alt=""
              src="/chevronright.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
