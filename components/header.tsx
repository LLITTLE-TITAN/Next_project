import type { NextPage } from "next";

const Header: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-left text-xl text-neutral-00 font-caption-2-semibold">
      <header className="self-stretch h-12 flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-xs text-neutral-00 font-caption-2-semibold">
        <div className="self-stretch w-[700px] flex flex-row items-start justify-start max-w-full">
          <div className="self-stretch flex-1 rounded-lg1 bg-gray-400 overflow-hidden flex flex-row items-start justify-between p-1.5 box-border max-w-full gap-[20px]">
            <div className="self-stretch rounded-md [background:linear-gradient(180deg,_#363636,_#232323)] flex flex-row items-start justify-start py-[7px] px-[11px] gap-[8px] border-[1px] border-solid border-stroke-gradient-dark">
              <div className="h-[22px] w-[22px] relative min-h-[22px] flex items-center justify-center">
                <img
                  className="h-full w-full min-h-[22px] object-contain absolute left-[0px] top-[0px] [transform:scale(2.286)]"
                  alt=""
                  src="/loop-node.svg"
                />
              </div>
              <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
                <div className="relative leading-[140%] font-semibold">
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
                  <div className="h-[30px] w-[30px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
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
                    <div className="relative font-medium">Share</div>
                  </div>
                </div>
              </div>
              <div className="h-9 rounded-lg bg-purple-color-base overflow-hidden flex flex-row items-center justify-center p-2 box-border">
                <img
                  className="h-5 w-5 relative overflow-hidden shrink-0"
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
                  <div className="h-[37.87px] flex-1 rounded-md bg-dodgerblue box-border overflow-hidden flex flex-row items-start justify-start py-[9px] pr-[13px] pl-3 border-[0.9px] border-solid border-gray-1500">
                    <div className="relative leading-[140%] font-semibold inline-block min-w-[11px] whitespace-nowrap">
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
            <div className="w-[324px] flex flex-row items-start justify-start gap-[8px] max-w-full">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div className="rounded-sm flex flex-row items-start justify-start gap-[8px]">
                  <div className="h-[30px] w-[30px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
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
        </div>
      </header>
      <div className="self-stretch h-[86px] relative max-w-full">
        <div className="absolute top-[50px] left-[0px] w-full h-9 flex flex-row items-center justify-between gap-[20px] max-w-full">
          <h2 className="m-0 w-[103px] relative text-inherit tracking-[-0.01em] font-medium font-inherit inline-block whitespace-nowrap">
            My Spaces
          </h2>
          <div className="self-stretch w-[254px] flex flex-row items-center justify-start gap-[8px] text-sm text-gray-2900">
            <div className="rounded-3xs bg-gray-100 shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] flex flex-row items-center justify-start py-[3px] px-2 gap-[8px]">
              <div className="h-[30px] w-[30px] rounded-lg bg-brand-color-tertiary-60 shadow-[0px_0px_14px_rgba(111,_191,_132,_0.4)] box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-lightgreen">
                <img className="h-3.5 w-3.5 relative" alt="" src="/list.svg" />
              </div>
              <div className="h-[30px] w-[30px] rounded-lg bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
                <img
                  className="h-3.5 w-3.5 relative"
                  alt=""
                  src="/layoutgrid02.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex-1 rounded-xl bg-gray-100 overflow-hidden flex flex-row items-center justify-center py-2 px-3.5 gap-[8px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/component-1placeholder.svg"
              />
              <div className="flex-1 relative leading-[20px] whitespace-nowrap">
                <span>Sort by</span>
                <span className="font-semibold text-neutral-00"> Created</span>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                loading="lazy"
                alt=""
                src="/chevronselectorvertical-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="absolute top-[0px] left-[702px] rounded-3xs bg-gray-3100 shadow-[0px_126px_35px_rgba(0,_0,_0,_0.01),_0px_81px_32px_rgba(0,_0,_0,_0.06),_0px_45px_27px_rgba(0,_0,_0,_0.2),_0px_20px_20px_rgba(0,_0,_0,_0.34),_0px_5px_11px_rgba(0,_0,_0,_0.4)] [backdrop-filter:blur(20px)] box-border w-[166px] overflow-hidden flex flex-row items-start justify-start z-[1] text-sm text-gray-3000 border-[1px] border-solid border-dimgray-400">
          <div className="flex-1 flex flex-col items-start justify-start py-1 px-0">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 rounded-md flex flex-col items-start justify-start py-1.5 pr-[27px] pl-2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[6px]">
                  <div className="h-6 w-6 rounded-lg bg-neutral-90 box-border flex flex-row items-start justify-start py-1.5 px-[5px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-3 w-3 relative"
                      alt=""
                      src="/folder.svg"
                    />
                  </div>
                  <div className="flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] whitespace-nowrap">
                    New Spaces
                  </div>
                  <div className="h-[19px] w-[101px] relative text-base font-medium font-body-body-3-medium hidden whitespace-nowrap">
                    For 5000 SMS
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-neutral-90 flex flex-row items-center justify-start">
              <div className="rounded-md flex flex-col items-start justify-start py-1.5 px-2">
                <div className="flex flex-row items-center justify-start py-0 pr-[70px] pl-0 gap-[6px]">
                  <div className="h-6 w-6 rounded-lg bg-neutral-90 box-border flex flex-row items-start justify-start py-1.5 px-[5px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-3 w-3 relative"
                      alt=""
                      src="/videorecorder.svg"
                    />
                  </div>
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[50px] whitespace-nowrap">{`Record `}</div>
                  <div className="h-[19px] w-[101px] relative text-base font-medium font-body-body-3-medium hidden whitespace-nowrap">
                    For 5000 SMS
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-row items-center justify-start">
              <div className="flex-1 rounded-md flex flex-col items-start justify-start py-1.5 px-2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                  <div className="h-[18px] flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap">
                    $0,00
                  </div>
                  <div className="h-[19px] relative text-base font-medium font-body-body-3-medium inline-block whitespace-nowrap">
                    For 5000 SMS
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-row items-center justify-start">
              <div className="flex-1 rounded-md flex flex-col items-start justify-start py-1.5 px-2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                  <div className="h-[18px] flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap">
                    $0,00
                  </div>
                  <div className="h-[19px] relative text-base font-medium font-body-body-3-medium inline-block whitespace-nowrap">
                    For 5000 SMS
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-row items-center justify-start">
              <div className="flex-1 rounded-md flex flex-col items-start justify-start py-1.5 px-2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                  <div className="h-[18px] flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap">
                    $0,00
                  </div>
                  <div className="h-[19px] relative text-base font-medium font-body-body-3-medium inline-block whitespace-nowrap">
                    For 5000 SMS
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-row items-center justify-start">
              <div className="flex-1 rounded-md flex flex-col items-start justify-start py-1.5 px-2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                  <div className="h-[18px] flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap">
                    $0,00
                  </div>
                  <div className="h-[19px] relative text-base font-medium font-body-body-3-medium inline-block whitespace-nowrap">
                    For 5000 SMS
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-row items-center justify-start">
              <div className="flex-1 rounded-md flex flex-col items-start justify-start py-1.5 px-2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                  <div className="h-[18px] flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap">
                    $0,00
                  </div>
                  <div className="h-[19px] relative text-base font-medium font-body-body-3-medium inline-block whitespace-nowrap">
                    For 5000 SMS
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-row items-center justify-start">
              <div className="flex-1 rounded-md flex flex-col items-start justify-start py-1.5 px-2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                  <div className="h-[18px] flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap">
                    $0,00
                  </div>
                  <div className="h-[19px] relative text-base font-medium font-body-body-3-medium inline-block whitespace-nowrap">
                    For 5000 SMS
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch hidden flex-row items-center justify-start">
              <div className="flex-1 rounded-md flex flex-col items-start justify-start py-1.5 px-2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[4px]">
                  <div className="h-[18px] flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block whitespace-nowrap">
                    $0,00
                  </div>
                  <div className="h-[19px] relative text-base font-medium font-body-body-3-medium inline-block whitespace-nowrap">
                    For 5000 SMS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
