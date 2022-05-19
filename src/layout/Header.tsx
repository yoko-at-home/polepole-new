/* eslint-disable tailwindcss/enforces-negative-arbitrary-values */
/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable @typescript-eslint/naming-convention */
import cc from "classcat";
import type { FC } from "react";


type Props = {
  className?: string;
  opacity?: "100" | "80" | "0";
};

/**
 * @package
 */
export const Header: FC<Props> = (props) => {
  return (
    <header className="relative shadow-2xl">
      <div className="absolute -top-0 right-[10%] z-50 justify-between translate-x-[50%] translate-y-[50%] sm:block md:right-[6%]"></div>
      <div className="flex relative justify-center pt-16 pb-32 min-w-full opacity-100">
        <div
          className={cc([
            {
              "absolute top-0 w-full h-96 bg-top bg-cover opacity-100": props.opacity === "100",
            },
            {
              "absolute top-0 w-full h-96 bg-top bg-cover opacity-80": props.opacity === "80",
            },
            {
              "absolute top-0 w-full h-full bg-top bg-cover opacity-0": props.opacity === "0",
            },
          ])}
          style={{
            backgroundImage: "url('/static/images/header/background.webp')",
          }}
        ></div>
        <div className="container relative py-4 w-full text-center text-white sm:py-10 md:py-14">
          <div className="absolute top-0 right-[50%] z-30 h-40 translate-x-[50%] translate-y-[50%] lg:translate-y-[70%]">
            <h1 className="z-20 mb-10 text-4xl sm:text-5xl md:text-6xl md:whitespace-nowrap lg:text-7xl lg:tracking-wide">
              <span className="whitespace-nowrap title">女声合唱団 </span>
              <span className="whitespace-nowrap title">ポレポーレ</span>
            </h1>
            <h2 className="z-20 text-3xl md:text-3xl lg:text-4xl lg:tracking-wide xl:text-5xl">
              <span className="whitespace-nowrap title">ゆっくりのんびり</span>
            </h2>
          </div>
        </div>
      </div>
      <style jsx>{`
        .title {
          text-shadow: #f14f0f 2px 2px 0, #d1d093 4px 4px 0;
          font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
            sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
        }
        .title-small {
          text-shadow: #f14f0f 2px 2px 0, #d1d093 4px 4px 0;
          font-family: Montserrat, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica Neue, Arial,
            sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
        }
      `}</style>
    </header>
  );
};
