/* eslint-disable @next/next/no-img-element */
/* eslint-disable tailwindcss/no-custom-classname */
import type { NextPage } from "next";

import { timeline } from "./data";

// type Props = {
//   imageFileName:string;
//   header: string;
//   subheader: string;
//   content:string;
// };

export const TimelineItem:NextPage = () => {
  return (
    <div className="h-72 bg-red-100">
      {timeline.map((item) => {
        <li className="timeline" key={item.subheader}>
          <div className="timeline-image">
            <img className="rounded-circle img-fluid" src={item.imageFileName} alt={item.subheader} />
          </div>
          <div className="timeline-panel">
            <div className="timeline-body">aaaa
              <p className="text-muted">{item.content}</p>
            </div>
          </div>
        </li>;
      })}
      <style jsx>{`
        .timeline-item {
          position: relative;
          min-height: 50px;
          margin-bottom: 50px;
          &:after,
          &:before {
            display: table;
            content: " ";
          }
          &:after {
            clear: both;
          }
          .timeline-panel {
            position: relative;
            float: right;
            width: 100%;
            padding: 0 20px 0 100px;
            text-align: left;
            &:before {
              right: auto;
              left: -15px;
              border-right-width: 15px;
              border-left-width: 0;
            }
            &:after {
              right: auto;
              left: -14px;
              border-right-width: 14px;
              border-left-width: 0;
            }
          }
          .timeline-image {
            position: absolute;
            z-index: 100;
            left: 0;
            width: 80px;
            height: 80px;
            margin-left: 0;
            text-align: center;
            color: white;
            border: 7px solid $gray-200;
            // border-radius: 100%;
            background-color: $primary;
            h4 {
              font-size: 10px;
              line-height: 14px;
              margin-top: 12px;
            }
          }
          &.timeline-inverted > .timeline-panel {
            float: right;
            padding: 0 20px 0 100px;
            text-align: left;
            &:before {
              right: auto;
              left: -15px;
              border-right-width: 15px;
              border-left-width: 0;
            }
            &:after {
              right: auto;
              left: -14px;
              border-right-width: 14px;
              border-left-width: 0;
            }
          }
          &:last-child {
            margin-bottom: 0;
          }
        }
        .timeline-heading {
          h4 {
            margin-top: 0;
            color: inherit;
            &.subheading {
              text-transform: none;
            }
          }
        }
        .timeline-body {
          > ul,
          > p {
            margin-bottom: 0;
          }
        }
        @media (min-width: 768px) {
          .timeline-item {
            min-height: 100px;
            margin-bottom: 100px;
            .timeline-panel {
              float: left;
              width: 41%;
              padding: 0 20px 20px 30px;
              text-align: right;
            }
            .timeline-image {
              left: 50%;
              width: 100px;
              height: 100px;
              margin-left: -50px;
              h4 {
                font-size: 13px;
                line-height: 18px;
                margin-top: 16px;
              }
            }
            &.timeline-inverted > .timeline-panel {
              float: right;
              padding: 0 30px 20px 20px;
              text-align: left;
            }
          }
        }
        @media (min-width: 992px) {
          .timeline-item {
            min-height: 150px;
            .timeline-panel {
              padding: 0 20px 20px;
            }
            .timeline-image {
              width: 150px;
              height: 150px;
              margin-left: -75px;
              h4 {
                font-size: 18px;
                line-height: 26px;
                margin-top: 30px;
              }
            }
            &.timeline-inverted > .timeline-panel {
              padding: 0 20px 20px;
            }
          }
        }
        @media (min-width: 1200px) {
          .timeline-item {
            min-height: 170px;
            .timeline-panel {
              padding: 0 20px 20px 100px;
            }
            .timeline-image {
              width: 170px;
              height: 170px;
              margin-left: -85px;
              h4 {
                margin-top: 40px;
              }
            }
            &.timeline-inverted > .timeline-panel {
              padding: 0 100px 20px 20px;
            }
          }
        }
      `}</style>
    </div>
  );
};

type TimelineItem = {
  invert: boolean;
  imageFileName: string;
  imageAlt: string;
  imageContent: any;
  header: string;
  subheader: string;
  content: string;
};
