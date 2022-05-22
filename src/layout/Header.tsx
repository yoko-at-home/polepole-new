import cc from "classcat";
import type { FC } from "react";
import { HeaderText } from "src/layout/HeaderText";

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
      <div className="relative min-w-full bg-red-500">
        <div
          className={cc([
            {
              "absolute top-0 w-full h-80 bg-top bg-cover opacity-100": props.opacity === "100",
            },
            {
              "absolute top-0 w-full h-80 bg-top bg-cover opacity-80": props.opacity === "80",
            },
            {
              "absolute -top-20 w-full h-70 bg-top bg-cover opacity-0": props.opacity === "0",
            },
          ])}
          style={{
            backgroundImage: "url('/static/images/header/background.webp')",
          }}
        >
          <HeaderText />
        </div>
      </div>
    </header>
  );
};
