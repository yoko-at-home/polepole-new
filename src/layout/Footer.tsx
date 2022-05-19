import Link from "next/link";
import type { FC } from "react";
import { siteMetadata } from "src/data/siteMetaData";

/**
 * @package
 */
export const Footer: FC = () => {
  return (
    <footer className="pt-12 mt-16 bg-stone-100">
      <div className="flex flex-col items-center mt-16">
        <div className="flex justify-between mx-5 mb-2 space-x-2 text-sm">
          <div>{siteMetadata.author}</div>
          <div className="whitespace-nowrap">{`© ${new Date().getFullYear()}`}</div>
          <div className="font-caribri whitespace-nowrap">All Rights Reserved.</div>
        </div>
        <div className="my-8 font-caribri text-xs hover:text-gray-400">
          <Link href="https://yoko-2021.vercel.app/">
            <a target="_blank" rel="noopener noreferrer">
              Powered by yoko
            </a>
          </Link>
        </div>
      </div>
    </footer>
  );
};
