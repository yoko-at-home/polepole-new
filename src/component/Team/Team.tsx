/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { ConfettiSmall } from "src/component/Confetti";

import { data } from "./data";

export const Team: NextPage = () => {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 md:px-3 lg:grid-cols-3">
      {data.map((d) => {
        return (
          <div className="p-8 mb-10 w-full text-center bg-gray-900/30 rounded-xl border-4" key={d.header}>
            <img className="mx-auto w-40 h-40 rounded-full" src={d.imageFileName} alt={d.header} />
            <h4 className="text-2xl font-bold shadow-sm">{d.header}</h4>
            <p className="text-lg font-black">{d.subheader}</p>
          </div>
        );
      })}
      <Link href="/contact" passHref>
        <a className="p-5">
          <div className="relative mb-10 min-w-full text-center bg-yellow-300 rounded-xl border-4">
            <ConfettiSmall />
            <div className="absolute top-0 left-[20%] p-2 mx-auto w-40 h-40">
              <Image
                className="w-40 h-40 rounded-full shadow-inner shadow-slate-300"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGCcZxzO3sodtdsVVGHl2UJUrW6PnydcK6Ug&usqp=CAU"
                alt="お問合せ"
                width={140}
                height={140}
              />
            </div>
            <p className="text-xl font-black">💃 Come and join us 💃 </p>
          </div>
        </a>
      </Link>
    </div>
  );
};
