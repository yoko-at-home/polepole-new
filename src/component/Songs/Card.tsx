import type { NextPage } from "next";
import Image from "next/image";

type Props = {
  imageFileName: string;
  imageFileNameDetail: string;
  header: string;
  subheader: string;
  content: string;
  extraInfo: string;
};

export const CardModal: NextPage<Props> = (props) => {
  return (
    <div className="p-4 h-4/5" style={{ maxWidth: "800px" }}>
      <div className="flex flex-col p-3 rounded-md border-2 border-gray-200  md:flex-row">
        <Image
          alt={props.header}
          src={props.imageFileName}
          className="object-cover object-center md:h-36 lg:h-48"
          width={272}
          height={300}
        />
        <div className="px-2 sm:px-6 md:w-2/3">
          <h2 className="z-50 text-lg font-bold tracking-tight leading-8 text-yellow-900 sm:mt-3 sm:text-2xl">
            {props.header}
          </h2>
          <p className="text-sm font-bold leading-loose text-green-900 prose sm:mt-10 sm:mb-3 sm:text-lg">
            {props.content}
          </p>
      </div>
    </div>
    </div>
  );
};
