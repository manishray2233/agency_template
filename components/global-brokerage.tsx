import type { NextPage } from "next";

const GlobalBrokerage: NextPage = () => {
  return (
    <section className="w-[1273px] flex flex-row items-start justify-start py-0 pr-0 pl-7 box-border min-h-[773px] max-w-full text-center text-31xl text-black font-font">
      <div className="flex-1 flex flex-col items-center justify-start gap-[45px] max-w-full mq750:gap-[45px]">
        <h1 className="m-0 w-[785px] relative text-inherit leading-[120%] font-semibold font-inherit inline-block max-w-full mq450:text-11xl mq450:leading-[36px] mq1050:text-21xl mq1050:leading-[48px]">
          We are a global, boutique real estate brokerage
        </h1>
        <div className="self-stretch flex flex-row items-center justify-center gap-[175px] max-w-full text-left text-19xl lg:gap-[175px] mq450:gap-[175px] mq750:gap-[175px] mq1050:flex-wrap">
          <div className="w-[520px] flex flex-col items-start justify-start pt-0 px-0 pb-[30px] box-border min-w-[520px] max-w-full mq750:min-w-full mq1050:flex-1">
            <div className="self-stretch flex flex-col items-start justify-start py-0 pr-px pl-0 box-border gap-[80px] max-w-full mq450:gap-[80px] mq750:gap-[80px]">
              <div className="flex flex-col items-start justify-start gap-[45px] max-w-full mq750:gap-[45px]">
                <div className="flex flex-col items-start justify-start gap-[24px] max-w-full">
                  <h1 className="m-0 relative text-inherit leading-[120%] font-semibold font-inherit mq450:text-4xl mq450:leading-[27px] mq1050:text-11xl mq1050:leading-[36px]">
                    The transfer of real estate
                  </h1>
                  <div className="w-[474px] relative text-base leading-[24px] inline-block max-w-full">
                    Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet
                    sit pellentesque sollicitudin. Egestas faucibus lacus diam
                    in senectus consectetur. Mattis elit adipiscing quisque
                    tellus scelerisque vehicula ante nunc. Tellus consequat nisl
                    quis nisl justo.
                  </div>
                </div>
                <div className="flex flex-row items-start justify-start gap-[24px] max-w-full mq450:flex-wrap">
                  <button className="cursor-pointer [border:none] pt-5 pb-[21px] pr-[31px] pl-[35px] bg-text-heading-color rounded-21xl overflow-hidden flex flex-row items-center justify-center whitespace-nowrap hover:bg-dimgray">
                    <div className="relative text-base leading-[120%] font-font text-white text-left">
                      Book Now!
                    </div>
                  </button>
                  <button className="cursor-pointer pt-5 pb-[21px] pr-[30px] pl-[34px] bg-white rounded-21xl overflow-hidden flex flex-row items-center justify-center whitespace-nowrap border-[1px] border-solid border-gray-color hover:bg-gainsboro hover:box-border hover:border-[1px] hover:border-solid hover:border-gray-100">
                    <div className="relative text-base leading-[120%] font-font text-text-heading-color text-left">
                      Read More
                    </div>
                  </button>
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-between gap-[20px] text-48xl mq450:flex-wrap">
                <div className="w-[114px] flex flex-col items-start justify-start gap-[5px]">
                  <div className="relative leading-[120%] font-semibold mq450:text-21xl mq450:leading-[48px] mq1050:text-35xl mq1050:leading-[64px]">
                    12+
                  </div>
                  <div className="relative text-base leading-[120%]">
                    Customers
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <div className="relative leading-[120%] font-semibold mq450:text-21xl mq450:leading-[48px] mq1050:text-35xl mq1050:leading-[64px]">
                    14+
                  </div>
                  <div className="flex flex-row items-start justify-start py-0 px-[9px] text-base">
                    <div className="relative leading-[120%]">Offices</div>
                  </div>
                </div>
                <div className="flex flex-col items-start justify-start gap-[5px]">
                  <div className="relative leading-[120%] font-semibold mq450:text-21xl mq450:leading-[48px] mq1050:text-35xl mq1050:leading-[64px]">
                    10+
                  </div>
                  <div className="relative text-base leading-[120%]">
                    Students
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-[577px] flex-1 relative rounded-sm bg-[url('/rectangle-27@2x.png')] bg-cover bg-no-repeat bg-[top] min-w-[357px] max-w-full mq450:min-w-full">
            <img
              className="absolute top-[0px] left-[0px] rounded-sm w-full h-full object-cover hidden"
              alt=""
              src="/rectangle-27@2x.png"
            />
            <div className="absolute top-[0px] left-[0px] rounded-sm [background:linear-gradient(115.89deg,_rgba(193,_222,_232,_0.7)_9.15%,_rgba(255,_255,_255,_0)_52.17%,_rgba(251,_217,_185,_0.7)_98.84%)] w-full h-full z-[1]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalBrokerage;
