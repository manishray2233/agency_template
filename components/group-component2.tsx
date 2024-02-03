import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type GroupComponent2Type = {
  /** Style props */
  propWidth?: CSSProperties["width"];
  propWidth1?: CSSProperties["width"];
};

const GroupComponent2: NextPage<GroupComponent2Type> = ({
  propWidth,
  propWidth1,
}) => {
  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div
      className="w-[438px] rounded-21xl bg-white flex flex-row items-center justify-between py-0 pr-0 pl-6 box-border gap-[20px] max-w-full z-[1] text-left text-base text-gray-400 font-font mq450:flex-wrap mq450:p-5 mq450:box-border"
      style={groupDivStyle}
    >
      <div
        className="self-stretch w-[438px] relative rounded-21xl bg-white hidden max-w-full"
        style={rectangleDivStyle}
      />
      <div className="relative leading-[24px] z-[1]">Enter your email</div>
      <button className="cursor-pointer [border:none] py-[18px] pr-[21px] pl-[25px] bg-text-heading-color rounded-21xl flex flex-row items-center justify-center whitespace-nowrap z-[1] hover:bg-dimgray">
        <div className="h-[60px] w-[147px] relative rounded-21xl bg-text-heading-color hidden" />
        <div className="relative text-base leading-[24px] font-semibold font-font text-white text-left z-[1]">
          Get a Quote
        </div>
      </button>
    </div>
  );
};

export default GroupComponent2;
