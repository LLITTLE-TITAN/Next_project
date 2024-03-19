import type { NextPage } from "next";
import NavigatorNode from "../components/navigator-node";
import ConstantNodes from "../components/constant-nodes";
import { useState, useRef, useEffect } from "react";
import Search from "../components/search";
import ContainerWithButtons from "../components/container-with-buttons";
import Bar from "../components/bar";
import { useRouter } from "next/router";

interface NavigateProps {
  theme: string;
}
const ProfilePageChannelCalled: React.FC<NavigateProps> = ({ theme }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [isClickedScreen, setIsClickedScreen] = useState(false);
  const [isBelClicked, setIsBelClicked] = useState(false);
  const [isHClicked, setIsHClicked] = useState(false);
  const [isSearchClicked, setIsSearchClicked] = useState(false);
  const [isSearchClicked1, setIsSearchClicked1] = useState(false);
  const [isListLayout, setIsListLayout] = useState(true);
  const router = useRouter();
  const handleClicked = () => {
    setIsClicked(!isClicked);
    setIsBelClicked(false);
    setIsHClicked(false);
    setIsSearchClicked(false);
  };
  const handleHClick = () => {
    setIsClicked(false);
    setIsBelClicked(false);
    setIsHClicked(!isHClicked);
    setIsSearchClicked(false);
  };

  const handleSpace = () => {
    router.push("/profile-page-called");
    setIsClicked(false);
    setIsBelClicked(false);
    setIsSearchClicked(false);
  };
  const handleClickMove = (event: any) => {
    event.stopPropagation();
    if (divRef.current && divRef.current.contains(event.target)) {
      // Click occurred inside the div, no action needed
    } else {
      // Click occurred outside the div, change isSearchClicked to false
      // Add logic to change isSearchClicked to false here
      setIsSearchClicked(false);
    }
  };
  const handleSearchClick = () => {
    setIsSearchClicked1(!isSearchClicked1);
    setIsClicked(false);
    setIsClickedScreen(true);
    setIsBelClicked(false);
    setIsHClicked(false);
    console.log(isSearchClicked1);
  };
  const handlec1 = (event: any) => {
    event.stopPropagation();
    setIsClicked(true);
    setIsHClicked(false);
    setIsBelClicked(false);
  };
  const handlec2 = (event: any) => {
    event.stopPropagation();
    setIsClicked(false);
    setIsHClicked(false);
    setIsBelClicked(true);
  };
  const handlec3 = (event: any) => {
    event.stopPropagation();
    setIsClicked(false);
    setIsHClicked(true);
    setIsBelClicked(false);
  };
  const handleBelClicked = () => {
    setIsBelClicked(!isBelClicked);
    setIsHClicked(false);
    setIsClicked(false);
    setIsSearchClicked(false);
  };
  const [isListClicked, setIsListClicked] = useState(true);

  const handleListClick = () => {
    setIsListClicked(true);
    setIsListLayout(true);
  };
  const changeState = () => {
    setIsClicked(false);
    setIsHClicked(false);
    console.log(isClicked);
    setIsBelClicked(false);
  };
  const handleLayoutClick = () => {
    setIsListClicked(false);
    setIsListLayout(false);
  };
  useEffect(() => {
    console.log(isSearchClicked);
    document.addEventListener("click", handleClickMove);

    return () => {
      document.removeEventListener("click", handleClickMove);
    };
  }, []);
  return (
    <div
      className={` w-full relative ${
        theme === "dark" ? "bg-[#FFFFFF]" : "bg-[#000000]"
      } overflow-hidden flex flex-col items-center justify-start pt-5 px-5 pb-[441px] box-border gap-[12px] tracking-[normal] text-left text-xs font-caption-1-medium mq450:h-auto `}
    >
      {/* <div className={` ${isSearchClicked==true?"flex":"hidden"} w-[1240px] mt-1  flex-col items-start justify-start gap-[34px] shrink-0 [debug_commit:612783b] mq800:gap-[17px_34px] `}>
        <Header />
      </div> */}
      <header className="w-[1240px] ${} flex flex-row items-start justify-center max-w-full text-left text-xs text-neutral-00 font-caption-1-medium">
        <div className="w-[700px] rounded-lg1 bg-gray-400 overflow-hidden shrink-0 flex flex-row items-start justify-between p-1.5 box-border gap-[20px] max-w-full">
          <div className="cursor-pointer rounded-md [background:linear-gradient(180deg,_#363636,_#232323)] flex flex-row items-start justify-start py-[7px] px-[11px] gap-[8px] border-[1px] border-solid border-stroke-gradient-dark">
            <div className="h-[22px] w-[22px] relative min-h-[22px] flex items-center justify-center">
              <img
                className="h-full w-full min-h-[22px] object-contain absolute left-[0px] top-[0px] [transform:scale(2.286)]"
                alt=""
                src="/loop-node.svg"
              />
            </div>
            <div className="flex flex-col items-start justify-start pt-[2.5px] px-0 pb-0">
              <div
                onClick={handleSpace}
                className="relative leading-[140%] font-semibold"
              >
                Spaces
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
              <img
                className="w-3.5 h-3.5 relative overflow-hidden shrink-0"
                alt=""
                src="/chevronselectorvertical.svg"
              />
            </div>
          </div>
          <div className="w-[324px] flex flex-row items-start justify-start gap-[8px] max-w-full text-[13.1px]">
            <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
              <div className="rounded-[14px] flex flex-row items-start justify-start gap-[8px]">
                <div
                  onClick={handleSearchClick}
                  className="cursor-pointer w-[30px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark"
                >
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/searchlg.svg"
                  />
                </div>
                <div
                  onClick={changeState}
                  className="cursor-pointer w-[30px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark"
                >
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
                <div
                  onClick={changeState}
                  className="cursor-pointer w-[30px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark"
                >
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/upload03.svg"
                  />
                </div>
                <button className="cursor-pointer py-2 px-[7px] bg-gray-100 flex-1 rounded-md flex flex-row items-start justify-start gap-[10px] border-[1px] border-solid border-stroke-gradient-dark hover:bg-dimgray-500 hover:box-border hover:border-[1px] hover:border-solid hover:border-dimgray-200">
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/share06.svg"
                  />
                  <div
                    onClick={handleClicked}
                    className="relative text-xs font-medium font-caption-1-medium text-neutral-00 text-left"
                  >
                    Share
                  </div>
                </button>
              </div>
            </div>
            <div
              onClick={changeState}
              className="cursor-pointer rounded-[7px] bg-purple-color-base overflow-hidden flex flex-row items-center justify-center p-2 mt-1"
            >
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                loading="lazy"
                alt=""
                src="/Icon.png"
              />
            </div>
            <div className="h-[29px] flex flex-col items-start justify-start pt-[7px] px-0 pb-0 box-border">
              <div className="w-px h-[22px] relative box-border opacity-[0.2] border-r-[1px] border-solid border-neutral-00" />
            </div>
            <div className="flex flex-row items-start justify-start gap-[10px]">
              <div className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
                <div
                  onClick={handleBelClicked}
                  className="cursor-pointer w-[30px] rounded-md bg-gray-100 box-border flex flex-row items-start justify-start py-2 px-[7px] relative gap-[10px] border-[1px] border-solid border-stroke-gradient-dark"
                >
                  <img
                    className="h-3.5 w-3.5 relative"
                    alt=""
                    src="/bell01.svg"
                  />
                  <div className="h-[7.5px] w-[7.5px] absolute !m-[0] top-[5px] left-[17px] rounded-[50%] bg-red box-border z-[1] border-[0px] border-solid border-gray-1500" />
                </div>
              </div>
              <div
                onClick={handleHClick}
                className="cursor-pointer h-9 w-9 flex flex-row items-start justify-start"
              >
                <div className="h-[37.87px] flex-1 rounded-md bg-dodgerblue box-border overflow-hidden flex flex-row items-start justify-start py-[9px] pr-[13px] pl-3 border-[0.9px] border-solid border-gray-1500">
                  <div className="relative leading-[140%] font-semibold whitespace-nowrap">
                    H
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`ml-[-700px] ${
            isSearchClicked1 == false ? "hidden" : ""
          } w-[1240px] flex flex-col items-start justify-start gap-[34px] shrink-0 [debug_commit:612783b] mq800:gap-[17px_34px] `}
        >
          <Bar onSearchClick={handleSearchClick} />
        </div>
      </header>
      <section
        onClick={changeState}
        className="w-[1240px] flex flex-col items-start justify-start gap-[24px] max-w-full text-left text-xl text-neutral-00 font-caption-1-medium"
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[17px] max-w-full">
          <NavigatorNode
            isClicked={isClicked}
            isListClicked={isListClicked}
            isBelClicked={isBelClicked}
            isHClicked={isHClicked}
            isListLayout={isListLayout}
            handleListClick={handleListClick}
            handlec1={handlec1}
            handlec2={handlec2}
            handlec3={handlec3}
            handleHClick={handleHClick}
            handleLayoutClick={handleLayoutClick}
            theme={theme}
          />
          <ConstantNodes isListLayout={isListLayout} />
        </div>
        <div
           onClick={changeState}
          className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap"
        >
          <div className="flex flex-col items-start justify-start pt-[6.5px] px-0 pb-0">
            <h2 className="m-0 relative text-inherit tracking-[-0.01em] font-medium font-inherit mq450:text-base">
              My Teams
            </h2>
          </div>

          <div 
             onClick={changeState}
             className="flex flex-row items-start justify-start gap-[8px] text-sm text-text-for-dark-70">
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
                  <span className="font-semibold text-neutral-00">
                    {" "}
                    Created
                  </span>
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
      </section>
      <main
        onClick={handleSearchClick}
        className={` ${
          isSearchClicked1 == true ? "" : "hidden"
        } w-full !m-[0] absolute h-full top-[0px] right-[0px] bottom-[0px] left-[0px] bg-gray-2300 [backdrop-filter:blur(24px)] overflow-hidden flex flex-row items-start justify-center py-[309px] pr-5 pl-[21px] box-border max-w-full z-[3]`}
      >
        <div
          onClick={handleClickMove}
          className="w-[573px] rounded-lg1 bg-gray-2200 box-border overflow-hidden shrink-0 flex flex-col items-start justify-start gap-[1px] max-w-full border-[1px] border-solid border-stroke-gradient-dark"
        >
          <ContainerWithButtons />
          {/* <Search /> */}
        </div>
      </main>
    </div>
  );
};

export default ProfilePageChannelCalled;
