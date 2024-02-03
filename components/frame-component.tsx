import type { NextPage } from "next";
import GroupComponent from "./group-component";

const FrameComponent: NextPage = () => {
  return (
    <section className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-[30px] box-border max-w-full text-left text-base text-black font-font">
      <div className="flex-1 flex flex-col items-start justify-start gap-[16px] max-w-full">
        <div className="relative leading-[120%]">Best Project of the Years</div>
        <div className="self-stretch flex flex-col items-end justify-start gap-[45px] max-w-full text-31xl mq750:gap-[45px]">
          <div className="self-stretch flex flex-row items-center justify-between gap-[20px] max-w-full mq750:flex-wrap">
            <h1 className="m-0 relative text-inherit leading-[120%] font-semibold font-inherit inline-block max-w-full mq450:text-11xl mq450:leading-[36px] mq1050:text-21xl mq1050:leading-[48px]">
              Our recent projects
            </h1>
            <div className="flex flex-row items-start justify-start gap-[16px]">
              <img
                className="h-[45px] w-[45px] relative min-h-[45px]"
                loading="eager"
                alt=""
                src="/group-10.svg"
              />
              <div className="h-[45px] w-[45px] relative min-h-[45px] flex items-center justify-center">
                <img
                  className="h-full w-full min-h-[45px] object-contain absolute left-[0px] top-[13px] [transform:scale(1.667)]"
                  loading="eager"
                  alt=""
                  src="/group-11.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch grid flex-row items-start justify-start gap-[20px] max-w-full grid-cols-[repeat(3,_minmax(335px,_1fr))] text-base lg:justify-center lg:grid-cols-[repeat(2,_minmax(335px,_581px))] mq750:grid-cols-[minmax(335px,_1fr)]">
            <div className="flex flex-col items-start justify-start pt-0 px-0 pb-[25px] box-border relative gap-[24px] max-w-full">
              <div className="w-full h-full absolute my-0 mx-[!important] top-[0px] right-[0px] bottom-[0px] left-[0px] rounded-sm bg-gray-300 box-border border-[1px] border-solid border-gray-color" />
              <img
                className="self-stretch h-[263px] relative rounded-sm max-w-full overflow-hidden shrink-0 object-cover z-[1]"
                loading="eager"
                alt=""
                src="/rectangle-19@2x.png"
              />
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
            <GroupComponent rectangle20="/rectangle-20@2x.png" />
            <GroupComponent
              rectangle20="/rectangle-21@2x.png"
              propBackgroundImage="url('/rectangle-21@2x.png')"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent;
