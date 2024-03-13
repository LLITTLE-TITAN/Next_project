import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type HorizontalSeparatorType = {
  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const HorizontalSeparator: NextPage<HorizontalSeparatorType> = ({
  propPadding,
}) => {
  const horizontalSeparatorStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className="self-stretch flex flex-row items-center justify-between max-w-full gap-[0px] [row-gap:20px] text-left text-lg text-neutral-00 font-caption-1-regular"
      style={horizontalSeparatorStyle}
    >
      <div className="w-[324.7px] flex flex-row items-center justify-start gap-[0px_16px] max-w-full">
        <img
          className="h-[61px] w-[61px] relative rounded-md1 overflow-hidden shrink-0"
          loading="lazy"
          alt=""
          src="/frame-1171277256.svg"
        />
        <div className="flex-1 flex flex-col items-start justify-start gap-[4px_0px]">
          <div className="relative font-medium whitespace-nowrap">
            Oriez Fitness
          </div>
          <div className="w-[75px] relative font-medium text-gray-700 text-center inline-block">
            Personal
          </div>
        </div>
      </div>
      <div className="w-[30px] rounded-lg bg-gray-100 box-border flex flex-row items-start justify-center py-2 px-[7px] border-[1px] border-solid border-stroke-gradient-dark">
        <img
          className="h-3.5 w-3.5 relative"
          alt=""
          src="/dotshorizontal.svg"
        />
      </div>
    </div>
  );
};

export default HorizontalSeparator;
