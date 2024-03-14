import type { NextPage } from "next";
import FrameComponent7 from "../components/live_frame-component7";
import QnaItem from "../components/qna-item";
import { useState } from "react";
import PolsBase from "../components/pols-base";

const LivesStreamPageDark: NextPage = () => {
  const qnaData = [{}, {}, {}];
  const [isClicked, setIsClicked] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isClickedQA, setIsClickedQA] = useState(false);

  const qaClick = () => {
    setIsClickedQA(!isClickedQA);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="h-[962px] w-full relative bg-black overflow-hidden flex flex-row items-start justify-start pt-5 pb-[30px] pr-6 pl-3.5 box-border gap-[4px] tracking-[normal] text-left text-xl text-black font-headline-2-regular mq900:pl-6 mq900:box-border">
      <div className="h-[285px] w-[317px] relative rounded-2xl bg-powderblue overflow-hidden shrink-0 hidden" />
      <div className="w-[314px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border mq900:hidden">
        <FrameComponent7 />
      </div>
      <main className="flex-1 flex flex-col items-end justify-start gap-[27px] max-w-[calc(100%_-_318px)] text-left text-xs text-neutral-00 font-headline-2-regular mq900:max-w-full">
        <div className="self-stretch rounded-2xl bg-gray-3300 shadow-[0px_24px_94px_-20px_rgba(0,_0,_0,_0.55)] overflow-hidden flex flex-col items-start justify-between py-[8.5px] px-4 box-border min-h-[55px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq450:flex-wrap">
            <div className="rounded-md [background:linear-gradient(180deg,_#363636,_#232323)] flex flex-row items-center justify-start py-1 pr-[7px] pl-[3px] gap-[8px] border-[1px] border-solid border-stroke-gradient-dark">
              <div
                onClick={qaClick}
                className="cursor-pointer w-[30px] rounded-sm1 bg-brand-color-tertiary-60 shadow-[0px_0px_14px_rgba(111,_191,_132,_0.4)] box-border flex flex-row items-start justify-start py-2 px-[7px] border-[1px] border-solid border-lightgreen"
              >
                <img
                  className="h-3.5 w-3.5 relative"
                  loading="lazy"
                  alt=""
                  src="/messagechatcircle.svg"
                />
              </div>
              <div className="relative font-medium">{`Q&A`}</div>
              <div className="rounded-sm1 [background:linear-gradient(146.31deg,_#4d4d4f,_#3d3d3d)] flex flex-row items-center justify-center py-0.5 px-1.5 text-3xs text-gray-3200">
                <div className="relative leading-[140%] font-semibold">120</div>
              </div>
            </div>
            <div className="absolute z-10 right-10 flex items-center justify-end">
              <div className="relative group">
                <button
                  onClick={toggleDropdown}
                  className="cursor-pointer h-[38px] w-[161px] rounded-md bg-[#363636] to-gray-550 box-border flex flex-row items-center justify-between py-1 px-4 border-[1px] border-solid border-stroke-gradient-dark"
                >
                  <div className="relative font-medium text-white">Popular</div>
                  <img
                    className="h-3.5 w-3.5 relative overflow-hidden shrink-0"
                    alt=""
                    src="/chevronup.svg"
                  />
                </button>
                {isDropdownOpen && (
                  <div className="absolute top-10 right-0 mt-2 rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5 p-1 space-y-1">
                    {/* Dropdown content goes here */}
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                    >
                      Uppercase
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                    >
                      Lowercase
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                    >
                      Camel Case
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer rounded-md"
                    >
                      Kebab Case
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <section className="self-stretch flex flex-col items-start justify-start py-0 pr-0 pl-4 box-border gap-[16px] max-w-full text-left text-lg text-neutral-00 font-headline-2-regular">
          {isClickedQA == true ? (
            <div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[8px] shrink-0">
                {qnaData.map((item, index) => (
                  <QnaItem
                    key={index}
                    index={index}
                    isClicked={isClicked}
                    setIsClicked={setIsClicked}
                  />
                ))}
              </div>
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
              <QnaItem
                index={qnaData.length}
                isClicked={isClicked}
                setIsClicked={setIsClicked}
              />
            </div>
          ) : (
            <div className="flex-1 flex flex-col items-start justify-start px-0 pb-0 box-border max-w-[calc(100%)] mq900:pt-[51px] mq900:box-border mq900:max-w-full mq450:pt-[33px] mq450:box-border">
              <main className="self-stretch rounded-2xl shadow-[0px_6px_16px_-11px_rgba(0,_0,_0,_0.1)] box-border overflow-hidden flex flex-col items-start justify-start pt-4 px-6 pb-[336px] gap-[32px] shrink-0 max-w-full text-left text-5xl text-neutral-20 font-headline-2-regular border-[1px] border-solid border-stroke-gradient-dark mq900:pt-5 mq900:pb-[218px] mq900:box-border mq675:gap-[16px_32px]">
                <div className="self-stretch relative leading-[140%] font-semibold mq450:text-lgi mq450:leading-[27px]">{`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries Lorem ipsum is placeholder text commonly used in the graphic, prid `}</div>
                <div className="w-[1020px] overflow-x-auto flex flex-col items-start justify-start gap-[16px] max-w-full">
                  <PolsBase b="A" />
                  <PolsBase b="B" />
                  <PolsBase b="C" />
                  <PolsBase b="D" />
                </div>
              </main>
            </div>
          )}
        </section>
      </main>
    </div>
  );
};

export default LivesStreamPageDark;
