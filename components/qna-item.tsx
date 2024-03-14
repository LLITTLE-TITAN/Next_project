import type { NextPage } from "next";
import { useMemo, useState, type CSSProperties } from "react";

export type QnaItemType = {
  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  index: Number;
  isClicked: Number;
  setIsClicked: any;
};

const QnaItem: NextPage<QnaItemType> = ({
  propBackgroundColor,
  propBackgroundColor1,
  index,
  isClicked,
  setIsClicked,
}) => {
  const qnaItemStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: isClicked === index ? propBackgroundColor : "#111111",
    };
  }, [isClicked, propBackgroundColor]);

  const qnaitemContentStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);
  const [voteCount, setVoteCount] = useState(125);
  const [isIncrease, setIsIncrease] = useState(true);

  const handleVote = (e:any) => {
    if (isIncrease) {
      setVoteCount(voteCount + 1);
    } else {
      setVoteCount(voteCount - 1);
    }
    setIsIncrease(!isIncrease);
    e.stopPropagation();
    
  };

  return (
    <div
      onClick={() => setIsClicked(index)}
      className="cursor-pointer self-stretch rounded-2xl bg-purple-color-base shadow-[0px_6px_16px_-11px_rgba(0,_0,_0,_0.1)] overflow-hidden flex flex-col items-start justify-start py-4 px-[23px] gap-[8px] shrink-0 text-left text-xl text-neutral-00 font-headline-2-regular border-[1px] border-solid border-stroke-gradient-dark"
      style={qnaItemStyle}
    >
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq700:flex-wrap">
        <img
          className="h-4 w-4 relative object-cover hidden"
          alt=""
          src="/icons8crown48-1@2x.png"
        />
        <img
          className="h-4 w-4 relative object-cover hidden"
          alt=""
          src="/icons8star48-1@2x.png"
        />
        <div className="w-[305px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border">
          <div className="self-stretch flex flex-row items-start justify-start gap-[8px] mq450:flex-wrap">
            <img
              className="h-8 w-8 rounded-sm overflow-hidden shrink-0 object-cover min-h-[32px]"
              loading="lazy"
              alt=""
              src="/avatar-6@2x.png"
            />
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <div className="relative leading-[140%] font-medium mq450:text-base mq450:leading-[22px]">
                Amelia Andani
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-3.5 px-0 pb-0">
              <div className="w-1 h-1 relative rounded-[50%] bg-neutral-70" />
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-neutral-20">
              <div className="relative leading-[140%] mq450:text-base mq450:leading-[22px]">
                10 Mins ago
              </div>
            </div>
          </div>
        </div>
        <div
          className="rounded-lg bg-mediumslateblue-100 overflow-hidden flex flex-row items-start justify-start p-2 gap-[4px] text-base"
          style={qnaitemContentStyle}
        >
          <div onClick={handleVote} className="flex flex-col items-start justify-start pt-[3px] px-0 pb-0">
            <img
              className="w-[18px] h-[18px] relative object-cover"
              loading="lazy"
              alt=""
              src="/126-1@2x.png"
            />
          </div>
          <div className="relative leading-[150%]">
            {voteCount}
          </div>
        </div>
      </div>
      <div className="self-stretch relative text-5xl leading-[140%] text-whitesmoke-200 mq450:text-lgi mq450:leading-[27px]">{`Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries Lorem ipsum is placeholder text commonly used in the graphic, prid `}</div>
    </div>
  );
};

export default QnaItem;
