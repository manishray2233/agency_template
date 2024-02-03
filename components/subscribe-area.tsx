import type { NextPage } from "next";
import GroupComponent2 from "./group-component2";

const SubscribeArea: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 pr-px pl-[30px] box-border max-w-full text-center text-31xl text-black font-font">
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[557px] w-[606px] absolute my-0 mx-[!important] top-[-56px] right-[-5px] object-cover z-[1]"
          loading="eager"
          alt=""
          src="/3drenderingisometricfdgdf-1@2x.png"
        />
        <div className="flex-1 rounded-mini flex flex-col items-start justify-start pt-14 px-[43px] pb-[122px] box-border gap-[45px] bg-[url('/rectangle-17@2x.png')] bg-cover bg-no-repeat bg-[top] max-w-full mq450:pt-9 mq450:pb-[79px] mq450:box-border mq750:gap-[45px] mq750:pl-[21px] mq750:pr-[21px] mq750:box-border">
          <img
            className="w-[1380px] relative rounded-mini max-h-full object-cover hidden max-w-full"
            alt=""
            src="/rectangle-17@2x.png"
          />
          <div className="flex flex-col items-start justify-start gap-[18px] max-w-full">
            <h1 className="m-0 relative text-inherit leading-[120%] font-semibold font-inherit z-[1] mq450:text-11xl mq450:leading-[36px] mq1050:text-21xl mq1050:leading-[48px]">
              Subscribe Our Newsletter
            </h1>
            <div className="w-[526px] h-24 relative text-base leading-[24px] text-left inline-block max-w-full z-[1]">
              Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit
              pellentesque sollicitudin. Egestas faucibus lacus diam in senectus
              consectetur. Mattis elit adipiscing quisque tellus scelerisque
              vehicula ante nunc.
            </div>
          </div>
          <GroupComponent2 propWidth="469px" propWidth1="469px" />
        </div>
      </div>
    </section>
  );
};

export default SubscribeArea;
