import { ReactNode } from "react";

interface CardProp {
  headline: string;
  content: ReactNode;
}

const Card = ({ headline, content }: CardProp) => {
  return (
    <div className="w-full lg:w-[595px] h-fit shadow-cardShad rounded-[20px] flex flex-col items-start justify-start">
      <div className="bg-primary py-2 px-2">
        <h2 className="text-base md:text-lg font-semibold">{headline}</h2>
      </div>
    </div>
  );
};

export default Card;
