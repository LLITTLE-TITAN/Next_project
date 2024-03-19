import { useState } from "react";
import NotificationContainer from "./notification-container";
interface NavigateProps {
  isClicked: boolean;
  isListClicked: boolean;
  isBelClicked: boolean;
  isHClicked: boolean;
  isListLayout: boolean;
  handleListClick: () => void;
  handleHClick: () => void;
  handleLayoutClick: () => void;
  handlec1: (event: any) => void;
  handlec2: (event: any) => void;
  handlec3: (event: any) => void;
  theme: string;
}
const NavigatorNode: React.FC<NavigateProps> = ({
  isClicked,
  isListClicked,
  isBelClicked,
  isHClicked,
  isListLayout,
  handleListClick,
  handleHClick,
  handleLayoutClick,
  handlec1,
  handlec2,
  handlec3,
  theme,
}) => {
  const [frameCheckboxChecked, setFrameCheckboxChecked] = useState(true);
  return (
    <div className="self-stretch h-20 relative max-w-full text-left text-xl text-neutral-00 font-caption-1-medium mq450:h-auto mq450:min-h-[80]">
      <div className="absolute top-[27px] left-[0px] w-full flex flex-row items-start justify-between gap-[20px] max-w-full mq450:flex-wrap">
        <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
          <h2
            className={` 
          ${
            theme === "dark" ? "bg-[#ecf3f3]" : "bg-[#000000]"
          }m-0 relative text-inherit tracking-[-0.01em] font-medium font-inherit mq450:text-base `}
          >
            My Spaces
          </h2>
        </div>
        <div className="flex flex-row items-start justify-start gap-[8px] text-sm text-text-for-dark-70">
          <div className="rounded-3xs bg-gray-600 shadow-[2px_2px_4px_rgba(0,_0,_0,_0.25)_inset] flex flex-row items-start justify-start py-0 px-1">
            <div className="rounded-42xl flex flex-row items-start justify-start gap-[8px]">
              <div className="rounded-3xs flex flex-row items-start justify-start py-1 px-0 text-text-for-dark-100">
                <div
                  onClick={handleListClick}
                  className="overflow-hidden flex flex-row items-start justify-start"
                >
                  <div
                    className={` 
                  ${
                    isListClicked == true
                      ? "bg-additional-color-green-4"
                      : "bg-gray-200"
                  }
                  w-[30px] rounded-sm1 shadow-[0px_0px_14px_rgba(111,_191,_132,_0.4)] box-border flex flex-row items-center justify-center py-2 px-[7px] border-[1px] border-solid border-paleturquoise `}
                  >
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/list.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="rounded-3xs flex flex-row items-start justify-start py-1 px-0">
                <div
                  onClick={handleLayoutClick}
                  className="overflow-hidden flex flex-row items-start justify-start"
                >
                  <div
                    className={` 
                  ${
                    isListClicked == true
                      ? "bg-gray-200"
                      : "bg-additional-color-green-4"
                  }
                  w-[30px] rounded-sm1 box-border flex flex-row items-center justify-center py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark `}
                  >
                    <img
                      className="h-3.5 w-3.5 relative"
                      alt=""
                      src="/layoutgrid02.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cursor-pointer flex flex-col items-start justify-start pt-px px-0 pb-0 text-gray-2800">
            <div className="rounded-xl bg-gray-100 overflow-hidden flex flex-row items-start justify-start py-2 px-3 gap-[8px]">
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 hidden min-h-[20px]"
                alt=""
                src="/component-1placeholder.svg"
              />
              <div className="relative leading-[20px]">
                <span>Sort by</span>
                <span className="font-semibold text-neutral-00"> Created</span>
              </div>
              <img
                className="h-5 w-5 relative overflow-hidden shrink-0 min-h-[20px]"
                alt=""
                src="/chevronselectorvertical-1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      {isClicked && (
        <div
          onClick={handlec1}
          className=" absolute top-[0px] left-[662px] rounded-3xs bg-gray-3100 shadow-[0px_126px_35px_rgba(0,_0,_0,_0.01),_0px_81px_32px_rgba(0,_0,_0,_0.06),_0px_45px_27px_rgba(0,_0,_0,_0.2),_0px_20px_20px_rgba(0,_0,_0,_0.34),_0px_5px_11px_rgba(0,_0,_0,_0.4)] [backdrop-filter:blur(20px)] box-border w-[166px] overflow-hidden flex flex-row items-start justify-start z-[1] text-sm text-gray-3000 border-[1px] border-solid border-dimgray-400"
        >
          <div className="flex-1 flex flex-col items-start justify-start py-1 px-0">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 rounded-md flex flex-col items-start justify-start py-1.5 pr-[27px] pl-2">
                <div className="cursor-pointer self-stretch flex flex-row items-center justify-start gap-[6px]">
                  <div className="w-6 rounded-lg bg-neutral-90 box-border flex flex-row items-start justify-start py-1.5 px-[5px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-3 w-3 relative"
                      alt=""
                      src="/folder.svg"
                    />
                  </div>
                  <div className="flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    New Spaces
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch bg-neutral-90 flex flex-row items-center justify-start">
              <div className="flex-1 rounded-md flex flex-col items-start justify-start py-1.5 px-2">
                <div className="self-stretch flex flex-row items-center justify-start gap-[6px]">
                  <input
                    className="accent-neutral-90 m-0 h-6 w-6 rounded-lg box-border border-[1px] border-solid border-dimgray-600"
                    checked={frameCheckboxChecked}
                    type="checkbox"
                    onChange={(event) =>
                      setFrameCheckboxChecked(event.target.checked)
                    }
                  />
                  <div className="relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">{`Record `}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {isBelClicked && (
        <div
          onClick={handlec2}
          className="absolute top-0 left-[482px] z-50 rounded-3xs bg-gray-3100 shadow-[0px_126px_35px_rgba(0,_0,_0,_0.01),_0px_81px_32px_rgba(0,_0,_0,_0.06),_0px_45px_27px_rgba(0,_0,_0,_0.2),_0px_20px_20px_rgba(0,_0,_0,_0.34),_0px_5px_11px_rgba(0,_0,_0,_0.4)] [backdrop-filter:blur(20px)] box-border w-[441px] h-[549px] overflow-hidden flex flex-row items-start justify-start text-sm text-gray-3000 border-[1px] border-solid border-dimgray-400"
        >
          <NotificationContainer />
        </div>
      )}
      {isHClicked && (
        <div
          onClick={handlec3}
          className=" absolute top-[0px] z-50 left-[702px] rounded-3xs bg-gray-3100 shadow-[0px_126px_35px_rgba(0,_0,_0,_0.01),_0px_81px_32px_rgba(0,_0,_0,_0.06),_0px_45px_27px_rgba(0,_0,_0,_0.2),_0px_20px_20px_rgba(0,_0,_0,_0.34),_0px_5px_11px_rgba(0,_0,_0,_0.4)] [backdrop-filter:blur(20px)] box-border w-[266px] overflow-hidden flex flex-row items-start justify-start  text-sm text-gray-3000 border-[1px] border-solid border-dimgray-400"
        >
          <div className="flex-1 flex flex-col items-start justify-start py-1 px-0">
            <div className="self-stretch flex flex-row items-center justify-start">
              <div className="flex-1 rounded-md flex flex-col items-start justify-start py-1.5 pr-[27px] pl-2">
                <div className="cursor-pointer self-stretch flex flex-row items-center justify-start gap-[6px]">
                  <div className="h-[37.87px] flex-1 rounded-md bg-dodgerblue box-border overflow-hidden flex flex-row items-start justify-start py-[9px] pr-[13px] pl-3 border-[0.9px] border-solid border-gray-1500">
                    <div className="relative leading-[140%] font-semibold whitespace-nowrap">
                      H
                    </div>
                  </div>
                  <div className="flex-1 relative font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Hansen Ricardo
                    <div className="text-gray-100">
                      hansenricardo@ucasty.com
                    </div>
                  </div>
                </div>
                <div className="cursor-pointer self-stretch flex flex-row items-center justify-start gap-[6px] p-1 mt-[15px]">
                  <div className="w-6 rounded-lg bg-neutral-90 box-border flex flex-row items-start justify-start py-1.5 px-[5px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-3 w-3 relative"
                      alt=""
                      src="/folder.svg"
                    />
                  </div>
                  <div className="flex-1 relative ml-2 font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Events
                  </div>
                </div>
                <div className="cursor-pointer self-stretch flex flex-row items-center justify-start gap-[6px] p-1 mt-[20px]">
                  <div className="w-6 rounded-lg bg-neutral-90 box-border flex flex-row items-start justify-start py-1.5 px-[5px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-3 w-3 relative"
                      alt=""
                      src="/folder.svg"
                    />
                  </div>
                  <div className="flex-1 relative ml-2 font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Schedule event
                  </div>
                </div>
                <div className="cursor-pointer self-stretch flex flex-row items-center justify-start gap-[6px] p-1 mt-[20px]">
                  <div className="w-6 rounded-lg bg-neutral-90 box-border flex flex-row items-start justify-start py-1.5 px-[5px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-3 w-3 relative"
                      alt=""
                      src="/folder.svg"
                    />
                  </div>
                  <div className="flex-1 relative ml-2 font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Organization settings
                  </div>
                </div>
                <div className="cursor-pointer self-stretch flex flex-row items-center justify-start gap-[6px] p-1 mt-[20px]">
                  <div className="w-6 rounded-lg bg-neutral-90 box-border flex flex-row items-start justify-start py-1.5 px-[5px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-3 w-3 relative"
                      alt=""
                      src="/folder.svg"
                    />
                  </div>
                  <div className="flex-1 relative ml-2 font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Upgrade
                  </div>
                </div>
                <div className="cursor-pointer self-stretch flex flex-row items-center justify-start gap-[6px] p-1 mt-[20px]">
                  <div className="w-6 rounded-lg bg-neutral-90 box-border flex flex-row items-start justify-start py-1.5 px-[5px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-3 w-3 relative"
                      alt=""
                      src="/folder.svg"
                    />
                  </div>
                  <div className="flex-1 relative ml-2 font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Help center
                  </div>
                </div>
                <div className="cursor-pointer self-stretch flex flex-row items-center justify-start gap-[6px] p-1 mt-[20px]">
                  <div className="w-6 rounded-lg bg-neutral-90 box-border flex flex-row items-start justify-start py-1.5 px-[5px] border-[1px] border-solid border-dimgray-600">
                    <img
                      className="h-3 w-3 relative"
                      alt=""
                      src="/folder.svg"
                    />
                  </div>
                  <div className="flex-1 relative ml-2 font-medium text-transparent !bg-clip-text [background:linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_linear-gradient(rgba(255,_255,_255,_0.3),_rgba(255,_255,_255,_0.3)),_#fff] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
                    Logout
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default NavigatorNode;
