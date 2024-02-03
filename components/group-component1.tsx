import type { NextPage } from "next";

type GroupComponent1Type = {
  vuesaxlinearmessages?: string;
  answerQuestions?: string;
};

const GroupComponent1: NextPage<GroupComponent1Type> = ({
  vuesaxlinearmessages,
  answerQuestions,
}) => {
  return (
    <div className="w-[329px] flex flex-col items-start justify-start gap-[22px] max-w-full text-left text-9xl text-black font-font">
      <img
        className="w-[75px] h-[75px] relative"
        loading="eager"
        alt=""
        src={vuesaxlinearmessages}
      />
      <h2 className="m-0 relative text-inherit leading-[120%] font-semibold font-inherit mq450:text-3xl mq450:leading-[27px]">
        {answerQuestions}
      </h2>
      <div className="self-stretch h-[72px] relative text-base leading-[24px] inline-block">{`Lorem ipsum dolor sit amet consectetur. Adipiscing imperdiet bibendum in in vestibulum. `}</div>
    </div>
  );
};

export default GroupComponent1;
