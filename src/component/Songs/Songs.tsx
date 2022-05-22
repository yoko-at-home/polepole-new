/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/jsx-handler-names */
/* eslint-disable react/jsx-key */
import type { NextPage } from "next";
import { useCallback, useState } from "react";
import { useModal } from "react-hooks-use-modal";
import { PageTitle } from "src/component/PageTitle";
import type { CardProps } from "src/component/Songs/Card";
import { Card, CardModal } from "src/component/Songs/Card";

import { data } from "./data";

export const Songs: NextPage<CardProps> = (props) => {
  const [Modal, open, close] = useModal("root", {
    preventScroll: true,
  });
  const [selectedItem, setSelectedItem] = useState<CardProps>(props);

  const handleOnClick = useCallback(
    (d) => {
      const result = data.find(({ header }) => {
        return header === d.header;
      });
      setSelectedItem(result!);
      open();
    },
    [open]
  );
  return (
    <div>
      <PageTitle>ポレポーレが練習している作品</PageTitle>
      <div className="grid grid-cols-1 gap-3 mt-10 md:grid-cols-2 md:px-3 lg:grid-cols-3">
        {data.map((d) => {
          return (
            <button
              onClick={() => {
                return handleOnClick(d);
              }}
            >
              <Card
                key={d.header}
                imageFileName={d.imageFileName}
                header={d.header}
                content={d.content}
                subheader={d.subheader}
              />
            </button>
          );
        })}
      </div>
      <Modal>
        <div className="py-10 px-2 text-gray-500 bg-white rounded sm:px-4 md:px-10">
          <CardModal
            imageFileNameDetail={selectedItem.imageFileNameDetail}
            header={selectedItem.header}
            subheader={selectedItem.subheader}
            content={selectedItem.content}
            extraInfo={selectedItem.extraInfo}
            extraInfo2={selectedItem.extraInfo2}
          />
          <div className="flex justify-end mt-8">
            <button
              // eslint-disable-next-line react/jsx-handler-names
              onClick={close}
              className="p-1 mb-3 font-medium text-center text-gray-300 hover:text-gray-100 bg-gradient-to-r from-gray-400 focus:from-purple-600 to-gray-500 focus:to-lime-400 rounded opacity-80 sm:px-4 lg:py-2 lg:mr-3"
            >
              閉じる
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};
