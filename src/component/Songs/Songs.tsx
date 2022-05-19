/* eslint-disable @next/next/no-img-element */
import { PageTitle } from "src/component/PageTitle";

import { data } from "./data";

export const Songs = () => {
  return (
    <>
      <div>
        <PageTitle>ポレポーレが練習している作品</PageTitle>

        <div className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 md:px-3 lg:grid-cols-3">
          {data.map((d) => {
            return (
              <div
                className="group p-8 mb-10 w-full bg-slate-400/10 hover:bg-orange-400/10  rounded-xl shadow-lg shadow-slate-200"
                key={d.header}
              >
                <div className="flex pb-5 text-left">
                  <img
                    className="p-1 mr-5 w-20 h-20 bg-orange-400/30 group-hover:bg-white"
                    src={d.imageFileNameDetail}
                    alt={d.header}
                  />
                  <h4 className="text-2xl font-bold shadow-sm">{d.header}</h4>
                </div>
                <p className="text-lg font-black">{d.content}</p>
              </div>
            );
          })}
        </div>
        <div></div>
      </div>
    </>
  );
};
