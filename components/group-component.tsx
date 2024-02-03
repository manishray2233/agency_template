import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

type GroupComponentType = {
  rectangle20?: string;

  /** Style props */
  propBackgroundImage?: CSSProperties["backgroundImage"];
};

const GroupComponent: NextPage<GroupComponentType> = ({
  rectangle20,
  propBackgroundImage,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  return (
    <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[25px] box-border relative gap-[24px] max-w-full text-left text-base text-black font-font">
      <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm bg-gray-300 box-border border-[1px] border-solid border-gray-color" />
      <div
        className="self-stretch h-[263px] relative rounded-sm bg-[url('/rectangle-20@2x.png')] bg-cover bg-no-repeat bg-[top] z-[1]"
        style={frameDivStyle}
      >
        <img
          className="absolute top-[0px] left-[0px] rounded-sm w-full h-full object-cover hidden z-[1]"
          alt=""
          src={rectangle20}
        />
        <div className="absolute top-[0px] left-[0px] rounded-sm [background:linear-gradient(115.89deg,_rgba(193,_222,_232,_0.7)_9.15%,_rgba(255,_255,_255,_0)_52.17%,_rgba(251,_217,_185,_0.7)_98.84%)] w-full h-full z-[2]" />
      </div>
      <div className="w-[377px] flex flex-row items-start justify-start py-0 px-6 box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[17px] max-w-full">
          <div className="relative text-2xl leading-[120%] font-semibold z-[1] mq450:text-mid mq450:leading-[20px]">
            Sobha Hearland II Villas
          </div>
          <div className="self-stretch relative leading-[24px] z-[1]">
            Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet
            bibendum.
          </div>
          <div className="flex flex-row items-start justify-start py-0 pr-0.5 pl-0 gap-[15px]">
            <div className="h-[18px] flex flex-row items-end justify-start gap-[6px] z-[1]">
              <img
                className="h-[17.3px] w-[16.6px] relative"
                loading="eager"
                alt=""
                src="/starinactivebig.svg"
              />
              <img
                className="h-[17.3px] w-[16.6px] relative"
                loading="eager"
                alt=""
                src="/starinactivebig-1.svg"
              />
              <div className="h-4 w-[17px] flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
                <img
                  className="w-[16.6px] h-[17.3px] relative"
                  loading="eager"
                  alt=""
                  src="/starinactivebig-2.svg"
                />
              </div>
              <img
                className="h-[17.3px] w-[16.6px] relative"
                loading="eager"
                alt=""
                src="/starinactivebig-3.svg"
              />
              <img
                className="h-[17.3px] w-[16.6px] relative"
                loading="eager"
                alt=""
                src="/starinactivebig-4.svg"
              />
            </div>
            <div className="relative leading-[120%] z-[1]">4.83</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
