/* eslint-disable tailwindcss/no-custom-classname */
export const HeaderText = () => {
  return (
    <div className="relative">
      <div className="absolute top-0 right-[50%] z-30 h-40 translate-x-[50%] translate-y-[50%] lg:translate-y-[40%]">
        <div className="flex flex-col justify-between py-5 px-2 h-40 text-center text-white sm:py-10 md:py-14">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:tracking-wide ">
            <span className="whitespace-nowrap title">女声合唱団 ポレポーレ</span>
          </h1>
          <h2 className="z-20 text-3xl md:mt-10 md:text-3xl lg:text-4xl lg:tracking-wide xl:text-5xl">
            <span className="whitespace-nowrap title">ゆっくりのんびり</span>
          </h2>
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
    </div>
  );
};
