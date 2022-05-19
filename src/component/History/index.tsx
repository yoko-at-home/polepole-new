// import { timeline } from "src/component/History/data";
// import {TimelineItem} from "src/component/History/TimeLineItem";

export const History = () => {
  return (
    <div className="flex flex-col justify-center py-6 lg:py-12">
      <div className="mx-auto w-full lg:max-w-4xl">
        <div className="relative">
          {/* <!-- Vertical middle line--> */}
          <div className="hidden absolute left-1/2 w-px h-full bg-indigo-300 -translate-x-1/2 lg:block"></div>
          <div className="space-y-12 lg:space-y-8">
            {/* <!-- Left section --> */}
            <div>
              <div className="flex flex-col items-center">
                <div className="flex justify-start items-center mx-auto w-full">
                  <div className="w-full lg:pr-8 lg:w-1/2">
                    <div className="p-4 bg-white rounded shadow-lg shadow-gray-300">
                      {/* <TimelineItem imageFileName={""} header={""} subheader={""} content={""} /> */}
                    </div>
                  </div>
                </div>
                <div className="flex absolute left-1/2 justify-center items-center w-12 h-12 bg-indigo-400 rounded-full border-4 border-red-200 -translate-x-1/2 -translate-y-4 sm:translate-y-0">
                  {/* <span className="text-white">{timeline.}</span> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
