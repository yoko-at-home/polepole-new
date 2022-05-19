import type { CSSProperties } from "react";
import { NavLink } from "src/component/Button";

const items = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/aboutus", label: "Member" },
  { href: "/contact", label: "Contact" },
];

type Props = {
  inView: boolean;
  className?: CSSProperties;
};

const Navigation = ({ inView }: Props) => {
  return (
    <div className="sticky top-0 z-50">
      <nav
        className={
          inView
            ? "flex flex-wrap justify-center w-screen text-slate-400 bg-[#baf213]/90"
            : "flex flex-wrap justify-center w-screen text-slate-400 z-50 top-[0%] backdrop-blur bg-primary/40"
        }
      >
        {items.map(({ href, label }) => {
          return (
            <NavLink key={href} href={href} activeClassName="z-50 bg-[#7b983c]/40 text-white">
              <a className="inline-block py-6 px-5 text-lg  font-semibold hover:text-pink-50 whitespace-nowrap hover:bg-lime-500 bg-gradient-to-r focus:from-[#d08b6f] focus:to-[#a653a6] sm:p-4 sm:text-2xl">
                {label}
              </a>
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;
