/* eslint-disable react/jsx-key */
/* eslint-disable tailwindcss/no-custom-classname */
import "react-vertical-timeline-component/style.min.css";

import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { PageTitle } from "src/component/PageTitle";

import { data } from "./data";

export const TimeLineItem = () => {
  return (
    <div className="text-center" style={{ background: "#ece7e7", fontFamily: "Trebuchet Ms" }}>
      <PageTitle>🚢　🚢　🚢</PageTitle>
      <VerticalTimeline>
        {data.map((event) => {
          return (
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              date={event.date}
              iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            >
              <h3 className="vertical-timeline-element-title" dangerouslySetInnerHTML={{ __html: event.event }} />
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
      <div className="z-50 mx-auto mt-10 w-full">
        <span className="p-10  font-extrabold text-center text-white whitespace-nowrap bg-blue-500 rounded-full ptext-2xl">
          ✨ 団員募集中 ✨
        </span>
      </div>
    </div>
  );
};

// header={header}
// subheader={d.subheader}
// content={d.content}
