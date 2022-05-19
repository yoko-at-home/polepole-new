/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import { PageTitle } from "src/component/PageTitle";

import { data } from "./data";

export const Activity: NextPage = () => {
  return (
    <div>
      <PageTitle>ポレポーレの活動</PageTitle>

    <div className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 md:px-3 lg:grid-cols-3">
      {data.map((item) => {
        return (
          <div className="p-8 mb-10 w-full bg-slate-400/10 rounded-xl  shadow-lg shadow-slate-200" key={item.header}>
            <div className="flex pb-5 text-left">
            <img className="p-1 mr-5 w-20 h-20 bg-primary/90 rounded" src={item.iconName} alt={item.header} />
            <h4 className="text-2xl font-bold shadow-sm">{item.header}</h4>
            </div>
            <p className="text-lg font-black">{item.content}</p>
          </div>
        );
      })}
    </div>
    </div>
  );
};
