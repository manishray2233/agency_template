import type { NextPage } from "next";
import GroupComponent2 from "./group-component2";

const FrameComponent2: NextPage = () => {
  return (
    <div className="self-stretch flex flex-row items-start justify-start relative max-w-full text-left text-base text-black font-font">
      <img
        className="h-[667px] w-[785px] absolute my-0 mx-[!important] right-[0px] bottom-[-50px] object-contain z-[1]"
        loading="eager"
        alt=""
        src="/group-2@2x.png"
      />
      <div className="flex-1 rounded-13xl flex flex-col items-start justify-start pt-[91px] px-[46px] pb-44 box-border gap-[24px] bg-[url('/rectangle-14@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq750:pt-[59px] mq750:px-[23px] mq750:pb-[114px] mq750:box-border">
        <img
          className="w-[1380px] relative rounded-13xl max-h-full object-cover hidden max-w-full"
          alt=""
          src="/rectangle-14@2x.png"
        />
        <div className="w-[479px] flex flex-col items-start justify-start gap-[15px] max-w-full">
          <div className="relative leading-[120%] z-[1]">
            Welcome to Realstate
          </div>
          <h1 className="m-0 self-stretch h-40 relative text-48xl leading-[120%] font-semibold font-inherit inline-block z-[1] mq450:text-21xl mq450:leading-[48px] mq1050:text-35xl mq1050:leading-[64px]">
            Manage Your Property
          </h1>
        </div>
        <div className="w-[435px] relative leading-[24px] inline-block max-w-full z-[1]">
          Your will have everything nearby supermarket, buses , station, the
          carmen neighborhood, etc
        </div>
        <GroupComponent2 />
      </div>
    </div>
  );
};

export default FrameComponent2;
