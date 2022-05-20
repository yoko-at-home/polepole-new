/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

export type CardProps = {
  imageFileName?: string;
  imageFileNameDetail?: string;
  header?: string;
  subheader?: string;
  content?: string;
  extraInfo?: string;
  extraInfo2?: string;
};

export const Card: NextPage<CardProps> = (props) => {
  return (
    <div
      className="group p-8 mb-10 w-full bg-slate-400/10 hover:bg-primary/10 shadow-lg shadow-slate-200"
      key={props.header}
    >
      <div>{props.subheader}</div>
      <div className="flex py-5 text-left">
        <img
          className="p-1 mr-5 w-20 h-20 bg-primary/30 group-hover:bg-white"
          src={props.imageFileName}
          alt={props.header}
        />
        <h4 className="text-2xl font-bold shadow-sm">{props.header}</h4>
      </div>
      <p className="text-lg font-black">{props.content}</p>
    </div>
  );
};

export const CardModal: NextPage<CardProps> = (props) => {
  return (
    <div className="p-4 h-4/5" style={{ maxWidth: "800px" }}>
      <div className="flex flex-col p-3 border-2 border-gray-200  md:flex-row">
        <img
          alt={props.header}
          src={props.imageFileNameDetail}
          className="object-cover object-center"
          width={272}
          height={300}
        />
        <div className="px-2 sm:px-6 md:w-2/3">
          <h2 className="z-50 text-lg font-bold tracking-tight leading-8 text-yellow-900 sm:mt-3 sm:text-2xl">
            {props.header}
          </h2>
          <p className="text-sm font-bold leading-loose prose sm:mt-10 sm:mb-3 sm:text-lg">{props.content}</p>
          <p className="text-sm font-bold leading-loose prose sm:mt-10 sm:mb-3 sm:text-lg">{props.extraInfo}</p>
          <p className="text-sm font-bold leading-loose prose sm:mt-10 sm:mb-3 sm:text-lg">{props.extraInfo2}</p>
        </div>
      </div>
    </div>
  );
};
