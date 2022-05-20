/* eslint-disable react/jsx-key */
import type { NextPage } from "next";
import { PageTitle } from "src/component/PageTitle";

import { TimeLineItem } from "./TimeLineItem";

export const History: NextPage = () => {
  return (
    <div className="flex flex-col justify-center py-6 lg:py-12">
      <PageTitle>ポレポーレの歩み</PageTitle>
      <TimeLineItem />
    </div>
  );
};
