/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";

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
    </div>
  );
};
