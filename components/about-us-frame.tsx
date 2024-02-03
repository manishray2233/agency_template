import type { NextPage } from "next";

const AboutUsFrame: NextPage = () => {
  return (
    <header className="self-stretch rounded-51xl bg-whitesmoke flex flex-row items-end justify-between pt-[13px] pb-[17px] pr-[22px] pl-[396px] box-border gap-[20px] top-[0] z-[99] sticky max-w-full text-left text-base text-text-heading-color font-font lg:pl-[198px] lg:box-border mq450:pl-5 mq450:box-border mq750:pl-[99px] mq750:box-border">
      <div className="h-[90px] w-[1380px] relative rounded-51xl bg-whitesmoke hidden max-w-full" />
      <div className="h-[58px] rounded-21xl bg-white flex flex-row items-start justify-start pt-5 pb-[17px] pr-[42px] pl-[25px] box-border gap-[69px] max-w-full z-[1] mq450:gap-[69px] mq750:hidden mq750:gap-[69px] mq750:pr-[21px] mq750:box-border">
        <div className="h-[58px] w-[658px] relative rounded-21xl bg-white hidden max-w-full" />
        <div className="relative leading-[120%] whitespace-nowrap z-[2]">
          About us
        </div>
        <div className="relative leading-[120%] z-[2]">Projects</div>
        <div className="flex flex-col items-start justify-start py-0 pr-1 pl-0">
          <div className="relative leading-[120%] z-[2]">Agents</div>
        </div>
        <div className="flex flex-col items-start justify-start py-0 pr-[5px] pl-0">
          <div className="relative leading-[120%] z-[2]">Services</div>
        </div>
        <div className="relative leading-[120%] z-[2]">Listings</div>
      </div>
      <button className="cursor-pointer pt-[21px] pb-5 pr-[29px] pl-[33px] bg-black w-40 rounded-21xl box-border overflow-hidden shrink-0 flex flex-row items-center justify-center whitespace-nowrap z-[1] border-[2px] border-solid border-darkturquoise hover:bg-darkslategray hover:box-border hover:border-[2px] hover:border-solid hover:border-lightseagreen">
        <div className="relative text-base leading-[120%] font-semibold font-font text-white1 text-left">
          Contact us
        </div>
      </button>
    </header>
  );
};

export default AboutUsFrame;
