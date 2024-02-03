import type { NextPage } from "next";
import GroupComponent1 from "./group-component1";

const FrameComponent1: NextPage = () => {
  return (
    <section className="w-[1335px] flex flex-row items-start justify-start py-0 pr-0 pl-7 box-border min-h-[389px] max-w-full text-left text-base text-black font-font">
      <div className="flex-1 flex flex-col items-center justify-start gap-[45px] max-w-full mq750:gap-[45px]">
        <div className="flex flex-col items-center justify-start gap-[16px] max-w-full">
          <div className="relative leading-[120%]">
            Three steps. Three minutes.
          </div>
          <h1 className="m-0 relative text-31xl leading-[120%] font-semibold font-inherit mq450:text-11xl mq450:leading-[36px] mq1050:text-21xl mq1050:leading-[48px]">
            Everything should be this easy.
          </h1>
        </div>
        <div className="self-stretch flex flex-row items-start justify-between gap-[20px] max-w-full text-9xl lg:flex-wrap">
          <GroupComponent1
            vuesaxlinearmessages="/vuesaxlinearmessages.svg"
            answerQuestions="Answer questions"
          />
          <GroupComponent1
            vuesaxlinearmessages="/vuesaxlinearsmstracking.svg"
            answerQuestions="Select a quote"
          />
          <GroupComponent1
            vuesaxlinearmessages="/vuesaxlinearedit2.svg"
            answerQuestions="Get registered"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
