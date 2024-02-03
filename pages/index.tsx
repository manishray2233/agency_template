import type { NextPage } from "next";
import Head from "next/head";
import AboutUsFrame from "../components/about-us-frame";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import FrameComponent from "../components/frame-component";
import GlobalBrokerage from "../components/global-brokerage";
import SubscribeArea from "../components/subscribe-area";

const LandingPage: NextPage = () => {
  return (
    <div className="w-full relative bg-white1 overflow-hidden flex flex-col items-center justify-start pt-0 pb-[110px] pr-[29px] pl-0 box-border gap-[108px] tracking-[normal] mq450:gap-[108px] mq750:gap-[108px]">
      <div className="self-stretch h-[-74px] flex flex-row items-start justify-end py-0 pr-[1661px] pl-0 box-border lg:pr-[830px] lg:box-border mq450:pr-5 mq450:box-border mq750:pr-[415px] mq750:box-border">
        <div className="w-[94px] flex flex-row items-end justify-start gap-[10px]">
          <div className="h-[27.5px] w-4 relative">
            <div className="absolute top-[11.5px] left-[0px] rounded-sm bg-gray-200 w-4 h-4" />
            <div className="absolute top-[15.5px] left-[5px] bg-white1 w-1.5 h-[9px] z-[1]" />
            <img
              className="absolute top-[0px] left-[0px] rounded-3xl w-4 h-[11.5px]"
              alt=""
              src="/rectangle-12.svg"
            />
          </div>
          <div className="h-4 flex-1 flex flex-col items-start justify-start pt-0 px-0 pb-0 box-border">
            <img
              className="self-stretch h-[17.1px] relative max-w-full overflow-hidden shrink-0"
              alt=""
              src="/build.svg"
            />
          </div>
        </div>
      </div>
      <section className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[30px] box-border max-w-full">
        <div className="flex-1 flex flex-col items-start justify-start gap-[32px] max-w-full mq750:gap-[32px]">
          <AboutUsFrame />
          <FrameComponent2 />
        </div>
      </section>
      <FrameComponent1 />
      <FrameComponent />
      <GlobalBrokerage />
      <SubscribeArea />
    </div>
  );
};

export default LandingPage;
